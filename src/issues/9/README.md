It’s Friday again! Time for your weekly dose of React Core and React DOM insights:

---

## 🎣 Update on the Hooks RFC Feedback

Over the past weeks, many questions about the Hooks proposal were raised. Sebastian now posted an extensive answer to all of the concerns.

https://github.com/reactjs/rfcs/pull/68#issuecomment-439314884

---

## 📍 RFC: Marker Hook for Server-side Data

Leops ([l3ops](https://github.com/leops)) published a proposal to allow extraction of server-side data and subsequent client-side hydration along the component tree.

https://github.com/reactjs/rfcs/pull/85

---

## 💅 CSS Shorthand Property Warning

React soon warns when overlapping styles (e.g. `border` and `borderBottom`) change to avoid a common issues that users of React DOM run into.

https://github.com/facebook/react/pull/14183

---

## ⚠️ Remove Relay Classic Plugin from Dev Tools

Thanks to a contribution from Avi Johnson ([avijohnson](https://github.com/avijohnson)), the deprecated relay classic plugin will no longer be part of future Dev Tools build. This removes complexity and makes the extension smaller.

https://github.com/facebook/react-devtools/pull/1224

---

## 🔎 Properly Display Hidden, Suspended Subtrees in Dev Tools

The new Profiler inside React Dev Tools now properly displays hidden, suspended subtrees.

https://github.com/facebook/react-devtools/pull/1219

---

## 👷‍♀️ Allow Production Builds in DOM Fixture

In a contribution from Jan Pöschko ([poeschko](https://github.com/poeschko)), the React DOM fixture app used for manually testing multiple React DOM features, now has an option to also test production builds.

https://github.com/facebook/react/pull/13786

---

## 🗄 Unique Thread ID for Each Partial Render to Access Contexts

To fix an issue where concurrent partial renders can have an effect on each other, a new unique thread ID is used to access contexts.

https://github.com/facebook/react/pull/14182

---

## ⏳ Scheduler: Use MessageChannel instead of window

The previous implementation of the Scheduler used `window.postMessage()`. Since this will trigger all message listeners which can impact performance, we’re now using a unique `MessageChannel` instead.

https://github.com/facebook/react/pull/14234

---

## ⚛️ React Conf Recap

A new blog post is out that summarizes everything that happened during React Conf 2018.

https://reactjs.org/blog/2018/11/13/react-conf-recap.html

---

## 🎉 React 16.6.3 Patch Release

After a [somewhat broken](https://github.com/facebook/react/issues/14208) 16.6.2 release, 16.6.3 is out with fixes multiple fixes for Suspense and other new React features.

https://github.com/facebook/react/releases/tag/v16.6.3

---

## 👏 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [reactjs.org](https://github.com/reactjs/reactjs.org) repositories every week. Special thank you this week to: Avi Johnson ([avijohnson](https://github.com/avijohnson)), Bartosz Gordon ([bgord](https://github.com/bgord)), and Jan Pöschko ([poeschko](https://github.com/poeschko)).

---

That’s it for this week. Oh and if you’re curious about the changes to the [website](https://this-week-in-react.org/) that I have teased in issue 7: We definitely haven’t forgotten that and are still working on it – Stay tuned!

