import React from 'react';
import ColorList from './ColorList.jsx';
import VideoFeed from './VideoFeed.jsx';

const Display = (props) => {
  if (props.video) {
    return(
      <section className="Display">
        <VideoFeed stream={props.video} />
      </section>
    );
  } else {
    return(
      <section className="Display">
        <ColorList colors={props.colors} />
      </section>
    );
  }
};

export default Display;
