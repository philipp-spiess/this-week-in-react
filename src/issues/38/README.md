Great Friday everyone! Time for some updates around React and React DOM.

---

## 📌 useSubscription Hook

Similar to the `createSubscription` helper, the React team now maintains a `useSubscription` hook.

https://github.com/facebook/react/pull/15022

---

## 🎇 React Flare Updates

- [🔥 Redesign Core Event System](https://github.com/facebook/react/pull/16163)
- [Keyboard Responder](https://github.com/facebook/react/pull/16204)
- [Input Responder](https://github.com/facebook/react/pull/16148)
- [FocusWithin Responder](https://github.com/facebook/react/pull/16152)

---

## 🎬 SuspenseList: tail="hidden"

A new tail="hidden" option was added to SuspenseList that hides all rows in the tail.

https://github.com/facebook/react/pull/16024

---

## 🛠 DevTools: Automatic Component Stacks

The upcoming DevTools v4 release will add an option to append a component stack when warnings or errors are logged.

https://twitter.com/brian_d_vaughn/status/1151552058731847680

---

## 🦄 Unify Deprecated/Unsafe Lifecycle Warnings

This PR reworks some of the messages behind the deprecated or unsafe lifecycle warnings.

https://github.com/facebook/react/pull/16103

---

## 🌀 Add suspenseCallback for Runtime Tracing of Loading States

When the new feature flag is enabled, the `suspenseCallback` property on a suspense boundary will be called during the commit phase.

https://github.com/facebook/react/pull/16134

---

## 🌍 React Docs Localizations

The Arabic localization is now online.

https://ar.reactjs.org/

---

## ⚠️ Warn When Using DefaultProps on Function Component

This change adds a warning when using `defaultProps` on a function component as part of the [createElement changes](https://github.com/reactjs/rfcs/pull/107).

https://github.com/facebook/react/pull/16210

---

## 🧽 Clean Up nextEffect Pointer

This changes avoids the `nextEffect` pointer of live fiber nodes to point to unmounted fiber nodes.

https://github.com/facebook/react/pull/16115

---

## 🔄 Fresh: Track Unrecoverable Errors

React Fresh now tracks unrecoverable errors so that the module environment can properly react to it by, for example, doing a full reload.

https://github.com/facebook/react/pull/16183

---

## ⏰ Scheduler Updates

- [Use requestIdleCallback to Post First Callback](https://github.com/facebook/react/pull/16166)
- [Test Browser Implementation Details](https://github.com/facebook/react/pull/16198)
- [Add Names to Inline Functions](https://github.com/facebook/react/pull/16180)

---

## 👏 20 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week.

https://git.io/fjynD

---

And with that I wish you a great weekend! Thank you for being here and don't forget to reply with your feedback if you have any.
