import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

import { RiSearchLine } from "@remixicon/react";


const HomePage = () => {
   return (
      <section className="">
         <Navbar />
         <div className="h-screen border-2 flex items-center justify-center flex-col">
            <Link
               to="/recipies"
               className="bg-light-gray text-xl shadow-md py-3 px-10 rounded-md flex items-center justify-center gap-2 text-black"
            >
               <RiSearchLine /> Start Find Products
            </Link>
         </div>
      </section>
   );
};

export default HomePage;
