import { createBrowserRouter, json, RouterProvider } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";

import { Recipe } from "./utils/data";

// component/pages imports
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import RecipiesPage from "./pages/RecipiesPage";
import RecipePage, { recipeLoader } from "./pages/RecipePage";
import FavoritesPage from "./pages/FavoritesPage";

const App = () => {
   const [ favorite, setFavorite ] = useState<Recipe[]>(() => {
      const savedRecipe = localStorage.getItem('fav');
      return savedRecipe ? JSON.parse(savedRecipe) : [];
   });

   const router = createBrowserRouter([
      {
         path: "/",
         element: <HomePage />,
         errorElement: <NotFoundPage />,
      },
      {
         path: "/recipies",
         element: <RecipiesPage />,
      },
      {
         path: "/recipies/:recipeId",
         element: <RecipePage favorite={favorite} setFavorite={setFavorite} />,
         loader: recipeLoader,
      },
      {
         path: "/favorites",
         element: <FavoritesPage favorite={favorite} />
      }
   ]);

   return <RouterProvider router={router} />;
};

export default App;
