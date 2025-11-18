'use client';

import { RecipeForm } from '@/forms/recipe.form';
import { useRecipeStore } from '@/store/recipe.store';
import { IRecipeType } from '@/types/types';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const EditRecipePage = () => {
  const { id } = useParams<{ id: string }>();
  const { recipes, isLoading, error } = useRecipeStore();
  const [recipe, setRecipe] = useState<IRecipeType | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (recipes.length > 0 || error) {
      const foundRecipe = recipes.find(r => r.id === id);
      // Проверяем, изменился ли рецепт
      setRecipe(prev => {
        if (prev?.id === foundRecipe?.id) return prev;
        return foundRecipe || null;
      });
      setHasSearched(true);
    }
  }, [recipes, id, error]); // все зависимости явно указаны

  if (isLoading) return <p className='text-center'>Загрузка...</p>;
  if (error) return <p className='text-red-500 text-center'>{error}</p>;

  if (hasSearched && !recipe) {
    return <p className='text-red-500 text-center'>Рецепт не найден</p>;
  }

  if (recipe) {
    return (
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4'>Редактировать рецепт: {recipe.name}</h1>
        <RecipeForm initialRecipe={recipe} />
      </div>
    );
  }

  return <p className='text-center'>Загрузка...</p>;
};

export default EditRecipePage;
