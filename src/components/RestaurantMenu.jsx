import { useEffect } from "react";

export const RestaurantMenu = () => {
  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2367855&lng=75.8257955&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
  };
  return  (
    <div className="menu">
      <h1>Restaurant Name</h1>
      <h3>Menu</h3>
      <ul>
        <li>Biriyaani</li>
        <li>Porotta</li>
        <li>Mandi</li>
      </ul>
    </div>
  );
};
