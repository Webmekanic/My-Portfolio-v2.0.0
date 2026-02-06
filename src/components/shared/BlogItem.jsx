// BlogItem.jsx — remove the wrapping divs/styled-component
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FiArrowRight } from "react-icons/fi";

const BlogItem = ({
  date,
  duration,
  title,
  description,
  talkImg,
  talkLink,
}) => {
  return (
    <div className="talksList">
      <div className="talkItem">
        <div className="talkInfo">
          <p className="talkDate">{date || <Skeleton width={100} />}</p>
          <span className="talkSeparator"></span>
          <p className="talkDuration">{duration || <Skeleton width={60} />}</p>
        </div>
        <h3 className="talkTitle">{title || <Skeleton />}</h3>
        <p className="talkDescription">
          {description || <Skeleton count={3} />}
        </p>
        <a href={talkLink} className="talkLink">
          Read more <FiArrowRight />
        </a>
      </div>
      <div className="talkImage">
        <img srcSet={talkImg} alt={title || "Talk Image"} />
      </div>
    </div>
  );
};

export default BlogItem;
