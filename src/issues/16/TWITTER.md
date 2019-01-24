💅 The latest issue of This Week in React ⚛️ is out in brand new colors! 🧡💙

🛑 Allow useReducer to Bail Out
🎉 React DevTools 3.6
📌 Labels for Custom Hooks
🚀 and more!

💌 Subscribe at the all new this-week-in-react.org and read the thread below. 👇

---

🛑 Bailing out from state changes was a long requested feature for hooks.

With a recent change, returning the same state from a useReducer call will now avoid re-rendering the component.

https://github.com/facebook/react/pull/14569

---

🎉 Version 3.6 of the React DevTools browser plugin is out adding support for hooks and a lot more.

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

---

📌 Together with the new hook support in the DevTools, useDebugValue was added to configure labels for custom hooks.

Make sure to also check out the new docs entry: https://reactjs.org/docs/hooks-reference.html#defer-formatting-debug-values

https://github.com/facebook/react/pull/14559

---

🐞 If you’re using React’s shallow renderer for testing your components, you can now continue to do so even when working with hooks.

https://github.com/facebook/react/pull/14567

---

🛠 When selecting a React element in DevTools and typing $r in the console, you can access the selected component instance.

For function components, this will now return a useful fallback.

https://github.com/facebook/react-devtools/pull/1281

---

📝 The documentation now contains a new section on how to create expensive objects.

The useMemo paragraph was also updated to make it clear that you can not rely on it being called exactly once.

https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily

---

🌀 The new 16.8.0-alpha.1 release with hooks support is out including the new useDebugValue API and a lot of other fixes.

Make sure to update if you’re on the pre-release build.

https://twitter.com/dan_abramov/status/1083139151720001543

---

👀 Working on linter rules can be frustrating as editors want to avoid reloading it.

This new playground rule inside the React repo acts as a proxy to your in-development rule and will reload it on every recheck.

https://github.com/facebook/react/pull/14609

---

⚠️ React now properly warns you when you use hooks inside some other hooks.

https://github.com/facebook/react/pull/14608

---

👏 New contributors land their first PR in the react, devtools, or reactjs.org repositories every week. This week we thank:

Alex Chernenko (Kazimirkas)
Apollinaire Lecocq (Apollinaire)
jvitela
Prashant Andani (prashant-andani)
Yi-Shan, Chen (chenesan)

---

I wish you all a great start into the weekend.

Check out more of the new design at this-week-in-react.org and share it if you like it.

Until next week! 👋


