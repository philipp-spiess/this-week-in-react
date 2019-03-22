Hello wonderful people! It's Friday again and you all know what this means ⚛️.

🔥 React.warn()`and`React.error()
🎉 Stable Profiler API
👋 Deprecate Module Pattern Components
👀 and more!

👉💌 Subscribe at this-week-in-react.org and read here 👇

---

🔥 This PR adds two new APIs to React: React.warn() and React.error().

These will log to the console and include a component stack.

Super useful for providing more detailed error messages in third party packages!

https://github.com/facebook/react/pull/15170

---

🎉 The profiler API, added about 10 month ago, is now marked as stable.

https://github.com/facebook/react/pull/15172

---

👋 Module pattern components take a fairly complex code path in React but are barely used outside of a few special places.

This PR deprecates this pattern as also outlined in the RFC about createElement changes: https://github.com/reactjs/rfcs/pull/107.

https://github.com/facebook/react/pull/15145

---

➡️ React.memo() can now be used in the shallow renderer.

https://github.com/facebook/react/pull/14816

---

🌍 React Docs Localizations Updates

Simplified Chinese is now complete: https://zh-hans.reactjs.org/

The Italian documentation websites went live: https://it.reactjs.org/

In addition to that, we’re happy to welcome the Kannada localization repository: https://github.com/reactjs/kn.reactjs.org

---

💊 This contribution fixes an issue in Safari where a focused element within a cross-origin iframe caused an error to be always logged.

https://github.com/facebook/react/pull/15099

---

⚠️ The ESLint rule for hooks now warns when setState is called without defining dependencies. This could easily lead to loops.

This change is already out in eslint-plugin-react-hooks@1.6.0.

https://github.com/facebook/react/pull/15184

---

🏠 React uses invariant() to assert correct behavior. In production, the error message is stripped out to keep the bundle size down.

This PR reworks how this is handled!

https://github.com/facebook/react/pull/15071

---

🌅 The shallow renderer now supports calling the setState updater of useState() hooks outside of the render function.

https://github.com/facebook/react/pull/15120

---

📖 The React Hooks FAQs now contain a new entry with information on how to best measure DOM nodes.

https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node

---

🖱While working on internal experiments for a new event API, the Core team added more scaffolding a new react-events package, and logic for listening to event responders.

https://github.com/facebook/react/pull/15168
https://github.com/facebook/react/pull/15150
https://github.com/facebook/react/pull/15168

---

⛑ A new feature flag was added that allows debug builds to disable yielding in Concurrent Mode.

https://github.com/facebook/react/pull/15119

---

📌 React v16.8.5 Patch Release

This release includes a improved warnings and support for newer features in the shallow renderer.

https://github.com/facebook/react/releases/tag/v16.8.5

---

👏 This week, 29 people made their first commit in one of the React repositories.

Thank you to all these amazing people that push React forward every week. You are incredible. 💕

https://git.io/fjJmX

---

If you like the newsletter, make sure to share it with your friends and coworkers.

Thank you and see you next week.

👋
