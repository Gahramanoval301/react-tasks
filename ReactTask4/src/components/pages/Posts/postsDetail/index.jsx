import React, { useEffect } from 'react'
import PageContainer from '../../../PageContainer'
import { useParams } from 'react-router'
import { get_single_comments } from '../../../slices/Postsslice/index.jsx'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import styles from './index.module.css'


const url = 'https://dummyjson.com/comments?limit=300'

const PostsDetail = () => {
    const comments = useSelector((state) => state.posts.comments)
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        axios.get(url).then(({ data: { comments } }) => {
            const newComments = comments.filter((comment) => {
                return comment.user.id == id
            } )
            dispatch(get_single_comments(newComments))
        })
    }, [])
    return (
        <PageContainer>
            {
                comments.map(({id, body, user:{username}})=>{
                    return(
                        <div key={id} className={styles.commentsContainer}>
                            <h2>{`#${username}`}</h2>
                            <p>{body}</p>
                        </div>
                    )
                })
            }
        </PageContainer>
    )

}

export default PostsDetail
