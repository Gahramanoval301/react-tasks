import {configureStore} from '@reduxjs/toolkit'
import usersReducer from '../components/slices/UsersSlice'
import PostsReducer from '../components/slices/Postsslice'
export const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: PostsReducer
    }

})