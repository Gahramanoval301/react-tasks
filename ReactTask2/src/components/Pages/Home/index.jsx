import React from 'react'
import PageContainer from '../../PageContainer'

const Home = () => {
  return (
    <PageContainer>
        <div className='home'>We have 3 choises:
            <ul>
                <li>Owner own data</li>
                <li>Owner's followers data</li>
                <li>Repos data</li>
            </ul>
        </div>
    </PageContainer>
  )
}

export default Home