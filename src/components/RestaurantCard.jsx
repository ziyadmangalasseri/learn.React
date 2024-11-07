const RestaurantCard = (props) => {
    const { resData } = props;
    console.log(resData);
    const { name, image, cuisine, rating } = resData.info;
  
    return (
      <div className="res-card">
        <img className="res-logo" alt="res-logo" src={image.url} />
        <h3>{name}</h3>
        <h4>{cuisine.map((c) => c.name).join(", ")}</h4>
        <h4>{rating.aggregate_rating}</h4>
        <h4>{resData.order.deliveryTime}</h4>
      </div>
    );
  };

  
  export default RestaurantCard;