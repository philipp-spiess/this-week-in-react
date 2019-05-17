Great Friday everybody! It’s time for This Week in React ⚛️.

🔋 Batched Mode and ReactDOM.unstable_createSyncRoot
🌀 withSuspenseConfig API
👋 Remove <React.unstable_ConcurrentMode />
👀 and more!

Hit subscribe at http://this-week-in-react.org and read the thread below! 👇

---

🔋 Batched Mode is a new unstable React mode that ensures that updates are always batched while still doing all rendering without interruption.

It can be opted in with the new ReactDOM.unstable_createSyncRoot() API: https://github.com/facebook/react/pull/15504

https://github.com/facebook/react/pull/15502

---

🌀 The new unstable_withSuspenseConfig() API can be used to schedule updates with a different suspense config.

This can be used to implement busy spinners.

https://github.com/facebook/react/pull/15593

---

👋 This change removes <React.unstable_ConcurrentMode />.

Partial opt-in into Concurrent Mode creates edge cases that are not trivial to support. Instead, the recommended approach is to opt in the entire root.

https://github.com/facebook/react/pull/15532

---

🧪 With this PR, the act() test helper is now manually flushing the Scheduler using Scheduler.unstable_flushWithoutYielding internally.

https://github.com/facebook/react/pull/15591

---

🕹 This change makes sure that passive effects are flushed before discrete event handlers are called.

https://github.com/facebook/react/pull/15650

---

⏲ The isomorphic React package no longer depends directly on the Scheduler.

Now, only the individual renderers (e.g. react-dom) do.

https://github.com/facebook/react/pull/15616

---

🙅‍♀️ This change adds a new invariant that throws if the new tree is the same as the old one.

https://github.com/facebook/react/pull/15517

---

🎇 More updates for React Flare:

➡ preventDefault now work for nested updates: https://github.com/facebook/react/pull/15633
➡ pointerType was added to to Focus events: https://github.com/facebook/react/pull/15645
➡ getFocusableElementsInScope handles suspended trees: https://github.com/facebook/react/pull/15651

https://github.com/facebook/react/issues/15257

---

🛑 With this change, sync updates inside hidden trees are now delayed when using Concurrent Mode.

https://github.com/facebook/react/pull/15666

---

👏 This week, 20 people made their first commit in one of the React repositories.

I'm still amazed by how many people are constantly working on making React better. ✨

https://git.io/fj8OX

---

And with that we are off to a great weekend!

Next week, I will be at ReactEurope in Paris.

If you see me, come say hi! 👋
