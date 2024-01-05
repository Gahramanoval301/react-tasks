import React, { useEffect } from 'react'
import PageContainer from '../../PageContainer'
import { get_posts, get_comments, increase_reaction } from '../../../reduxRTK/slices/PostsSlice'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

//* endpoint urls
const url1 = 'https://dummyjson.com/posts?limit=100'
const url2 = 'https://dummyjson.com/comments?limit=300'

const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.value)
  const comments = useSelector((state) => state.posts.comments)

  //* get datas from endpoint-backend with API
  useEffect(() => {
    axios.get(url1).then(({ data }) => { dispatch(get_posts(data.posts)) })
    axios.get(url2).then(({ data }) => { dispatch(get_comments(data.comments)) })
  }, [])

  //* Removing of the same userIds from comments
  const result = comments.reduce((accumulator, current) => {
    let exists = accumulator.find(item => {
      return item.user.id === current.user.id;
    });
    if (!exists) {
      accumulator = accumulator.concat(current);
    }
    return accumulator;
  }, []);

  return (
    <PageContainer>
      <h1 style={{ color: 'navy', letterSpacing: 2, textAlign: 'center' }}>Posts</h1>
      <div className={styles.posts}>
        {
          posts.map(({ id, title, body, tags, reactions, userId }) => {
            return (
              <div key={id} className={styles.postCard}>
                <h3>{title}</h3>
                <div className={styles.ownerCard}>
                  {
                    result.map((comment) => {
                      if (comment.user.id === userId) {
                        return (
                          <p key={userId}>{`@${comment.user.username}`}</p>
                        )
                      }
                    })
                  }
                  <p>{`#${tags[0]} #${tags[1]} #${tags[2]} `}</p>
                </div>
                <p>{body}</p>
                <div className={styles.infoCard}>
                  <button><Link style={{ color: 'hotpink' }} to={`/posts/${userId}`}>read comments</Link></button>
                  <button onClick={() => dispatch(increase_reaction(2))}>❤: {reactions}</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </PageContainer>
  )
}

export default Posts