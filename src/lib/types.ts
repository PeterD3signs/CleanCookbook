export type DishType =
  | 'Breakfast'
  | 'Lunch'
  | 'Dinner'
  | 'Dessert'
  | 'Sweet Snack'
  | 'Savory Snack'
  | 'Soup'
  | 'Salad'
  | 'Side'
  | 'Appetizer'
  | 'Beverage';

export type MeatType =
  | 'Vegan'
  | 'Vegetarian'
  | 'Chicken'
  | 'Turkey'
  | 'Beef'
  | 'Pork'
  | 'Fish'
  | 'Seafood'
  | 'None';

export type Difficulty =
  | 'Very easy'
  | 'Easy'
  | 'Medium'
  | 'Demanding'
  | 'Very demanding';

export interface Ingredient {
  name: string;
  amount: number | string;       // e.g. 1, 2, "½"
  unit?: string;                 // e.g. "cup", "pinch"
  weightGrams?: number;          // optional if available
}

export interface Recipe {
  id: number;
  name: string;
  dishType: DishType;
  meatType: MeatType;
  difficulty: Difficulty;
  prepTimeMinutes: number;
  servings: number;
  ingredients: Ingredient[];
  steps: string[];
  image?: string;
  description?: string;
}