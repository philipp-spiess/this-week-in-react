While some of us are wrapping up their work, others are already hooked about This Week in React ⚛️.

📌 Enable Hooks
👩‍🏫 Warn When Hooks Type Change
🔄 Support Sync Thenables for lazy()
🚀 and more!

👉💌 Subscribe at this-week-in-react.org and read more in the thread below. 👇

---

📌 Hooks are now turned on by default and will be part of the next release 🎉.

🤫 The release is also very close (https://twitter.com/dan_abramov/status/1086658019323269121).

https://github.com/facebook/react/pull/14679

---

🏫 React will now warn when you are returning different hooks on subsequent re-renders.

Don’t forget the first Rule of Hooks: https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level

https://github.com/facebook/react/pull/14585

---

🥢 If you’re using <StrictMode> in DEV builds, function components that call hooks will now be called twice to make it easier to spot side effects.

https://github.com/facebook/react/pull/14654

---

🔄 You can now pass a synchronous thenable (an object where the then property callback is executed synchronously) into lazy().

https://github.com/facebook/react/pull/14626

---

✌️ React now warns when passing the second callback to setState/dispatch in hooks.

In class components, the second callback to this.setState() is run when the update is applied. When using hooks, this is not supported.

https://github.com/facebook/react/pull/14625

---

🛑 The callback functions of useMemo, use(Layout)Effect, useReducer, and useState can no longer read context by accessing the internal dispatcher.

https://github.com/facebook/react/pull/14653

---

👏 (1/2) New contributors land their first PR in the react, devtools, or reactjs.org repositories every week. This week we thank:

Grey Baker (greysteil)
liunian
Linchengyi (ZZITE)
Ramón Chancay Ortega (@devrchancay)

---

👏 (2/2)

SamCortopassi
Jean-Marie Porchet (jmporchet)
hsteffens95
Yurick (Yurickh)

---

With that I wish you all a relaxing weekend.

Oh, and don’t forget to tell your friends (and acquaintances) about this-week-in-react.org.

👋
