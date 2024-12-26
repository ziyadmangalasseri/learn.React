import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/contants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  console.log("items :-", items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12 p-4">
            <button
              className="mx-2 my-20 p-2 absolute shadow-lg rounded-lg bg-black text-white"
              onClick={() => handleAddItem(item)}
            >
              add +
            </button>
            <img
              src={IMG_URL + item.card.info.imageId}
              className="w-full h-auto"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
