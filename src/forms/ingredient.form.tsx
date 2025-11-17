'use client';
import React, { useState, useTransition } from 'react';
import { Form, Input, Button, Select, SelectItem } from '@heroui/react';
import { CATEGORY_OPTIONS, UNIT_OPTIONS } from '@/constants/select-options';
import { useIngredientStore } from '@/store/ingredient.store';

const initialState = {
  name: '',
  category: '',
  unit: '',
  pricePerUnit: null as number | null,
  description: '',
};

export const IngredientForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState(initialState);
  const [isPending, startTransition] = useTransition();
  const { addIngredient } = useIngredientStore();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      await addIngredient(formData);
      const storeError = useIngredientStore.getState().error;

      if (storeError) {
        setError(storeError);
      } else {
        setError(null);
        setFormData(initialState);
      }

      // const result = await createIngredient(formData);
      // if (result.error) {
      //   setError(result.error);
      //   alert('Ошибка при создании ингредиента');
      // } else {
      //   setError(null);
      //   setFormData(initialState);
      //   alert('Успешное создание ингредиента');
      // }
    });
  };

  return (
    <Form className='w-full' onSubmit={onSubmit}>
      {error && <p className='text-red-500 mb-4'>{error}</p>}
      <Input
        isRequired
        aria-label='Name'
        name='name'
        placeholder='Введите название ингредиента'
        type='text'
        value={formData.name}
        classNames={{
          inputWrapper: 'bg-default-100',
          input: 'text-sm focus:outline-none',
        }}
        onChange={e => setFormData({ ...formData, name: e.target.value })}
        validate={value => {
          if (!value) return 'Название обязательно';
          return null;
        }}
      />

      <div className='flex gap-2 w-full'>
        <div className='w-1/3'>
          <Select
            isRequired
            name='category'
            placeholder='Категория'
            selectedKeys={formData.category ? [formData.category] : []}
            classNames={{
              trigger: 'bg-default-100 w-full',
              innerWrapper: 'text-sm',
              value: 'truncate',
              selectorIcon: 'text-black',
            }}
            onChange={e => setFormData({ ...formData, category: e.target.value })}
          >
            {CATEGORY_OPTIONS.map(option => (
              <SelectItem key={option.value} className='text-black'>
                {option.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className='w-1/3'>
          <Select
            isRequired
            name='unit'
            placeholder='Ед. изм.'
            selectedKeys={formData.unit ? [formData.unit] : []}
            classNames={{
              trigger: 'bg-default-100 w-full',
              innerWrapper: 'text-sm',
              value: 'truncate',
              selectorIcon: 'text-black',
            }}
            onChange={e => setFormData({ ...formData, unit: e.target.value })}
          >
            {UNIT_OPTIONS.map(option => (
              <SelectItem key={option.value} className='text-black'>
                {option.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className='w-1/3'>
          <Input
            isRequired
            name='pricePerUnit'
            placeholder='Цена'
            type='number'
            value={formData.pricePerUnit !== null ? formData.pricePerUnit.toString() : ''}
            classNames={{
              inputWrapper: 'bg-default-100',
              input: 'text-sm focus:outline-none',
            }}
            onChange={e => {
              const value = e.target.value ? +e.target.value : null;
              setFormData({ ...formData, pricePerUnit: value });
            }}
            endContent={<span className='absolute right-3 top-1/2 transform -translate-y-1/2 text-default-500 pointer-events-none'>₽</span>}
            validate={value => {
              if (!value) return 'Цена обязательна';
              const num = +value;
              if (isNaN(num) || num < 0) return 'Цена должна быть положительной';
              return null;
            }}
          />
        </div>
      </div>

      <Input
        aria-label='Description'
        name='description'
        placeholder='Введите описание (необязательно)'
        type='text'
        value={formData.description}
        classNames={{
          inputWrapper: 'bg-default-100',
          input: 'text-sm focus:outline-none',
        }}
        onChange={e => setFormData({ ...formData, description: e.target.value })}
      />

      <div className='flex w-full items-center justify-end'>
        <Button color='primary' type='submit' isLoading={isPending}>
          Добавить ингредиент
        </Button>
      </div>
    </Form>
  );
};
