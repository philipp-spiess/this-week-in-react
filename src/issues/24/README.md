I’m thrilled to present you the latest This Week in React ⚛️. Let’s dive right in.

---

## 🍱 A Complete Guide to useEffect

Dan wrote another extensive blog post which goes into the nitty gritty details of the `useEffect` hook. Highly recommended!

https://overreacted.io/a-complete-guide-to-useeffect/

---

## ⚠️ Warn for `javascript:` URLs in DOM Sinks

`javascript:` URLs in DOM sinks are a possible attack vector for XSS attacks. This PR adds a warning when using those for the remainder of 16.x releases.

https://github.com/facebook/react/pull/15047

---

## 📱 Infrastructure for Passive/Non-Passive Event Experiments

To explore future APIs, this PR is adding infrastructure to allow registration for passive/non-passive events in the event system. Please note that this is currently in the experimentation phase and it might take some time until these APIs are available.

https://github.com/facebook/react/pull/15036

---

## 🌎 React Docs Localizations Update

Five new React documentation websites went live:

- German: [de.reactjs.org](https://de.reactjs.org/)
- Hebrew: [he.reactjs.org](https://he.reactjs.org/)
- Korean: [ko.reactjs.org](https://ko.reactjs.org/)
- Polish: [pl.reactjs.org](https://pl.reactjs.org/)
- Turkish: [tr.reactjs.org](https://tr.reactjs.org/)

These websites are now complete:

- Portuguese (Brazil): [pt-br.reactjs.org](https://pt-br.reactjs.org/)
- Russian: [ru.reactjs.org](https://ru.reactjs.org/)

In addition to that, we’re happy to welcome the Georgian localization repository.

https://github.com/reactjs/ka.reactjs.org

---

## 🚀 Run Persistent Mode Tests in CI

This PR adds a new command to run persisted mode tests in CI as well.

https://github.com/facebook/react/pull/15029

---

## ⚓️ Improve Hooks FAQ About Dependencies

To address some frequently asked questions about the dependencies array used for some hooks, this PR adds new content to the documentation.

https://github.com/reactjs/reactjs.org/pull/1815

---

## 🏞 Partial Hydration: Render Client-only Content at Normal Priority

This change is improving handling of partially hydrated HTML of server-rendered suspense boundaries.

https://github.com/facebook/react/pull/15061

---

## 🧪 Experimental Event API Scaffolding

To experiment with new event APIs, this PR adds some scaffolding to React and adds new Event primitives.

https://github.com/facebook/react/pull/15108

---

## 👏 41 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week.

https://gist.github.com/philipp-spiess/0049cf926f060cbae5a15fd59520f475

---

Thank you for following along and see you next week. 👋
