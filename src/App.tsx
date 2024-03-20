import { firebaseConfig } from "./config/config"

import { initializeApp } from "firebase/app"

import { getDatabase } from "firebase/database"
import { MainView } from "./components/mainview/MainView"
import "~/App.scss"

const App = () => {
  const firebaseApp = initializeApp(firebaseConfig)

  return (
    <div className="App">
      <MainView />
    </div>
  )
}

export default App
