I’m thrilled to present you the latest This Week in React ⚛️. Let’s dive right in.

---

## 🚸 RFC: Fragment Refs

Fragment refs are presented as an alternative to `findDOMNode()`. They would allow you to receive an array of DOM nodes rendered by children.

https://github.com/reactjs/rfcs/pull/97

---

## 🗂 RFC: Custom Host Node

Custom Host Nodes are an alternative to the `useMutationEffect()` API that was originally part of the hooks RFC but got removed later on.

https://github.com/reactjs/rfcs/pull/96

---

## 💬 Discussion: Provide Ways to Bail out Inside Hooks

Some use cases require function components with hooks to bail out early. The discussion gives insights into when this is needed. Make sure to check out [Sebastian’s latest response](https://github.com/facebook/react/issues/14110#issuecomment-446845886) on this topic.

https://github.com/facebook/react/issues/14110

---

## 📌 Mention Hooks As Accepted on the Website

The React Hooks RFC has recently been merged. Thanks to Jamie ([jamiebuilds](https://github.com/jamiebuilds)), the website is now updated to reflect this as well.

https://github.com/reactjs/reactjs.org/pull/1485

---

## 🔎 Add `<Suspense>` and `lazy()` to `react-is`

Pleun Vanderbauwhede ([pleunv](https://github.com/pleunv)) added support for `<Suspense>` and `lazy()` to `react-is`. This package is used to test for particular React element types.

https://github.com/facebook/react/pull/14423

---

## 💉 Inject `overrideProps()` into DevTools

Development builds are now exposing a new function to the DevTools which is required to [allow editing props](https://github.com/facebook/react-devtools/pull/1249) of more component types.

https://github.com/facebook/react/pull/14427

---

## 👏 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [reactjs.org](https://github.com/reactjs/reactjs.org) repositories every week. A special round of applause for this week goes to:

  - Hristo Kanchev ([hristo-kanchev](https://github.com/hristo-kanchev))
  - Pleun Vanderbauwhede ([pleunv](https://github.com/pleunv))
  - Taley'a Mirza ([taleymirza](https://github.com/taleymirza))

And that’s it for this week. We’ll see each other next week 👋.
