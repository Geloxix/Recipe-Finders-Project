const Instructions = ({ instruction }) => {
   return (
      <li className="list-decimal mb-1">
         <p className="text-[0.80em] font-montserrat">
            {instruction.description}
         </p>
      </li>
   );
};

export default Instructions;
