It’s Friday again: Time for the second issue of This Week in React ⚛️.

💌 Starting this week, there’s also an email newsletter (it also comes with all the emojis). If you prefer that format, subscribe at this-week-in-react.org and tell your friends!

Thread ➡️

---

🔥 Andrew (@acdlite) added pure(), a new HOC to bring PureComponent behavior to functional components. 🔥

const MyPureComponent = pure(MyComponent);

This is incredibly exciting and will be useful in so many situations. 🤯

https://github.com/facebook/react/pull/13748

---

📚 Brian (@brian_d_vaughn) added an API that adds this.context in all callbacks of class components and simplifies migration to the new context:

class extends Component {
  static contextType = MyContext;
  render() {
    return this.context;
  }
}

https://github.com/facebook/react/pull/13728

---

👀 After previous tweets by the React Core team (https://twitter.com/acdlite/status/1032174419337039872), Dominic (@trueadm) now landed a commit that renames AsyncMode to ConcurrentMode.

Async React is now Concurrent React!

https://github.com/facebook/react/pull/13732

---

⚡️ Alex Reardon (@alexandereardon) started an interesting discussion about comparing the performance of react-redux to a single, shared React Context. Dig in for insights into the different models and their restrictions.

https://github.com/facebook/react/issues/13739

---

⏳ Andrew (@acdlite) also added an API for modifying priority levels to the scheduler. This makes it possible to enqueue high priority state changes that should be flushed earlier.

Expect an RFC soon to finalize the names.

https://github.com/facebook/react/pull/13720

---

🎟 Sergei Startsev (sergei-startsev) worked on a fix to prevent React from overwriting window.event in event callbacks when using a development build. The PR is also a great example of the throughout manual testing we do for React DOM.

https://github.com/facebook/react/pull/13697

---

🔭 React is currently listening to DOM events on the document level. If you’re curious about potential alternatives which we’re considering as part of React Fire, check out my write-up about this topic.

https://github.com/facebook/react/issues/13713

---

🙌 Special thanks to our first-time contributors this week: Brian Ng (@existentialism), Dustin Schau (@schaudustin), Lionel (elrumordelaluz), and Sergei Startsev (sergei-startsev).

And that was all for This Week in React ⚛️
