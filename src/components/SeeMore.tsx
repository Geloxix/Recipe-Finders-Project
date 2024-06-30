const SeeMore = ({ setIsFullyViewed, isFullyViewed }) => {
   return (
      <p
         className={`font-montserrat text-[0.90em] cursor-pointer underline `}
         onClick={() => setIsFullyViewed(!isFullyViewed)}
      >
         {isFullyViewed ? "SeeMore..." : "SeeLess..."}
      </p>
   );
};

export default SeeMore;
