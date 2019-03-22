Hello wonderful people! It's Friday again and you all know what this means ⚛️.

---

## 🔥 `React.warn()` and `React.error()`

This PR adds two new APIs to React: `React.warn()` and `React.error()`. These will log to the console and include a component stack. Useful for providing more detailed error messages in third party packages.

https://github.com/facebook/react/pull/15170

---

## 🎉 Stable Profiler API

The profiler API, added about 10 month ago, is now marked as stable.

https://github.com/facebook/react/pull/15172

---

## 👋 Deprecate Module Pattern Components

Module pattern components take a fairly complex code path in React but are barely used outside of a few special places (like Relay Classic). This PR deprecates this pattern as also outlined in the [RFC about createElement changes](https://github.com/reactjs/rfcs/pull/107).

https://github.com/facebook/react/pull/15145

---

## ➡️ Shallow Renderer: Support `React.memo()`

`React.memo()` can now be used in the shallow renderer.

https://github.com/facebook/react/pull/14816

---

## 🌍 React Docs Localizations Updates

Simplified Chinese is now complete:

- [zh-hans.reactjs.org](https://zh-hans.reactjs.org/)

The Italian documentation websites went live:

- [it.reactjs.org](https://it.reactjs.org/)

In addition to that, we’re happy to welcome the Kannada localization repository.

https://github.com/reactjs/kn.reactjs.org

---

## 💊 Safely Access Cross-Origin Iframes

This contribution fixes an issue in Safari where a focused element within a cross-origin iframe caused an error to be always logged.

https://github.com/facebook/react/pull/15099

---

## ⚠️ ESLint: Warn About `setState` Directly in Dep-less `useEffect`

The ESLint rule for hooks now warns when `setState` is called without defining dependencies. This could easily lead to loops. This change is already out in `eslint-plugin-react-hooks@1.6.0`.

https://github.com/facebook/react/pull/15184

---

## 🏠 Compile Invariant Directly to Throw Expressions

React uses `invariant()` to assert correct behavior. In production, the error message is stripped out to keep the bundle size down. This PR reworks how this is handled.

https://github.com/facebook/react/pull/15071

---

## 🌅 Shallow Renderer: Implement `setState` for Hooks

The shallow renderer now supports calling the `setState` updater of `useState()` hooks outside of the render function.

https://github.com/facebook/react/pull/15120

---

## 📖 Docs: How Can I Measure a DOM Node?

The React Hooks FAQs now contain a new entry with information on how to best measure DOM nodes.

https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node

---

## 🖱 Internal Event API Experiments Updates

While working on internal experiments for a new event API, the Core team added more [scaffolding](https://github.com/facebook/react/pull/15168), a new [react-events package](https://github.com/facebook/react/pull/15150), and logic for listening to event responders.

https://github.com/facebook/react/pull/15168

---

## ⛑ Add Feature Flag to Disable Yielding

A new feature flag was added that allows debug builds to disable yielding in Concurrent Mode.

https://github.com/facebook/react/pull/15119

---

## 📌 React v16.8.5 Patch Release

This release includes a improved warnings and support for newer features in the shallow renderer.

https://github.com/facebook/react/releases/tag/v16.8.5

---

## 👏 29 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week.

https://gist.github.com/philipp-spiess/e8e6445bbbdda913056bff34bcedcd37

---

If you like the newsletter, make sure to share it with your friends and coworkers. Thank you and see you next week. 👋
