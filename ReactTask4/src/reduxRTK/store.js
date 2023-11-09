import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './slices/UsersSlice'
import PostsReducer from './slices/Postsslice'
export const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: PostsReducer
    }

})