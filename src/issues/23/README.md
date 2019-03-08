Have a Wonderful day everyone. It’s Friday again which means it’s time for another This Week in React ⚛️.

---

## 🔎 `eslint-plugin-react-hooks` v1.5.0

The ESLint plugin `exhaustive-deps` is now in a good shape to be adopted in most projects. Install it and report back any issues! A few of the changes can be found down below.

https://twitter.com/dan_abramov/status/1103744582074990594

---

## 🐞 New DevTools Architecture Overview

Brian updated the new DevTools Architecture Overview with the goal of minimizing bridge traffic and avoid serialization overhead.

https://github.com/bvaughn/react-devtools-experimental/blob/master/OVERVIEW.md

---

## 🚀 Scheduling in React

I wrote an article about why we need Scheduling in React. Make sure to also check out [Dan’s comments](https://twitter.com/dan_abramov/status/1103768273064259590).

📝 https://philippspiess.com/scheduling-in-react/

---

## 🌏 New React Docs Localizations Live

This week, four new React documentation websites went live:

- French: [fr.reactjs.org](https://fr.reactjs.org/)
- Russian: [ru.reactjs.org](https://ru.reactjs.org/)
- Ukrainian: [uk.reactjs.org](https://uk.reactjs.org/)
- Simplified Chinese: [zh-hans.reactjs.org](https://zh-hans.reactjs.org/)

At the same time, two new localization repos where added:

- Swedish: [reactjs/sv.reactjs.org](https://github.com/reactjs/sv.reactjs.org)
- Thai: [reactjs/th.reactjs.org](https://github.com/reactjs/th.reactjs.org)

---

## 📌 ESLint: Warn about Dependencies Outside of Render Scope

Variables that are defined outside of the render scope (for example global variables like `window`) do not cause a component to re-render when they’re mutated. This doesn’t play together with the dependency array so the ESLint rule `exhaustive-deps` now warns in those cases.

https://github.com/facebook/react/pull/14990

---

## ⏳ Import Scheduler Directly

With the introduction of a general purpose scheduler, the individual React renders can now directly call the unified Scheduler APIs. Read the PR description for a good overview of the current situation!

https://github.com/facebook/react/pull/14984

---

## ⚠️ Warn When Dependencies Are Not an Array

React now warns on mounting a component that uses hooks where the dependencies are not an array.

https://github.com/facebook/react/pull/15018

---

## ⚓️ ESLint: Treat Functions That Don’t Capture Anything As Static

For the `exhaustive-deps` ESLint rule, functions that do not capture anything are now treated as static. Even if they close over a `setState()` function that comes from the `useState()` hook.

https://github.com/facebook/react/pull/14996

---

## 🎣 ESLint: Enforce Dependencies Array in `useMemo` and `useCallback`

The ESLint rule will now also enforce a dependencies array when `useMemo()` or `useCallback()` is used.

https://github.com/facebook/react/pull/15025

---

## 📌 React v16.8.4 Patch Release

This release includes a bug fix that sometimes caused a runtime error when DevTools are open

https://github.com/facebook/react/releases/tag/v16.8.4

---

## 👏 47 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week.

https://gist.github.com/philipp-spiess/e8e6445bbbdda913056bff34bcedcd37

---

With that it’s already time to wrap up another issue. See you all next week. 👋
