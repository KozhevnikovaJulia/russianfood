export type IFormDataType = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type IIngredientType = {
  id: string;
  name: string;
  category: string;
  unit: string;
  pricePerUnit: number | null;
  description: string | null;
  createdAt?: Date;
  updatedAt?: Date;
};

export type IRecipeIngredientType = {
  id: string;
  ingredientId: string;
  quantity: number;
  ingredient: IIngredientType;
};

export type IRecipeType = {
  id: string;
  name: string;
  description: string;
  imageUrl?: string | null;
  ingredients: IRecipeIngredientType[];
};

export type IUserType = {
  id: string;
  email: string;
};
