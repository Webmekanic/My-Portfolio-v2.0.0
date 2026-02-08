import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FiArrowUpRight } from "react-icons/fi";

const AwardItem = ({ date, title, description, link }) => {
  return (
    <div className="awardList">
      <div className="awardItem">
        <div className="awardInfo">
          <p className="awardDate">{date || <Skeleton width={120} />}</p>
        </div>
        <h3 className="awardTitle">{title || <Skeleton width={200} />}</h3>
        <p className="awardDescription">
          {description || <Skeleton count={2} />}
        </p>
      </div>
      <a href={link || "#"} className="awardLinkIcon">
        <div className="awardLink">
          <FiArrowUpRight size={36} />
        </div>
      </a>
    </div>
  );
};

export default AwardItem;
