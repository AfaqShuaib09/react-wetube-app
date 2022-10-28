import React from "react";
import ReactTimeAgo from "react-time-ago";

function VideoCard(props) {
  const onSelected = props.onSelected;
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-3">
      <div className="card">
        <img
          onClick={() => onSelected(props.id)}
          src={props.thumbnail}
          className="card-img-top"
          alt="..."
          width={100}
          height={230}
        />
        <div className="card-body">
          <div className="d-flex justify-content-between my-2">
            <div className="d-flex">
              <img
                src={props.channelIcon}
                alt="..."
                width={60}
                height={35}
                className="rounded-circle me-2"
              />
              <p className="card-text fw-bold">
                {props.title.length > 70
                  ? props.title.substring(0, 70) + "..."
                  : props.title}
              </p>
            </div>
          </div>

          {/* Views */}
          <p className="mt-1 fs-6">
            {props.channelName} <i className="bi bi-check-circle-fill"></i>
          </p>
          <div className="d-flex justify-content-between m-0">
            <div className="d-flex">
              <i className="bi bi-eye-fill me-2"></i>
              <p className="m-0">516k views</p>
            </div>
            <div className="d-flex">
              <div className="d-flex posted-time">
                <i className="bi bi-clock-fill me-2"></i>
                <p className="m-0">
                  <ReactTimeAgo
                    date={new Date(props.timestamp)}
                    locale="en-US"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
