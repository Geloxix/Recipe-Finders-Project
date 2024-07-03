import { Link } from "react-router-dom";

import { RiArrowGoBackLine } from "@remixicon/react";
import { Recipe } from "../utils/data";

const FavoritesPage = ({ favorites }) => {

   return (
      <section>
         <button className="px-6 mt-3 ml-1">
             <Link 
               to="/recipies"
               className="flex items-center start-center gap-2 text-[0.90em]"
            >< RiArrowGoBackLine className="text-[0.90em]"/> Back to recipies</Link>
         </button>
         <div 
            className="h-screen flex items-center justify-start flex-col font-poppins py-10"
            >
            <h1 className="mb-6 text-3xl font-palanquin text-violet-400">favorites</h1>
            <div>
               <ul>
                  {favorites.map((fav: Recipe) => (
                     <Link
                        to={`/recipies/${fav.id}`}
                        key={fav.id}
                        className="flex gap-4 shadow-md p-3 mb-2 px-6"
                     >
                        <img
                           src={fav.img}
                           alt="favorite image"
                           className="w-[200px] p-2"
                        />
                        <div className="self-start mt-8 font-palanquin">
                           <h1 className="text-xl">
                              {fav.name} <span>{fav.cuisine}</span>
                           </h1>
                           <p>{fav.description}</p>
                        </div>
                     </Link>
                  ))}
               </ul>
            </div>
         </div>
      </section>
   );
};

export default FavoritesPage;
