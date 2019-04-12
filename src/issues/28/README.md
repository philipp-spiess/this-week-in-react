Great Friday everyone! As always, we start the weekend with an update on what happened This Week in React ⚛️.

---

## ✨ Provide New JSX Transform Target

This PR exposes two new top-level exports: `jsx` and `jsxs`. It’s a first step toward the changes described in [RFC #107](https://github.com/reactjs/rfcs/pull/107) and is backward compatible to `createElement`.

https://github.com/facebook/react/pull/15141

---

## 🐌 Apply the Just Noticeable Difference to Suspense Timeouts

With this change, the suspended time is increased, based on how long a user has already waiting. Check out the underlying [theory on Wikipedia](https://en.wikipedia.org/wiki/Just-noticeable_difference).

https://github.com/facebook/react/pull/15367

---

## 🐞 Experimental DevTools Updates

This week, the team continued to work on the new dev tools implementation. Take a look at the current [preview](https://react-devtools-experimental.now.sh/).

https://github.com/bvaughn/react-devtools-experimental

---

## ⏰ Replace Old Fiber Scheduler with New One

This PR enables the new fiber scheduler implementation as the default one and brings some pretty nice file size savings with it.

https://github.com/facebook/react/pull/15387

---

## 🔥 Experimental React Flare Updates

Following the trend of the last week, the team continues to improve the React Flare event experiments.

_Note: This idea is currently in early experimentation phase and might be discarded altogether._

https://github.com/facebook/react/issues/15257

---

## 🕳 Track Event Time as the Start Time for Suspense

This new suspense model is based on the event time (the time at which the update was triggered).

https://github.com/facebook/react/pull/15358

---

## 👏 31 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week.

https://gist.github.com/philipp-spiess/6c672ec5e57d3bebed7c786815f1d104

---

I hope you’re ready for the weekend. See you next week. 👋
