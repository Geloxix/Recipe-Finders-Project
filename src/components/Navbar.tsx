import { Link } from "react-router-dom";

import { RiHeart3Line } from "@remixicon/react";

const Navbar = () => {
   return(
      <header>
         <nav className="w-full px-[5rem] py-5 flex justify-between font-poppins fixed z-[9999]">
            <h1>Re-Finders</h1>
            <Link 
               to="/favorites"
               className="text-red-400"
            >
               <RiHeart3Line />
            </Link>
         </nav>
      </header>
   );
};

export default Navbar;
