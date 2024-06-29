import { useEffect, useState } from "react";
import axios from "axios";

import HomeCardsRecipies from "../components/HomeCardsRecipies";

const RecipiesPage = () => {
   const [recipies, setRecipies] = useState([]);

   useEffect(() => {
      const fetchRecipies = async () => {
         try {
            const res = await axios.get(`/api/recipies`);
            setRecipies(res.data);
         } catch (err) {
            console.error("Error:", err);
         }
      };

      fetchRecipies();
   }, []);

   return (
      <section>
         <header className="py-6">
            <h1 className="font-palanquin text-4xl text-center mb-3 text-violet-400 font-semibold">
               Recipe Finder
            </h1>
            <p className="font-palanquin text-center mb-6">
               find your favorite recipies.
            </p>
            <form
               action=""
               className="w-full flex flex-col items-center justify-center"
            >
               <input
                  type="text"
                  name="find recipies"
                  id="recipies"
                  className="border-[1px] w-[70%] mb-2 py-[3px] pl-3"
               />
               <button
                  type="submit"
                  className="px-[1.5rem] py-[5px] rounded-sm border-[1px] bg-violet-400 text-center cursor-pointer text-white"
               >
                  Search
               </button>
            </form>
         </header>
         <article className="py-5">
            <HomeCardsRecipies recipies={recipies} />
         </article>
      </section>
   );
};

export default RecipiesPage;
