import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Recipe } from "../utils/data";
import HomeCardsRecipies from "../components/HomeCardsRecipies";
import { RiHome5Line } from "@remixicon/react";
import Spinner from "../components/Spinner";

const RecipiesPage = () => {
   const [recipies, setRecipies] = useState([]);
   const [ loading, setLoading ] = useState<boolean>(true);
   const [filteredRecipe, setFilteredRecipe] = useState<string>("");

   useEffect(() => {
      const fetchRecipies = async () => {
         try {
            const res = await axios.get(`/api/recipies`);
            setRecipies(res.data);
         } catch (err) {
            console.error("Error:", err);
         } finally {
            setLoading(false);
         }
      };

      fetchRecipies();
   }, []);

   const handleFilteredRecipies = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setFilteredRecipe(e.target.value);
   };

   const filteredRecipies = recipies.filter((rec: Recipe) =>
      rec.name.toLowerCase().includes(filteredRecipe.toLowerCase()),
   );

   return (
      <section>
         <button className="mt-3 ml-1 px-6 text-[0.90em] hover:text-violet-500 transition-all">
            <Link to="/" className="flex gap-2 hover:underline">
               <RiHome5Line /> Home
            </Link>
         </button>

         <header className="py-6">
            <h1 className="font-palanquin text-4xl text-center mb-3 text-violet-400 font-semibold">
               Recipe Finder
            </h1>
            <p className="font-palanquin text-center mb-6">
               find your favorite recipies.
            </p>
            <form className="w-full flex flex-col items-center justify-center font-montserrat">
               <input
                  type="text"
                  name="find recipies"
                  value={filteredRecipe}
                  onChange={handleFilteredRecipies}
                  placeholder="Enter recipe name.."
                  id="recipies"
                  className="border-[1px] w-[70%] mb-2 py-[7px] pl-3"
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
            {
               loading ? ( <Spinner loading={loading} />) : 
               ( <HomeCardsRecipies filteredRecipies={filteredRecipies} />)
            }
         </article>
      </section>
   );
};

export default RecipiesPage;
