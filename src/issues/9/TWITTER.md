💉 It’s Friday again! Time for your weekly dose of React insights:

🎣 An Update on the Hooks RFC Feedback
📍 New RFC: Marker Hook for Server-side Data
⚛️ React Conf Recap
➡️ ... and more.

Check out the thread below and subscribe at this-week-in-react.org 👇

---

🎣 Over the past weeks, many concerns about the Hooks proposal were raised. @sebmarkbage now posted an extensive answer to all of the concerns: https://github.com/reactjs/rfcs/pull/68#issuecomment-439314884

---

📍 @l3ops published a proposal to allow extraction of server-side data and subsequent client-side hydration along the component tree.

https://github.com/reactjs/rfcs/pull/85

---

💅 React soon warns when overlapping styles (e.g. border and borderBottom) change to avoid a common issues that users of React DOM run into.

https://github.com/facebook/react/pull/14183

---

⚠️ Thanks to a contribution from Avi Johnson (avijohnson), the deprecated relay classic plugin will no longer be part of future Dev Tools build. This removes complexity and makes the extension smaller.

https://github.com/facebook/react-devtools/pull/1224

---

🔎 The new Profiler inside React Dev Tools now properly displays hidden, suspended subtrees.

https://github.com/facebook/react-devtools/pull/1219

---

👷‍♀️ In a contribution from @poeschko, the React DOM fixture app used for manually testing multiple React DOM features, now has an option to also test production builds.

https://github.com/facebook/react/pull/13786

---

🗄 To fix an issue where concurrent partial renders can have an effect on each other, a new unique thread ID is used to access contexts.

https://github.com/facebook/react/pull/14182

---

⏳ The previous implementation of the Scheduler used window.postMessage(). Since this will trigger all message listeners which can impact performance, we’re now using a unique MessageChannel instead.

https://github.com/facebook/react/pull/14234

---

⚛️ A new blog post is out that summarizes everything that happened during React Conf 2018.

https://reactjs.org/blog/2018/11/13/react-conf-recap.html

---

🎉 After a somewhat broken 16.6.2 release, 16.6.3 is out with fixes multiple fixes for Suspense and other new React features.

https://github.com/facebook/react/releases/tag/v16.6.3

---

👏 New contributors land their first PR in the react, devtools, or reactjs.org repositories every week. Special applause this week for:

Avi Johnson (avijohnson)
Bartosz Gordon (bgord)
Jan Pöschko (@poeschko)

🙌 Thank you for improving React.

---

That’s it for This Week in React ⚛️.

If you like this format, feel free to share some of the posts or subscribe at https://this-week-in-react.org.

Thank you 👋

