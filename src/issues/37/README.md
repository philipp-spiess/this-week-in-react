Hey Hey! Time for an update on what happened recently in React Core and React DOM.

---

## 🎬 SuspenseList Updates

The new `<SuspenseList />` component to coordinate the loading sequence of nested suspense boundaries now comes with:

- A [tail="collapsed" option](https://github.com/facebook/react/pull/16007).
- A [warning](https://github.com/facebook/react/pull/16094), when single items are used.
- And various other [optimizations](https://github.com/facebook/react/pull/16005).

---

## ⏳ Scheduler: Allow Inferring Priority from Stack

To help finding out at what priority level specific tasks are enqueued, the call stack now wraps every priority inside an additional function call.

https://github.com/facebook/react/pull/16105

---

## 🧪 Allow Nested `act()`s from Different Renderers

Multiple renders can now operate inside a single `act()` scope. This allows for e.g. using `ReactDOM.render` inside another component tree.

https://github.com/facebook/react/pull/16039

---

## 🎇 React Flare Updates

- Capture Phase Flare events [were removed](https://github.com/facebook/react/pull/16054).
- Support for [currentTarget was added](https://github.com/facebook/react/pull/16066) and later changed to [responderTarget](https://github.com/facebook/react/pull/16082).
- Press events now include a [button type](https://github.com/facebook/react/pull/16100).
- The Scroll responder now has [more functionality](https://github.com/facebook/react/pull/16036).

---

## 🧯 Remove React Fire Fork

The unused React Fire fork was removed. Instead, the team is focusing on React Flare. Check out Dan’s [reply to the React Fire announcement](https://github.com/facebook/react/issues/13525#issuecomment-499196939) for more information.

https://github.com/facebook/react/pull/16046

---

## 👚 Fabric: Add `dispatchCommand`

The Fabric React Native renderer now has a `dispatchCommand` export.

https://github.com/facebook/react/pull/16085

---

## ⚠️ Change Warning for Unacted Effects

A warning is now only issued for unacted effects inside strict and non-sync modes.

https://github.com/facebook/react/pull/16041

---

## 👏 54 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week.

https://git.io/fjPps

---

Thank you for reading and have a great weekend. 👋
