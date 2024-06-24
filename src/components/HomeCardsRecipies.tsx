import { Link } from "react-router-dom";


const HomeCardsRecipies = ({ recipies }) => {

   interface Recipe {
      recipe_id: number;
      name: string;
      description: string;
      cuisine: string;
      prep_time: number;
      cook_time: number;
      total_time: number;
      img: string;
      serving: string;
      ingredients: [];
      nutritions: [];
   };

   return (
      <div>
         <ul className="grid grid-cols-3 place-content-center justify-items-center">
            {
               recipies.map((recipe: Recipe) => (
                  <Link 
                     to=""
                     key={recipe.recipe_id}
                  >
                     <div className="border-2 w-[300px] p-[2px]"> 
                        <img 
                           src={recipe.img} 
                           alt={recipe.name}
                        />
                        <p className="p-1 text-center font-palanquin">{ recipe.name }</p>
                     </div>
                     
                  </Link>
               ))
            }
         </ul>
      </div>
   )
};

export default HomeCardsRecipies;