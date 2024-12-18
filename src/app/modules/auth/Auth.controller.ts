import { Request, Response } from 'express';
import { Secret } from 'jsonwebtoken';
import config from '../../../config/index';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AuthService } from './Auth.service';

const signUp = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.signUp(req.body);
  const { accessToken, refreshToken } = result;
  const cookieOption = {
    secure: config.env === 'production',
    httpOnly: true,
  };
  res.cookie('refreshToken', refreshToken, cookieOption);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'User logged in successfully',
    data: {
      accessToken: accessToken,
    },
  });
});

const logIn = catchAsync(async (req: Request, res: Response) => {
  const LoginData = req.body;
  const result = await AuthService.logIn(LoginData);
  const { accessToken, refreshToken } = result;
  const cookieOption = {
    secure: config.env === 'production',
    httpOnly: true,
  };
  res.cookie('refreshToken', refreshToken, cookieOption);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'User logged in successfully',
    data: {
      accessToken: accessToken,
    },
  });
});

const me = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  if (!token) {
    throw new ApiError(400, 'You are not authorized me');
  }
  const verifiedUser = jwtHelpers.verifyToken(
    token,
    config.jwt.secret as Secret,
  );

  const result = await AuthService.me(verifiedUser);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User founded successfully !',
    data: result,
  });
});

const changePassword = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const { ...passwordData } = req.body;

  const result = await AuthService.changePassword(user, passwordData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Password changed successfully !',
    data: result,
  });
});

const forgotPass = catchAsync(async (req: Request, res: Response) => {
  console.log(req.body, 'this is forgotPass')
  await AuthService.forgotPass(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Check your email!',
  });
});

const resetPassword = catchAsync(async (req: Request, res: Response) => {
  await AuthService.resetPassword(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Account recovered!',
  });
});

export const AuthController = {
  me,
  signUp,
  logIn,
  changePassword,
  forgotPass,
  resetPassword,
};
