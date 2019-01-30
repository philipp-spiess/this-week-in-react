It’s time for your weekly list of ~~[emojis](https://mobile.twitter.com/PhilippSpiess/status/1060907216360914945)~~ uhm, I mean React insights. This weeks brings many interesting things, so let’s not waste time and dive right in:

---

## 🐞 Debug Tools Package for Introspection of Hooks

To make it easier to debug React Hooks, the team added a new experimental package for debugging React renderers.

https://github.com/facebook/react/pull/14085

---

## 🧠 A Metaphor for Concurrent React

Dan wrote an excellent metaphor for the upcoming concurrent mode in React. Check out his Twitter thread if you’re curious about the mental model behind this upcoming feature.

https://twitter.com/dan_abramov/status/1059059596835340288

---

## 🤞 Avoid Double Commit by Re-rendering Immediately

To fix issues when using Suspense in non-concurrent mode, we now render the suspended and the fallback children within a single commit. Andrew also posted a great [summary of the PR](https://github.com/facebook/react/pull/14083#issuecomment-436045474).

https://github.com/facebook/react/pull/14083

---

## 🗄 Suspense Fuzz Tester

A new fuzz tester was added to improve the reliability of suspense. It works by generating random trees of React elements, with some elements that suspend and some that don’t.

https://github.com/facebook/react/pull/14147

---

## ⏳ Add a Low Priority to the Scheduler

Nathan Schloss ([n8schloss](https://github.com/n8schloss)) made a PR to add another priority level to the experimental Scheduler package. This new priority will still resolve but only after everything else. This is useful for logging or sending data back to the server.

https://github.com/facebook/react/pull/14155

---

## 🦄 Unify Hooks’ Second Argument Comparison

Thanks to Mateusz Burzyński ([Andarist](https://github.com/Andarist)) we now also have development warnings in the server renderer implementation for the second argument comparison implementation of hooks.

https://github.com/facebook/react/pull/14036

---

## ✨ Warn for Bad `useEffect` Return Value

The cleanup function for the `useEffect` hook must always be returned synchronously, something that’s not possible to do when an async function is used. We now warn in such cases.

https://github.com/facebook/react/pull/14069

---

## 🌁 Fix Crash During Server Render in React 16.6

React can be loaded into many JavaScript runtimes. Thanks to Tiago Nunes ([tnunes](https://github.com/tnunes)), it can now again be loaded into environments without `setTimeout` (e.g. ClearScript for .NET).

https://github.com/facebook/react/pull/14103

---

## 🛠 Support `React.memo` and Timed-out Suspense Trees in Dev Tools

The official React Developer Tools browser extension was updated to support some of the newly released React features.

https://github.com/facebook/react-devtools/pull/1207

---

## 🎉 React 16.6.1 Patch Release

The latest patch release brings multiple bug fixes related to the recently released Suspense features. We can also expect a new alpha release [soon](https://github.com/facebook/react/issues/14172#issuecomment-437376582).

https://github.com/facebook/react/releases/tag/v16.6.1

---

## 👏 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [reactjs.org](https://github.com/reactjs/reactjs.org) repositories every week. Thank you this week to: Dillon Mulroy ([dmmulroy](https://github.com/dmmulroy)), Einar Paul Qvale ([einarq](https://github.com/einarq)), [locknono](https://github.com/locknono), Marcelo Jorge Vieira ([marcelometal](https://github.com/marcelometal)), Nadav Kaner ([nadavkaner](https://github.com/nadavkaner)), Nathan Schloss ([n8schloss](https://github.com/n8schloss)), Sergey Falinsky ([falinsky](https://github.com/falinsky)), and Tiago Nunes ([tnunes](https://github.com/tnunes)).

---

That was This Week in React ⚛️. You can support this newsletter by sharing the link to the website ([this-week-in-react.org](https://this-week-in-react.org)) and [Twitter](https://twitter.com/PhilippSpiess). Stay tuned for more updates on the future of React.
