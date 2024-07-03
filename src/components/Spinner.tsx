import { ClipLoader } from "react-spinners";

const override = {
   display: 'block',
   margin: '100px auto',
};

const Spinner = ({ loading }) => {
   return (
      <ClipLoader 
         color="black"
         cssOverride={override}
         loading={loading}
         size={70}
      />
   );
};

export default Spinner;
