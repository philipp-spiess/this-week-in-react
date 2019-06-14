Hey all! Time for quick update on what happened in React this week.

---

## 🐞 Experimental DevTools Updates

The new DevTools now show you exactly the reason why a component rerendered, including which prop changed and more.

[![New DevTools Feature: The profiling section now shows why a component is updating. Three examples: Updating because it’s the first render, updating because a hooks changed, updated because specific props changed.](https://gallery.mailchimp.com/155aa5558694a008de40fe987/images/e5d43d7f-f25b-41d4-b609-41420da013b2.gif)](https://twitter.com/brian_d_vaughn/status/1137522217728659456)

https://github.com/bvaughn/react-devtools-experimental

---

## ⛑ Remove Feature Flag to Disable Yielding

The feature flag added to disable yielding in Concurrent Mode was superset by the new Batched Mode.

https://github.com/facebook/react/pull/15654

---

## 🎇 React Flare Updates

These changes have been made to the React Flare:

- [Listen to Document.Body and Add stopPropagation to Press](https://github.com/facebook/react/pull/15853)
- [Move Press Root Event Removal to Click Phase](https://github.com/facebook/react/pull/15854)
- [Root Events Are Removed on contextmenu](https://github.com/facebook/react/pull/15862)

https://github.com/facebook/react/issues/15257

---

## 🎨 Use !important to Hide Suspended Nodes

To make sure suspended nodes are hidden even if custom CSS would overwrite it, it’s now using !important using [style.setProperty](https://github.com/facebook/react/pull/15882).

https://github.com/facebook/react/pull/15861

---

## 🔄 React Fresh Updates

More work on React Fresh:

- [Reset State on Edits to Initial State Arguments and More](https://github.com/facebook/react/pull/15860)
- [Make Transform Resilient to Plugin Order](https://github.com/facebook/react/pull/15883)

---

## 👏 6 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week.

- Arnab Sen ([arnabsen](https://github.com/arnabsen))
- Jan Rochalski ([jonny22094](https://github.com/jonny22094))
- Joe Morgan ([jsmapr1](https://github.com/jsmapr1))
- Johnny Rocket ([avocat00](https://github.com/avocat00))
- Salakhutdinov Salavat ([Jackardios](https://github.com/Jackardios))
- [sizoffart](https://github.com/sizoffart)

---

Have a nice weekend and see you soon! 👋
