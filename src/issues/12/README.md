Hello subscriber! It’s time for your weekly recap of what happened in React Core and React DOM.

---

## 🏞 New Server Rendering Infrastructure: Fizz

Work on the new Server Rendering Infrastructure Fizz has begun. The new renderer features built in support for Suspense and utilizes node streams. Check out [Andrew’s talk at ZEIT](https://www.youtube.com/watch?v=z-6JC0_cOns) earlier this year for a glimpse of what the new server renderer will be able to do.

https://github.com/facebook/react/pull/14144

---

## 🔥 WIP: Base Implementation of React Fire

You can now follow along as the team is preparing the React DOM code for the upcoming React Fire updates. The changes currently include a new and lighter weight event system.

https://github.com/facebook/react/pull/14382

---

## ⏱ Implement `pauseExecution`, `continueExecution`, and `dumpQueue` for Scheduler

Kevin Chavez ([mrkev](https://github.com/mrkev)) added three new methods to the Scheduler package to make it simpler to build debugger tools in the browser.

https://github.com/facebook/react/pull/14053

---

## 🐶 Automated Fixture Tests

Some of the manual fixtures are now tested automatically with the help of [Puppeteer](https://github.com/GoogleChrome/puppeteer), an automation helper for Chromium.

https://github.com/facebook/react/pull/14370

---

## ⏳ Fixed Scheduler setTimeout Fallback

An issue in the Scheduler package caused `useEffect` to be broken in React Native with JavaScript Core.

https://github.com/facebook/react/pull/14358

---

## 🛥 Avoid a V8 Performance Cliff When Profiling

Thanks to the help of V8 team members, the React team was able to find and fix a significant performance cliff during the commit phase when the React profiler is enabled.

https://github.com/facebook/react/pull/14383

---

## 📌 Enable Hooks In Fabric

Fabric is the ongoing large-scale architectural rewrite of React Native. You can learn more about it in [the State of React Native 2018 blog post](http://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018#architecture).

https://github.com/facebook/react/pull/14301

---

## 👏 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [reactjs.org](https://github.com/reactjs/reactjs.org) repositories every week. A special round of applause for this week goes to:

  - [AGCB](https://github.com/AGCB)
  - Kevin Chavez ([mrkev](https://github.com/mrkev))
  - Vadym ([tv1ster](https://github.com/tv1ster))

That was another This Week In React ⚛️. See you all next week.
