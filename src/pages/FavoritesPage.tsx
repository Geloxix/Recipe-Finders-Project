import { Link } from "react-router-dom";

import { RiArrowGoBackLine, RiDeleteBin6Line, RiShareBoxLine } from "@remixicon/react";
import { Recipe } from "../utils/data";
import { toast, ToastContainer } from "react-toastify";

const FavoritesPage = ({ favorites }) => {
   const favoriteStorage = localStorage.getItem("fav");

   const handleRemoveFavorite = (id: number): void => {
      let favorite = JSON.parse(favoriteStorage!); // nonnull assertion not always null

      favorite = favorite.filter((item: Recipe) => item.id !== id);

      let updatedArray = JSON.stringify(favorite);

      localStorage.setItem("fav", updatedArray);
      toast.error("Remove Successfully!");
   };

   return (
      <section>
         <ToastContainer />
         <button className="px-6 mt-3 ml-1">
             <Link 
               to="/recipies"
               className="flex items-center start-center gap-2 text-[0.90em]"
            >< RiArrowGoBackLine className="text-[0.90em]"/> Recipies</Link>
         </button>
         <div 
            className="h-screen flex items-center justify-start flex-col font-poppins py-10"
         >
            <h1 className="mb-6 text-3xl font-palanquin text-violet-400">favorites</h1>
               <div className="h-full flex items-center justify-center">
                  {
                     favorites.length === 0 ? <h1 className="">Favorites Empty!</h1> : 
                        <ul>
                           {favorites.map((fav: Recipe) => (
                              <li
                                 key={fav.id}
                                 className="flex gap-4 shadow-md p-3 mb-2 px-6"
                              >
                                 <img
                                    src={fav.img}
                                    alt="favorite image"
                                    className="w-[200px] p-2"
                                 />
                                 <div className="self-center font-palanquin">
                                    <h1 className="text-xl">
                                       {fav.name} <span>{fav.cuisine}</span>
                                    </h1>
                                    <p>{fav.description}</p>
                                    <div className="flex items-center mt-6">
                                       <button className="py-1 rounded-md px-3 shadow-sm bg-light-gray mr-6">
                                          <Link 
                                             to={`/recipies/${fav.id}`}
                                             className="flex"
                                          >
                                             Read more <RiShareBoxLine/>
                                          </Link>
                                       </button>

                                       <button  
                                          onClick={() => handleRemoveFavorite(fav.id)}
                                          className="py-1 bg-red-500 text-white rounded-sm flex gap-1 px-2"
                                       >
                                          <RiDeleteBin6Line /> Remove
                                       </button>
                                    </div>
                                    
                                 </div>
                              </li>
                           ))}
                        </ul>
                  }
               </div>
         </div>
      </section>
   );
};

export default FavoritesPage;
