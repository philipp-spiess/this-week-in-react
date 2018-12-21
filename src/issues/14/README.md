Hey everyone! It’s time for the last (and shortest) This Week in React ⚛️ of this year. Let’s get started:

---

## 🎉 React 16.7 Release

**No, This Is Not The One With Hooks,** but this release contains non-trivial changes to fix various performance issues. Read the accompanying release blog post for more details.

https://reactjs.org/blog/2018/12/19/react-v-16-7.html

---

## 📋 Memoize Promise Listeners

Previously, React attached new listeners whenever a promise was thrown. This was causing special headaches in non-concurrent mode, where React re-renders immediately after a promise is thrown, causing exponential growth of promise listeners.

https://github.com/facebook/react/pull/14429

---

## 🛠 DevTools: Support Editable Props for More Component Types

In the upcoming DevTools release, you’ll be able to edit the props of more component types including function components, host elements, and special types like context providers, `memo`, and `forwardRef`. Check out the [pre-release build](https://react-devtools.now.sh/).

https://github.com/facebook/react-devtools/pull/1249

---

## 👏 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [reactjs.org](https://github.com/reactjs/reactjs.org) repositories every week. A special round of applause for this week goes to:

 - Aaron Powell ([AaronPowell96](https://github.com/AaronPowell96))
 - Carl Mungazi ([CarlMungazi](https://github.com/CarlMungazi))

And that’s it for this year. At this point, I’d like to thank you so much for following this newsletter. If you want to support me, I’d really appreciate a donation to a charity of your choice. I will be back next year with the usual coverage around React and React DOM. 👋
