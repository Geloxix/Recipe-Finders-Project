import { Link } from "react-router-dom";

const HomePage = () => {
   return (
      <section className="h-screen flex items-center justify-center">
         <Link
            to="/recipies"
            className="bg-blue-400 text-white shadow-md py-3 px-10 rounded-md"
         >
            Start Find Products
         </Link>
      </section>
   );
};

export default HomePage;
