import React, { useEffect } from 'react'
import PageContainer from '../../../PageContainer'
import { useParams } from 'react-router'
import { get_user } from '../../../../reduxRTK/slices/UsersSlice'
import { useDispatch, useSelector } from 'react-redux'
import styles from './index.module.css'

const url = 'https://dummyjson.com/users?limit=80'

const UsersDetail = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.users.user)

    useEffect(() => {
        fetch(url).then(res => res.json()).then(({ users }) => {
            const myUser = users.find(({ username }) => username == name)
            dispatch(get_user(myUser))
        })
    }, [])
    const { name } = useParams()
    console.log('name', name);
    console.log('user', user);

    return (
        <PageContainer>
            <div className={styles.userCard}>
                <h1>Personal Informations of {user.firstName} {user.lastName}</h1>
                <div>
                    <img src={user.image} alt={`${user.firstName} ${user.lastName}'s photo`} />
                    <h3>{user.firstName} {user.lastName}</h3>
                    <p>Maiden Name: <span>{user.maidenName}</span></p>
                    <p>User Name: <span>{user.username}</span></p>
                    <p>Birth Date: <span>{user.birthDate}</span></p>
                    <section className={styles.section}><h2>Body Informations:</h2></section>
                    <p>Height: <span>{user.height}</span></p>
                    <p>Weight: <span>{user.weight}</span></p>
                    <p>Blood Group: <span>{user.bloodGroup}</span></p>
                    <p>Eye Color: <span>{user.eyeColor}</span></p>
                    <section className={styles.section}><h2>Contact Informations:</h2></section>
                    <p>Email: <span>{user.email}</span></p>
                    <p>Phone: <span>{user.phone}</span></p>
                </div>
            </div>
        </PageContainer>
    )
}

export default UsersDetail