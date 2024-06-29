const Instructions = ({ instruction }) => {
   return (
      <li className="list-disc mb-1">
         <p className="text-[0.90em]">
            Step <span>{instruction.stepNumber}</span>
         </p>
         <p className="text-[0.80em] font-montserrat">
            {instruction.description}
         </p>
      </li>
   );
};

export default Instructions;
