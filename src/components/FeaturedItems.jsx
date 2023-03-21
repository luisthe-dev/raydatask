import axios from "axios";
import React, { useEffect, useState } from "react";
import FeaturedItem from "./FeaturedItem";

const FeaturedItems = () => {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllItems = async () => {
    const fetchedItems = await axios.get(
      "https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b"
    );

    if (fetchedItems.status !== 200) {
      setFeaturedItems([]);
      return;
    }

    setFeaturedItems(fetchedItems.data.data);
  };

  useEffect(() => fetchAllItems, []);

  return (
    <div className="auctionCard">
      <div className="featureHeader">
        <h5> Featured Items </h5>
        <button> View Auction </button>
      </div>
      <div className="featuredItems">
        {featuredItems.map((featuredItem, key) => (
          <FeaturedItem item={featuredItem} key={key} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
