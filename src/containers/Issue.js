import { Helmet } from "react-helmet";
import { Link } from "@reach/router";
import { withRouteData } from "react-static";
import Layout from "./Layout";
import React from "react";

function Issue(props) {
  return (
    <Layout>
      <Helmet>
        <title>{`This Week in React – Issue ${props.issue}`}</title>
      </Helmet>
      <div className="right-header">
        <div className="current-issue">
          <h1>Issue&nbsp;{props.issue}</h1>
          <h2
            dangerouslySetInnerHTML={{
              __html: formatDate(new Date(props.date))
            }}
          />
        </div>
        <div className="spacer" />
        <nav>
          {!props.isLatest && (
            <Link to={"/issues/" + (props.issue + 1)}>
              ← Issue {props.issue + 1}
            </Link>
          )}

          {!props.isFirst && (
            <Link to={"/issues/" + (props.issue - 1)}>
              Issue {props.issue - 1} →
            </Link>
          )}
        </nav>
      </div>
      <Preview html={props.html} />
    </Layout>
  );
}

class Preview extends React.Component {
  state = { height: 800 };
  ref = React.createRef();
  componentDidMount() {
    const frame = this.ref.current;
    const frameDocument = frame.contentDocument;

    const update = () =>
      this.setState({ height: frameDocument.body.offsetHeight + 30 });

    frame.onload = () => {
      frame.contentWindow.onresize = () => update();
      update();
    };

    frameDocument.open();
    frameDocument.write(this.props.html);
    frameDocument.close();
  }
  render() {
    return <iframe className="preview" ref={this.ref} style={this.state} />;
  }
}

export default withRouteData(props => <Issue {...props} />);

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
function formatDate(date) {
  return `${date.getDate()}&nbsp;${
    monthNames[date.getMonth()]
  }&nbsp;${date.getFullYear()}`;
}
