It’s time for the 20th This Week in React ⚛️ – A week where 134 people committed to one of the React repositories for their first time!

---

## 🔥🔥 134 New First-Time Contributors 🔥🔥

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week.

https://gist.github.com/philipp-spiess/23ae25626c549a850f2576f6c6d483b2

---

## 🌍 New React Internationalization Repos

We start this week by listing twenty new internationalization repositories. [Help translating!](https://github.com/reactjs/reactjs.org-translation)

- Arabic: [reactjs/ar.reactjs.org](https://github.com/reactjs/ar.reactjs.org)
- Armenian: [reactjs/hy.reactjs.org](https://github.com/reactjs/hy.reactjs.org)
- Bengali: [reactjs/bn.reactjs.org](https://github.com/reactjs/bn.reactjs.org)
- Bulgarian: [reactjs/bg.reactjs.org](https://github.com/reactjs/bg.reactjs.org)
- Dutch: [reactjs/nl.reactjs.org](https://github.com/reactjs/nl.reactjs.org)
- German: [reactjs/de.reactjs.org](https://github.com/reactjs/de.reactjs.org)
- Hebrew: [reactjs/he.reactjs.org](https://github.com/reactjs/he.reactjs.org)
- Hindi: [reactjs/hi.reactjs.org](https://github.com/reactjs/hi.reactjs.org)
- Italian: [reactjs/it.reactjs.org](https://github.com/reactjs/it.reactjs.org)
- Malayalam: [reactjs/ml.reactjs.org](https://github.com/reactjs/ml.reactjs.org)
- Nepali: [reactjs/ne.reactjs.org](https://github.com/reactjs/ne.reactjs.org)
- Persian: [reactjs/fa.reactjs.org](https://github.com/reactjs/fa.reactjs.org)
- Polish: [reactjs/pl.reactjs.org](https://github.com/reactjs/pl.reactjs.org)
- Portuguese (Portugal): [reactjs/pt-PT.reactjs.org](https://github.com/reactjs/pt-PT.reactjs.org)
- Romanian: [reactjs/ro.reactjs.org](https://github.com/reactjs/ro.reactjs.org)
- Sinhala: [reactjs/si.reactjs.org](https://github.com/reactjs/si.reactjs.org)
- Tamil: [reactjs/ta.reactjs.org](https://github.com/reactjs/ta.reactjs.org)
- Turkish: [reactjs/tr.reactjs.org](https://github.com/reactjs/tr.reactjs.org)
- Ukrainian: [reactjs/uk.reactjs.org](https://github.com/reactjs/uk.reactjs.org)
- Uzbek: [reactjs/uz.reactjs.org](https://github.com/reactjs/uz.reactjs.org)

---

## 🏞 Partial Hydration

The partial hydration PR has now landed in master. This new mode can start hydrating a server rendered result while some parts are still loading. The goal is decrease the time to interactive.

https://github.com/facebook/react/pull/14717

---

## 📚 Component Stack in `act()` Warning

The warning about missing `act()` wrapping in some test environments now contains a component stack trace.

https://github.com/facebook/react/pull/14855

---

## 🖥 Fix SSR Context Leaks When Render Stream Destroyed Early

This PR fixes a Context memory leak in the SSR if a stream is destroyed before the render completes.

https://github.com/facebook/react/pull/14706

---

## 📡 Properly Support `crossOrigin` for SVG Images

We now properly case the `crossOrigin` property that’s used for SVG image elements.

https://github.com/facebook/react/pull/14832

---

## 👀 Fix `useImperativeHandle` Without Dependencies

The `useImperativeHandle` hook now properly behaves like no dependencies were set when the second argument is omitted.

https://github.com/facebook/react/pull/14801

---

## 📌 React v16.8.2 Patch Release

This release brings bug fixes and stability improvements around hooks and other features.

https://github.com/facebook/react/blob/master/CHANGELOG.md#1682-february-14-2019

---

Thank you for following this newsletter and THANK YOU to the amazing people that push React forward every week. See you all next week. 👋

