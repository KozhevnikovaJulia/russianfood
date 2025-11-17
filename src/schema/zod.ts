import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string({ message: 'Email is required' }).min(1, { message: 'Email is required' }).email({ message: 'Invalid email' }),
  password: z.string({ message: 'Password is required' }).min(1, { message: 'Password is required' }).min(6, { message: 'Password must be more than 8 characters' }).max(32, { message: 'Password must be less than 32 characters' }),
});

export const ingredientSchema = z.object({
  name: z.string().min(1, { message: 'Название обязательно' }),
  category: z.enum(['VEGETABLES', 'FRUITS', 'MEAT', 'DAIRY', 'SPICES', 'OTHER']),
  unit: z.enum(['GRAMS', 'KILOGRAMS', 'LITERS', 'MILLILITERS', 'PIECES']),
  pricePerUnit: z.number({ message: 'Цена должна быть числом' }).min(0, { message: 'Цена должна быть положительной' }).nullable(),
  description: z.string().optional(),
});
