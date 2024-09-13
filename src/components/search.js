export const SearchComponent = (props) => {
  return (
    <div className="search-box">
      <input type="text" placeholder="Enter product" />
      <button
        onClick={() => {
          // eslint-disable-next-line react/prop-types
          const filteredRes = props.listOfRes.filter(
            (res) => res.info.avgRating >= 4.4
          );
          // eslint-disable-next-line react/prop-types
          props.setListOfRes(filteredRes);
        }}
      >
        Filter Top Restaurants{" "}
      </button>
    </div>
  );
};
