import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Ingredients, InstructionsType, Recipe } from "../utils/data";
import { RiHeartLine, RiRestaurantLine } from "@remixicon/react";

import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";
import RecipeInfo from "./RecipeInfo";
import SeeMore from "./SeeMore";

const RecipeCard = ({ recipe, favorites, setFavorites }) => {
   const [isFullyViewed, setIsFullyViewed] = useState<boolean>(true);

   let currentRecipe: Recipe = {
      id: recipe.id,
      name: recipe.name,
      description: recipe.description,
      cuisine: recipe.cuisine,
      prepTime: recipe.prepTime,
      cookTime: recipe.cookTime,
      totalTime: recipe.totalTime,
      img: recipe.img,
      serving: recipe.serving,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      nutritions: recipe.nutritions,
   }; 

   useEffect(() => {
      localStorage.setItem("fav", JSON.stringify(favorites));
   },[favorites])

   const handleAddToFavorites = () => {
      if (favorites.some((f: Recipe) => f.id === recipe.id)) {
         toast.error("Recipe already in favorites");
      } else {
         setFavorites([...favorites, currentRecipe]);
         toast.success("Added to favorites");
      }
   };

   let currentInstructions = isFullyViewed
      ? recipe.instructions.slice(0, 5)
      : recipe.instructions;

   return (
      <div className="h-screen">
         <div className="flex flex-row py-3 pl-5">
            <button className="p-2">
               <Link
                  to="/recipies"
                  className="flex gap-3 text-[0.90em] hover:text-violet-400 transition-all"
               >
                  <RiRestaurantLine />
                  Recipies
               </Link>
            </button>
         </div>

         <div className="flex items-center justify-center">
            <div className="shadow-md p-4 flex flex-row items-center justify-center gap-3 w-[80%] bg-light-gray rounded-md relative">
               <div className="basis-[45%] p-3">
                  <div>
                     <RecipeInfo recipe={recipe} />
                  </div>

                  <div className="p-2">
                     <h1 className="mb-1 font-montserrat">Ingredients: </h1>
                     <ul className="list-disc">
                        {recipe.ingredients.map((ingredient: Ingredients) => (
                           <IngredientsList
                              key={ingredient.ingredientId}
                              ingredient={ingredient}
                           />
                        ))}
                     </ul>
                  </div>
               </div>

               <div className="basis-[45%] p-3">
                  <h1 className="text-xl font-montserrat mb-2">How to cook?</h1>
                  <h3>follow this Step: </h3>
                  <ul className={`p-2`}>
                     {currentInstructions.map(
                        (instruction: InstructionsType) => (
                           <Instructions
                              key={instruction.stepNumber}
                              instruction={instruction}
                           />
                        ),
                     )}
                  </ul>
                  <SeeMore
                     setIsFullyViewed={setIsFullyViewed}
                     isFullyViewed={isFullyViewed}
                  />
               </div>
               <button
                  className="absolute top-5 right-6 z-[999]"
                  onClick={handleAddToFavorites}
               >
                  <RiHeartLine />
               </button>
            </div>
         </div>
      </div>
   );
};

export default RecipeCard;
