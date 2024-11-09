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
  const userRole = data.role;

  let result: {
    name: string;
    id: number;
    email: string;
    password: string;
    phone: number;
    address: string | null;
    profile_image: string | null;
    role: string;
  };

  if (userRole === 'admin') {
    result = await prisma.admin.create({ data });
  } else if (userRole === 'patient') {
    result = await prisma.user.create({ data });
  } else if (userRole === 'doctor') {
    result = await prisma.doctor.create({ data });
  } else if (userRole === 'nurse') {
    result = await prisma.nurse.create({ data });
  } else if (userRole === 'staff') {
    result = await prisma.staff.create({ data });
  } else {
    throw new Error('Invalid user role');
  }

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
const logIn = async (LoginData: { email: string; password: string; role: string }) => {
  console.log(LoginData)
  const { email, password, role: userRole } = LoginData;
  
  let isUserExist
  if (userRole === 'admin') { 
    console.log("here")
     isUserExist = await prisma.admin.findFirst({
      where: {
        email,
      },
    });
  }
   if (userRole === 'patient') {
     isUserExist = await prisma.user.findFirst({
       where: {
         email,
       },
     });
   }
if (userRole === 'doctor') {
  isUserExist = await prisma.doctor.findFirst({
    where: {
      email,
    },
  });
}if (userRole === 'nurse') {
  isUserExist = await prisma.nurse.findFirst({
    where: {
      email,
    },
  });
}if (userRole === 'staff') {
  isUserExist = await prisma.staff.findFirst({
    where: {
      email,
    },
  });
}
  

  if (!isUserExist) {
    throw new ApiError(500, 'user not found');
  }
  const { role, id } = isUserExist;

  let isUserExistWithPassword
  if (userRole === 'admin') {
    isUserExistWithPassword = await prisma.admin.findFirst({
      where: {
        email,
        password,
      },
    });
  }
  if (userRole === 'patient') {
    isUserExistWithPassword = await prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });
  }
  if (userRole === 'doctor') {
    isUserExistWithPassword = await prisma.doctor.findFirst({
      where: {
        email,
        password,
      },
    });
  }
  if (userRole === 'nurse') {
    isUserExistWithPassword = await prisma.nurse.findFirst({
      where: {
        email,
        password,
      },
    });
  }
  if (userRole === 'staff') {
    isUserExistWithPassword = await prisma.staff.findFirst({
      where: {
        email,
        password,
      },
    });
  }
  
  console.log(isUserExistWithPassword, 'this si user')
  

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

const forgotPass = async ({ email, role }: {email: string, role: string}) => {
console.log(email, role)
  let isUserExist;
  if (role === 'admin') {
    console.log('here');
    isUserExist = await prisma.admin.findFirst({
      where: {
        email,
      },
    });
  }
  if (role === 'patient') {
    isUserExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });
  }
  if (role === 'doctor') {
    isUserExist = await prisma.doctor.findFirst({
      where: {
        email,
      },
    });
  }
  if (role === 'nurse') {
    isUserExist = await prisma.nurse.findFirst({
      where: {
        email,
      },
    });
  }
  if (role === 'staff') {
    isUserExist = await prisma.staff.findFirst({
      where: {
        email,
      },
    });
  }

  console.log(
    isUserExist,
    'this is user'
  )


  if (!isUserExist) {
    throw new ApiError(500, 'User does not exist!');
  }

  const passResetToken = await jwtHelpers.createResetToken(
    { id: isUserExist.id, role: isUserExist.role },
    config.jwt.secret as string,
    '50m',
  );

  const resetLink: string = config.resetlink + `token=${passResetToken}`;
console.log(resetLink)
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

const me = async (userData: JwtPayload) => {
  const { email, role, id } = userData;

  let isUserExistWithPassword;
  if (role === 'admin') {
    isUserExistWithPassword = await prisma.admin.findFirst({
      where: {
        email,
        role,
        id,
      },
    });
  }
  if (role === 'patient') {
    isUserExistWithPassword = await prisma.user.findFirst({
      where: {
        email,
        role,
        id,
      },
    });
  }
  if (role === 'doctor') {
    isUserExistWithPassword = await prisma.doctor.findFirst({
      where: {
        email,
        role,
        id,
      },
    });
  }
  if (role === 'nurse') {
    isUserExistWithPassword = await prisma.nurse.findFirst({
      where: {
        email,
        role,
        id,
      },
    });
  }
  if (role === 'staff') {
    isUserExistWithPassword = await prisma.staff.findFirst({
      where: {
        email,
        role,
        id,
      },
    });
  }
  if (!isUserExistWithPassword) {
    throw new ApiError(500, 'You are not authorized to access this resource!');
  }

  console.log(isUserExistWithPassword, 'this si user');

  return isUserExistWithPassword;
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
  me,
  signUp,
  logIn,
  changePassword,
  forgotPass,
  resetPassword,
};
