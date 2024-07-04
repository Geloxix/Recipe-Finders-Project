import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

import { RiSearchLine } from "@remixicon/react";


const HomePage = () => {
   return (
      <section className="">
         <Navbar />
         <div className="h-screen border-2 flex items-center justify-center flex-col gap-3 bg-[url('assets/images/hero-wave.svg')] bg-no-repeat bg-cover">
            <div className="mt-[-10rem] mb-10 font-montserrat">
               <h1 className="text-5xl mb-3 text-center">Welcome To Recipe Finder</h1>
               <p className="text-center italic">find your favorite recipe now!</p>
            </div>
            
            <Link
               to="/recipies"
               className="bg-light-gray text-xl shadow-md py-3 px-10 rounded-md flex items-center justify-center gap-2 text-black"
            >
               <RiSearchLine /> Start Find Recipies
            </Link>
         </div>
      </section>
   );
};

export default HomePage;
