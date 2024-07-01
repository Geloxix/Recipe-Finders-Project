export interface Recipe {
   id: number;
   name: string;
   description: string;
   cuisine: string;
   prepTime: number;
   cookTime: number;
   totalTime: number;
   img: string;
   serving: string;
   ingredients: Ingredients[];
   instructions: InstructionsType[];
   nutritions: NutritionType[];
}

export interface NutritionType {
   name: string;
   quantity: string;
};
export interface Ingredients {
   ingredientId: number;
   name: string;
   quantity: number | string;
}

export interface InstructionsType {
   stepNumber: number;
   description: string;
}
