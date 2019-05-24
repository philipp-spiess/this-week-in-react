Bonjour everyone! It’s time for another issue of This Week in React.

---

## 🔄 React Fresh

[![Example of React Fresh: A component with hooks is edited while the change appears in the app. State is preserved.](https://gallery.mailchimp.com/155aa5558694a008de40fe987/images/6943ac1f-7dbe-4ee7-a336-77d708ba342a.gif)](https://twitter.com/dan_abramov/status/1126948870137753605?s=20)

The team started to work on React Fresh, a new generation of hot reloading. Changes include initial [scaffolding](https://github.com/facebook/react/pull/15619), [infrastructure](https://github.com/facebook/react/pull/15698), and [Babel plugin implementation](https://github.com/facebook/react/pull/15711)

Check out this Tweet by Dan Abramov for a teaser and some insights:

https://twitter.com/dan_abramov/status/1126948870137753605?s=20

---

## 🛠 Inform DevTools of Commit Priority Level

React now exposes information about the commit priority level to DevTools.

https://github.com/facebook/react/pull/15664

---

## 🧪 Flush Only on Exiting Outermost `act()`

`act()` will now only flush on exiting the outermost callback. This changes the behavior of nested `act()`s.

https://github.com/facebook/react/pull/15682

---

## 🇭🇺 Hungarian Localization

You can now help translate the official React documentations to Hungarian.

https://github.com/reactjs/reactjs.org

---

## 👷‍♀️ Parallelize CircleCI Jobs Using Workflows

The React repository CI tests now using the CircleCI Workflows feature. This improves status reporting in GitHub.

https://github.com/facebook/react/pull/15704

---

## 🎇 React Flare Updates

This week also brings more work on React Flare. There are updated interactiveUpdates [flushing heuristics](https://github.com/facebook/react/pull/15687), `getAbsoluteBoundingClientRect` now accounts for [fixed elements](https://github.com/facebook/react/pull/15707), `getEventCurrentTarget` now uses the [fiber tree](https://github.com/facebook/react/pull/15708), and more.

https://github.com/facebook/react/issues/15257

---

## 🚧 Set Up Cron Job for Fuzz Tester

The fuzz tester is now run on CI periodically with a randomly generated seed.

https://github.com/facebook/react/pull/15718

---

## 🐛 Fix Missing Return Pointer Assignment

This change fixes an issue in the fiber code by assign the missing `return` pointer correctly.

https://github.com/facebook/react/pull/15700

---

## 🛤 Path-Based Imports for RN Renderer

React Native is moving to path-based imports from the globally-unique-named Haste system.

https://github.com/facebook/react/pull/15604

---

## 🇪🇺 ReactEurope Recap

I’m writing today’s newsletter from ReactEurope in Paris and there are so many amazing talks. You can catch up by looking at my Twitter thread.

https://twitter.com/PhilippSpiess/status/1131457729250385921

---

## 👏 16 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week.

https://git.io/fjBPf

---

Thank you for following. Don’t forget to share! 👋
