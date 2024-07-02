import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RecipeCard from "../components/RecipeCard";

const RecipePage = ({ favorites, setFavorites }) => {
   const recipe = useLoaderData();

   return (
      <section>
         <ToastContainer />
         <RecipeCard
            recipe={recipe}
            favorites={favorites}
            setFavorites={setFavorites}
         />
      </section>
   );
};

const recipeLoader = async ({ params }) => {
   const recipeId = params.recipeId;

   const res = await axios.get(`/api/recipies/${recipeId}`);
   return res.data;
};

export { RecipePage as default, recipeLoader };
