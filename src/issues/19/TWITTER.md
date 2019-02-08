⚛️ Another week has passed and we’re all thrilled to see what happened This Week in React:

🎉 React v16.8: The One With Hooks
🌏 Is React Translated Yet?
🧪 Add TestUtils.act()
👀 and more!

👉💌 Read the thread below and subscribe at this-week-in-react.org. 👇

---

🎉 React v16.8: The One With Hooks

Three month after the initial reveal of React Hooks at React Conf 2018, this feature is now released. If you haven’t heard of hooks before, check out the official documentation: https://reactjs.org/docs/hooks-intro.html

https://reactjs.org/blog/2019/02/06/react-v16.8.0.html

---

🌏 You can now track the status of the React documentation translation effort on this new website:

https://www.isreacttranslatedyet.com/

---

🌍 (1/2) Eight new internationalization repositories were created. Your language is not listed? Get involved!

Azerbaijani: https://github.com/reactjs/az.reactjs.org
French: https://github.com/reactjs/fr.reactjs.org
Indonesian: https://github.com/reactjs/id.reactjs.org
Korean: https://github.com/reactjs/ko.reactjs.org

https://github.com/reactjs/reactjs.org-translation

---

🌍 (2/2)

Portuguese (Brazil): https://github.com/reactjs/pt-BR.reactjs.org
Russian: https://github.com/reactjs/ru.reactjs.org
Traditional Chinese: https://github.com/reactjs/zh-hant.reactjs.org
Vietnamese: https://github.com/reactjs/vi.reactjs.org

---

🧪 Two new test helpers are now available for batching updates so that tests more closely match the real behavior:

ReactTestRenderer.act()
ReactTestUtils.act()

https://github.com/facebook/react/pull/14744

---

⏰ The new Scheduler.unstable_next() API was added to the Scheduler to queue a task with a lower priority than the default priority of interaction callbacks.

This allows CPU or IO-heavy work to run after the UI responds.

https://github.com/facebook/react/pull/14756

---

⏮ A previous pull request caused issues when combining newer renderers with a version of the `react` package that predated the change. This is now fixed.

https://github.com/facebook/react/pull/14770

---

📌 After the big v16.8 release, the team also worked on some smaller bug fixes which are now out as v16.8.1.

Thank you for your hard work!

https://github.com/facebook/react/blob/master/CHANGELOG.md#1681-february-6-2019

---

☕️ In his latest post, React as a UI Runtime, Dan (@dan_abramov) wrote a lot about the internals of React.

👉 Highly recommended.

https://overreacted.io/react-as-a-ui-runtime/

---

👏 (1/5) New contributors land their first PR in the react, devtools, or documentation repositories every week. Thank you for making React better ❤️:

Adiel Hercules (adielhercules)
Agastya Darma (gedeagas)
Alejandro Ñáñez Ortiz (@alejandronanez)
Alex Ramirez (@RamirezAlex_)

---

👏 (2/5)

Alexey Pyltsyn (lex111)
Arfian Adam (arfianadam)
Daiki Ihara (@sasurau4)
David Sánchez (@d4vsanchez)
Ely Alvarado (elyalvarado)
fsubal
Gasim Gasimzada (GasimGasimzada)
Ginpei (@ginpei_en)
Giu Magnani (@_GiuMagnani)
Glaucia Lemos (glaucia86)
hashizumi (hassi32)

---

👏 (3/5)

Hugo Manrique (@hugmanrique)
Jessica Franco (@jessidhia)
Johnathan (jnosornov)
Juan Sebastian velez Posada (jvelezpo)
Jérémie Patonnier (@JeremiePat)
kn3ny
Lorena Correa (Paolore)
Luis Revilla (LuisRevillaM)
Masayuki Goto (gotchane)

---

👏 (4/5)

Michael Cavallaro (michaelcavallaro03)
Miguel Alejandro Bolivar Portilla (Darking360)
Natsuki Inoue (summertree128)
Nikhil Erkimutt (nikhilem)
Rafael Cammarano Guglielmi (rafaelcg)
Robert Ying (robertying)
Sakito Mukai (@__sakito__)
Sato Junichi (sato11)

---

👏 (5/5)

Sergio Xalambrí (@sergiodxa)
shooontan
SToneX (stonexer)
Vick Vasquez (vickvasquez)
Wendell Adriel (@wendell_adriel)
Yuki Terashima (y-temp4)
Yukiya Nakagawa (Nkzn)

---

🔼 With this huge list of incredible people, we’re wrapping up another week.

Thank you very much for following along and don’t forget to invite your friends.

👋
