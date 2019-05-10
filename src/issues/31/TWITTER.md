Hey everyone! It’s time for a new This Week in React ⚛️.

🕳 Suspense Boundary Context and unstable_avoidThisFallback
🛠 Experimental DevTools: Suspense Toggle on All Elements
⚠️ Warn When Suspending at Wrong Priority

Subscribe on http://this-week-in-react.org and read the thread! 👇

---

🕳 The suspense boundary context will be used to implement longer suspense when it is undesirable to show a certain fallback state.

With it comes the unstable_avoidThisFallback property that can be used to avoid fall back to the outer suspense boundary.

https://github.com/facebook/react/pull/15578

---

🛠 Experimental DevTools: You can now toggle suspense on every element.

If the component is not in a suspense boundary, it will also show a warning.

https://twitter.com/brian_d_vaughn/status/1126182658864599040

---

⚠️ This change adds a warning when components suspend during a user-blocking update.

The warning recommends to schedule suspending updates via Scheduler.next instead.

https://github.com/facebook/react/pull/15492

---

🎇 The team continued to work on React Flare:

➡ React.unstable_createEventComponent: https://github.com/facebook/react/pull/15580
➡ More press event properties: https://github.com/facebook/react/pull/15586
➡ Server-side hit slop rendering: https://github.com/facebook/react/pull/15385
and more!

https://github.com/facebook/react/issues/15257

---

🎽 This PR fixes an issue with interaction tracking that occurred when a root was mounting inside a batched update.

https://github.com/facebook/react/pull/15567

---

👏 (1/2) Last week, 12 people made their first commit in one of the React repositories:

aute
k.bigwheel (@k_bigwheel)
月迷津渡 (CodeDaraW)
Egor Chernik (Egorka1988)
erdenezul
김건우 (GeonGeon-wooBryanKim)

---

👏 (2/2)

xibaXIBAxibaba (OhIAmFine)
Hankyul Kim (rlagksruf16)
Bin (soulhat)
Dmytro Lvivsky (UnforbiddenYet)
xp44mm
Eungjin Kim (yesjin-git)

---

Time to wrap up another week.

I wish you all a great weekend.

👋
