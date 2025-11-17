import { IngredientsTable } from '@/components/tables/ingredients-tbl';
import { IngredientForm } from '@/forms/ingredient.form';

export default function Ingredients() {
  return (
    <div>
      <IngredientForm />
      <IngredientsTable />
    </div>
  );
}
