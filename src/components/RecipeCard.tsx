import { useState } from "react";
import { Link } from "react-router-dom";

import { Ingredients, InstructionsType } from "../utils/data";
import { RiArrowGoBackLine } from "@remixicon/react";

import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";
import Recipe from "./Recipe";
import SeeMore from "./SeeMore";

const RecipeCard = ({ recipe }) => {
   const [isFullyViewed, setIsFullyViewed] = useState<boolean>(true);

   let currentInstructions = isFullyViewed
      ? recipe.instructions.slice(0, 5)
      : recipe.instructions;

   return (
      <div className="h-screen">
         <button className="mt-1 ml-1 px-6 py-2 mb-5">
            <Link 
               to="/recipies"
               className="flex gap-2 text-[0.90em] hover:text-violet-400 transition-all"
            >
               <RiArrowGoBackLine />Back to recipies
            </Link>
         </button>
         
         <div className="flex items-center justify-center">
            <div className="shadow-md p-4 flex flex-row items-center justify-center gap-3 w-[80%] bg-light-gray rounded-md">
               <div className="basis-[45%] p-3">
                  <div>
                     <Recipe recipe={recipe} />
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
                     {currentInstructions.map((instruction: InstructionsType) => (
                        <Instructions
                           key={instruction.stepNumber}
                           instruction={instruction}
                        />
                     ))}
                  </ul>
                  <SeeMore
                     setIsFullyViewed={setIsFullyViewed}
                     isFullyViewed={isFullyViewed}
                  />
               </div>
            </div>
         </div>
      </div> 
   );
};

export default RecipeCard;
