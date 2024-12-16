const ShimmerCard = () => {
  return (
    <div className="p-4">
      <div className="mb-4">
        <div className="shimmer-button bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 mt-7 ml-2 animate-pulse"></div>
        <div className="shimmer-title bg-gray-200 h-6 w-3/5 mt-2 ml-5 animate-pulse"></div>
      </div>
      <div className="shimmer-cardcontainer justify-center flex flex-wrap mt-5">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="shimmer-card bg-white shadow-md rounded-lg w-[18%] h-[20%] m-8 p-4 mt-10 overflow-hidden"
            >
              {/* Custom shimmer effect */}
              <div className="shimmer-image bg-gray-200 h-80 w-full rounded mb-3 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-[shimmer_0.1s_infinite]"></div>
              </div>
              <div className="shimmer-title bg-gray-200 h-5 w-3/4 mb-4 rounded relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-[shimmer_0.1s_infinite]"></div>
              </div>
              <div className="shimmer-rating bg-gray-200 h-4 w-1/3 mb-4 rounded relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-[shimmer_0.1s_infinite]"></div>
              </div>
              <div className="shimmer-description bg-gray-200 h-4 w-11/12 rounded relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-[shimmer_0.1s_infinite]"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShimmerCard;
