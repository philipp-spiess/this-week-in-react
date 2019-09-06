Hey all! This Week in React is back from summer break.

---

## ❤️ Adopt Contributor Covenant

React is adopting the [Contributor Covenant](https://www.contributor-covenant.org/). It represents a shared understanding of what is expected form a healthy community.

https://github.com/facebook/react/pull/16613

---

## 🛠 DevTools v4 Release

After months of development, the experimental DevTools rewrite is now public. A lot has changed in version 4, check out the blog post for more detail.

https://reactjs.org/blog/2019/08/15/new-react-devtools.html

---

## 🌏 React Docs Localizations Update

The Arabic localizations is now complete:

- [ar.reactjs.org](https://ar.reactjs.org)

And the following localizations are now live:

- Azerbaijani: [az.reactjs.org](https://az.reactjs.org/)
- Bulgarian: [bg.reactjs.org](https://bg.reactjs.org/)
- Indonesian: [id.reactjs.org](https://id.reactjs.org/)
- Mongolian: [mn.reactjs.org](https://mn.reactjs.org/)
- Vietnamese: [vi.reactjs.org](https://vi.reactjs.org/)

---

## 🚀 Babel Transform JSX to React.jsx/React.jsxDEV

As per the [RFC for createElement changes](https://github.com/reactjs/rfcs/pull/107), this change is an experimental fork of @babel/plugin-transform-react-jsx that transpiles to `React.jsx` instead.

https://github.com/facebook/react/pull/16432

---

## 🔄 Fast Refresh Explainer

Dan wrote an explainer of how a Fast Refresh integration for the Web could look like.

https://github.com/facebook/react/issues/16604#issuecomment-528663101

---

## 💤 Partial Support for `React.lazy()` in Server Renderer

The Server Render now has partial support for lazy-loaded components.

https://github.com/facebook/react/pull/16383

---

## ➡️ DevTools Moved into Core Repo

The DevTools are now part of the React Core repository. The previous repository now also directs to the Core one.

https://github.com/facebook/react/tree/master/packages/react-devtools

---

## 🎇 React Events Updates

- [Tap Responder](https://github.com/facebook/react/pull/16628)
- [DOM Event Testing Library](https://github.com/facebook/react/pull/16433)
- [Support Screen Reader Virtual Clicks](https://github.com/facebook/react/pull/16584)
- [Rework the Responder Dispatching/Batching Mechanism](https://github.com/facebook/react/pull/16334)

---

## ⏱ Scheduler: Profiling Features

This change adds two new profiling features to Scheduler, a sample-based approach where profiling information is written into a SharedArrayBuffer and an event-based approach that also works during page initialization.

https://github.com/facebook/react/pull/16542

---

## 🔎 Experimental React Scope Component API

This PR adds an experimental `React.unstable_createScope` for internal tests around focus management within React.

https://github.com/facebook/react/pull/16587

---

## 👏 69 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react) or [documentation](https://github.com/reactjs/reactjs.org) repository every week.

https://git.io/fjjVQ

---

Thank you for following along. See you in two weeks!
