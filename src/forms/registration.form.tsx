'use client';
import React, { useState } from 'react';
import { Form, Input, Button } from '@heroui/react';
import { registerUser } from '@/actions/register';

type IPropsType = {
  onClose: () => void;
};

export const RegistrationForm = ({ onClose }: IPropsType) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await registerUser(formData);
    onClose();
  };
  const validateEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;
    return emailRegex.test(email);
  };
  return (
    <Form className='w-full' onSubmit={onSubmit}>
      <Input
        isRequired
        area-label='Email'
        name='email'
        placeholder='Введите email'
        type='email'
        value={formData.email}
        classNames={{
          inputWrapper: 'bg-defoult-100',
          input: 'text-sm focus:outline-none',
        }}
        onChange={e => setFormData({ ...formData, email: e.target.value })}
        validate={value => {
          if (!value) return 'Почта обязательна';
          if (!validateEmail) return 'Некорректный email';
          return null;
        }}
      />

      <Input
        isRequired
        area-label='Password'
        name='password'
        placeholder='Введите пароль'
        type='password'
        value={formData.password}
        classNames={{
          inputWrapper: 'bg-defoult-100',
          input: 'text-sm focus:outline-none',
        }}
        onChange={e => setFormData({ ...formData, password: e.target.value })}
        validate={value => {
          if (!value) return 'Пароль обязателен';
          if (value.length < 6) return 'Пароль должен быть не менее 6 символов';
          return null;
        }}
      />

      <Input
        isRequired
        area-label='confirmPassword'
        name='confirmPassword'
        placeholder='Подтвердите пароль'
        type='password'
        value={formData.confirmPassword}
        classNames={{
          inputWrapper: 'bg-defoult-100',
          input: 'text-sm focus:outline-none',
        }}
        onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
        validate={value => {
          if (!value) return 'Пароль для подтверждения обязателен';
          if (value !== formData.password) return 'Пароли не совпадают';
          return null;
        }}
      />

      <div className='flex w-[100%] gap-4 items-center pt-8 justify-end'>
        <Button variant='light' onPress={onClose}>
          Отмена
        </Button>
        <Button type='submit' color='primary'>
          Зарегистрироваться
        </Button>
      </div>
    </Form>
  );
};
