import React from "react";
import AuctionHeader from "./components/AuctionHeader";
import FeaturedItems from "./components/FeaturedItems";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <AuctionHeader />
        <FeaturedItems />
      </main>
    </>
  );
};

export default App;
