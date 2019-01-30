Hey everyone! Time for another week of React insights with the eleventh issue of This Week in React ⚛️. Let’s dive right in:

---

## 🔥 React Fire Build Infrastructure

React Fire is well underway. This week brings the new build infrastructure to host it. A work-in-progress implementation can be followed in [Dominic’s personal branch](https://github.com/trueadm/react/tree/react-dom-fire).

https://github.com/facebook/react/pull/14359

---

## 🗺 React 16.x Roadmap

In a new blog post, Dan lays out the future of React and when the features we’re all waiting for will be made stable.

https://reactjs.org/blog/2018/11/27/react-16-roadmap.html

---

## 💺 Automate Release Infrastructure

The core team cleaned up the release scripts to make it easier to build releases. The goal is to have a canary that is often updated.

https://github.com/facebook/react/tree/master/scripts/release

---

## 🖱 Easier Copying Of Component Names in Dev Tools

Thanks to Bryce Osterhaus ([bryceosterhaus](https://github.com/bryceosterhaus)), it’s now a lot easier to copy the name of a component in Dev Tools.

https://github.com/facebook/react-devtools/pull/1230

---

## 📝 Add Suspense and `lazy()` to API Docs

The latest stable release of React brings `lazy()` and Suspense. These features are now referenced in the API docs as well.

https://github.com/reactjs/reactjs.org/pull/1446

---

## 👋 Remove `useMutationEffect`

The `useMutationEffect` hook had a major flaw: Element refs were not initialized when they were fired. Read the PR for more information why this hook was removed.

https://github.com/facebook/react/pull/14336

---

## 👩‍🏫 Validate `propTypes` for `lazy()` and `memo()`

The previous implementation of `React.lazy()` and `React.memo()` did not take `propTypes` into account. From now on, this works as expected.

https://github.com/facebook/react/pull/14298

---

## 👏 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [reactjs.org](https://github.com/reactjs/reactjs.org) repositories every week. This week we thank no less than 14 different people:

  - Alexander Burakevych ([oburakevych](https://github.com/oburakevych))
  - Ben Schwarz ([benschwarz](https://github.com/benschwarz))
  - Bryce Osterhaus ([bryceosterhaus](https://github.com/bryceosterhaus))
  - Chun Shang ([springuper](https://github.com/springuper))
  - [frankymacster](https://github.com/frankymacster)
  - Imre Osswald ([ioss](https://github.com/ioss))
  - Jose ([jintoppy](https://github.com/jintoppy))
  - Kai Cataldo ([kaicataldo](https://github.com/kaicataldo))
  - Luis Felipe Zaguini ([zaguiini](https://github.com/zaguiini))
  - Mark Erikson ([markerikson](https://github.com/markerikson))
  - [MatanBobi](https://github.com/MatanBobi)
  - Max Wizard K ([maximusk](https://github.com/maximusk))
  - Michael Steward ([msteward](https://github.com/msteward))
  - Pelle Wessman ([voxpelli](https://github.com/voxpelli))

That’s it for now, see you all next week 👋. And if you’re at the #ReactDayBerlin after party as well, be sure to say hi. 😊
