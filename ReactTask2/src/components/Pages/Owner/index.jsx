import React, { useEffect, useState } from 'react'
import PageContainer from '../../PageContainer'
import axios from 'axios'

const urlRepo = "https://api.github.com/users/Ali-GreenHeart/repos";
const urlFollowers = "https://api.github.com/users/Ali-GreenHeart/followers";
const urlFollowings = "https://api.github.com/users/Ali-GreenHeart/following";
const Owner = () => {
    const [repos, setRepos] = useState([])
    const[followers, setFollowers] = useState([])
    const[followings, setFollowings] = useState([])
    useEffect(() => { axios.get(urlRepo).then(({ data }) => { setRepos(data); }) }, [])
    useEffect(() => { axios.get(urlFollowers).then(({ data }) => { setFollowers(data); }) }, [])
    useEffect(() => { axios.get(urlFollowings).then(({ data }) => { setFollowings(data); }) }, [])


    return (
        <PageContainer>
            <img src='https://avatars.githubusercontent.com/u/56336368?v=4' alt="" />
            <p>Repo sayi: {repos.length}</p>
            <p>Followers sayi: {followers.length}</p>
            <p>Following sayi: {followings.length}</p>


        </PageContainer>
    )
}

export default Owner