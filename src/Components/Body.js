import { useEffect, useState } from "react";
import { restaurantlist } from "../config";
import Restrauntcard from "./Restruantcard";
import Shimmerui from "./shimer.ui";
import {Link} from "react-router-dom";

function filterData(searchText, allrestaurants) {
  return allrestaurants.filter((el) => el?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
}

const Body = () => { 
  const [allrestaurants, setallrestaurants] = useState([]);
  const [Filterrestaurants, setFilterrestaurants] = useState([]);
  //console.log(restaurants);
  const [searchText, setsearchText] = useState();

  useEffect(() => {
    //api call

    getRestaurants();
   
  }, []);
  

  async function getRestaurants() {
    
      const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2965552&lng=77.99659609999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json()
    console.log(json);
    setallrestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.
restaurants);
    setFilterrestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.
restaurants);
    
  }
//console.log("render");
  if (!allrestaurants) {
    return null
  }

  // if (Filterrestaurants.length===0) {
  //   return <h1>nothing match to your filter</h1>
  // };
  
  //conditional rendering
  //if  restrant is empty => shimmer ui;
  //if resrant has data => actual data ui 
  return (allrestaurants.length===0)?(<Shimmerui/>):(
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-box"
          value={searchText}  
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const Data = filterData(searchText, allrestaurants);
            setFilterrestaurants(Data);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {Filterrestaurants.map((el) => {
          return ( <Link to={"/restaurant/" + el.info.id} key={ ...el.info.id }>
                   <Restrauntcard {...el.info} />
          </Link  >
          )
        })} 
      </div>
    </>
  );
};

export default Body;

