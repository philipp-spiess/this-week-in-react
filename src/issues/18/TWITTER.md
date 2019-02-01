⚛️ This Week in React, we got a very special community effort and more exciting news:

🌏 reactjs.org Internationalization Using Forks
☯️ Phased Dispatcher
🏞 Partial Hydration
🚀 and more!

👉💌 Read the thread below and subscribe at this-week-in-react.org. 👇

---

🌏 With the big help of Nat Alison (@tesseralis) and the community, we’re starting to internationalize the official React documentation using forks of the english repo.

Want to get involved? Check out the three initial forks in the issue linked below.

https://github.com/reactjs/reactjs.org/issues/1605

---

☯️ The hooks module was refactored to use separate phased dispatchers for the mount and update phases.

This speeds up initial render by removing update-only branches from the hot path.

https://github.com/facebook/react/pull/14701

---

🏞 The Core team is working on a new partial hydration mode that can start hydrating a server rendered result while some parts are still loading.

The goal is decrease the time to interactive.

https://github.com/facebook/react/pull/14717

---

📚 The useReducer API to lazily initialize the state was changed so you can provide an initializer function instead of initial actions that had to be handled in the reducer itself.

https://github.com/facebook/react/pull/14723

---

📌 In the initial alpha version, the second argument to useContext could be used to set the observedBits.

React now warns when a second argument is passed and the team can thus change the meaning later.

https://github.com/facebook/react/pull/14729

---

👏 (1/3) New contributors land their first PR in the react, devtools, or documentation repositories every week. A special thank you to everyone helping us get the internationalization project rolling:

David Morales (dmoralesm)
DeepCold (deepcoldy)
Deniz Susman (DenrizSusam)

---

👏 (2/3)

David Morales (dmoralesm)
DeepCold (deepcoldy)
Deniz Susman (DenrizSusam)
Disney (@discountifu)
HANATANI Takuma (@potato4d)
Jesse Katsumata (@natural_clar)
Kevin Wolf (@kevinwolfcr)

---

👏 (3/3)

Lochlan Bunn (@loklaan)
Nat Alison (@tesseralis)
Peter Donald (realityforge)
QiChang Li (QC-L)
Rainer Martínez Fraga (carburo)
saito (@saitoeku3)
Soichiro Miki (smikitky)

---

💌 If you like the newsletter, don’t forget to RT and subscribe at this-week-in-react.org.

Have a great weekend everyone and see you next week. 👋
