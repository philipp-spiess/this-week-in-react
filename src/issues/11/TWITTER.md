⏲ Time for another week of React insights with the 11th issue of This Week In React ⚛️.

🔥 React Fire Build Infrastructure
🗺 16.x Roadmap
💺 Automate Release Infrastructure
➡️ ... and more.

As always, subscribe to this-week-in-react.org and read more in the thread below. 👇

---

🔥 React Fire is well underway. This week brings the new build infrastructure to host it. A work-in-progress implementation can be followed in @trueadm’s personal branch.

https://github.com/trueadm/react/tree/react-dom-fire
https://github.com/facebook/react/pull/14359

---

🗺 In a new blog post, @dan_abramov lays out the future of React 16.x releases and when the features we’re all waiting for will be made stable.

https://reactjs.org/blog/2018/11/27/react-16-roadmap.html

---

💺 The core team cleaned up the release scripts to make it easier to build releases. The goal is to have a canary that is often updated.

https://github.com/facebook/react/tree/master/scripts/release

---

🖱 Thanks to Bryce Osterhaus (bryceosterhaus), it’s now a lot easier to copy the name of a component in Dev Tools.

https://github.com/facebook/react-devtools/pull/1230

---

📝 The latest stable release of React brings lazy() and Suspense. These features are now referenced in the API docs as well.

https://github.com/reactjs/reactjs.org/pull/1446

---

👋 The useMutationEffect hook had a major flaw: Element refs were not initialized when they were fired. Read the PR for more information why this hook was removed.

https://github.com/facebook/react/pull/14336

---

👩‍🏫 The previous implementation of React.lazy() and React.memo() did not take propTypes into account. From now on, this works as expected.

https://github.com/facebook/react/pull/14298

---

👏 (1/2) New contributors land their first PR in the react, devtools, or reactjs.org repositories every week. This week we thank no less than 14 different people:

Alexander Burakevych (oburakevych)
Ben Schwarz (@benschwarz)
Bryce Osterhaus (bryceosterhaus)

---

👏 (2/2)

Chun Shang (@springuper)
frankymacster
Imre Osswald (@i_oss)
Jinto Jose (jintoppy)
Kai Cataldo (@kai_cataldo)
Luis Felipe Zaguini (zaguiini)
Mark Erikson (@acemarke)
MatanBobi
Max Wizard K (@maxim_koretskyi)
Michael Steward (@misteward)
Pelle Wessman (@voxpelli)

---

That’s it for this week. See you all next week. 👋

And if you’re at the #ReactDayBerlin after party as well, be sure to say hi. 😊
