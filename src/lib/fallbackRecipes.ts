import type { Recipe } from './types';

export const fallbackRecipes: Recipe[] = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    dishType: 'Dinner',
    meatType: 'Pork',
    difficulty: 'Easy',
    prepTimeMinutes: 25,
    servings: 2,
    ingredients: [
      { name: 'Spaghetti', amount: 200, unit: 'g' },
      { name: 'Eggs', amount: 2 },
      { name: 'Pancetta', amount: 100, unit: 'g' },
      { name: 'Parmesan cheese', amount: 50, unit: 'g' },
      { name: 'Black pepper', amount: 'to taste' }
    ],
    steps: [
      'Boil pasta until al dente.',
      'Fry pancetta until crispy.',
      'Mix eggs and Parmesan in a bowl.',
      'Combine pasta with pancetta and egg mixture off heat.',
      'Season with black pepper and serve immediately.'
    ],
    image: '/images/carbonara.png',
    description: 'Classic Italian pasta with eggs, cheese, and pancetta.'
  },
  {
    id: 2,
    name: 'Avocado Toast with Poached Egg',
    dishType: 'Breakfast',
    meatType: 'Vegetarian',
    difficulty: 'Very easy',
    prepTimeMinutes: 10,
    servings: 1,
    ingredients: [
      { name: 'Bread slices', amount: 2 },
      { name: 'Avocado', amount: 1 },
      { name: 'Egg', amount: 1 },
      { name: 'Lemon juice', amount: 1, unit: 'tsp' },
      { name: 'Chili flakes', amount: 'to taste' }
    ],
    steps: [
      'Toast bread slices.',
      'Mash avocado with lemon juice and salt.',
      'Poach egg for 3–4 minutes.',
      'Spread avocado on toast and top with poached egg and chili flakes.'
    ],
    image: '/images/toast.png',
    description: 'Quick and healthy breakfast with creamy avocado and egg.'
  },
  {
    id: 3,
    name: 'Beef Stir-Fry with Vegetables',
    dishType: 'Dinner',
    meatType: 'Beef',
    difficulty: 'Medium',
    prepTimeMinutes: 30,
    servings: 3,
    ingredients: [
      { name: 'Beef strips', amount: 300, unit: 'g' },
      { name: 'Soy sauce', amount: 3, unit: 'tbsp' },
      { name: 'Bell peppers', amount: 2 },
      { name: 'Onion', amount: 1 },
      { name: 'Garlic', amount: 2, unit: 'cloves' },
      { name: 'Cornstarch', amount: 1, unit: 'tsp' }
    ],
    steps: [
      'Slice beef and vegetables.',
      'Marinate beef with soy sauce and cornstarch.',
      'Stir-fry beef until browned, remove from pan.',
      'Stir-fry vegetables, then return beef and combine.',
      'Serve hot with rice.'
    ],
    image: '/images/stirFry.png',
    description: 'Quick Asian-style stir-fry with tender beef and veggies.'
  },
  {
    id: 4,
    name: 'Vegan Buddha Bowl',
    dishType: 'Lunch',
    meatType: 'Vegan',
    difficulty: 'Medium',
    prepTimeMinutes: 35,
    servings: 2,
    ingredients: [
      { name: 'Quinoa', amount: 100, unit: 'g' },
      { name: 'Chickpeas', amount: 150, unit: 'g' },
      { name: 'Spinach', amount: 50, unit: 'g' },
      { name: 'Sweet potato', amount: 1 },
      { name: 'Tahini', amount: 1, unit: 'tbsp' },
      { name: 'Lemon juice', amount: 1, unit: 'tbsp' }
    ],
    steps: [
      'Cook quinoa and roast sweet potato cubes.',
      'Mix tahini and lemon juice to make dressing.',
      'Arrange quinoa, chickpeas, spinach, and sweet potato in a bowl.',
      'Drizzle with dressing and serve.'
    ],
    image: '/images/buddhaBowl.png',
    description: 'Colorful and nutrient-rich vegan bowl packed with flavor.'
  },
  {
    id: 5,
    name: 'Chicken Caesar Salad',
    dishType: 'Salad',
    meatType: 'Chicken',
    difficulty: 'Easy',
    prepTimeMinutes: 20,
    servings: 2,
    ingredients: [
      { name: 'Chicken breast', amount: 200, unit: 'g' },
      { name: 'Romaine lettuce', amount: 1, unit: 'head' },
      { name: 'Croutons', amount: 1, unit: 'cup' },
      { name: 'Parmesan cheese', amount: 50, unit: 'g' },
      { name: 'Caesar dressing', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      'Grill chicken and slice thinly.',
      'Toss lettuce with dressing and croutons.',
      'Add chicken and top with Parmesan shavings.'
    ],
    image: '/images/salad.png',
    description: 'Crispy salad with grilled chicken and creamy Caesar dressing.'
  },
  {
    id: 6,
    name: 'Tomato Soup with Basil',
    dishType: 'Soup',
    meatType: 'Vegetarian',
    difficulty: 'Easy',
    prepTimeMinutes: 25,
    servings: 3,
    ingredients: [
      { name: 'Tomatoes', amount: 600, unit: 'g' },
      { name: 'Onion', amount: 1 },
      { name: 'Garlic', amount: 2, unit: 'cloves' },
      { name: 'Vegetable broth', amount: 500, unit: 'ml' },
      { name: 'Fresh basil', amount: 5, unit: 'leaves' }
    ],
    steps: [
      'Sauté onion and garlic until soft.',
      'Add tomatoes and broth, simmer 15 min.',
      'Blend until smooth, add basil, and season.'
    ],
    image: '/images/soup.png',
    description: 'Creamy tomato soup perfect for any season.'
  },
  {
    id: 7,
    name: 'Fish Tacos',
    dishType: 'Dinner',
    meatType: 'Fish',
    difficulty: 'Medium',
    prepTimeMinutes: 30,
    servings: 3,
    ingredients: [
      { name: 'White fish fillets', amount: 300, unit: 'g' },
      { name: 'Taco shells', amount: 6 },
      { name: 'Cabbage', amount: 100, unit: 'g' },
      { name: 'Lime juice', amount: 2, unit: 'tbsp' },
      { name: 'Yogurt sauce', amount: 3, unit: 'tbsp' }
    ],
    steps: [
      'Cook fish with spices until flaky.',
      'Prepare sauce with yogurt and lime juice.',
      'Assemble tacos with cabbage, fish, and sauce.'
    ],
    image: '/images/fishTacos.png',
    description: 'Crispy fish tacos with fresh slaw and zesty sauce.'
  },
  {
    id: 8,
    name: 'Chocolate Mug Cake',
    dishType: 'Dessert',
    meatType: 'Vegetarian',
    difficulty: 'Very easy',
    prepTimeMinutes: 5,
    servings: 1,
    ingredients: [
      { name: 'Flour', amount: 4, unit: 'tbsp' },
      { name: 'Cocoa powder', amount: 2, unit: 'tbsp' },
      { name: 'Sugar', amount: 2, unit: 'tbsp' },
      { name: 'Milk', amount: 3, unit: 'tbsp' },
      { name: 'Oil', amount: 1, unit: 'tbsp' }
    ],
    steps: [
      'Mix all ingredients in a mug.',
      'Microwave for 1–2 minutes until cooked through.',
      'Let cool slightly before eating.'
    ],
    image: '/images/mugCake.png',
    description: 'Quick microwave chocolate dessert for one.'
  },
  {
    id: 9,
    name: 'Greek Yogurt Parfait',
    dishType: 'Dessert',
    meatType: 'Vegetarian',
    difficulty: 'Very easy',
    prepTimeMinutes: 7,
    servings: 1,
    ingredients: [
      { name: 'Greek yogurt', amount: 200, unit: 'g' },
      { name: 'Honey', amount: 1, unit: 'tbsp' },
      { name: 'Granola', amount: 3, unit: 'tbsp' },
      { name: 'Mixed berries', amount: 100, unit: 'g' }
    ],
    steps: [
      'Layer yogurt, granola, and berries in a glass.',
      'Drizzle with honey and serve chilled.'
    ],
    image: '/images/yogurt.png',
    description: 'Light and refreshing dessert or snack.'
  }
];
