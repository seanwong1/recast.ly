const { useState, useEffect } = React;

var App = (props) => {
  // NEED TO USE isInList to update state for videoList props
  const [videos, isInList] = useState([]);
  const [currentVideo, playVideo] = useState(exampleVideoData[0]);
  // THIS IS WHERE ERRORS ARE COMING FROM, SHOULD STOP WHEN WE GET DATA TO WORK

  // const acquireVideos = function() {
  // };
  useEffect(() => {
    // re render video list
  }, [videos, currentVideo]);
  // acquireVideos();
  console.log(videos);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em><Search isInList={isInList} /></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayer</em><VideoPlayer video={currentVideo} /*currentVideo={currentVideo}*/ /></h5></div>
        </div>
        <div className="col-md-5">
          {/* <script src='src/data/exampleVideoData.js'></script> */}
          <div><h5><em>videoList</em><VideoList videos={videos} playVideo={playVideo}/></h5></div>
        </div>
      </div>
    </div>
  );
};

import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
