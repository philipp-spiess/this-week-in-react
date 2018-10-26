Another week is over and we’re back with hot news about React. Let’s dive right in with the biggest announcement during the React Conf keynote:

---

## 🔥🔥️ RFC: React Hooks 🔥🔥

The React team announced Hooks - A new and backwards-compatible Component API. In addition to the RFC, the team also launched [a complete set of documentation](https://reactjs.org/docs/hooks-intro.html). You can play around with React Hooks today by using the v16.7.0-alpha release on npm.

https://github.com/reactjs/rfcs/pull/68

---

## 🎉 React v16.6.0: lazy, memo and contextType

This week also marks the release of the stable v16.6 release. This not only adds the [lazy](https://github.com/reactjs/reactjs.org/pull/1284), [memo](https://github.com/reactjs/reactjs.org/pull/1282), [contextType](https://github.com/reactjs/reactjs.org/pull/1283), and [getDerivedStateFromError](https://github.com/reactjs/reactjs.org/pull/1223) APIs that we covered in previous issues, but is also the first public build where Suspense is no longer behind a feature flag and [not marked unstable](https://github.com/facebook/react/pull/13922).

https://reactjs.org/blog/2018/10/23/react-v-16-6.html

---

## ⏱ Enable concurrent APIs flag for 16.7

Concurrent APIs (`ReactDOM.createRoot` and `<ConcurrentMode/>`) will now no longer be unstable in the upcoming v16.7.0 release.

https://github.com/facebook/react/pull/13928

---

## ➡️ React.pure() is now React.memo()

After discussions in the [RFC](https://github.com/reactjs/rfcs/pull/63) that we covered last week, `React.pure()` is now called `React.memo()`.

https://github.com/facebook/react/pull/13905

---

## 📚 Remove cache as argument to read in React Cache

The React Cache API is still unstable and will undergo more changes. The cache is now read from context and cache invalidation was removed entirely. You can try it out in the v2.0.0-alpha.0 release.

https://github.com/facebook/react/pull/13865

---

## 👏 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react) or [reactjs.org](https://github.com/reactjs/reactjs.org) repositories every week. Thank you this week to: Abdul Rauf ([armujahid](https://github.com/armujahid)), Bæring Gunnar Steinþórsson ([baering](https://github.com/baering)), Dorian Mullings ([dmullings](https://github.com/dmullings)), John Lin ([johnlinp](https://github.com/johnlinp)), Marko Schulz ([datenreisender](https://github.com/datenreisender)), Michael Fix ([mfix22](https://github.com/mfix22)), Misha Moroshko ([moroshko](https://github.com/moroshko)), Noel Yoo ([noelyoo](https://github.com/noelyoo)), Stephen Burke ([Sburke0708](https://github.com/Sburke0708)), Vasil Raev ([Xizario](https://github.com/Xizario)), [yongningfu](https://github.com/yongningfu), and [ZYSzys](https://github.com/ZYSzys).

---

That was This Week In React ⚛️. You can support this newsletter by sharing the link to the website ([https://this-week-in-react.org](https://this-week-in-react.org)) or on [Twitter](https://twitter.com/PhilippSpiess). Stay tuned for more updates on the future of React.
