'use server';
import prisma from '@/utils/prisma';
import { IFormDataType } from '../types/types';

export const registerUser = async (formData: IFormDataType) => {
  const { email, password, confirmPassword } = formData;

  if (password !== confirmPassword) {
    return { error: 'Пароли не совпадают' };
  }

  if (password.length < 6) {
    return { error: 'Пароль должен быть не менее 6 символов' };
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: 'Пользователь с таким email уже существует' };
    }

    const user = await prisma.user.create({
      data: {
        email: email,
        password: password,
      },
    });
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
    return { error: 'Ошибка при регистрации' };
  }
};
