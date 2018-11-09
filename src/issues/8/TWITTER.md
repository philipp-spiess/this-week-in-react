⏰ It’s time for your weekly list of React insights.

🐞 Debug Tools Package for Introspection of Hooks
🧠 A Metaphor for Concurrent React
🤞 Avoid Double Commit by Re-rendering Immediately
⚛️ ... and more.

Subscribe at this-week-in-react.org and read the thread right here 👇

---

🐞 To make it easier to debug React Hooks, the team added a new experimental package for debugging React renderers.

https://github.com/facebook/react/pull/14085

---

🧠 @dan_abramov wrote an excellent metaphor for the upcoming concurrent mode in React. Check out his Twitter thread if you’re curious about the mental model behind this upcoming feature.

https://twitter.com/dan_abramov/status/1059059596835340288

---

🗄 A new fuzz tester was added to improve the reliability of suspense. It works by generating random trees of React elements, with some elements that suspend and some that don’t.

https://github.com/facebook/react/pull/14147

---

🤞 To fix issues when using Suspense in non-concurrent mode, we now render the suspended and the fallback children within a single commit. @acdlite also posted a great summary in the PR.

https://github.com/facebook/react/pull/14083

---

⏳ @n8Schloss made a PR to add another priority level to the experimental Scheduler package. This new priority will still resolve but only after everything else. This is useful for logging or sending data back to the server.

https://github.com/facebook/react/pull/14155

---

🦄 Thanks to @andaristrake we now also have development warnings in the server renderer implementation for the second argument comparison implementation of hooks.

https://github.com/facebook/react/pull/14036

---

✨ The cleanup function for the useEffect hook must always be returned synchronously, something that’s not possible to do when an async function is used. We now warn in such cases.

https://github.com/facebook/react/pull/14069

---

🌁 React can be loaded into many JavaScript runtimes. Thanks to @tsbnunes, it can now again be loaded into environments without setTimeout (e.g. ClearScript for .NET).

https://github.com/facebook/react/pull/14103

---

🛠 The official React Developer Tools browser extension was updated to support some of the newly released React features (React.memo and Timed-out Suspense Trees).

https://github.com/facebook/react-devtools/pull/1207

---

🎉 The React v16.6.1 patch release brings multiple bug fixes related to the recently released Suspense features. We can also expect a new alpha release soon.

https://github.com/facebook/react/releases/tag/v16.6.1

---

🙌 (1/2) New contributors land their first PR in the react, devtools, or reactjs.org repositories every week. This week, we can again not fit everyone in one tweet. Thank you to: Dillon Mulroy (@dillon_mulroy), Einar Paul Qvale (@einarq), locknono,

---

🙌 (2/2) Marcelo Jorge Vieira (@marcelometal), Nadav Kaner (@nadav_kaner), Nathan Schloss (@n8Schloss), Sergey Falinsky (falinsky), and Tiago Nunes (@tsbnunes).

---

And this concludes another another busy Week in React ⚛️.

Thank you for following this newsletter. Feel free to support it by sharing the tweets the link to https://this-week-in-react.org.

👋 Stay tuned for more updates on the future of React.
