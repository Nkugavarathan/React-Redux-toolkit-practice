import { createSlice } from "@reduxjs/toolkit"

//A slice is a mini Redux store with state and actions.

const initialState = []
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload)
    },
  },
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
