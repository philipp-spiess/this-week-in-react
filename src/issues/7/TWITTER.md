📅 It’s Friday again: Time for your weekly React Core and React DOM insights.

⚛️ Hooks Merged Into React Master, Add Back Proper AsyncMode Symbol for Back Compat, Flip Expiration Times, and more.

Subscribe at this-week-in-react.org or read the thread right here 👇

---

🎣 The implantation of the experimental Hooks proposal landed in React’s master branch this week. The PR contains valuable information on how hooks are implemented.

https://github.com/facebook/react/pull/13968

---

🔁 Thanks to Jordan Harband (@ljharb), the react-is package to test arbitrary values and see if they’re a particular React element type now correctly handles the meanwhile renamed AsyncMode component.

https://github.com/facebook/react/pull/13959

---

⁉️ To make working with React Hooks easier, the Core team is working on a linter rule that helps to comply with the Rules of Hooks. This PR takes the custom linter one step forward and doesn’t lint against hooks after conditional throw.

https://github.com/facebook/react/pull/14040

---

⏳ In an effort to simplify the reconciler code, internal priority levels now have their values flipped.

https://github.com/facebook/react/pull/13912

---

⏱ Instead of using a requestIdleCallback-style deadline object, the Scheduler now expose a shouldYield method that returns true if there’s a higher priority event in the queue.

https://github.com/facebook/react/pull/14025

---

🙌 (1/2) New contributors land their first PR in the react or reactjs.org repositories every week. This week, we can’t even fit them on one page. Thank you to: Chris Bianca (chrisbianca), Frederick Ros (@sl33p3r),

---

🙌 (2/2) Jacob Kelley (@jakiestfu), Jeffrey Zhang (javabada), Niladri Dutta (Niladri24dutta), Patrick (powens), Sam Chen (chenxsan), and v891.

---

And that was another Week in React ⚛️.

Thank you for following along and spreading the word about this newsletter. We’re also working on some changes to the newsletter and the this-week-in-react.org website - Stay tuned!

👋
