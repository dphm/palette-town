import React from 'react';
import Canvas from './Canvas.jsx';

class VideoFeed extends React.Component {
  constructor(props) {
    super(props);
    this.width = props.width;
    this.height = props.height;
    this.numColors = props.colors.length;

    this.drawStream = this.drawStream.bind(this);
    this.setPaletteBuffer = this.setPaletteBuffer.bind(this);
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
        this.video.width = this.width;
        this.video.height = this.height;
        this.video.play();

        this.input = document.createElement('canvas');
        this.inputCtx = this.input.getContext('2d', { alpha: false });
        this.input.width = this.width;
        this.input.height = this.height;

        let paletteSize = this.numColors * 4;
        let imageSize = this.width * this.height * 4;
        let bufferSize = imageSize + paletteSize;

        this.pointer = mod.exports.alloc(bufferSize);
        this.paletteBuffer = new Uint8ClampedArray(mod.exports.memory.buffer, this.pointer, paletteSize);
        this.imageBuffer = new Uint8ClampedArray(mod.exports.memory.buffer, this.pointer + paletteSize, imageSize);
        this.image = new ImageData(this.imageBuffer, this.width, this.height);
        
        this.setPaletteBuffer();

        requestAnimationFrame(this.drawStream);
      });
  }

  componentDidUpdate() {
    this.setPaletteBuffer();
  }

  drawStream() {
    this.inputCtx.drawImage(this.video, 0, 0);
    this.imageBuffer.set(this.inputCtx.getImageData(0, 0, this.width, this.height).data);

    this.mod.exports.transform_grayscale(this.pointer, this.width, this.height, this.numColors);
    this.outputCtx.putImageData(this.image, 0, 0);

    requestAnimationFrame(this.drawStream);
  }

  setPaletteBuffer() {
    let paletteBytes = this.props.colors.reduce((bytes, color) => (
      bytes.concat(color.values)
    ), []);
    this.paletteBuffer.set(paletteBytes);
  }

  render() {
    return(
      <Canvas />
    );
  }
}

export default VideoFeed;
