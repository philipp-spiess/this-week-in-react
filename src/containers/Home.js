import "./Home.css";
import { createBackgroundPattern } from "./atoms.js";
import { Helmet } from "react-helmet";
import favicon from "../../public/favicon.png";
import React from "react";
import ReactSVG from "../../public/react.svg";
import telegram from "../../public/telegram.svg";
import twitter from "../../public/twitter.svg";

const Clicky = () => {
  const clicky_site_ids = [];
  clicky_site_ids.push(101142968);
  const s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = "//static.getclicky.com/js";
  (
    document.getElementsByTagName("head")[0] ||
    document.getElementsByTagName("body")[0]
  ).appendChild(s);
};

export default class Home extends React.Component {
  componentDidMount() {
    // When the component finishes mounting, run the stuff from atom.js and Add clicky
    createBackgroundPattern();
    Clicky();
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
          <meta
            name="twitter:image"
            content="https://philippspiess.com/this-week-in-react/twitter-card.png"
          />
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
                  <a href="https://twitter.com/PhilippSpiess/status/1050780941151588353">
                    Issue 4 — 12 Oct 2018
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/PhilippSpiess/status/1048242551998824450">
                    Issue 3 — 5 Oct 2018
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/PhilippSpiess/status/1045714338684837888">
                    Issue 2 — 28 Sept 2018
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/PhilippSpiess/status/1043186943624982529">
                    Issue 1 — 21 Sept 2018
                  </a>
                </li>
              </ol>
            </div>

            <div className="button-row">
              <a href="https://twitter.com/PhilippSpiess">
                Follow on Twitter{" "}
                <span className="button-icon">
                  <img src={twitter} width="30px" alt="🐦" />
                </span>
              </a>
              <a href="https://t.me/this_week_in_react">
                Read on Telegram{" "}
                <span className="button-icon">
                  <img src={telegram} width="30px" alt="✈️" />
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
