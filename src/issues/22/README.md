It’s Friday again and you know what that means: Time for This Week in React ⚛️.

---

## 🌏 Is React Translated Yet? ¡Sí! Sim! はい！

A new blog post explains the React documentation internationalization effort and mentions the first three live websites: [Spanish](https://es.reactjs.org/), [Japanese](https://ja.reactjs.org/), and [Brazilian Portuguese](https://pt-br.reactjs.org/).

https://reactjs.org/blog/2019/02/23/is-react-translated-yet.html

---

## ⏱ Add New Mock Build of Scheduler

To control the Scheduler queue in test environments, a new mock version of the Scheduler was added.

https://github.com/facebook/react/pull/14964

---

## 🌎 React Docs Language Switcher

With the release of the first three localizations (see above), the documentations now also feature a language switcher

https://reactjs.org/languages

---

## 🛠 DevTools: Support Editable `useState` Hooks

To allow a future DevTools version to edit `useState` hooks, a new `overrideHookState` was added to work with `react-debug-tools`.

https://github.com/facebook/react/pull/14906

---

## 🌍 6 New React Internationalization Repos

With six new internationalization repos added last week, we’re now at a total of 38. This week brings:

- Gujarati: [reactjs/gu.reactjs.org](https://github.com/reactjs/gu.reactjs.org)
- Central Khmer: [reactjs/km.reactjs.org](https://github.com/reactjs/km.reactjs.org)
- Kurdish: [reactjs/ku.reactjs.org](https://github.com/reactjs/ku.reactjs.org)
- Lithuanian: [reactjs/lt.reactjs.org](https://github.com/reactjs/lt.reactjs.org)
- Telugu: [reactjs/te.reactjs.org](https://github.com/reactjs/te.reactjs.org)
- Urdu: [reactjs/ur.reactjs.org](https://github.com/reactjs/ur.reactjs.org)

---

## ⏳ Scheduler: Pass `didTimeout` to Callbacks

To avoid unnecessary checks to `shouldYield`, Scheduler callbacks now receive a `didTimeout` argument.

https://github.com/facebook/react/pull/14931

---

## 🎣 ESLint: Allow Extraneous Effect Dependencies

In the ESLint rule for hooks, it’s now allowed to pass dependencies that are not used inside the effect to the dependency array. Check out the PR for an example of when this is useful.

https://github.com/facebook/react/pull/14967

---

## ⚓️ ESLint: More Cases For exhaustive-deps Rule

This PR improves messaging for when you try to pass literals. Additionally it now warns when `ref.current` is used in an effect cleanup that it assumes is a component ref.

https://github.com/facebook/react/pull/14930

---

## 🐛 Fix Compatibility Between `react-debug-tools` and `useContext()`

`react-debug-tools` is an experimental package for debugging React renderers. This PR fixes a bug that was causing issues with this package and `useContext()`.

https://github.com/facebook/react/pull/14940

---

## 📌 ESLint: Allow Omitting Constant Primitive Deps

The `eslint-plugin-react-hooks/exhaustive-deps` lint rule now allows you to omit defining constant primitives (e.g. `const a = 123;`) in the dependencies array if you close over them.

https://github.com/facebook/react/pull/14959

---

## 👏 55 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week.

https://gist.github.com/philipp-spiess/cf49fa6dac04dd4ee4146cf25b7b1a80

---

And with that we’re wrapping up another week. I wish you all a wonderful start into the weekend. 👋
