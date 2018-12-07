🌀 It’s Friday again, time for your weekly dose of React Core and React DOM.

🏞 New Server Rendering Infra: Fizz
🔥 WIP: Base Implementation of React Fire
🐶 Automated Fixture Tests
⚛️️ ... and more!

Subscribe at this-week-in-react.org and read more in the thread below. 👇

---

🏞 Work on the new Server Rendering Infrastructure Fizz has begun with built in support for Suspense.

Check out @acdlite’s talk at ZEIT earlier this year for a glimpse of what the new server renderer will be able to do.

https://www.youtube.com/watch?v=z-6JC0_cOns
https://github.com/facebook/react/pull/14144

---

🔥 You can now follow along the work-in-progress base implementation of React Fire as the team is preparing the React DOM code for the upcoming React Fire updates. The changes currently include a new and lighter weight event system.

https://github.com/facebook/react/pull/14382

---

⏱ Kevin Chavez (@aykev) added three new methods (pauseExecution, continueExecution, and, dumpQueue) to the Scheduler package to make it simpler to build debugger tools in the browser.

https://github.com/facebook/react/pull/14053

---

🐶 Some of the manual fixtures are now tested automatically with the help of Puppeteer, an automation helper for Chromium.

https://github.com/facebook/react/pull/14370

---

⏳ An issue in the Scheduler package caused useEffect to be broken in React Native with JavaScript Core. This is now fixed.

https://github.com/facebook/react/pull/14358

---

🛥 Thanks to the help of V8 team members @mathias and @bmeurer, the React team was able to find and fix a significant performance cliff during the commit phase when the React profiler is enabled.

https://github.com/facebook/react/pull/14383

---

📌 Fabric is the ongoing large-scale architectural rewrite of React Native. You can learn more about it in the State of React Native 2018 blog post.

http://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018#architecture
https://github.com/facebook/react/pull/14301

---

👏 New contributors land their first PR in the react, devtools, or reactjs.org repositories every week. This week we thank these great people:

AGCB
Kevin Chavez (@aykev)
Vadym (tv1ster)

---

That’s it for another week.

Thank you for following along – I can’t wait to see you all next week. In the mean time, feel free to share and RT. 😇

👋
