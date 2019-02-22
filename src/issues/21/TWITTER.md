💉️ It’s Friday again which means it’s time for another dose of React news.

📌 eslint-plugin-react-hooks/exhaustive-deps
🤹‍♀️ act() Examples
🗺 RFC: createElement Changes
👀 and more!

👉💌 Read the thread below and subscribe at this-week-in-react.org. 👇

---

📌 The ESLint plugin for React hooks now has a new exhaustive-deps rule that verifies that the proper dependency array is specified.

It also warns when assigning to a variable from an outside closure.

👉 npm install eslint-plugin-react-hooks

https://github.com/facebook/react/pull/14636

![](https://gallery.mailchimp.com/155aa5558694a008de40fe987/images/32881af9-4fb3-4237-80dc-46ea7d764a47.gif)

---

🤹‍♀️ Sunil (@threepointone) created notes that explains the necessity of the new act() API for writing tests that should resemble production behavior.

https://github.com/threepointone/react-act-examples

---

🗺 A new RFC outlines changes to React.createElement() that simplifies the object representation and will also allow forwardRef to be removed in the future.

https://github.com/reactjs/rfcs/pull/107

---

🌍 The list of internationalization repos is still growing. This week, we’re adding the Greek repository:

https://github.com/reactjs/el.reactjs.org

---

🕳 A PR to deal with fallback content in partial hydration added support for dehydrated suspense boundary in three possible states.

https://github.com/facebook/react/pull/14884

---

🐞 A recent regression caused the v16.8.2 release to break input elements when using the UMD build.

This was fixed by properly exporting the Scheduler priorities.

https://github.com/facebook/react/pull/14914

---

📌 React v16.8.3 Patch Release

This release fixes several bugs around React DOM.

https://github.com/facebook/react/releases/tag/v16.8.3

---

👏 This week, 55 people made their first commit in one of the React repositories.

Thank you to all these amazing people that help to jump-start our internationalization effort and push React forward every week. You are incredible. 💕

https://git.io/fhFHj

---

With that we’re wrapping up another phenomenal week.

See you all next week!

👋
