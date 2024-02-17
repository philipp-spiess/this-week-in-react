import "./App.css";
import { clicky } from "../util/clicky.js";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.png";
import LogoPng from "../images/logo.png";
import LogoWithBgJpeg from "../images/logo-with-bg.jpg";
import React from "react";
import TelegramSvg from "../images/telegram.svg";
import TwitterCardPng from "../images/twitter-card.png";
import TwitterSvg from "../images/twitter.svg";
import SubscribeForm from "./SubscribeForm";

export default class Layout extends React.Component {
  componentDidMount() {
    clicky();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>This Week in React</title>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@PhilippSpiess" />
          <meta name="twitter:title" content="This Week in React ⚛️" />
          <meta
            name="twitter:description"
            content="Regular coverage of interesting pull requests, discussions, and RFCs around React Core and React DOM."
          />
          <meta name="twitter:image" content={TwitterCardPng} />
          <meta name="og:image" content={TwitterCardPng} />
          <link rel="icon" type="image/png" href={favicon} />
          <link
            href="https://fonts.googleapis.com/css?family=Merriweather"
            rel="stylesheet"
          />
        </Helmet>

        <div className="container">
          <div className="left">
            <img
              src={LogoWithBgJpeg}
              hidden
              style={{ display: "none" }}
              lazyload
            />
            <img
              src={LogoPng}
              width={180}
              className="logo"
              alt="This Week in React"
            />

            <p className="pitch">
              This website contains a backup of the React newsletters I curated between 2018 and 2019. It's been an amazing journey with you all, but this newsletter is no longer maintained.<br/>
              <br/>
              If you're interested in React news, I recommend you to check out the fantastic <a href="https://thisweekinreact.com/">This Week In React</a> curated by Sébastien Lorber.<br/>
            </p>

            <p className="curated-by">
              <span role="img" aria-label="love">
                ❤️
              </span>{" "}
              <a href="https://philippspiess.com">Philipp</a>
            </p>
          </div>

          <div className="right">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
