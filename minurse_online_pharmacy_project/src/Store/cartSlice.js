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
            state.totalPrice = state.itemList.reduce((accumulator, item) => accumulator + item.cummulativePrice, 0)
        }
        ,
        increaseQuantity: (state, action) => {
            const newItem = action.payload
            const existingItem = state.itemList.findIndex((item) => item.id === newItem)
            if (existingItem >= 0) {
                state.itemList[existingItem].quantity += 1
                state.itemList[existingItem].cummulativePrice = state.itemList[existingItem].price * state.itemList[existingItem].quantity
            }
            state.totalQuantity = state.itemList.reduce((accumulator, item) => accumulator + item.quantity, 0)
            state.totalPrice = state.itemList.reduce((accumulator, item) => accumulator + item.cummulativePrice, 0)
        },
        decreaseQuantity: (state, action) => {
            const newItem = action.payload
            const existingItem = state.itemList.findIndex((item) => item.id === newItem)
            if (existingItem >= 0) {
                state.itemList[existingItem].quantity -= 1
                state.itemList[existingItem].cummulativePrice = state.itemList[existingItem].price * state.itemList[existingItem].quantity
                state.totalQuantity = state.itemList.reduce((accumulator, item) => accumulator + item.quantity, 0)
                state.totalPrice = state.itemList.reduce((accumulator, item) => accumulator + item.cummulativePrice, 0)
            }
        }
        ,
        removeFromCart: (state, action) => {
            const indexOfItem = state.itemList.findIndex(item => item.id === action.payload)
            state.itemList.splice(indexOfItem, 1)
            state.totalQuantity = state.itemList.reduce((accumulator, item) => accumulator + item.quantity, 0)
            state.totalPrice = state.itemList.reduce((accumulator, item) => accumulator + item.cummulativePrice, 0)
        },
        clearAllItems: (state) => {
            state.itemList = []
        }
    }
})
export const cartActions = cartSlice.actions
export default cartSlice