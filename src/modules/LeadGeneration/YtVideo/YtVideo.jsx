import React from "react";
import "./YtVideo.css";
const YtVideo = () => {
  return (
    <div className="yt-container">
      <div className="yt-video">
        <iframe
          
          src="https://www.youtube.com/embed/S4C_XEi_KPU?version=3?&controls=0&mute=1&showinfo=0&iv_load_policy=3&playlist=S4C_XEi_KPU&autoplay=0&loop=0"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YtVideo;
