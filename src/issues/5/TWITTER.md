I can't believe it's already time for the fifth issue of This Week In React ⚛️.

This week we got four new RFCs: React.pure(), React.lazy(), Static contextType, and shouldComponentRemount and a lot more.

Subscribe at this-week-in-react.org or read the thread right here 👇

---

🔥 We start with the first RFC filed for for React.pure() - an API that lets you bail out of updates from a function component, similar to PureComponent for classes.

https://github.com/reactjs/rfcs/pull/63

---

💥 To make it easier to code split individual components in React, the new React.lazy() API adds first-class support by embracing dynamic imports.

https://github.com/reactjs/rfcs/pull/64

---

🚀 The address some of the problems with render props for the new Context API, the Core team is working on static contextType as a new consuming mechanism. Also make sure to check out the preliminary documentation PR.

https://github.com/reactjs/rfcs/pull/65
https://github.com/reactjs/reactjs.org/pull/1265

---

⚡️ Alex Krolick (alexkrolick) published an RFC for shouldComponentRemount, a new lifecycle method to control when React mounts and unmounts a component.

https://github.com/reactjs/rfcs/pull/62

---

⏱ The Core team also made small changes to some of the API names for the scheduler - one of the building blocks of React’s upcoming concurrent mode. The API is not final and we can expect an RFC soon.

https://github.com/facebook/react/pull/13842

---

🕵️‍♀️ In an attempt to make React applications easier to maintain, the Core team considers deprecating findDOMNode. The current API is breaking abstraction levels which leads to refactoring hazard.

https://github.com/facebook/react/pull/13841

---

⏪ Last week we were covering a PR that added forwardRef behavior to React.pure() by default. The PR was since reverted while the Core team is working on the future of ref forwarding.

https://github.com/facebook/react/pull/13887

---

🙌 New contributors land their first PR in the react or reactjs.org repositories every week. Thank you this week to: Alex Wilmer (alex-wilmer), Pablo Javier D. A. (devpda), Trivikram Kamat (@trivikram), Tyler McGinnis (@tylermcginnis), and Vasil Raev (Xizario).

---

Next week, the official React Conf 2018 is happening and we will learn more about the future of React - all of which will of course be covered in this newsletter.

Until then 👋
