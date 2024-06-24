import { createBrowserRouter, RouterProvider } from "react-router-dom";

// component/pages imports
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";


const App = () => {
   const router = createBrowserRouter([
      { 
         path: '/',
         element: <HomePage />,
         errorElement: <NotFoundPage />
      } 
   ])
   return (
      <RouterProvider router={router} />
   )
};

export default App;