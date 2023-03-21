import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import ProfilePic from "../assets/images/profilePic.png";

const AuctionHeader = () => {
  return (
    <div className="auctionCard">
      <div className="auctionCardBackground"></div>
      <div className="auctionCardInfo">
        <div className="auctionCardImage">
          <img src={ProfilePic} alt={"Profile"} />
        </div>
        <div className="auctionCardTexts">
          <h5> Starts in: 3 days : 2 hours : 24 minutes </h5>
          <div className="auctionCardDetails">
            <h6>
              <div className="auctionCardStatusDot"></div> <span>Not Live</span>
            </h6>
            <label> Layer Auction </label>
          </div>
        </div>
        <div className="auctionCardButton">
          <button>
            <FiThumbsUp /> Accept Invite
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuctionHeader;
