import { useLoaderData } from "react-router-dom";
import axios from "axios";

import RecipeCard from "../components/RecipeCard";

const RecipePage = ({ favorite, setFavorite }) => {
   const recipe = useLoaderData();

   return (
      <section>
         <RecipeCard recipe={recipe} favorite={favorite} setFavorite={setFavorite} />
      </section>
   );
};

const recipeLoader = async ({ params }) => {
   const recipeId = params.recipeId;

   const res = await axios.get(`/api/recipies/${recipeId}`);
   return res.data;
};

export { RecipePage as default, recipeLoader };
