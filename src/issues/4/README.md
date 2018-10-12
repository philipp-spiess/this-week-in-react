With [React Conf 2018](https://conf.reactjs.org/) right around the corner, we’re eagerly awaiting to hear more about the future of React. Here’s what we already know from looking at the GitHub repository this week:

---

## 🎉 Enable Suspense

Suspense is no longer behind a feature flag which will likely make it part of the next release. Additional changes also include updated names for some of the APIs.

https://github.com/facebook/react/pull/13799

---

## ➡️ React.pure() Automatically Forwards Ref

`React.pure()`, a new HOC to enable PureComponent behavior on function components that was recently merged, now comes with `forwardRef` support built-in.

https://github.com/facebook/react/pull/13822

---

## 📱 Don’t Add onclick Listener to React Root

Thanks to an excellent bug report by Alexey Mikitevich ([amikitevich](https://github.com/amikitevich)) we were made aware of a recent regression in React DOM. If you’re into iOS Safari touch oddities, the bugfix PR is an interesting read.

https://github.com/facebook/react/pull/13778

---

## ⏱ Eagerly Schedule rAF at Beginning of Frame

The core team is working on perfecting the scheduler - one of the building blocks of React’s upcoming concurrent mode. It’s fascinating to see how the Scheduler improves over time.

https://github.com/facebook/react/pull/13785

---

## 🚫 Error Boundaries

In a recent Twitter discussion, the Core team shed some light on why it might be useful to rely on error boundaries even for the error handling of your non-React APIs.

https://twitter.com/sebmarkbage/status/1048574466282983424

---

## 👏 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react) or [reactjs.org](https://github.com/reactjs/reactjs.org) repositories every week. Thank you this week to: Anoop Kumar Gupta ([anoop-gupt](https://github.com/anoop-gupt)), Heitor Althmann ([heitoralthmann](https://github.com/heitoralthmann)), ([kh0ma](https://github.com/kh0ma)), and Rishi Advani ([rishi1999](https://github.com/rishi1999)).

---

That was This Week In React ⚛️. You can support this newsletter by sharing the link to the website ([https://this-week-in-react.org](https://this-week-in-react.org)) or on [Twitter](https://twitter.com/PhilippSpiess).
