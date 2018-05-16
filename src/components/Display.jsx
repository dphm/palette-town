import React from 'react';
import ColorList from './ColorList.jsx';
import VideoFeed from './VideoFeed.jsx';
import PaletteData from '../data/PaletteData';

const Display = ({selectedPalette, video, width, height}) => {
  let colors = PaletteData.colors(selectedPalette);
  if (video) {
    return(
      <section className="Display">
        <VideoFeed
          colors={colors}
          stream={video}
          width={width}
          height={height}
        />
      </section>
    );
  } else {
    return(
      <section className="Display">
        <ColorList colors={colors} />
      </section>
    );
  }
};

export default Display;
