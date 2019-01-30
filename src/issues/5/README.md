It's time for another This Week in React ⚛️. Next week, the official React Conf 2018 is happening and we will learn more about the future of React - all of which will of course be covered in this newsletter.

---

## 🔥 RFC: React.pure()

The Core team filed an RFC for `React.pure` - an API that lets you bail out of updates from a function component, similar to `React.PureComponent` for classes.

https://github.com/reactjs/rfcs/pull/63

---

## 💥 RFC: React.lazy()

To make it easier to code split individual components in React, the new `React.lazy()` API adds first-class support by embracing dynamic imports.

https://github.com/reactjs/rfcs/pull/64

---

## 🚀 RFC: Static contextType

The address some of the problems with render props for the new Context API, the Core team is working on `static contextType` as a new consuming mechanism. You can also look at the [preliminary documentation PR](https://github.com/reactjs/reactjs.org/pull/1265).

https://github.com/reactjs/rfcs/pull/65

---

## ⚡️ RFC: shouldComponentRemount

Alex Krolick ([alexkrolick](https://github.com/alexkrolick)) published an RFC for `shouldComponentRemount`, a new lifecycle method to control when React mounts and unmounts a component.

https://github.com/reactjs/rfcs/pull/62

---

## ⏱ Rename Priority Levels

The Core team also made small changes to some of the API names for the scheduler - one of the building blocks of React’s upcoming concurrent mode. The API is not final and we can expect an RFC soon.

https://github.com/facebook/react/pull/13842

---

## 🕵️‍♀️ Deprecate findDOMNode in StrictMode

In an attempt to make React applications easier to maintain, the Core team considers deprecating `findDOMNode`. The current API is breaking abstraction levels which leads to refactoring hazard.

https://github.com/facebook/react/pull/13841

---

## ⏪ Revert: React.pure() Automatically Forwards Ref

Last week we were covering a PR that added `forwardRef` behavior to `React.pure()` by default. The PR was since reverted while the Core team is working on the future of ref forwarding.

https://github.com/facebook/react/pull/13887

---

## 👏 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react) or [reactjs.org](https://github.com/reactjs/reactjs.org) repositories every week. Thank you this week to: Alex Wilmer ([alex-wilmer](https://github.com/alex-wilmer)), Pablo Javier D. A. ([devpda](https://github.com/devpda)), Trivikram Kamat ([trivikr](http://github.com/trivikr)), Tyler McGinnis ([tylermcginnis](https://github.com/tylermcginnis)), and Vasil Raev ([Xizario](https://github.com/Xizario)).
---

That was it for this week. If you have any feedback for us, please let us know (simply reply to this newsletter or reach me out via [Twitter](https://twitter.com/PhilippSpiess)).
