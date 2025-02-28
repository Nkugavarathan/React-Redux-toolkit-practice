import { createSlice } from "@reduxjs/toolkit"

//A slice is a mini Redux store with state and actions.

// these three (name, initialState, reducers) are required. Otherwise, createSlice won't work.
// const initialState = []
const cartSlice = createSlice({
  name: "cart", // Name of the slice
  initialState: [], // Initial state (empty array for cart)
  reducers: {
    // Reducers (functions that modify state)
    add(state, action) {
      //This action adds a product to the state (cart).
      state.push(action.payload) // Adds the payload (product) to the array.
      //payload is the actual data we send when calling dispatch().
      // It tells Redux what needs to be added/removed.
    },

    /*
    dispatch(add({ id: 1, name: "Laptop", price: 1000 }))
Here, { id: 1, name: "Laptop", price: 1000 } is the payload.
This data gets passed to the reducer:

add(state, action) {
  state.push(action.payload)  // Adds the product (payload) to the cart
}
Final cart state:

[{ id: 1, name: "Laptop", price: 1000 }]
    
    */

    remove(state, action) {
      //his action removes a product from the state (cart).
      return state.filter((item) => item.id !== action.payload) //his filters out the product with the id that matches the action.payload (which is the product's id).
      /*
dispatch(remove(1))  // This means we want to remove the product with ID = 1
Here, 1 is the payload (product ID).
The reducer filters out the product with the same ID.

      (item) => item.id !== action.payload:
This is the condition used to filter the array.
For each item in the state array (which represents the products in the cart), it checks if the item.id is not equal to the action.payload.
action.payload is the product ID that we want to remove from the cart (passed when calling the remove action).

state.filter((item) => item.id !== action.payload) filters out the item whose id matches the action.payload (product ID to be removed).
*/
    },
  },
})

export const { add, remove } = cartSlice.actions
export default cartSlice.reducer
