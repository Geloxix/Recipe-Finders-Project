const IngredientsList = ({ ingredient }) => {
   return (
      <li className="ml-6">
         <p className="font-montserrat text-[0.90em]">{ingredient.name}</p>
      </li>
   );
};

export default IngredientsList;
