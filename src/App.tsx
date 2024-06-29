import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import axios from "axios";

// component/pages imports
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import RecipiesPage from "./pages/RecipiesPage";
import RecipePage, { recipeLoader } from "./pages/RecipePage";

const App = () => {
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
         element: <RecipePage />,
         loader: recipeLoader,
      },
   ]);

   return <RouterProvider router={router} />;
};

export default App;
