import "./App.css";
import { createBackgroundPattern } from "../util/atoms.js";
import { clicky } from "../util/clicky.js";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.png";
import React from "react";
import ReactSVG from "../images/react.svg";
import TelegramSVG from "../images/telegram.svg";
import TwitterSVG from "../images/twitter.svg";
import TwitterCardPNG from "../images/twitter-card.png";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>This Week In React</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

      <div class="container">
        <div class="blue" />
        <div class="beige" />
        <div class="orange" />
      </div>
    </div>
  );
}
