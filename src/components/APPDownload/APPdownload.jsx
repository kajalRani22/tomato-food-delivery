import React from "react";
import "./Appdownload.css";
import { assets } from "../../assets/assets";
const APPdownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For better Experience Download <br />
        Tomato App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default APPdownload;
