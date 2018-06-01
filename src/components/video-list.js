import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.id.videoId}
        video={video} />
    )
  });

  return (
    <ul className="col-md-6 list-group" style={{flexWrap: 'wrap'}}>
      {videoItems}
    </ul>
  );

};

export default VideoList;
