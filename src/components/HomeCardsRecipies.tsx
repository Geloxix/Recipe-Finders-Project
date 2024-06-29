import { Link } from "react-router-dom";

import { Recipe } from "../utils/data";

const HomeCardsRecipies = ({ recipies }) => {
   return (
      <div>
         <ul className="grid grid-cols-3 place-content-center justify-items-center">
            {recipies.map((recipe: Recipe) => (
               <Link to={`/recipies/${recipe.id}`} key={recipe.id}>
                  <div className="border-2 w-[300px] p-[2px]">
                     <img
                        src={recipe.img}
                        alt={recipe.name}
                        className="object-fill"
                     />
                     <p className="p-1 text-center font-palanquin">
                        {recipe.name}
                     </p>
                  </div>
               </Link>
            ))}
         </ul>
      </div>
   );
};

export default HomeCardsRecipies;
