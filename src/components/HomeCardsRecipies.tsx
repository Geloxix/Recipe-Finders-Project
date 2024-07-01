import { Link } from "react-router-dom";
import { RiHeartLine } from "@remixicon/react";

import { Recipe } from "../utils/data";

const HomeCardsRecipies = ({ filteredRecipies }) => {

   return (
      <div>
         <ul className="grid grid-cols-3 place-content-center place-items-center justify-items-center items-center">
            {filteredRecipies.map((recipe: Recipe) => (
               <li key={recipe.id}>
                  <div className="border-2 w-[300px] p-[2px]">
                     <Link to={`/recipies/${recipe.id}`}>
                        <img
                           src={recipe.img}
                           alt={recipe.name}
                           className="object-fill"
                        />
                     </Link>
                     
                     <div className="flex justify-between items-center">
                        <p className="p-1 font-palanquin">
                           {recipe.name}
                        </p>
                     </div>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default HomeCardsRecipies;
