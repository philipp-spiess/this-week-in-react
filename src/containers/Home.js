import "./Home.css";
import { createBackgroundPattern } from "../util/atoms.js";
import { clicky } from "../util/clicky.js";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.png";
import React from "react";
import ReactSVG from "../images/react.svg";
import TelegramSVG from "../images/telegram.svg";
import TwitterSVG from "../images/twitter.svg";
import TwitterCardPNG from "../images/twitter-card.png";

export default class Home extends React.Component {
  componentDidMount() {
    createBackgroundPattern();
    clicky();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>This Week In React</title>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@PhilippSpiess" />
          <meta name="twitter:title" content="This Week In React ⚛️" />
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
        </Helmet>
        <div aria-hidden="true" className="atoms" />
        <div className="main">
          <section>
            <h1>
              This Week In React{" "}
              <img
                src={ReactSVG}
                width="60px"
                alt="⚛️"
                id="logo"
                onClick={createBackgroundPattern}
                onKeyDown={createBackgroundPattern}
              />
            </h1>
            <h2>
              Weekly coverage of interesting pull requests, discussions, and
              RFCs around React Core and React DOM. Coming out every Friday.
            </h2>
            <div className="issues">
              <ol>
                <li>
                  <a href="https://twitter.com/PhilippSpiess/status/1058401709037441024">
                    Issue 7 — 2 Nov 2018
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/PhilippSpiess/status/1055869112277258240">
                    Issue 6 — 26 Oct 2018
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/PhilippSpiess/status/1053325077687820293">
                    Issue 5 — 19 Oct 2018
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/PhilippSpiess/status/1050780941151588353">
                    Issue 4 — 12 Oct 2018
                  </a>
                </li>
              </ol>
            </div>

            <div className="button-row">
              <a href="https://twitter.com/PhilippSpiess">
                Follow on Twitter{" "}
                <span className="button-icon">
                  <img src={TwitterSVG} width="30px" alt="🐦" />
                </span>
              </a>
              <a href="https://t.me/this_week_in_react">
                Read on Telegram{" "}
                <span className="button-icon">
                  <img src={TelegramSVG} width="30px" alt="✈️" />
                </span>
              </a>
            </div>
            <div className="button-row">
              <a className="button" href="https://eepurl.com/dHV-3X">
                Subscribe Now{" "}
                <span className="button-icon" role="img" aria-label="Mail">
                  💌
                </span>
              </a>
            </div>

            <h3>
              Made with{" "}
              <span role="img" aria-label="Hearts">
                💕
              </span>{" "}
              by <a href="https://philippspiess.com">@PhilippSpiess</a>
            </h3>
          </section>
        </div>

        <noscript>
          <p>
            <img
              alt="Clicky"
              width="1"
              height="1"
              src="//in.getclicky.com/101142968ns.gif"
            />
          </p>
        </noscript>
      </div>
    );
  }
}
