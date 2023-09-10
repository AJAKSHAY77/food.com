

import Usercontext from "../../utils/Usercontext";
import { IMG_CO_URL } from "..//config";
import { useContext } from "react";
const Restrauntcard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  const {user}  = useContext(Usercontext)
  // return (
  //   <div className="cards">
  //     <img
  //       src={
  //         "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
  //         props.restaurant.info?.cloudinaryImageId
  //       }
  //     />
  //     <h2>{props.restaurant.info?.name}</h2>
  //     <h3>{props.restaurant.info?.cuisines.join(", ")}</h3>
  //     <h4>{props.restaurant.info?.avgRating}</h4>
  //   </div>
  // );
  return (
    <div className="w-[250px] shadow-xl bg-pink-50">
      <img src={IMG_CO_URL + cloudinaryImageId} />
      <h2 className="font-bold text-2xl ">{name}</h2> <br />
      <h3>{cuisines}</h3> <br />
      <h4>{avgRating}</h4> <br />
      <h2 className="font-bold">{user.name}</h2>
      <h2 className="font-bold">{user.email}</h2>
      
    </div>
  );
};
export default Restrauntcard;