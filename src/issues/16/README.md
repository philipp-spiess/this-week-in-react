Hey you! Today is an exciting day. Not only because I bring you the latest issue of This Week in React ⚛️ but also because we have a brand new design to show you. I hope you like it!

---

## 🛑 Allow `useReducer` to Bail Out

Bailing out from state changes was a long requested feature for hooks. With a recent change, returning the same state from a `useReducer` call will now avoid re-rendering the component.

https://github.com/facebook/react/pull/14569

---

## 🎉 React DevTools 3.6

A new version of the React DevTools browser plugin is out adding support for hooks and a lot more.

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

---

## 📌 Labels for Custom Hooks

Together with the new hook support in the DevTools, `useDebugValue` allows to configure labels for custom hooks. Make sure to check out the [docs entry](https://reactjs.org/docs/hooks-reference.html#defer-formatting-debug-values).

https://github.com/facebook/react/pull/14559

---

## 🐞 Support Hooks in Shallow Renderer

If you’re using React’s shallow renderer for testing your components, you can now continue to do so even when working with hooks.

https://github.com/facebook/react/pull/14567

---

## 🛠 DevTools: `$r` for Function Components

When selecting a React element in DevTools and typing `$r` in the console, you can access the selected component instance. For function components, this will now return a useful fallback.

https://github.com/facebook/react-devtools/pull/1281

---

## 📝 Creating Expensive Objects

The documentation now contains a new section on how to create expensive objects. The useMemo paragraph was also updated to make it clear that you can not rely on it being called exactly once.

https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily

---

## 🌀 Release 16.8.0-alpha.1

A new alpha with hooks support is out including the new `useDebugValue` API and a lot of other fixes. Make sure to update if you’re on the pre-release build.

https://twitter.com/dan_abramov/status/1083139151720001543

---

## 👀 Add ESLint Rule Playground

Working on linter rules can be frustrating as editors want to avoid reloading it. This new playground rule acts as a proxy to your in-development rule and will reload it on every recheck.

https://github.com/facebook/react/pull/14609

---

## ⚠️ Error When Using Hooks Inside Hooks

React now properly warns you when you use hooks inside some other hooks.

https://github.com/facebook/react/pull/14608

---

## 👏 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [reactjs.org](https://github.com/reactjs/reactjs.org) repositories every week. A special round of applause for this week goes to:

 - Alex Chernenko ([Kazimirkas](https://github.com/Kazimirkas))
 - Apollinaire Lecocq ([Apollinaire](https://github.com/Apollinaire))
 - [jvitela](https://github.com/jvitela)
 - Prashant Andani ([prashant-andani](https://github.com/prashant-andani))
 - Yi-Shan, Chen ([chenesan](https://github.com/chenesan))

I wish you all a great start into the weekend. Make sure to share the newsletter if you like it. See you next week! 👋
