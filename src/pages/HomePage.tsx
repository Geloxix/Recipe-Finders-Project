import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

const HomePage = () => {
   return (
      <section>
         <Navbar />
         <div className="h-screen flex items-center justify-center border-2">
            <Link
               to="/recipies"
               className="bg-blue-400 text-white shadow-md py-3 px-10 rounded-md"
            >
               Start Find Products
            </Link>
         </div>
      </section>
   );
};

export default HomePage;
