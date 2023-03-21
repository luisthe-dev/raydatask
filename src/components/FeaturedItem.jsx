import React from "react";

const FeaturedItem = () => {
  return (
    <div className="featuredItem">
      <img src="" alt=".." />
      <div className="featuredBuyer">
        <p> KO </p>
        <h4>
          Koray Okumus <span>(Highest Bidder)</span>
        </h4>
      </div>
      <div className="featuredItemDetails">
        <h5>Apple MacBook Air 13" M1 Chip 8GB 256GB 2020 Model - Rose Gold</h5>
        <h6>
          Current Bid: <p>₦795,000</p>
        </h6>
      </div>
      <div className="featuredButton">
        <button> Add to wishlist </button>
      </div>
    </div>
  );
};

export default FeaturedItem;
