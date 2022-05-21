export const RestaurantDetails = ({
  image: url,
  name: title,
  cuisine,
  cost,
  rating,
  reviews,
  votes,
}) => {
  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "center",
        margin: "10px",
        border: "1px solid black",
      }}
    >
      <div style={{ marginRight: "10px" }}>
        <img width="70px" src={url} alt="" />
      </div>
      <div style={{ marginRight: "10px" }}>
        <div>{title}</div>
        <div>{cuisine}</div>
        <div>Cost ${cost} for one</div>
      </div>
      <div>
        <div>{rating}</div>
        <div>{votes} votes</div>
        <div>{reviews} reviews</div>
      </div>
    </div>
  );
};
