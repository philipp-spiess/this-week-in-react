Another week has passed and it is time again for your weekly dose of React news. This week, we got a very special community effort to begin with:

---

## 🌏 reactjs.org Internationalization Using Forks

With the big help of Nat Alison ([tesseralis](https://github.com/tesseralis)) and the community, we’re starting to internationalize the official React documentation using forks of the english repository. Want to get involved? Check out the three initial forks:

- Simplified Chinese: [reactjs/zh-hans.reactjs.org](https://github.com/reactjs/zh-hans.reactjs.org)
- Spanish: [reactjs/es.reactjs.org](https://github.com/reactjs/es.reactjs.org)
- Japanese: [reactjs/ja.reactjs.org](https://github.com/reactjs/ja.reactjs.org)

https://github.com/reactjs/reactjs.org/issues/1605

---

## ☯️ Phased Dispatcher

The hooks module was refactored to use separate dispatchers for the mount and update phases. This speeds up initial render by removing update-only branches from the hot path.

https://github.com/facebook/react/pull/14701

---

## 🏞 WIP: Partial Hydration

The Core team is working on a new partial hydration mode that can start hydrating a server rendered result while some parts are still loading. The goal is decrease the time to interactive.

https://github.com/facebook/react/pull/14717

---

## 📚 `useReducer` Lazy Initialization API

The `useReducer` API to lazily initialize the state was changed so you can provide an initializer function instead of initial actions that had to be handled in the reducer itself.

https://github.com/facebook/react/pull/14723

---

## 📌 Warn When Second Argument Is Passed to `useContext`

In the initial alpha version, the second argument to `useContext` could be used to set the `observedBits`. React now warns when a second argument is passed and the team can thus change the meaning later.

https://github.com/facebook/react/pull/14729

---

## 👏 First-Time Contributors

New contributors land their first PR in the [react](https://github.com/facebook/react), [devtools](https://github.com/facebook/react-devtools), or [documentation](https://github.com/reactjs/reactjs.org) repositories every week. A special thank you to everyone helping us get the internationalization project rolling:

 - David Morales ([dmoralesm](https://github.com/dmoralesm))
 - DeepCold ([deepcoldy](https://github.com/deepcoldy))
 - Deniz Susman ([DenrizSusam](https://github.com/DenrizSusam))
 - Disney ([discountry](https://github.com/discountry))
 - HANATANI Takuma ([potato4d](https://github.com/potato4d))
 - Jesse Katsumata ([Naturalclar](https://github.com/Naturalclar))
 - Kevin Wolf ([kevinwolfcr](https://github.com/kevinwolfcr))
 - Lochlan Bunn ([loklaan](https://github.com/loklaan))
 - Nat Alison ([tesseralis](https://github.com/tesseralis))
 - Peter Donald ([realityforge](https://github.com/realityforge))
 - QiChang Li ([QC-L](https://github.com/QC-L))
 - Rainer Martínez Fraga ([carburo](https://github.com/carburo))
 - saito ([saitoeku3](https://github.com/saitoeku3))
 - Soichiro Miki ([smikitky](https://github.com/smikitky))

Have a great weekend everyone and see you next week. 👋
