import React, { useEffect, useState } from "react";
import FeaturedItem from "./FeaturedItem";

const FeaturedItems = () => {
  const [featuredItems, setFeaturedItems] = useState(["", "", "", "", "", ""]);

  return (
    <div className="auctionCard">
      <div className="featureHeader">
        <h5> Featured Items </h5>
        <button> View Auction </button>
      </div>
      <div className="featuredItems">
        {featuredItems.map((featuredItem) => (
          <FeaturedItem item={featuredItem} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
