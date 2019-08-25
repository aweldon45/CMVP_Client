import React, { Component } from 'react';
import { Player } from 'video-react';
//import playerstyle from ".../node_modules/video-react/dist/video-react.css";

class Playback extends Component {
  render() {
    return (
      <div>
      <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
      <h1>Playback</h1>
      </div>
    )
  }
}

export default Playback
