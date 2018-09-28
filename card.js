const ogs = require("open-graph-scraper");
const fs = require("fs");
const md = require("markdown-it")({
  linkify: true
});
const truncate = require("truncate");

const issue = process.argv[2];
const date = process.argv[3];
if (!issue) {
  console.error(`Invalid issue number passed as parameter: ${url}\n`);
  console.error('Usage: \n  node card.js 1 "21 Aug 2018"');
  process.exit(1);
}
if (!date) {
  console.error(`Invalid date passed as parameter: ${url}\n`);
  console.error('Usage: \n  node card.js 1 "21 Aug 2018"');
  process.exit(1);
}

const rawFile = fs.readFileSync(`./issues/${issue}/README.md`, {
  encoding: "UTF-8"
});
const tweets = rawFile.split("---").map(s => s.trim());

let cards = [];

let calledTimes = 0;
function done() {
  if (calledTimes < tweets.length - 1) {
    calledTimes++;
    return;
  }

  fs.writeFileSync(`./issues/${issue}/email.html`, createEmail(cards));
  fs.writeFileSync(`./issues/${issue}/index.html`, createWebsite(cards));

  process.exit(0);
}

tweets.forEach((tweet, index) => {
  const endsWithUrl = tweet
    .split(/\s+/)
    .slice(-1)[0]
    .startsWith("http");

  if (!endsWithUrl) {
    cards[index] = createCard(index, tweet);
    done();
  } else {
    const url = tweet.split(/\s+/).slice(-1)[0];
    ogs({ url, timeout: 5000 }, function(error, ogsResults) {
      if (error) {
        console.error("Error:", error, ogsResults);
        process.exit(1);
      }

      const text = tweet.replace(url, '').trim();
      cards[index] = createCard(index, text, url, ogsResults);

      done();
    });
  }
});

function simpleMarkdown(text) {
  return md.render(text);
}

const GITHUB_TITLE_SEPARATOR = /(.*)\ ·\ (Pull\ Request|Issue)\ (.*)/;
function createCard(index, text, url, openGraphData) {
  let og = "";

  if (openGraphData) {
    const {
      data: {
        ogSiteName,
        ogTitle,
        ogUrl,
        ogDescription,
        ogImage: { url: imageUrl }
      }
    } = openGraphData;

    let title;
    const isGitHubTitle = ogTitle.match(GITHUB_TITLE_SEPARATOR);

    if (!isGitHubTitle) {
      title = `
        <h2 style="font-family:Helvetica,sans-serif;font-size: 16px;font-weight:bold;padding:0;margin:5px;">${ogTitle}</h2>
      `.trim();
    } else {
      const [_, h1, __, h2] = isGitHubTitle;

      title = `
        <h2 style="font-family:Helvetica,sans-serif;font-size: 16px;font-weight:bold;padding:0;margin:5px;">${h1}</h2>
        <h3 style="font-family:Helvetica,sans-serif;font-size: 14px;font-weight:bold;padding:0;margin:5px;">${h2}</h3>
      `.trim();
    }

    // Some open graph websites also use truncate (GitHub) so we remove the ... first in case we end
    // up with more than three dots.
    const truncatedDescription = truncate(
      ogDescription.replace("...", ""),
      110
    );

    og = `
      <div style="margin: 10px 0; padding: 0; border: 1px solid #ccc;border-radius: 5px;">
        <table style="margin: 0; padding: 0;">
          <tr style="margin: 0; padding: 0">
            <td width="135" style="margin: 0; padding: 0">
              <a href="${ogUrl}" style="display: block;">
                <img src="${imageUrl}" width="135" style="margin:5px; display: block;" /></a>
            </td>
            <td width="475" style="margin: 0; padding: 0">
              ${title}
              <p style="font-family:Helvetica,sans-serif;font-size: 14px;padding:0;margin:5px;">${truncatedDescription}</p>
              <a href="${url}" style="font-family:Helvetica,sans-serif;font-size: 14px;padding:0;margin:5px;">${url}</a>
            </td>
          <tr>
        </table>
      </div>
    `.trim();
  }

  return `
    <div style="width:560px;margin: ${index === 0 ? "0" : "30px"} 0; ${
    index === tweets.length - 1 ? "margin-bottom: 20px;" : ""
  } padding: 0; ">
      <div style="font-family:Helvetica,sans-serif;font-size: 16px; margin: 0; padding: 0;">
        ${simpleMarkdown(text)}
      </div>
      ${og}
    </div>
  `.trim();
}

const template = fs.readFileSync("./email-template.html", { encoding: "UTF-8" });
function createEmail(cards) {
  const cardsHtml = cards.join("\n");
  let html = template.replace("PASTE HTML HERE", cardsHtml);
  html = html.replace("Issue 1 – 21 Aug 2018", `Issue ${issue} – ${date}`);
  return html;
}

function createWebsite(cards) {
  const cardsHtml = cards.join("\n");
  let html = template.replace("PASTE HTML HERE", cardsHtml);
  html = html.replace(
    "https://gallery.mailchimp.com/155aa5558694a008de40fe987/images/6441b0d8-bf34-4a9a-bed3-657beb2c5c9b.png",
    "./issue.png"
  );
  html = html.replace(
    `<a href="*|ARCHIVE|*" target="_blank">Open in the browser</a>`,
    `<a href="/" target="_blank">Back to other issues</a>`
  );
  html = html.replace("Issue 1 – 21 Aug 2018", `Issue ${issue} – ${date}`);

  return html;
}
