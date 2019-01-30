Another week has passed and I’m thrilled to present you the tenth issue of This Week in React ⚛️.

---

## ✍️ RFC: Context.write

A new RFC is out about adding support for updating managed state outside of the React UI tree that can be shared across multiple React roots.

https://github.com/reactjs/rfcs/pull/89

---

## 📌 Hooks RFC Merged

After over a thousand comments by community members, the core team now merged the RFC. Check out Sebastian’s closing words to learn more about the issues to address before releasing hooks.

https://github.com/reactjs/rfcs/pull/68#issuecomment-440780509

---

## ⏳ Reduce Scheduler Serialization Overhead

Jason Miller ([developit](https://github.com/developit)) helped us to reduce serialization overhead when using postMessage (used inside the Scheduler package). Thank you for your contribution!

https://github.com/facebook/react/pull/14249

---

## 🐢 Monomorphic Object Shape for Stable Builds

Adding properties to an object disables certain optimizations. To prevent this, we don’t add properties to the main `React` object in stable builds anymore.

https://github.com/facebook/react/pull/14309

---

## 📝 Versioning Policy Page

A new documentation page now explains our version policy in detail. Keep in mind those changes are not new but it’s great to have them written down.

https://reactjs.org/docs/faq-versioning.html

---

## 🚿 Clear Fiber Fields to Avoid Memory Leak

To prevent a memory leak, some properties of a fiber are now cleared on unmount.

https://github.com/facebook/react/pull/14276

---

## ⚠️ Warn about reassigning this.props

Reassigning `this.props` during rendering can have undesired effects. A new warning now helps to notice this unsupported behavior.

https://github.com/facebook/react/pull/14277

---

## 🏗 Update Dev Tools Build Tooling

The Dev Tools package is now a lot more modern due to updated Webpack and Babel versions. These newer tools also result in smaller build artifacts.

https://github.com/facebook/react-devtools/pull/1235

---

## 👏 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [reactjs.org](https://github.com/reactjs/reactjs.org) repositories every week. Special thank you this week to: David Edmondson ([threehams](https://github.com/threehams)), Isaiah Nields ([isaiahnields](https://github.com/isaiahnields)), Jason Miller ([developit](https://github.com/developit)), Manjula Dube ([manjula91](https://github.com/manjula91)), [open-source-explorer](https://github.com/open-source-explorer), Rex Raphael ([juicycleff](https://github.com/juicycleff)), and [rthurgood](https://github.com/rthurgood).

---

That’s it for this week. Thank you for sticking with us through ten weeks of React insights – to many more!
