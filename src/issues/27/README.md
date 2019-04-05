Hello wonderful people! It’s Friday again and you all know what this means ⚛️.

---

## 💙 Rachel Nabors Joining the React Core Team

Rachel Nabors ([rachelnabors](https://github.com/rachelnabors)) will join the React Core team in May and will be writing docs, building demos, and tending the community. I can’t be more excited!

https://twitter.com/rachelnabors/status/1112699525528018945

---

## 🎉 await act(async () => ...)

The recently added `act` test helper now has support for async functions allowing you await within its callback.

https://github.com/facebook/react/pull/14853

---

## 🔥 Experimental React Flare Updates

React Flare (the current name for the internal event API experiments) got a lot more updates this week. Check out this umbrella ticket for an overview of the current status.

_Note: This idea is currently in early experimentation phase and might be discarded altogether._

https://github.com/facebook/react/issues/15257

---

## ⏱ Rewrite ReactFiberScheduler for Better Integration With Scheduler Package

This PR adds a new `ReactFiberScheduler` implementation (currently behind a feature flag) that better integrations with the Scheduler `package`.

https://github.com/facebook/react/pull/15151

---

## 🕰 Remove maxDuration

The `maxDuration` property of `React.Suspense`, used in Concurrent Mode, was removed. A heuristics with a different mechanism will be used in the future.

https://github.com/facebook/react/pull/15272

---

## 🌏 React Docs Localizations Updates

Italian is now complete:

- [it.reactjs.org](https://it.reactjs.org/)

And the Traditional Chinese documentation website is now online:

https://zh-hant.reactjs.org/

---

## 🔧 Fix a Crash in Suspense With findDOMNode

The Core team worked on a fix for a crash when using `findDOMNode` in a suspended component.

https://github.com/facebook/react/pull/15312

---

## 👏 26 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week.

https://gist.github.com/philipp-spiess/51bfed9fe129d73fa7a8bb69170d0942

---

And with that we’re ready for a great weekend. See you next week! 👋
