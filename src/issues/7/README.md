It’s Friday again: Time for your weekly React Core and React DOM insights. This week, the community discussions were mostly focused around React Hooks. Check out Dan Abramov’s recent [blog post](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889) for more details.

---

## 🎣 Hooks Merged Into React Master

The implantation of the experimental Hooks proposal landed in React’s master branch this week. The PR contains valuable information on how hooks are implemented.

https://github.com/facebook/react/pull/13968

---

## 🔁 Add Back Proper AsyncMode Symbol for Back Compat

Thanks to Jordan Harband ([ljharb](https://github.com/ljharb)), the `react-is` package to test arbitrary values and see if they’re a particular React element type now correctly handles the meanwhile renamed `AsyncMode` component.

https://github.com/facebook/react/pull/13959

---

## ⁉️ Don’t Lint Against Hooks After Conditional Throw

To make working with React Hooks easier, the Core team is working on a linter rule that helps to comply with the Rules of Hooks. This PR takes the custom linter one step forward.

https://github.com/facebook/react/pull/14040

---

## ⏳ Flip Expiration Times

In an effort to simplify the reconciler code, internal priority levels now have their values reversed.

https://github.com/facebook/react/pull/13912

---

## ⏱ Deadline Object ➡ shouldYield

Instead of using a `requestIdleCallback`-style deadline object, the Scheduler now expose a `shouldYield` method that returns `true` if there’s a higher priority event in the queue.

https://github.com/facebook/react/pull/14025

---

## 🙌 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react) or [reactjs.org](https://github.com/reactjs/reactjs.org) repositories every week. Thank you this week to: Chris Bianca ([chrisbianca](https://github.com/chrisbianca)), Frederick Ros ([sleeper](https://github.com/sleeper)), Jacob Kelley ([jakiestfu](https://github.com/jakiestfu)), Jeffrey Zhang ([javabada](https://github.com/javabada)), Niladri Dutta ([Niladri24dutta](https://github.com/Niladri24dutta)), Patrick ([powens](https://github.com/powens)), Sam Chen ([chenxsan](https://github.com/chenxsan)), [v891](https://github.com/v891).

---

And that was another Week in React ⚛️. Thank you for subscribing and spreading the word about this newsletter. We’re also working on some changes to the [website](https://this-week-in-react.org/) - Stay tuned!
