import "./App.scss"
import { Router } from "react-router"
import React, { useState } from "react"

import { initializeApp } from "firebase/app"
import { firebaseConfig } from "./config/config"
import { getDatabase, ref, onValue } from "firebase/database"
import { MainView } from "./components/mainview/MainView"

const App = () => {
  const firebaseApp = initializeApp(firebaseConfig)
  const db = getDatabase(firebaseApp)
  //   const eventsRef = ref(db, "events")
  //
  //   const [eventList, setEventList] = useState()
  //
  //   onValue(eventsRef, snapshot => {
  //     const data = snapshot.val()
  //     console.log(data)
  //     if (!eventList) {
  //       setEventList(data)
  //     }
  //   })
  return (
    <div className="App">
      <MainView />
    </div>
  )
}

export default App
