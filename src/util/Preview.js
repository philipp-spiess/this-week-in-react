import React from "react";
import what from "../issues/17/index.html";

export default class Preview extends React.Component {
  state = { height: 800 };
  ref = React.createRef();
  componentDidMount() {
    const frame = this.ref.current;

    const frameDocument = frame.contentDocument;
    frame.onload = () => {
      console.log(frameDocument.body.offsetHeight);
      this.setState({ height: frameDocument.body.offsetHeight });
    };
    frameDocument.open();
    frameDocument.write(what);
    frameDocument.close();
  }
  render() {
    return <iframe class="preview" ref={this.ref} style={this.state} />;
  }
}
