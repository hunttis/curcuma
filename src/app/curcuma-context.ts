import React, { createContext, useContext } from "react"
import { TourmericEvent } from "~/models/Events"
import { Category } from "~/models/Category"
import firebase from "firebase/compat/app"
import { DatabaseReference, child, get, getDatabase, onValue, ref } from "firebase/database"

// Define the shape of your context data
interface CurcumaContextData {
  events: { [key: string]: TourmericEvent }
  categories: { [key: string]: Category }
}

// Create the initial context value
const initialContextValue: CurcumaContextData = {
  events: {},
  categories: {},
}

// Create the context
export const CurcumaContext: React.Context<CurcumaContextData> = createContext<CurcumaContextData>(initialContextValue)

// Create a custom hook to access the context value
export const useCurcumaContext = (): CurcumaContextData => useContext(CurcumaContext)

// Create a provider component to wrap your app
export const CurcumaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Define the state for events and categories
  const [events, setEvents] = React.useState<{ [key: string]: TourmericEvent }>({})
  const [categories, setCategories] = React.useState<{
    [key: string]: Category
  }>({})

  React.useEffect(() => {
    const db = getDatabase()
    const eventsRef: DatabaseReference = ref(db, "events")
    const categoriesRef: DatabaseReference = ref(db, "categories")

    onValue(eventsRef, snapshot => {
      const eventsData = snapshot.val()
      setEvents(eventsData)
    })

    onValue(categoriesRef, snapshot => {
      const categoriesData = snapshot.val()
      setCategories(categoriesData)
    })
  }, [])

  const contextValue = React.useMemo<CurcumaContextData>(
    () => ({
      events,
      categories,
    }),
    [events, categories],
  )

  return React.createElement(CurcumaContext.Provider, { value: contextValue }, children)
}
