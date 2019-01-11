Hey everyone! I’m excited to be back with This Week in React. Last year was a [phenomenal year](https://hswolff.com/blog/react-year-in-review-2018/) for React and I can’t wait to see what this year will bring! Let’s start by looking at the past weeks.

---

## 📌 WIP: Support Hooks in DevTools

![Support for Hooks in DevTools allows you to inspect useState state values, useCallback functions, and even deeply nested custom hooks.](https://gallery.mailchimp.com/155aa5558694a008de40fe987/images/7ad1d9da-5371-42c9-a3fc-1b1044017eff.gif)

While the core team is getting hooks ready for a stable release, this work in progress pull request gives an early glimpse of the new DevTools integration.

https://github.com/facebook/react-devtools/pull/1272

---

## ➡️ Rename `useImperativeMethods` to `useImperativeHandle`

The hook to customize the instance value that is exposed to parent components when using `ref` is now called `useImperativeHandle`.

https://github.com/facebook/react/pull/14565

---

## 👀 DevTools: Better Display for String Contexts

Context values that hold a primitive data type are now properly formatted in DevTools.

https://github.com/facebook/react-devtools/pull/1256

---

## 🛠 Separate Current Owner and Dispatcher

These two private APIs give deep access to React internals and a few external libraries depend on them. If your library does, check out the pull request for a migration strategy.

https://github.com/facebook/react/pull/14548

---

## 🌀 Release 16.8.0-alpha.0

If you’ve played around with hooks before using the alpha release, make sure to upgrade to 16.8.0-alpha.0 and benefit from all bug fixes that were published with 16.7.0.

https://twitter.com/dan_abramov/status/1083139151720001543

---

## 👏 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [reactjs.org](https://github.com/reactjs/reactjs.org) repositories every week. A special round of applause for this week goes to:

 - [0xflotus](https://github.com/0xflotus)
 - Aditya Agarwal ([itaditya](https://github.com/itaditya))
 - Arash ([arash817](https://github.com/arash817))
 - Daniel Husar ([danielhusar](https://github.com/danielhusar))
 - David Leuliette ([flexbox](https://github.com/flexbox))
 - Ilja Daderko ([IljaDaderko](https://github.com/IljaDaderko))
 - Madelyn Eriksen ([madelyneriksen](https://github.com/madelyneriksen))
 - Mikhail Vasin ([mvasin](https://github.com/mvasin))
 - Sahil Mhapsekar ([apherio](https://github.com/apherio))
 - Sebastian Silbermann ([eps1lon](https://github.com/eps1lon))
 - Vincent ([Vinnl](https://github.com/Vinnl))
 - Yifei Fu ([yifei-fu](https://github.com/yifei-fu))

This rounds up all the latest changes to React and React DOM. See you next week. 👋
