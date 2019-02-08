Another great week has passed and we’re all thrilled to see what happened This Week in React ⚛️.

---

## 🎉 React v16.8: The One With Hooks

Three month after the initial reveal of React Hooks at React Conf 2018, this new feature is now part of the latest stable release. If you haven’t heard of hooks before, check out the [official documentation](https://reactjs.org/docs/hooks-intro.html).

https://reactjs.org/blog/2019/02/06/react-v16.8.0.html

---

## 🌏 Is React Translated Yet?

You can now track the status of the React documentation translation effort on this new website: https://www.isreacttranslatedyet.com/

---

## 🌍 New React Internationalization Repos

This week, eight new internationalization repositories were created. Your language is not listed? [Get involved!](https://github.com/reactjs/reactjs.org-translation)

- Azerbaijani: [reactjs/az.reactjs.org](https://github.com/reactjs/az.reactjs.org)
- French: [reactjs/fr.reactjs.org](https://github.com/reactjs/fr.reactjs.org)
- Indonesian: [reactjs/id.reactjs.org](https://github.com/reactjs/id.reactjs.org)
- Korean: [reactjs/ko.reactjs.org](https://github.com/reactjs/ko.reactjs.org)
- Portuguese (Brazil): [reactjs/pt-BR.reactjs.org](https://github.com/reactjs/pt-BR.reactjs.org)
- Russian: [reactjs/ru.reactjs.org](https://github.com/reactjs/ru.reactjs.org)
- Traditional Chinese: [reactjs/zh-hant.reactjs.org](https://github.com/reactjs/zh-hant.reactjs.org)
- Vietnamese: [reactjs/vi.reactjs.org](https://github.com/reactjs/vi.reactjs.org)

https://github.com/reactjs/reactjs.org-translation

---

## 🧪 Add `ReactTestRenderer.act()` and `ReactTestUtils.act()`

Two new test helpers are now available for batching updates so that tests more closely match the real behavior.

https://github.com/facebook/react/pull/14744

---

## ⏰ `Scheduler.unstable_next()`

A new unstable API was added to the Scheduler to queue a task with a lower priority than the default priority of interaction callbacks. This allows CPU or IO-heavy work to run after the UI responds.

https://github.com/facebook/react/pull/14756

---

## ⏮ Backwards Compat Fix for `ReactCurrentDispatcher`

A previous pull request caused issues when combining newer renderers with a version of the `react` package that predated the change. This is now fixed.

https://github.com/facebook/react/pull/14770

---

## 📌 React v16.8.1 Patch Release

After the big v16.8 release, the team also worked on some smaller bug fixes which are now out as well. Thank you for your hard work!

https://github.com/facebook/react/blob/master/CHANGELOG.md#1681-february-6-2019

---

## ☕️ React as a UI Runtime

In this comprehensive article, Dan ([gaearon](https://github.com/gaearon)) wrote a lot about the internals of React. I highly recommend this read: https://overreacted.io/react-as-a-ui-runtime/

---

## 👏 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week. Thank you for making React better ❤️:

 - Adiel Hercules ([adielhercules](https://github.com/adielhercules))
 - Agastya Darma ([gedeagas](https://github.com/gedeagas))
 - Alejandro Ñáñez Ortiz ([alejandronanez](https://github.com/alejandronanez))
 - Alex Ramirez ([RamirezAlex](https://github.com/RamirezAlex))
 - Alexey Pyltsyn ([lex111](https://github.com/lex111))
 - Arfian Adam ([arfianadam](https://github.com/arfianadam))
 - Daiki Ihara ([sasurau4](https://github.com/sasurau4))
 - David Sánchez ([d4vsanchez](https://github.com/d4vsanchez))
 - Ely Alvarado ([elyalvarado](https://github.com/elyalvarado))
 - [fsubal](https://github.com/fsubal)
 - Gasim Gasimzada ([GasimGasimzada](https://github.com/GasimGasimzada))
 - Ginpei ([ginpei](https://github.com/ginpei))
 - Giu Magnani ([GiuMagnani](https://github.com/GiuMagnani))
 - Glaucia Lemos ([glaucia86](https://github.com/glaucia86))
 - hashizumi ([hassi32](https://github.com/hassi32))
 - Hugo Manrique ([hugmanrique](https://github.com/hugmanrique))
 - Jessica Franco ([Jessidhia](https://github.com/Jessidhia))
 - Johnathan ([jnosornov](https://github.com/jnosornov))
 - Juan Sebastian velez Posada ([jvelezpo](https://github.com/jvelezpo))
 - Jérémie Patonnier ([JeremiePat](https://github.com/JeremiePat))
 - [kn3ny](https://github.com/kn3ny)
 - Lorena Correa ([Paolore](https://github.com/Paolore))
 - Luis Revilla ([LuisRevillaM](https://github.com/LuisRevillaM))
 - Masayuki Goto ([gotchane](https://github.com/gotchane))
 - Michael Cavallaro ([michaelcavallaro03](https://github.com/michaelcavallaro03))
 - Miguel Alejandro Bolivar Portilla ([Darking360](https://github.com/Darking360))
 - Natsuki Inoue ([summertree128](https://github.com/summertree128))
 - Nikhil Erkimutt ([nikhilem](https://github.com/nikhilem))
 - Rafael Cammarano Guglielmi ([rafaelcg](https://github.com/rafaelcg))
 - Robert Ying ([robertying](https://github.com/robertying))
 - Sakito Mukai ([sakito21](https://github.com/sakito21))
 - Sato Junichi ([sato11](https://github.com/sato11))
 - Sergio Xalambrí ([sergiodxa](https://github.com/sergiodxa))
 - [shooontan](https://github.com/shooontan)
 - SToneX ([stonexer](https://github.com/stonexer))
 - Vick Vasquez ([vickvasquez](https://github.com/vickvasquez))
 - Wendell Adriel ([WendellAdriel](https://github.com/WendellAdriel))
 - Yuki Terashima ([y-temp4](https://github.com/y-temp4))
 - Yukiya Nakagawa ([Nkzn](https://github.com/Nkzn))

With this huge list of incredible people, we’re wrapping up another week. Thank you for following along. 👋
