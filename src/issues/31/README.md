Hey everyone! It’s time for a new issue of This Week in React.

---

## 🕳 Add Suspense Boundary Context and `unstable_avoidThisFallback`

The new suspense boundary context will be used to implement longer suspense in case it is undesirable to show a certain fallback state.

The first usage of this is the `unstable_avoidThisFallback` property that can be used to avoid fall back to the outer most suspense boundary.

https://github.com/facebook/react/pull/15578

---

## 🛠 Experimental DevTools: Add Suspense Toggle to All Elements

You can now toggle suspense on every element in the experimental DevTools. If the component is not in a suspense boundary, it will also show a warning.

https://twitter.com/brian_d_vaughn/status/1126182658864599040

---

## ⚠️ Warn When Suspending at Wrong Priority

This change adds a warning when components suspend during a user-blocking update. The warning recommends to schedule suspending updates via `Scheduler.next` instead.

https://github.com/facebook/react/pull/15492

---

## 🎇 React Flare Updates

Continuing the work of the past few weeks, the team worked on adding [ React.unstable_createEventComponent](https://github.com/facebook/react/pull/15580), more [press event properties](https://github.com/facebook/react/pull/15586), [server-side hit slop rendering](https://github.com/facebook/react/pull/15385), and a lot of other bug fixes.

https://github.com/facebook/react/issues/15257

---

## 🎽 Fix Interaction Tracing for Batched Update Mounts

This PR fixes an issue with interaction tracking that occurred when a root was mounting inside a batched update.

https://github.com/facebook/react/pull/15567

---

## 👏 12 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week. A special thank you this week goes to:

- [aute](https://github.com/aute)
- k.bigwheel ([bigwheel](https://github.com/bigwheel))
- 月迷津渡 ([CodeDaraW](https://github.com/CodeDaraW))
- Egor Chernik ([Egorka1988](https://github.com/Egorka1988))
- [erdenezul](https://github.com/erdenezul)
- 김건우 ([Geon-wooBryanKim](https://github.com/Geon-wooBryanKim))
- xibaXIBAxibaba ([OhIAmFine](https://github.com/OhIAmFine))
- Hankyul Kim ([rlagksruf16](https://github.com/rlagksruf16))
- Bin ([soulhat](https://github.com/soulhat))
- Dmytro Lvivsky ([UnforbiddenYet](https://github.com/UnforbiddenYet))
- [xp44mm](https://github.com/xp44mm)
- Eungjin Kim ([yesjin-git](https://github.com/yesjin-git))

---

Time to wrap up another week. I wish you all a great weekend. 👋
