import React from 'react'
import { Helmet } from "react-helmet"
import './style.css'
import twitter from '../images/twitter.svg'
import ReactSVG from '../images/react.svg'
import { createBackgroundPattern } from "./atoms.js"

class IndexPage extends React.Component {

  componentDidMount() {
    // When the component finishes mounting, run the stuff from script.js

    createBackgroundPattern()
    }

  render() {
    return (
      <div>
        <Helmet>
          <title>This Week In React</title>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@PhilippSpiess" />
          <meta name="twitter:title" content="This Week In React ⚛️" />
          <meta name="twitter:description" content="Weekly coverage of interesting pull requests, discussions, and RFCs around React Core and React DOM." />
          <meta name="twitter:image" content="https://philippspiess.com/this-week-in-react/twitter-card.png" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,700" rel="stylesheet"></link>
        </Helmet>
        <div aria-hidden="true" className="atoms"></div>
          <div className="main">
            <section>
              <h1>This Week In React <img src={ ReactSVG } width= { "60px" }  alt={ "⚛️" } id="logo" /></h1>
              <h2>Weekly coverage of interesting pull requests, discussions, and RFCs around React Core and React DOM. Coming out every Friday.</h2>
              <div className="issues">
                <ol>
                  <li><a href="https://twitter.com/PhilippSpiess/status/1043186943624982529">Issue 1 — 21 Sept 2018</a></li>
                  <li><a href="https://twitter.com/PhilippSpiess/status/1045714338684837888">Issue 2 — 28 Sept 2018</a></li>
                </ol>
              </div>

              <a className="button" href="https://twitter.com/PhilippSpiess">Follow on Twitter <span className="button-icon"><img src={ twitter } width={ "30px" } alt={ "🐦" } /></span></a>
              <a className="button button-right" href="https://eepurl.com/dHV-3X">Subscribe Now <span className="button-icon" role="img" aria-label="Letter">💌 </span></a>

              <h3>Made with <span role="img" aria-label="Hearts">💕</span> by <a href="/">@PhilippSpiess</a></h3>
            </section>
          </div>

      {/* <script type="text/javascript" src="./initial.js"></script> */}

      
      </div>
    )
  }
}

export default IndexPage
