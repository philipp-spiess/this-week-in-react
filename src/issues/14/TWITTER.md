⚛️ Hey all! It’s time for the last (and shortest) This Week in React of this year.

🎉 React 16.7 Release
📋 Memoize Promise Listeners
🛠 DevTools: Support Editable Props for More Component Types

💌 Subscribe at this-week-in-react.org and read more in the thread below. 👇

---

🎉 React 16.7 Release: No, This Is Not The One With Hooks, but this release contains non-trivial changes to fix various performance issues. Read the accompanying release blog post for more details.

https://reactjs.org/blog/2018/12/19/react-v-16-7.html

---

📋 Previously, React attached new listeners whenever a promise was thrown. This was causing special headaches in non-concurrent mode, where React re-renders immediately after a promise is thrown, causing exponential growth of promise listeners.

https://github.com/facebook/react/pull/14429

---

🛠 (1/2) In the upcoming DevTools release, you’ll be able to edit the props of more component types including function components, host elements, and special types like context providers, memo, and forwardRef.

https://github.com/facebook/react-devtools/pull/1249

---

🛠 (2/2) @brian_d_vaughn even prepared a pre-release build with instructions. Check it out.

https://twitter.com/brian_d_vaughn/status/1073662509586866176

---

👏 New contributors land their first PR in the react, devtools, or reactjs.org repositories every week. This week we thank these great people:

Aaron Powell (AaronPowell96)
Carl Mungazi (@carlmungazi)

---

At this point, I’d like to thank you so much for following this newsletter.

If you want to support me, I’d really appreciate a donation to a charity of your choice. You’re the best!

I will be back next year with the usual coverage around React and React DOM. 👋
