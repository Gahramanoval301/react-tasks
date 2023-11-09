import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: [],
    comments: [],
    reactions: 0
}

const PostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        get_posts: (state, action)=>{
            state.value = action.payload
        },
        get_comments: (state, action)=>{
            state.comments = action.payload
        },
        get_single_comments: (state, action)=>{
            state.comments = action.payload
        },
        increase_reaction: (state, action)=>{
            state.reactions = ++action.payload
        }
    }
}) 
export default PostsSlice.reducer
export const {get_posts, get_comments, get_single_comments, increase_reaction} =  PostsSlice.actions