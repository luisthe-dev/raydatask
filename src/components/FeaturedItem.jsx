import React from "react";

const FeaturedItem = ({ item }) => {
  return (
    <div className="featuredItem">
      <img src={item.image} alt={item.title} />
      <div className="featuredBuyer">
        <p> KO </p>
        <h4>
          {item.name} <span>(Highest Bidder)</span>
        </h4>
      </div>
      <div className="featuredItemDetails">
        <h5>{item.title}</h5>
        <h6>
          Current Bid: <p>{item.bid}</p>
        </h6>
      </div>
      <div className="featuredButton">
        <button> Add to wishlist </button>
      </div>
    </div>
  );
};

export default FeaturedItem;
