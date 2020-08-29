import React, { useEffect, useState } from "react";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
import "./App.css";

const spotify = new SpotifyWebApi();
function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hashToken = getTokenFromUrl();
    const _token = hashToken.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("0ox4qE7odjHzRGCZn7zoEK").then((respone) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: respone,
        });
      });
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
