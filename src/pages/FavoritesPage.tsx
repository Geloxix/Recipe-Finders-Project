import { Link } from "react-router-dom";

import { Recipe } from "../utils/data";

const FavoritesPage = ({ favorites }) => {
   return (
      <section>
         <Link to="/recipies">Back to recipies</Link>
         <div className="h-screen flex items-center justify-start flex-col font-poppins py-10">
            <h1 className="mb-6">favorites</h1>
            <div>
               <ul>
                  {favorites.map((fav: Recipe) => (
                     <li
                        key={fav.id}
                        className="flex justify-center gap-2 shadow-md p-3 mb-2"
                     >
                        <img
                           src={fav.img}
                           alt="favorite image"
                           className="w-[200px]"
                        />
                        <div>
                           <h1>
                              {fav.name} <span>{fav.cuisine}</span>
                           </h1>
                           <p>{fav.description}</p>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>
   );
};

export default FavoritesPage;
