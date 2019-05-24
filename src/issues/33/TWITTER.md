Bonjour everyone! It’s time for another issue of This Week in React.

🔄 React Fresh
🛠 Inform DevTools of Commit Priority Level
🧪 Flush Only on Exiting Outermost act()
👀 and more!

Subscribe at http://this-week-in-react.org and read the thread below!

---

🔄 The team started to work on React Fresh, a new generation of hot reloading. Changes include:

➡ Initial scaffolding: https://github.com/facebook/react/pull/15619
➡ Infrastructure: https://github.com/facebook/react/pull/15698
➡ and more!

Check out this Tweet by @dan_abramov for more info:

https://twitter.com/dan_abramov/status/1126948870137753605?s=20

---

🛠 React now exposes information about the commit priority level to DevTools.

https://github.com/facebook/react/pull/15664

---

🧪 act() will now only flush on exiting the outermost callback.

This changes the behavior of nested act() calls.

https://github.com/facebook/react/pull/15682

---

🇭🇺 You can now help translate the official React documentations to Hungarian.

https://github.com/reactjs/reactjs.org

---

👷‍♀️ The React repository CI tests now using the CircleCI Workflows feature.

This improves status reporting in GitHub.

https://github.com/facebook/react/pull/15704

---

🎇 More work on React Flare:

➡ Updated interactiveUpdates flushing heuristics: https://github.com/facebook/react/pull/15687
➡ getAbsoluteBoundingClientRect now accounts for fixed elements: https://github.com/facebook/react/pull/15707
➡ getEventCurrentTarget now uses the fiber tree: https://github.com/facebook/react/pull/15708
and more.

---

🚧 The fuzz tester is now run on CI periodically with a randomly generated seed.

https://github.com/facebook/react/pull/15718

---

🐛 This change fixes an issue in the fiber code by assign the missing return pointer correctly.

https://github.com/facebook/react/pull/15700

---

🛤 React Native is moving to path-based imports from the globally-unique-named Haste system.

https://github.com/facebook/react/pull/15604

---

🇪🇺 ReactEurope Recap

I’m writing today’s newsletter from ReactEurope in Paris and there are so many amazing talks. You can catch up by looking at my Twitter thread.

https://twitter.com/PhilippSpiess/status/1131457729250385921

---

👏 This week, 16 people made their first commit in one of the React repositories.

I'm still amazed by how many people are constantly working on making React better. ✨

https://git.io/fjBPf

---

Thank you for following. Don’t forget to like and RT! 👋
