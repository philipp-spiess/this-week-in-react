Good day everyone! Time for an update on what happened This Week in React.

---

## 🎇 Rethinking Focus

In this GitHub issue, the team outlines a proposal that rethinks how focus is managed in React apps. Get involved!

https://github.com/facebook/react/issues/16009

---

## 🎬 SuspenseList

A new `<SuspenseList>` component can be used to coordinate the loading sequence of nested suspense boundaries. It includes [backwards and forwards](https://github.com/facebook/react/pull/15918) options and the ability to [expire rendering of the tail after a timeout](https://github.com/facebook/react/pull/15946).

https://github.com/facebook/react/pull/15902

---

## ⏱ Scheduler: Delay Option

A new option was added to the scheduler API to allow callbacks to only run after a specific delay has passed.

https://github.com/facebook/react/pull/15911

---

## ⚛️🛠 Experimental DevTools: Owner Tree

Check out this Twitter thread by Brian to learn more about the Owner Tree view coming to the new DevTools. The team is also working on [React Native support](https://twitter.com/brian_d_vaughn/status/1142194949749800960).

https://twitter.com/brian_d_vaughn/status/1144262284912582657

---

## ⏲ Scheduler: Use `isInputPending()`

[isInputPending()](https://github.com/WICG/is-input-pending), a new API to check if the browser has events enqueued, is now used inside the Scheduler behind a [feature flag](https://github.com/facebook/react/pull/15962).

https://github.com/facebook/react/pull/15911

---

## 🧪 Warn If Passive Effects Get Queued Outside of `act()`

With this change, React will now warn when effects are queued outside of an `act()` call.

https://github.com/facebook/react/pull/15763

---

## ⏰ Scheduler: `requestPaint()`

The `requestPaint()` API is used by React to signalize the Scheduler that it needs to yield to let the browser paint the page. This is necessary since the new use of `isInputPending()` would otherwise cause the Scheduler to run more low-priority work.

https://github.com/facebook/react/pull/15960

---

## 🧽 Construct Error at Invariant Call Site

Invariant Errors are now constructed directly at call site to remove one level of the call stack.

https://github.com/facebook/react/pull/15877

---

## 🔎 Support for ESLint 6.0.0

Thanks to a contribution by [Thomas Broyer](https://github.com/tbroyer), the ESLint plugin now works with 6.0.0

https://github.com/facebook/react/pull/15974

---

## 🐌 Slightly Improve Performance of Hydration

By avoiding loading a property from the same node multiple times in a row, hydration is now a little bit faster.

https://github.com/facebook/react/pull/15998

---

## 🙅‍♀️ Fix Error Logging in `getDerivedStateFromProps`

This PR fixes a bug in `getDerivedStateFromError` where errors are not logged when an error occurs.

https://github.com/facebook/react/pull/15797

---

## 🎇 React Flare Updates

These changes (and more) have been made to React Flare:

- [React Native Fabric Support.](https://github.com/facebook/react/pull/15887)
- [useEvent()](https://github.com/facebook/react/pull/15927) and [responder specific](https://github.com/facebook/react/pull/15953) hooks were added.
- [Event targets](https://github.com/facebook/react/pull/16011) were removed.

---

## 🔄 React Fresh Updates

- [Track Mounted Roots via DevTools Hook.](https://github.com/facebook/react/pull/15928)
- The babel plugin now [throws when applied in production](https://github.com/facebook/react/pull/15939).
- Require-like calls are [no longer considered to be HOCs](https://github.com/facebook/react/pull/15940).

---

## 👏 31 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week.

https://git.io/fjo2A

---

And with that I wish you a wonderful weekend. Until next week! 👋
