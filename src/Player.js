import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        {/*Sidebar*/}
        <Sidebar />
        {/*body*/}
        <Body spotify={spotify} />
      </div>
      <div>
        {/*Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Player;
