'use client';
import React, { useState } from 'react';
import { Form, Input, Button } from '@heroui/react';

type IPropsType = {
  onClose: () => void;
};

export const LoginForm = ({ onClose }: IPropsType) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    onClose();
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
          return null;
        }}
      />

      <div className='flex w-[100%] gap-4 items-center pt-8 justify-end'>
        <Button variant='light' onPress={onClose}>
          Отмена
        </Button>
        <Button type='submit' color='primary'>
          Войти
        </Button>
      </div>
    </Form>
  );
};
