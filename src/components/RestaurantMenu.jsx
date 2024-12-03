import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { MENU_API } from "../utils/contants";
import { useParams } from "react-router-dom";

export const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log("it is resId : ", resId);

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      console.log("it is Menu API", json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (!resInfo) {
    return <Shimmer />;
  }

  // Safely destructure the values
  const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info || {};
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs. {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
