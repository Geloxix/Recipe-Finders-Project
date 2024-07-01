import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

const HomePage = () => {
   return (
      <section className="">
         <Navbar />
         <div className="h-screen border-2 flex items-center justify-center flex-col">
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
