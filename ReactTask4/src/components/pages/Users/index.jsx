import React, { useEffect } from 'react'
import PageContainer from '../../PageContainer'
import { useDispatch, useSelector } from 'react-redux'
import { get_users } from '../../../reduxRTK/slices/UsersSlice'
import styles from './index.module.css'
import UsersDetail from './UsersDetail'
import { Link } from 'react-router-dom'

const url = 'https://dummyjson.com/users?limit=80'

const Users = () => {
  const users = useSelector((state) => state.users.value)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(url).then(res => res.json()).then((data) => dispatch(get_users(data.users)))
  }, [])

  return (
    <PageContainer>
      <h1 style={{ color: 'navy', textAlign: 'center', letterSpacing: 5 }}>Employers of AFGO company</h1>
      <div className={styles.usersCards}>
        {
          users.map(({ id, username, image, firstName, lastName, age, company: { department, title, address: { city } } }) => {
            return (
              <div className={styles.userCard} key={id}>
                <img className={styles.userImage} src={image} alt={`${firstName} ${lastName}'s photo`} />
                <h2 style={{ color: 'navy', textAlign: 'center', letterSpacing: 2 }}>{firstName} {lastName}</h2>
                <p className={styles.userAbout}>age: <span>{age}</span> job: <span>{department} - {title}</span></p>
                <div className={styles.userMoreInfo}>
                  <p className={styles.userCity}><img src="../../../../src/assets/city.png" alt="city icon" />{city} </p>
                  <Link to={`/users/${username}`} >Read More...</Link>
                </div>
              </div>
            )
          })
        }

      </div>
    </PageContainer>
  )
}

export default Users