import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './src/components/slices/UsersSlice'
import PostsReducer from './src/components/slices/Postsslice'
export const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: PostsReducer
    }

})