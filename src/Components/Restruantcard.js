import { IMG_CO_URL } from "..//config";
const Restrauntcard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
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
    <div className="cards">
      <img src={IMG_CO_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines}</h3>
      <h4>{avgRating}</h4>
    </div>
  );
};
export default Restrauntcard;