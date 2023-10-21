import React from 'react'
import PageContainer from '../../PageContainer'
import { useState, useEffect } from 'react';
import axios from "axios"

const urlRepo = "https://api.github.com/users/Ali-GreenHeart/repos";

const Repos = () => {
    const [repos, setRepos] = useState([])
    useEffect(() => { axios.get(urlRepo).then(({ data }) => { setRepos(data); }) }, [])
    return (
        <PageContainer>
            <div>Repos</div>
            {
                repos.slice(0,10).map(({id, name})=>{
                    return <div key={id}>
                        <p>{name}</p>
                    </div>
                })
            }
        </PageContainer>)
}

export default Repos