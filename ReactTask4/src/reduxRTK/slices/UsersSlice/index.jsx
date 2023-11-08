import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
    user: {}
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        get_users: (state, action)=>{
            state.value = action.payload
        },
        get_user: (state, action)=>{
            state.user = action.payload
        }
    }
})
export const {get_users, get_user} = usersSlice.actions
export default usersSlice.reducer