Salutations everyone! It's time for another update on what happened This Week in React.

---

## 🎉 React v16.9

A new minor version of React is out! It includes new deprecations, async `act()`, `<React.Profiler>` and more. Make sure to also check out the updated timelines for future features in the announcement post.

https://reactjs.org/blog/2019/08/08/react-v16.9.0.html

---

## 🗼 Babel 7

This change upgrades the codebase from using Babel 6 to Babel 7.

https://github.com/facebook/react/pull/16297

---

## 📝 Testing Docs

The documentation now features a new testing section. The documentation includes explanation of different tradeoffs, common patterns, and different test environments.

https://reactjs.org/docs/testing.html

---

## ✍️ Profiler API Docs

This new documentation entries explain how to use the `<Profiler/>` API.

https://reactjs.org/docs/profiler.html

---

## ⏰ Scheduler: Yield Many times per frame, No rAF

A new experimental flag that changes the scheduling logic to yield many times per frame instead of guessing the next VSync using `requestAnimationFrame`.

https://github.com/facebook/react/pull/16214

---

## ⏳ Scheduler: Store Tasks on a Min Binary Heap

A min binary heap has better performance characteristics for implementing a priority queue.

https://github.com/facebook/react/pull/16245

---

## 🎇 React Flare Updates

- [Tweaks to Flare System Design and API](https://github.com/facebook/react/pull/16264)
- [Add ContextMenu Responder](https://github.com/facebook/react/pull/16296)
- [Remove FocusScope Responder](https://github.com/facebook/react/pull/16267)

---

## 🔄 Fresh Updates

- [Transfer Refs When Remounting](https://github.com/facebook/react/pull/16241)
- [Support Multiple Renderers at the Same Time](https://github.com/facebook/react/pull/16302)

---

## 🚩 Add Feature Flag to Disable Legacy Context

The team is experimenting with modern builds of React which disables legacy features. The open source build is unaffected by this change.

https://github.com/facebook/react/pull/16269

---

## 🥅 Fix Priority of Clean-Up Function on Deletion

This PR fixes the priority of the cleanup function returned from an `useEffect()` hook when the component (or a parent) was deleted from the tree.

https://github.com/facebook/react/pull/16277

---

## 🐛 Effects Should Not Have Higher than Normal Priority

This diff fixes a bug that sometimes caused effects to be flushed early.

https://github.com/facebook/react/pull/16257

---

## 👏 37 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week.

https://git.io/fj7Wn

---

Thank you for reading this episode of This Week in React. See you soon!
