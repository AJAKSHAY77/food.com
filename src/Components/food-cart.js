
import { IMG_CO_URL } from "..//config";

const Fooditems = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  

  return (
    <div className="w-[250px] shadow-xl bg-pink-50">
      <img src={IMG_CO_URL + cloudinaryImageId} />
      <h2 className="font-bold text-2xl ">{name}</h2> <br />
      <h3>{cuisines}</h3> <br />
      <h4>{avgRating}</h4> <br />
    </div>
  );
};
export default Fooditems;
