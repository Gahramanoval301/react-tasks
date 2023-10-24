import React, { useContext } from 'react'
import styles from './index.module.css'

import { UserContext } from '../../context-api/UsersContext'
const Users = () => {
    const [users, setUsers] = useContext(UserContext)
    return (
        <>
            <div className={styles.usersContainer}>
                {
                    users.map(({ id, address: { street, city } }) => {
                        return (
                            <div className={styles.user} key={id}>
                                <h1>{city}</h1>
                                <p>{street}</p>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Users