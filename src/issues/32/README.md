Great Friday everybody! It’s time for This Week in React.

---

## 🔋 Batched Mode and `ReactDOM.unstable_createSyncRoot`

Batched Mode is a new unstable React mode that ensures that updates are always batched while still doing all rendering without interruption. It can be opted in with the new [ReactDOM.unstable_createSyncRoot](https://github.com/facebook/react/pull/15504) API.

https://github.com/facebook/react/pull/15502

---

## 🌀 Add `withSuspenseConfig` API

The new `unstable_withSuspenseConfig()` API can be used to schedule updates with a different suspense config. This can be used to implement busy spinners.

https://github.com/facebook/react/pull/15593

---

## 👋 Remove `<React.unstable_ConcurrentMode />`

Partial opt-in into Concurrent Mode creates edge cases that are not trivial to support. Instead, the recommended approach is to opt in the entire root.

https://github.com/facebook/react/pull/15532

---

## 🧪 Flush the Scheduler Manually inside `act()`

With this PR, the `act()` test helper is now manually flushing the Scheduler using `Scheduler.unstable_flushWithoutYielding` internally.

https://github.com/facebook/react/pull/15591

---

## 🕹 Fix Serial Passive Effects

This change makes sure that passive effects are flushed before discrete event handlers are called.

https://github.com/facebook/react/pull/15650

---

## ⏲ Remove Scheduler from React Package Dependencies

The isomorphic `react` package no longer depends directly on the `scheduler`. Now, only the individual renderers (e.g. `react-dom`) do.

https://github.com/facebook/react/pull/15616

---

## 🙅‍♀️ Invariant When Committing Wrong Tree

This change adds a new invariant that throws if the new tree is the same as the old one.

https://github.com/facebook/react/pull/15517

---

## 🎇 React Flare Updates

Another week of great improvements for the experimental event API that the team at Facebook is working on. `preventDefault` now work for [nested updates](https://github.com/facebook/react/pull/15633), a pointerType [was added to to Focus events](https://github.com/facebook/react/pull/15645), `getFocusableElementsInScope` handles [suspended trees](https://github.com/facebook/react/pull/15651), and more.

https://github.com/facebook/react/issues/15257

---

## 🛑 Bail out of Updates in Offscreen Trees

With this change, sync updates inside hidden trees are now delayed when using Concurrent Mode.

https://github.com/facebook/react/pull/15666

---

## 🎫 Upcoming GitNation Events

While we are here, I want to point out a few of the upcoming events from the fantastic folks at [GitNation](https://gitnation.org/). If you have the chance, I recommend checking out one of their conferences this year:

- [JS Nation](https://jsnation.com/), Amsterdam, June 5–7
- [React Advanced](https://reactadvanced.com/), London, Oct 25
- [React Day Berlin](https://reactday.berlin/), Berlin, Dec 6

---

## 👏 20 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week.

https://git.io/fj8OX

---

And with that we are off to a great weekend! Next week, I will be at [ReactEurope](https://www.react-europe.org/) in Paris. If you see me, come say hi! 👋
