export interface Recipe {
   id: number;
   name: string;
   description: string;
   cuisine: string;
   prep_time: number;
   cook_time: number;
   total_time: number;
   img: string;
   serving: string;
   ingredients: string[];
   nutritions: string[];
}

export interface Ingredients {
   ingredientId: number;
   name: string;
   quantity: number | string;
}

export interface InstructionsType {
   stepNumber: number;
   description: string;
}
