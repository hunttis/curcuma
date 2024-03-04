import { TourmericEvent } from "../../models/Events"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction, Slice } from "@reduxjs/toolkit"

export interface EventsState {
  value: { [key: string]: TourmericEvent }
}

const initialState: EventsState = {
  value: {},
}

export const eventsSlice: Slice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvents: (
      state: EventsState,
      action: PayloadAction<{ [key: string]: TourmericEvent }>,
    ) => {
      state.value = action.payload
    },
  },
})

export const { addEvents } = eventsSlice.actions
export default eventsSlice.reducer
