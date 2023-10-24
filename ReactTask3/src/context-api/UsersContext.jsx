import { useEffect } from "react";
import { createContext, useState } from "react";
import axios from 'axios'

export const UserContext = createContext([])
const url = 'https://jsonplaceholder.typicode.com/users';
export const UserContextProvider = ({ children }) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(url).then(({ data  }) => { setUsers(data) })
    }, [])
 
    return (
        <UserContext.Provider value={[users, setUsers]}>
            {children}
        </UserContext.Provider>
    )
} 