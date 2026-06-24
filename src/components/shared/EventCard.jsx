import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const EventCard = ({ eventImg, eventName, sessionTopic, eventLink }) => {
  return (
    <div className="card">
      <div className="scroll-section-image-container">
        <img srcSet={eventImg} alt={sessionTopic || "Talk Image"} />
      </div>
      <div className="eventDetails">
        <h4 className="eventName">{eventName || <Skeleton width={150} />}</h4>
        <h3 className="sessionTopic">
          {sessionTopic || <Skeleton width={200} />}
        </h3>
        <a href={eventLink || "#"} className="eventLink">
          See events
        </a>
      </div>
    </div>
  );
};

export default EventCard;
