It’s time for another This Week in React ⚛️. Let us get started!

---

## 🕹 Internal Event API Experiments Updates

This week added more parts to the internal event API experiments including event component [responder surfaces](https://github.com/facebook/react/pull/15228) and [SSR support](https://github.com/facebook/react/pull/15242).

https://github.com/facebook/react/pull/15179

---

## 💃 Dancing Between State and Effects

James Long ([jlongster](https://github.com/jlongster)) started a discussion about ways to combine effects and state changes. Feedback welcome!

https://github.com/facebook/react/issues/15240

---

## 🎚 Enabled warnAboutDeprecatedLifecycles

React will, starting with the next minor version, warn when deprecated lifecycle methods are used. You can learn more about this deprecation [in this blog post](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html).

https://github.com/facebook/react/pull/15186

---

## 🌍 Turkish Localization Completed

The Turkish localization is now complete, making it the eight complete localization.

https://tr.reactjs.org/

---

## ⚠️ Warn About Async Infinite `useEffect` loop

This PR adds a warning for an infinite `useEffect` loop caused by calling `setState` without defining a dependency array or one of the dependencies changes on every render.

https://github.com/facebook/react/pull/15180

---

## 📌 React v16.8.6 Patch Release

This release includes a fix for `useReducer()` bailout and a fix for cross-origin iframes in Safari as well as two new warnings related to `contextType`.

https://github.com/facebook/react/releases/tag/v16.8.6

---

## 👏 33 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week.

https://gist.github.com/philipp-spiess/c13507c1f53d496c57d14033de9665d1

---

Thank you everyone for following along. If you have any feedback on how to improve this newsletter, hit reply and type away! See you next week. 👋
