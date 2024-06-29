const Recipe = ({ recipe }) => {
   return (
      <>
         <img src={recipe.img} alt="recipe image" className="w-[200px]" />
         <h1 className="text-xl mt-1">
            {recipe.name}
            <span>{`  (${recipe.cuisine})`}</span>
         </h1>
         <p className="mb-3 mt-2">{recipe.description}</p>
      </>
   );
};

export default Recipe;
