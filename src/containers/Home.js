import "./App.css";
import { clicky } from "../util/clicky.js";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.png";
import LogoPNG from "../images/logo.png";
import Preview from '../util/Preview'
import React from "react";
import TelegramSVG from "../images/telegram.svg";
import TwitterCardPNG from "../images/twitter-card.png";
import TwitterSVG from "../images/twitter.svg";

export default class Home extends React.Component {
  componentDidMount() {
    clicky();
  }

  render() {
    const more = (
      <>
        <p className="pitch">
          Weekly coverage of interesting pull requests, discussions, and RFCs
          around React Core and React DOM.
        </p>
        <a className="button" href="https://eepurl.com/dHV-3X">
          Subscribe Now{" "}
          <span className="button-icon" role="img" aria-label="Mail">
            💌
          </span>
        </a>

        <div className="separator">or</div>

        <div className="social">
          <ul>
            <li>
              <a href="https://twitter.com/PhilippSpiess">
                <span className="button-icon">
                  <img src={TwitterSVG} width="30px" alt="Twitter" />
                </span>
                Follow on Twitter
              </a>
            </li>
            <li>
              <a href="https://t.me/this_week_in_react">
                <span className="button-icon">
                  <img src={TelegramSVG} width="30px" alt="Telegram" />
                </span>
                Read on Telegram
              </a>
            </li>
          </ul>
        </div>
        <p className="curated-by">
          Curated with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by <a href="https://philippspiess.com">@PhilippSpiess</a>
        </p>
      </>
    );

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
            content="Weekly coverage of interesting pull requests, discussions, and RFCs around React Core and React DOM."
          />
          <meta name="twitter:image" content={TwitterCardPNG} />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,700"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href={favicon} />
          <link
            href="https://fonts.googleapis.com/css?family=Merriweather"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600"
            rel="stylesheet"
          />
        </Helmet>

        <div className="container">
          <div className="left">
            <img
              src={LogoPNG}
              width={180}
              className="logo"
              alt="This Week in React"
            />
            {more}
          </div>

          <div className="right">
            <Preview />
          </div>
        </div>
      </div>
    );
  }
}
