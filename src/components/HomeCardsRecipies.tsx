import { Link } from "react-router-dom";

import { Recipe } from "../utils/data";

const HomeCardsRecipies = ({ filteredRecipies }) => {
   return (
      <div>
         {filteredRecipies.length !== 0 ? (
            <ul className="grid grid-cols-3 place-content-center place-items-center justify-items-center items-center">
               {filteredRecipies.map((recipe: Recipe) => (
                  <li key={recipe.id}>
                     <div className="w-[300px] shadow-sm bg-light-gray">
                        <Link 
                           to={`/recipies/${recipe.id}`}
                        >
                           <img
                              src={recipe.img}
                              alt={recipe.name}
                              className="object-fill"
                           />
                        </Link>

                        <div className="flex justify-between items-center bg-white">
                           <p className="p-1 font-palanquin">{recipe.name}</p>
                        </div>
                     </div>
                  </li>
               ))}
            </ul>
         ) : (
            <div className="mt-[10%]">
               <h1 className="text-center font-poppins text-2xl text-red-500">Recipe not found....</h1>
            </div>
         )}
      </div>
   );
};

export default HomeCardsRecipies;
