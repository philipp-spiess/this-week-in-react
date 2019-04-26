Hello beautiful people! After a quick break, we’re back with the latest updates from This Week in React ⚛️.

---

## 🙌 Nicolas Joins the React Core Team

Nicolas Gallagher ([necolas](https://github.com/necolas)) has joined the React Core team. He’s the author of [React Native for Web](https://github.com/necolas/react-native-web) and has worked at Twitter in the past. He is now working on the experimental event API that brings high level interactions to the Web.

https://twitter.com/necolas/status/1120399551880413185

---

## 🥅 React Flare: Add `FocusScope`

`FocusScope` was added to the Experimental Event API. It allows trapping focus inside the scope of the event component so that pressing tab at the last element will jump to the first element inside the scope.

https://github.com/facebook/react/pull/15487

---

## 🌎 React Docs Localizations Updates

Two new localization repositories were added:

- Mongolian: [reactjs/mn.reactjs.org](https://github.com/reactjs/mn.reactjs.org)
- Catalan: [reactjs/ca.reactjs.org](https://github.com/reactjs/ca.reactjs.org)

The Greek documentation websites went online:

- [el.reactjs.org](https://el.reactjs.org/)

And the Ukrainian localization is complete:

https://uk.reactjs.org/

---

## 🔥 Experimental React Flare Updates

Besides the `FocusScope` addition, there were numerous other updates to the Experimental Event API. The core APIs are now [better documented](https://github.com/facebook/react/pull/15505), the [propagation system was reworked](https://github.com/facebook/react/pull/15462), event components now have a [mount phase](https://github.com/facebook/react/pull/15480), and more.

https://github.com/facebook/react/issues/15257

---

## 🐞 Experimental DevTools Updates

Continuing the work on the new DevTools, the last two week bring [restoring of selections between reloads](https://github.com/bvaughn/react-devtools-experimental/pull/215), [multiple UI changes](https://twitter.com/brian_d_vaughn/status/1119997560066756613), new [tooltips](https://github.com/bvaughn/react-devtools-experimental/pull/205), and more.

https://github.com/bvaughn/react-devtools-experimental

---

## 📹 Add `disablePictureInPicture` Attribute Support

React now properly sets the `disablePictureInPicture` attribute for `<video>` elements thanks to a contribution from Radu-Sebastian Amarie ([eek](https://github.com/eek)).

https://github.com/facebook/react/pull/15334

---

## 🖼 React Native: View Inside Text

After being supported in both iOS and Android, React Core now also supports nesting Views inside Text. Thank you, Adam Comella ([rigdern](https://github.com/rigdern)).

https://github.com/facebook/react/pull/15464

---

## 🏗 Stop Tracking Bundle Sizes in Repo

A snapshot of the latest bundle sizes will not automatically be stored during the CI run. This makes sure that sizebot compares against the correct sizes.

https://github.com/facebook/react/pull/15404

---

## ⏳ Measure Callback Timeout Relative to Current Time

This PR fixes an issue with the new ReactFiberScheduler by measuring the callback timeout relative to the current time.

https://github.com/facebook/react/pull/15479

---

## 👏 47 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week.

https://gist.github.com/philipp-spiess/ad2040ea218a4d63d75c9542adde20bd

---

Thank you all for following. If you like this newsletter, make sure to share it. See you next week!
