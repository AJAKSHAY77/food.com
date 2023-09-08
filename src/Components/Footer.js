import { useContext } from "react";
import Usercontext from "../../utils/Usercontext";

const Footer = () => {
 const { user } = useContext(Usercontext);
  return (
    <div>
      <h1 className="text-lg font-bold">{user?.name}</h1>
      <h1 className="text-lg font-bold">{user?.email}</h1>
    </div>
  );
};
export default Footer
