import RestaurantCard, {
  withPromotedLabel,
} from "../components/RestaurantCard";
import resList from "../utils/swiggyData";
import { useState, useEffect } from "react";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Body = () => {
  // Local State Variable - super powerful variable
  const [ListOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2367855&lng=75.8257955&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    const restaurants =
      // Optional Chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const onlinStatus = useOnlineStatus();
  if (onlinStatus == false) {
    return <h1>You are offline please check your network</h1>;
  }

  // Conditional Rendering
  return ListOfRestaurants.length == 0 ? (
    <ShimmerCard />
    // <h1>shmmer</h1>
  ) : (
    <div className="body flex-row justify-center px-[100px]">
      <div className="body-head flex p-4">
        <div className="search-div p-1">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-400 ml-2 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurantCards = ListOfRestaurants.filter(
                (res) => {
                  return res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                }
              );
              setFilteredRestaurant(filteredRestaurantCards);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter p-1">
          <button
            className="filter-btn px-4 bg-red-500 rounded-lg py-1"
            onClick={() => {
              const filteredList = ListOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap p-4">
        {filteredRestaurant.map((restaurant) => (
          <Link to={"/restaurantmenu/" + restaurant.info.id}>
            <div className="p-1">
              {restaurant.info.aggregatedDiscountInfoV3 ? (
                <PromotedRestaurantCard resData={restaurant} />
              ) : (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
              )}
            </div>
          </Link>
        ))}
        {/* <Shimmer /> */}
      </div>
    </div>
  );
};

export default Body;
