It’s Friday again: Time for your weekly React Core and React DOM insights. Before we start I’d like to thank you for subscribing to the newsletter ❤️. You can support me by sharing the link to the website ([https://this-week-in-react.org](https://this-week-in-react.org)) and by being patient while I figure out the final format of this 🙂.

---

## 🔥 A new HOC API: pure()

Andrew ([@acdlite](https://twitter.com/acdlite)) added `pure()`, a new HOC to bring PureComponent behavior to functional components.

https://github.com/facebook/react/pull/13748

---

## 📚 Easier Access to Context from Class Components

Brian ([@brian_d_vaughn](https://twitter.com/brian_d_vaughn)) added an API that adds this.context in all callbacks of class components and simplifies migration to the new context.

https://github.com/facebook/react/pull/13728

---

## 👀 Async React Is Now Concurrent React

After [previous tweets](https://twitter.com/acdlite/status/1032174419337039872) by the React Core team, Dominic ([@trueadm](https://twitter.com/trueadm)) now landed a commit that renames AsyncMode to ConcurrentMode.

https://github.com/facebook/react/pull/13732

---

## ⚡️ Context vs. React Redux

Alex Reardon ([@alexandereardon](https://twitter.com/alexandereardon)) started an interesting discussion about comparing the performance of react-redux to a single, shared React Context. Dig in for insights into the different models and their restrictions.

https://github.com/facebook/react/issues/13739

---

## ⏳ Adding Priority Levels to the Scheduler

Andrew ([@acdlite](https://twitter.com/acdlite)) also added an API for modifying priority levels to the scheduler. This makes it possible to enqueue high priority state changes that should be flushed earlier.

Expect an RFC soon to finalize the names.

https://github.com/facebook/react/pull/13720

---

## 🎟 Prevent React from Overwriting window.event

Sergei Startsev ([sergei-startsev](https://github.com/sergei-startsev)) worked on a fix to prevent React from overwriting `window.event` in event callbacks when using a development build. The PR is also a great example of the throughout manual testing we do for React DOM.

https://github.com/facebook/react/pull/13697

---

## 🔭 DOM Event Mount Target Considerations

React is currently listening to DOM events on the document level. If you’re curious about potential alternatives which we’re considering as part of React Fire, check out my write-up about this topic.

https://github.com/facebook/react/issues/13713

---

## 🙌  First-Time Contributors

Special thanks to our first-time contributors this week: Brian Ng ([@existentialism](https://twitter.com/existentialism)), Dustin Schau ([@schaudustin](https://twitter.com/schaudustin)), Lionel ([elrumordelaluz](https://github.com/elrumordelaluz)), and Sergei Startsev ([sergei-startsev](https://github.com/sergei-startsev)).

And that was This Week In React ⚛️
