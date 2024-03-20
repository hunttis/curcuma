import React, { createContext, useContext } from "react"
import { TourmericEvent } from "~/models/Events"
import { Category } from "~/models/Category"
import { DatabaseReference, child, get, getDatabase, onValue, ref } from "firebase/database"
import { Settings } from "~/models/Settings"

interface CurcumaContextData {
  events: { [key: string]: TourmericEvent }
  categories: { [key: string]: Category }
  settings: Settings | undefined
}

const initialContextValue: CurcumaContextData = {
  events: {},
  categories: {},
  settings: undefined,
}

export const CurcumaContext: React.Context<CurcumaContextData> =
  createContext<CurcumaContextData>(initialContextValue)

export const useCurcumaContext = (): CurcumaContextData => useContext(CurcumaContext)

export const CurcumaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [events, setEvents] = React.useState<{ [key: string]: TourmericEvent }>({})
  const [categories, setCategories] = React.useState<{
    [key: string]: Category
  }>({})
  const [settings, setSettings] = React.useState<Settings>()

  React.useEffect(() => {
    const db = getDatabase()
    const eventsRef: DatabaseReference = ref(db, "events")
    const categoriesRef: DatabaseReference = ref(db, "categories")
    const settingsRef: DatabaseReference = ref(db, "settings")

    onValue(eventsRef, snapshot => {
      const eventsData = snapshot.val()
      setEvents(eventsData)
    })

    onValue(categoriesRef, snapshot => {
      const categoriesData = snapshot.val()
      setCategories(categoriesData)
    })

    onValue(settingsRef, snapshot => {
      const settingsData = snapshot.val()
      setSettings(settingsData)
    })
  }, [])

  const contextValue = React.useMemo<CurcumaContextData>(
    () => ({
      events,
      categories,
      settings,
    }),
    [events, categories],
  )

  return React.createElement(CurcumaContext.Provider, { value: contextValue }, children)
}
