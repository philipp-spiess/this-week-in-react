Let’s start the weekend with an update on what happened This Week in React ⚛️

✨ Provide New JSX Transform Target
🐌 Just-noticeable Difference for Suspense Timeouts
🐞 Experimental DevTools Updates
👀 and more!

👉💌 Subscribe at this-week-in-react.org and read here 👇

---

✨ Provide New JSX Transform Target

This PR exposes two new top-level exports: jsx and jsxs. It’s a first step toward the changes described in RFC #107 (https://github.com/reactjs/rfcs/pull/107) and is backward compatible to createElement.

https://github.com/facebook/react/pull/15141

---

🐌 By applying the Just-noticeable Difference to Suspense Timeouts, the suspended time is increased, based on how long a user has already waiting.

Check out the underlying theory on Wikipedia: https://en.wikipedia.org/wiki/Just-noticeable_difference.

https://github.com/facebook/react/pull/15367

---

🐞 This week, the team continued to work on the new dev tools implementation.

Take a look at the current preview: https://react-devtools-experimental.now.sh/.

https://github.com/bvaughn/react-devtools-experimental

---

⏰ This PR enables the new fiber scheduler implementation as the default one and brings some pretty nice file size savings with it.

https://github.com/facebook/react/pull/15387

---

🔥 Following the trend of the last week, the team continues to improve the React Flare event experiments.

ℹ️ Note: This idea is currently in early experimentation phase and might be discarded altogether.

https://github.com/facebook/react/issues/15257

---

🕳 Track Event Time as the Start Time for Suspense

This new suspense model is based on the event time (the time at which the update was triggered).

https://github.com/facebook/react/pull/15358

---

👏 This week, 31 people made their first commit in one of the React repositories.

Thank you to all these amazing people that push React forward every week. You are incredible. 💕

https://git.io/fjmeH

---

I hope you’re ready for the weekend.

See you next week.

👋
