import React, { useEffect, useState } from 'react'
import PageContainer from '../../PageContainer'
import axios from "axios"

const urlFollowers = "https://api.github.com/users/Ali-GreenHeart/followers";

const Followers = () => {
    const [followers, setFollowers] = useState([])
    useEffect(() => { axios.get(urlFollowers).then(({ data }) => { setFollowers(data); }) }, [])

    return (
        <PageContainer>
            <div>Followers</div>
            {
                followers.map(follower => {
                    return (
                        <div key={follower.id}>
                            <img src={follower.avatar_url} alt={follower.login} />
                            <p>{follower.login}</p>
                        </div>
                    )
                })
            }

        </PageContainer>)
}

export default Followers