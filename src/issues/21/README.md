It’s Friday again which means it’s time for another dose of React news.

---

## 📌 Add `eslint-plugin-react-hooks/exhaustive-deps`

The ESLint plugin for React hooks now has a new `exhaustive-deps` rule that verifies that the proper dependency array is specified. It [also warns](https://github.com/facebook/react/pull/14916) when assigning a to variable from an outside closure.

<br/>
<center><img src="https://gallery.mailchimp.com/155aa5558694a008de40fe987/images/32881af9-4fb3-4237-80dc-46ea7d764a47.gif" width="260" alt="Screenshot of new ESLint plugin eslint-plugin-react-hooks/exhaustive-deps that shows how the auto fix feature can automatically insert all dependencies into the second array of a useEffect hook."/></center>

https://github.com/facebook/react/pull/14636

---

## 🤹‍♀️ `act()` Examples

Sunil ([threepointone](https://github.com/threepointone)) created notes that explains the necessity of the new `act()` API for writing tests that should resemble production behavior.

https://github.com/threepointone/react-act-examples

---

## 🗺 RFC: `createElement` Changes

A new RFC outlines changes to `React.createElement()` that simplifies the object representation and will also allow `forwardRef` to be removed in the future.

https://github.com/reactjs/rfcs/pull/107

---

## 🌍 New React Internationalization Repo: Greek

The list of internationalization repos is still growing. This week, we’re adding the Greek repository.

https://github.com/reactjs/el.reactjs.org

---

## 🕳 Deal with Fallback Content in Partial Hydration

This PR allows a dehydrated suspense boundary to be in three possible states (as encoded with different comment nodes).

https://github.com/facebook/react/pull/14884

---

## 🐞 Fix UMD Builds by Re-exporting the Scheduler Priorities

A recent regression caused the v16.8.2 release to break input elements when using the UMD build. This was fixed by properly exporting the Scheduler priorities.

https://github.com/facebook/react/pull/14914

---

## 📌 React v16.8.3 Patch Release

This release fixes several bugs around React DOM.

https://github.com/facebook/react/releases/tag/v16.8.3

---

## 👏 55 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week.

https://gist.github.com/philipp-spiess/cf49fa6dac04dd4ee4146cf25b7b1a80

---

With that we’re wrapping up another phenomenal week. See you all soon! 👋
