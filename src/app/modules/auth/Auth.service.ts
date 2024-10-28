/* eslint-disable no-unused-vars */

import { User } from '@prisma/client';

import { JwtPayload, Secret } from 'jsonwebtoken';
import prisma from '../../../shared/prisma.js';
import { jwtHelpers } from '../../../helpers/jwtHelpers.js';
import config from '../../../config/index.js';
import ApiError from '../../../errors/ApiError.js';
import { IChangePassword } from './auth.interface.js';
import { sendEmail } from './sendResetMail.js';



const signUp = async (data: User) => {
  const result = await prisma.user.create({
    data,
  });
  const { email, role, id, password } = result;
  const accessToken = jwtHelpers.createToken(
    { email, role, id },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  );
  const refreshToken = jwtHelpers.createToken(
    { email, password, id },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logIn = async (LoginData: { email: string; password: string }) => {
  const { email, password } = LoginData;

  const isUserExist = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!isUserExist) {
    throw new ApiError(500, 'user not found');
  }
  const { role, id } = isUserExist;

  const isUserExistWithPassword = await prisma.user.findFirst({
    where: {
      email,
      password,
    },
  });

  if (!isUserExistWithPassword) {
    throw new ApiError(500, 'password not matched');
  }

  const accessToken = jwtHelpers.createToken(
    { email, role, id },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  );
  const refreshToken = jwtHelpers.createToken(
    { email, password, id },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const changePassword = async (
  user: JwtPayload | null,
  payload: IChangePassword,
): Promise<User> => {
  const { oldPassword, newPassword } = payload;

  const isUserExist = await prisma.user.findUnique({
    where: {
      id: user?.id,
    },
  });

  if (!isUserExist) {
    throw new ApiError(500, 'User does not exist');
  }
  // // checking old password
  if (isUserExist.password !== oldPassword) {
    throw new ApiError(500, 'Old Password is incorrect');
  }

  const result = await prisma.user.update({
    where: {
      id: user?.id,
    },
    data: {
      password: newPassword,
    },
  });

  return result;
};

const forgotPass = async (payload: { email: string }) => {
  const isUserExist = await prisma.user.findFirst({
    where: {
      email: payload.email,
    },
  });
  if (!isUserExist) {
    throw new ApiError(500, 'User does not exist!');
  }

  const passResetToken = await jwtHelpers.createResetToken(
    { id: isUserExist.id, role: isUserExist.role },
    config.jwt.secret as string,
    '50m',
  );

  const resetLink: string = config.resetlink + `token=${passResetToken}`;

  await sendEmail(
    isUserExist.email,
    `
      <div>
        <p>Hi, ${isUserExist.name}</p>
        <p>Your password reset link: <a href=${resetLink}>Click Here</a></p>
        <p>Thank you</p>
      </div>
  `,
  );

  return {
    message: 'Check your email!',
  };
};

const resetPassword = async (
  payload: { id: number; newPassword: string },
  // token: string,
) => {
  const { newPassword } = payload;
  const user = await prisma.user.findUnique({
    where: {
      id: payload?.id,
    },
  });

  if (!user) {
    throw new ApiError(500, 'User not found!');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const isVarified = await jwtHelpers.verifyToken(
  //   token,
  //   config.jwt.secret as string,
  // );

  // const password = await bcrypt.hash(newPassword, Number(config.bycrypt_salt_rounds));

  const result = await prisma.user.update({
    where: {
      id: user?.id,
    },
    data: {
      password: newPassword,
    },
  });

  return result;
};

export const AuthService = {
  signUp,
  logIn,
  changePassword,
  forgotPass,
  resetPassword,
};
