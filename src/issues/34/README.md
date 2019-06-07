Great Friday everyone! Time for more updates around React and React DOM.

---

## 🔥 An Update on React Fire

Dan recently posted an update on React Fire to the GitHub issue. It mentions recent experiments like React Flare and how the work on these features impacts the React Fire plan.

https://github.com/facebook/react/issues/13525#issuecomment-499196939

---

## 🧪 Using the Wrong Renderer’s `act()` Should Warn

The `act()` test helper now properly warns when the helper is important from the wrong renderer.

https://github.com/facebook/react/pull/15756

---

## 🧨 React Flare: Basic Scroll Responder

This PR adds a basic `Scroll` event responder module to the current set of React Flare event responders.

https://github.com/facebook/react/pull/15827

---

## ⏱ Change Suspending and Restarting Heuristic

This change adds a new principle for when we restart a render instead of continuing to completion. For more details, I recommend reading the full explanation in the PR and Dan’s notes at the end.

https://github.com/facebook/react/pull/15769

---

## 🔄 React Fresh Updates

React Fresh, the new generation of hot reloading, is getting more updates:

- The babel plugin now [handles HOCs](https://github.com/facebook/react/pull/15724)
- [Generate signatures for hooks](https://github.com/facebook/react/pull/15733)
- [Support classes by force-remounting on edit](https://github.com/facebook/react/pull/15801)

---

## 🔎 Lint Rule for Unminified Errors

This change brings a new lint rule for the React repository that logs an error when an invariant message is not part of the error code map. In addition to that, [errors are no longer extracted](https://github.com/facebook/react/pull/15758) automatically in CI.

https://github.com/facebook/react/pull/15757

---

## 🕸 Nested Discrete Events Across Systems

This patch fixes an issue when a legacy event is dispatched within a new event callback or vice versa by making sure that the inner event is not flushed.

https://github.com/facebook/react/pull/15796

---

## 🎇 React Flare Updates

More work has been done on React Flare:

- [Add onContextMenu to Press](https://github.com/facebook/react/pull/15761)
- [Ignore Keyboard Interactions on Text Input Children](https://github.com/facebook/react/pull/15810)
- [Add Event Position Properties to Hover Responder](https://github.com/facebook/react/pull/15819)
- [Improve Runtime Performance of Hit Target Intersection](https://github.com/facebook/react/pull/15836)
- Thanks to Mateusz Burzyński ([Andarist](https://github.com/Andarist)), [Alt+Tab is now properly handled](https://github.com/facebook/react/pull/15679) on macOS.

Don’t forget to check out the umbrella issue for more details:

https://github.com/facebook/react/issues/15257

---

## 🖱 Support for User-Blocking and Continuous Events

Events like hover are more important than others but do not need to be processed serially.

https://github.com/facebook/react/pull/15811

---

## 🔋 Add Batched Mode Variant to Fuzz Tester

The Suspense test fuzzer now tests the new Batched Mode in addition to the Concurrent Mode and the Legacy Sync Mode.

https://github.com/facebook/react/pull/15734

---

## 📦 Update Release Script to be Workspace Aware

The automated release scripts are now aware of the newly used Workspace feature of CircleCI.

https://github.com/facebook/react/pull/15809

---

## 👏 27 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week.

https://git.io/fjz2M

---

And with that I’m wishing everyone a wonderful weekend. See you soon! 👋
