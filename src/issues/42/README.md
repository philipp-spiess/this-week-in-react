Hey everyone! After a longer than usual break (sorry for that!) we’re back with the latest of React and React DOM.

---

## 🎉 Introducing Concurrent Mode (Experimental)

This week, the React team released the first documentation for Concurrent Mode at the React Conf in Las Vegas. Make sure to take some time to read through everything in detail.

https://reactjs.org/docs/concurrent-mode-intro.html

---

## 🧪 React Prereleases

All React packages are now also available in a prerelease channel. These special builds will allow you to test upcoming versions of React and help the team iron out bugs in experimental features.

https://reactjs.org/blog/2019/10/22/react-release-channels.html

---

## ✨ useDeferredValue and useTransition

Two new hooks were added to help with Concurrent React. Check out the docs: [useDeferredValue](https://reactjs.org/docs/concurrent-mode-patterns.html#deferring-a-value) and [useTransition](https://reactjs.org/docs/concurrent-mode-patterns.html#transitions).

https://github.com/facebook/react/pull/17058

---

## 🎇 React Interaction Updates

More updates on the experimental React event system:

- [FocusTable tabScope Handling and tabIndex Control](https://github.com/facebook/react/pull/16922)
- [Add Tab Handling to FocusList](https://github.com/facebook/react/pull/16958)
- [Repurpose React Accessibility Modules](https://github.com/facebook/react/pull/16997)
- [Add FocusTable colSpan Support](https://github.com/facebook/react/pull/17019)
- [Modify Scope Query Mechanism](https://github.com/facebook/react/pull/17095)
- [Add onFocusWithin Event to FocusWithin Responder](https://github.com/facebook/react/pull/17115)

---

## ⚠️ Remove IIFE Wrappers From Dev Invariant Checks

This change updates the error transform that replaces invariant() calls with an `if` statement to not need an IIFE wrapper anymore.

https://github.com/facebook/react/pull/16963

---

## 🖱 Fix mouseenter Handlers Firing Twice

This PR fixes an issue with `mouseenter` events firing twice in certain cases.

https://github.com/facebook/react/pull/16928

---

## 👉 Selective Hydration

Selective Hydration, a smarter way to hydrate SSR rendered apps, is being actively worked on:

- [ReactDOM.unstable_scheduleHydration(node)](https://github.com/facebook/react/pull/17004)
- [Prioritize the Last Continuous Target](https://github.com/facebook/react/pull/16937)
- [Increase Priority for Non-synchronous Discrete Events and Retries](https://github.com/facebook/react/pull/16935)

---

## 🧹 Upgrade to Jest 24

React is now on the latest version of Jest again!

https://github.com/facebook/react/pull/15778

---

## 🤫 Allow Suspense Mismatch on the Client to Silently Proceed

Silently try to hydrate bad mismatches instead of gracefully regenerate the content on the client.

https://github.com/facebook/react/pull/16943

---

## 🐛 DevTools: Trace Updates

This diff adds the Trace Updates feature (for DOM only so far) that can be used to highlight updated elements in the browser.

https://github.com/facebook/react/pull/16989

---

## 👋 Remove createBatch Experiment

The idea of this API was to coordinate an update to a root with its imperative container in a multiple root React app.

https://github.com/facebook/react/pull/17035

---

## 🚀 React 16.11.0

The main change of this release is that the `unstable_` prefixed concurrent APIs are now removed from the stable release since they are now available on the experimental release.

https://github.com/facebook/react/releases/tag/v16.11.0

---

## ➡️ Rename createSyncRoot to createBlockingRoot

This avoids confusion with the Legacy mode.

https://github.com/facebook/react/pull/17165

---

## 👏 85 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react) or [documentation](https://github.com/reactjs/reactjs.org) repository every week.

https://git.io/Je0jh

---

And with that it’s time to wrap up again! If you’re having no plans for today, check out the [React Conf live stream](https://conf.reactjs.org) starting at 9am PT (6pm CEST).
