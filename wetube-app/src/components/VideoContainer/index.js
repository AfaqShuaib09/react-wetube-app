import VideoCard from "components/VideoCard";
import React from "react";

function VideoContainer(props) {
  const videoCards = props.videos.map((video, index) => {
    return (
      <VideoCard
        onSelected={props.selectedVideo}
        key={index}
        id={video.id.videoId}
        thumbnail={video.snippet.thumbnails.high.url}
        title={video.snippet.title}
        channelName={video.snippet.channelTitle}
        timestamp={video.snippet.publishedAt.slice(0, -1)}
        channelIcon={props.channelsData[video.snippet.channelId]}
      />
    );
  });

  return (
    <div className="videos mt-4 mx-4">
      <div className="row">{videoCards}</div>
    </div>
  );
}

export default VideoContainer;
