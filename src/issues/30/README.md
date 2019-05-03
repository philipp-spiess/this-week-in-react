Good Friday everyone! Time for a quick update on React Core and React DOM.

---

## 🎉 DevTools Beta: Component Filters

The [experimental rewrite](https://github.com/bvaughn/react-devtools-experimental) of the React DevTools now comes with an option to filter components based on their name, type, or location.

<br/>
<center><img src="https://gallery.mailchimp.com/155aa5558694a008de40fe987/images/81c021db-1632-4f74-85bd-59c0d161ad90.gif" width="600" alt="Pressing the filter button in the new DevTools shows you options to filter components by name, type, and locaiton."/></center>

https://twitter.com/brian_d_vaughn/status/1123765242767597576

---

## 🎇 React Flare: onFocusVisibleChange

Adds the new `onFocusVisibleChange` API to the `Focus` element. This event will only dispatch if the focus was triggered by a keyboard.

https://github.com/facebook/react/pull/15516

---

## ⏱ Scheduler: Forcing Low Framerate

A new Scheduler API allows forcing of lower frame rates. This is useful especially on lower spec devices that may not run enough tasks within the default frame budget.

https://github.com/facebook/react/pull/14826

---

## 🌍 React Docs Localizations Updates

The Polish localization is now complete!

https://pl.reactjs.org/

---

## 🎇 React Flare Updates

In addition to the `onFocusVisibleChange` API, all experimental event API listeners now use [the capture phase](https://github.com/facebook/react/pull/15526), `isTargetDirectlyWithinEventComponent` [was removed](https://github.com/facebook/react/pull/15546), and [bugs were fixed](https://github.com/facebook/react/pull/15514).

---

## 📘 Building the New Facebook.com

At F8 this week, the new Facebook.com was revealed. This talk takes a deep dive into the new UI architecture and explains how the latest React features are used to build a high quality user experience.

https://developers.facebook.com/videos/2019/building-the-new-facebookcom-with-react-graphql-and-relay/

---

## 👏 15 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week.

https://gist.github.com/philipp-spiess/38088a763bf84803d22869fa98e6a134

---

And with that we’re ready for the weekend. Until next Friday 👋
