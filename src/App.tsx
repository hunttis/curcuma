import "./App.scss"
import { Router } from "react-router"
import React, { useState } from "react"
import { firebaseConfig } from "./config/config"

import { initializeApp } from "firebase/app"

import { getDatabase, ref, onValue } from "firebase/database"
import { MainView } from "./components/mainview/MainView"
import "~/style.css"
import { CurcumaProvider } from "./app/curcuma-context"

const App = () => {
  const firebaseApp = initializeApp(firebaseConfig)
  const db = getDatabase(firebaseApp)

  //# I want to get the events data from the firebase db and store it in the redux store

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
      <CurcumaProvider>
        <MainView />
      </CurcumaProvider>
    </div>
  )
}

export default App
