import { IMG_URL } from "../utils/contants";
const RestaurantCard = (props) => {
    const { resData } = props;
    // console.log(resData);
    const { name, cloudinaryImageId, cuisines, avgRating } = resData.info;
  
    return (
      <div className="res-card">
        <img className="res-logo" alt="res-logo" src={IMG_URL+cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{resData.info.sla.deliverTime} min</h4>
      </div>
    );
  };

  
  export default RestaurantCard;