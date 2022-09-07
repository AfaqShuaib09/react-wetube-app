import youtubeApi, { baseParams } from "apis/youtube.api";
import LoadingSpinner from "components/LoadingSpinner";
import PageHeader from "components/PageHeader";
import TopProgressBar from "components/TopProgressBar";
import VideoContainer from "components/VideoContainer";
import VideoPlayerModal from "components/VideoPlayerModal";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  const DEFAULT_CHART = "mostPopular";
  const [videos, setVideos] = useState([]);
  const [channelsData, setChannelsData] = useState();
  const [search, setSearch] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [visible, setVisible] = useState(true);

  const getSearchTag = (data) => {
    setSearch(data);
  };

  const getSelectedVideo = (data) => {
    // get vedio by vedio id
    for (let i = 0; i < videos.length; i++) {
      if (videos[i].id.videoId === data) {
        setSelectedVideo(videos[i]);
        break;
      }
    }
  };

  useEffect(() => {
    if (DEFAULT_CHART || search) {
      setIsAnimating(true);
      youtubeApi
        .get("/search", {
          params: {
            ...baseParams,
            q: search ? search : "",
          },
        })
        .then((response) => {
          setVideos(response.data.items);
          // make a list of channels id from the response
          let channelsId = response.data.items.map(
            (item) => item.snippet.channelId
          );
          // make a list of unique channels id
          let uniqueChannelsId = [...new Set(channelsId)];
          // pass the unique channels id to the api
          youtubeApi
            .get("/channels", {
              params: {
                ...baseParams,
                id: uniqueChannelsId.join(","),
              },
            })
            .then((response) => {
              // make a dictionary of channels id and channel Icon
              let channelsDict = {};
              response.data.items.forEach((item) => {
                channelsDict[item.id] = item.snippet.thumbnails.default.url;
              });
              setChannelsData(channelsDict);
              setIsAnimating(false);
            })
            .catch((error) => {
              // Handle error
              console.log(error);
            });
        });
    }
  }, [search]);

  useEffect(() => {
    if (selectedVideo) {
      setIsAnimating(true);
      setVisible(true);
      setIsAnimating(false);
    }
  }, [selectedVideo]);

  return (
    <>
      <TopProgressBar isAnimating={isAnimating} />
      <PageHeader search={getSearchTag}></PageHeader>

      {/* Videos Container */}
      {videos.length > 0 && channelsData ? (
        <VideoContainer
          videos={videos}
          channelsData={channelsData}
          selectedVideo={getSelectedVideo}
        ></VideoContainer>
      ) : (
        <LoadingSpinner></LoadingSpinner>
      )}

      {/* Video Player */}
      {selectedVideo ? (
        <VideoPlayerModal
          video={selectedVideo}
          visible={visible}
          onHide={() => {
            setSelectedVideo(null);
            setVisible(false);
          }}
        ></VideoPlayerModal>
      ) : null}
    </>
  );
}

export default App;
