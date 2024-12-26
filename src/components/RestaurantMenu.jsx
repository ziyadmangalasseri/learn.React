import Shimmer from "./ShimmerCard";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  console.log("res info", resInfo);
  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) {
    return <Shimmer />;
  }

  // Safely destructure the values
  const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info || {};
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu text-center">
      <h1 className="font-bold p-2 text-lg">{name}</h1>
      <h3>{cuisines?.join(", ")}</h3>
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs. {item.card.info.price / 100}
          </li>
        ))}
      </ul> */}
      <div>
        {/* Controlled Component */}
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.id}
            data={category?.card?.card}
            showItems={index == showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            setHideIndex = { () => setShowIndex (null)}
          />
        ))}
      </div>
    </div>
  );
};
