import RestaurantCard from "../components/RestaurantCard";
import resList from "../utils/swiggyData";
import { useState, useEffect } from "react";

const Body = () => {
  //Local State Variable - super powerful variable
  const [ListOfRestaurants, setListOfRestaurant] = useState(resList.flat());

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2367855&lng=75.8257955&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn "
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container"> 
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
