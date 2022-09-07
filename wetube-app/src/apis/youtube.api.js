import axios from "axios";

const KEY = "AIzaSyAN6qdQCV15Y5GZKjDybB4bzR66DRKm5Ig";

export const baseParams = {
  part: "snippet",
  maxResults: 25,
  key: KEY,
  regionCode: "PK",
  type: "video",
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
