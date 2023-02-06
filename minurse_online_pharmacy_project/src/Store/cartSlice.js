import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemList: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload
            state.itemList = [newItem, ...state.itemList]
            state.totalQuantity = state.itemList.reduce((accumulator, item) => accumulator + item.quantity, 0)
        }
        ,
        increaseQuantity: (state, action) => {
            const newItem = action.payload
            const existingItem = state.itemList.findIndex((item) => item.id === newItem)
            if (existingItem >= 0) {
                state.itemList[existingItem].quantity += 1
            }
            state.totalQuantity = state.itemList.reduce((accumulator, item) => accumulator + item.quantity, 0)

        },
        decreaseQuantity: (state, action) => {
            const newItem = action.payload
            const existingItem = state.itemList.findIndex((item) => item.id === newItem)
            if (existingItem >= 0) {
                state.itemList[existingItem].quantity -= 1

                state.totalQuantity = state.itemList.reduce((accumulator, item) => accumulator + item.quantity, 0)
            }
        }
        ,
        removeFromCart: (state, action) => {
            const indexOfItem = state.itemList.findIndex(item => item.id === action.payload)
            state.itemList.splice(indexOfItem, 1)
            state.totalQuantity = state.itemList.reduce((accumulator, item) => accumulator + item.quantity, 0)
        },
        clearAllItems: (state) => {
            state.itemList = []
        }
    }
})
export const cartActions = cartSlice.actions
export default cartSlice