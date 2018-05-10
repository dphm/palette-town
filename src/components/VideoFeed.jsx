import React from 'react';
import Canvas from './Canvas.jsx';

class VideoFeed extends React.Component {
  constructor(props) {
    super(props);
    this.drawStream = this.drawStream.bind(this);
  }

  componentDidMount() {
    fetch('/palette_town.gc.wasm')
      .then((wasm) => wasm.arrayBuffer())
      .then((bytes) => WebAssembly.instantiate(bytes))
      .then((module) => module.instance)
      .then((mod) => {
        this.mod = mod;
        this.output = document.querySelector('canvas');
        this.outputCtx = this.output.getContext('2d', { alpha: false });

        this.video = document.createElement('video');
        this.video.srcObject = this.props.stream;
        this.video.width = this.output.width;
        this.video.height = this.output.height;
        this.video.play();

        this.input = document.createElement('canvas');
        this.inputCtx = this.input.getContext('2d', { alpha: false });
        this.input.width = this.output.width;
        this.input.height = this.output.height;

        let byteSize = this.output.width * this.output.height * 4;
        this.pointer = mod.exports.alloc(byteSize);
        this.imageBytes = new Uint8ClampedArray(mod.exports.memory.buffer, this.pointer, byteSize);
        this.img = new ImageData(this.imageBytes, this.output.width, this.output.height);
        
        requestAnimationFrame(this.drawStream);
      });
  }

  drawStream() {
    this.inputCtx.drawImage(this.video, 0, 0);
    this.imageBytes.set(this.inputCtx.getImageData(0, 0, this.output.width, this.output.height).data);

    this.mod.exports.transform_grayscale(this.pointer, this.output.width, this.output.height);
    this.outputCtx.putImageData(this.img, 0, 0);

    requestAnimationFrame(this.drawStream);
  }

  render() {
    return(
      <Canvas />
    );
  }
}

export default VideoFeed;
