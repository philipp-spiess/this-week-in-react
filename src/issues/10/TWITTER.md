I’m thrilled to present the tenth issue of This Week in React ⚛️:

✍️ RFC: Context.write
📌 Hooks RFC Merged
📝 Versioning Policy Page
➡️ ... and more.

Learn more about React insights in the thread below and subscribe at this-week-in-react.org 👇

---

✍️ A new RFC is out about adding support for updating managed state outside of the React UI tree that can be shared across multiple React roots.

https://github.com/reactjs/rfcs/pull/89

---

📌 After over a thousand comments by community members, the core team now merged the RFC. Check out Sebastian’s closing words to learn more about the issues to address before releasing hooks.

https://github.com/reactjs/rfcs/pull/68#issuecomment-440780509

---

⏳ @_developit helped us to reduce serialization overhead when using postMessage (used inside the Scheduler package). Thank you for your contribution!

https://github.com/facebook/react/pull/14249

---

🐢 Adding properties to an object disables certain optimizations. To prevent this, we don’t add properties to the main React object in stable builds anymore.

https://github.com/facebook/react/pull/14309

---

📝 A new documentation page now explains our version policy in detail. Keep in mind those changes are not new but it’s great to have them written down.

https://reactjs.org/docs/faq-versioning.html

---

🚿 To prevent a memory leak, some properties of a fiber are now cleared on unmount.

https://github.com/facebook/react/pull/14276

---

⚠️ Reassigning this.props during rendering can have undesired effects. A new warning now helps to notice this unsupported behavior.

https://github.com/facebook/react/pull/14277

---

🏗 The Dev Tools package is now a lot more modern due to updated Webpack and Babel versions. These newer tools also result in smaller build artifacts.

https://github.com/facebook/react-devtools/pull/1235

---

👏 (1/2) New contributors land their first PR in the react, devtools, or reactjs.org repositories every week. Special applause this week for:

David Edmondson (@threehams)
Isaiah Nields (isaiahnields)
Jason Miller (@_developit)
Manjula Dube (@manjula_dube)

---

👏 (2/2)

open-source-explorer
Rex Raphael (juicycleff)
rthurgood

🙌 Thank you for making React better.

---

That’s it for this week.

Thank you for sticking with us through ten weeks of React insights – to many more!

👋
