import ItemList from "./ItemList";
const RestaurantCategory = ({ data }) => {
  console.log("category data: ", data);

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div className="flex justify-between">
        <span className="font-bold text-lg">
          {data?.title || "No Title"} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      <div>
        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
