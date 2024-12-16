import { IMG_URL } from "../utils/contants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating } = resData?.info;

  return (
    <div>
      <div className="res-card p-3 w-[300px] h-[400px] rounded-xl bg-gray-300 hover:bg-gray-100">
        <img
          className="res-logo rounded-l-full w-full h-[200px] object-cover"
          alt="res-logo"
          src={IMG_URL + cloudinaryImageId}
        />
        <h3 className="font-bold text-md mt-2">{name}</h3>
        <h4 className="text-sm break-words whitespace-normal leading-tight mt-1">
          {cuisines.join(", ")}
        </h4>
        <h4 className="text-sm mt-2 font-medium">⭐ {avgRating}</h4>
        <h4 className="text-sm text-gray-500">
          {resData?.info?.sla?.slaString}
        </h4>
      </div>
    </div>
  );
};

// This is Higher order component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const { header, subHeader } = resData.info.aggregatedDiscountInfoV3;
    return (
      <div>
        <label className="absolute bg-green-300 h-7 m-2 p-1 rounded-lg flex justify-center">
          {header} - {subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
