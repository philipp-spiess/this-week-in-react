While some of us are still wrapping up their work, others are already _hooked_ about what happened This Week in React ⚛️.

---

## 📌 Enable Hooks

Hooks are now turned on by default and will be part of the next release 🎉. The release is also [very close](https://twitter.com/dan_abramov/status/1086658019323269121).

https://github.com/facebook/react/pull/14679

---

## 🏫 Warn When Hooks Type Change

React will now warn when you are returning different hooks on subsequent re-renders. Don’t forget the first [Rule of Hooks](https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level).

https://github.com/facebook/react/pull/14585

---

## 🥢 Double-render Function Component With Hooks in Strict Dev Mode

If you’re using `<StrictMode>` in DEV builds, function components that call hooks will now be called twice to make it easier to spot side effects.

https://github.com/facebook/react/pull/14654

---

## 🔄 Support Sync Thenables for `lazy()`

You can now pass a synchronous thenable (an object where the `then` property callback is executed synchronously) into `lazy()`.

https://github.com/facebook/react/pull/14626

---


## ✌️ Warn When Passing Second Callback to `setState`/`dispatch` in Hooks

In class components, you can pass in a second callback to `this.setState()` that is run when the update is applied. When using hooks, this is not supported.

https://github.com/facebook/react/pull/14625

---

## 🛑 Disallow Reading Context During `useMemo`, etc.

The callback functions of `useMemo`, `use(Layout)Effect`, `useReducer`, and `useState` can no longer read context by accessing the internal dispatcher.

https://github.com/facebook/react/pull/14653

---

## 👏 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [reactjs.org](https://github.com/reactjs/reactjs.org) repositories every week. A special round of applause for this week goes to:

 - Grey Baker ([greysteil](https://github.com/greysteil))
 - [hsteffens95](https://github.com/hsteffens95)
 - Jean-Marie Porchet ([jmporchet](https://github.com/jmporchet))
 - Linchengyi ([ZZITE](https://github.com/ZZITE))
 - [liunian](https://github.com/liunian)
 - Ramón Chancay Ortega ([devrchancay](https://github.com/devrchancay))
 - [SamCortopassi](https://github.com/SamCortopassi)
 - Yurick ([Yurickh](https://github.com/Yurickh))

With that I wish you all a relaxing weekend. Oh, and don’t forget to tell your friends (and acquaintances) about [This Week in React](https://this-week-in-react.org). 👋
