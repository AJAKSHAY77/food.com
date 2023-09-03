import { useEffect, useState } from "react";
import { restaurantlist } from "../config";
import Restrauntcard from "./Restruantcard";

// function filterData(searchText, restaurants) {
//   const filterdata = restaurants.filter((el) =>
//     el.info.name.includes(searchText)
//   );
//   return filterdata;
// }
function filterData(searchText, restaurants) {
  return restaurants.filter((el) => el.info.name.includes(searchText));
}

const Body = () => {
  const [restaurants, setrestaurants] = useState(restaurantlist);
  const [searchText, setsearchText] = useState("");

    <>
      <div className="search-container">
        <input
          type="text"
          className="search-box"
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const Data = filterData(searchText, restaurants);
            setrestaurants(Data);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((el) => {
          return <Restrauntcard {...el.info} />;
        })}
      </div>
    </>
  ;
};

export default Body;
