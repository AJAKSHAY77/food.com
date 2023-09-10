import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CO_URL } from "../config";
import Shimmerui from "./shimer.ui";
import { additem } from "./slice.js";
import { useDispatch } from "react-redux";

const Restrauntmenu = () => {
  // const params = useParams()
  // console.log(params);
  // let { id } = params
  // const { id } = useParams();
  //  let { id } = params; 
  //this hook is used to read dynamic url
  const { id } = useParams()
  const[Restaurant,setRestaurant]=useState(null)
  useEffect(()=>{
    getRestaurantInfo()
  }, [])
  async function getRestaurantInfo() {

    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.1708138&lng=79.93047419999999&restaurantId=102672&catalog_qa=undefined&submitAction=ENTER"+id
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info)
  }

  const dispatch=useDispatch()

  const handleadditem = () => {
      dispatch(additem("grapes"));
  };
  
  return !Restaurant ? (
    <Shimmerui />
  ) : (
    <div className="flex">
      <div>
        <h1>Restraunt id:{id}</h1>

        <h3>{Restaurant.name}</h3>
        <img src={IMG_CO_URL + Restaurant?.cloudinaryImageId} />
        <h3>{`city :${Restaurant?.city}`}</h3>
        <h3>{Restaurant?.locality}</h3>
        <h3>{Restaurant?.avgRating}</h3>
        <button
          className="bg-green-500 p-3"
          onClick={() => handleadditem()}
        >
          add item
        </button>
      </div>
      <div>
        <h1 className="ml-6">menu</h1>
        {/* <ul>
          {Object.values(Restaurant?.menu?.items).map((item) => (
            <li key={item.id}>
              {item.name}-{" "}
              <button
                className="bg-green-500 p-3"
                onClick={() => handleadditem(item)}
              >
                add item
              </button>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};
export default Restrauntmenu;


