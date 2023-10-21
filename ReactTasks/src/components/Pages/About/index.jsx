import React from 'react'
import PageContainer from '../../PageContainer'
import styles from './index.module.css'

const About = () => {
  return (
    <PageContainer>
        <section className={styles.main}>
                <h1 style={{color:'darkred', letterSpacing: 5, textAlign:'center'}}>
                    My About Page</h1>
                <div className='text'>
                    <h3>Facts About Cat Anatomy & Physiology</h3>
                    <ol>
                        <li>Cats are believed to be the only mammals who don’t taste sweetness. </li>
                        <li>Cats are nearsighted, but their peripheral vision and night vision are much better than that of humans.</li>
                        <li>Cats are supposed to have 18 toes (five toes on each front paw; four toes on each back paw).</li>
                        <li>Cats can jump up to six times their length.</li>
                        <li>Cats’ claws all curve downward, which means that they can’t climb down trees head-first. Instead, they have to back down the trunk.</li>
                        <li>Cats’ collarbones don’t connect to their other bones, as these bones are buried in their shoulder muscles.</li>
                        <li>Cats have 230 bones, while humans only have 206.</li>
                        <li>Cats have an extra organ that allows them to taste scents on the air, which is why your cat stares at you with her mouth open from time to time.</li>
                        <li>Cats have whiskers on the backs of their front legs, as well.</li>
                        <li>Cats have nearly twice the amount of neurons in their cerebral cortex as dogs.</li>
                        <li>Cats have the largest eyes relative to their head size of any mammal.</li>
                        <li>Cats make very little noise when they walk around. The thick, soft pads on their paws allow them to sneak up on their prey — or you!</li>
                        <li>Cats’ rough tongues can lick a bone clean of any shred of meat.</li>
                    </ol>
                </div>
                <div className='kedy'>
                    <img src="../../../../public/kedy.avif" alt="kedy" />
                </div>
            </section>
    </PageContainer>
    
  )
}

export default About