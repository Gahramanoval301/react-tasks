import React from 'react'
import PageContainer from '../../PageContainer'
import styles from './index.module.css'
const Contact = () => {
    return (
        <PageContainer>
            <section className={styles.contact}>
                <h1 style={{color:'darkred', letterSpacing: 5, textAlign:'center'}}>
                    My Contact Page</h1>
                <p style={{fontSize:20, letterSpacing: 2}}>
                    Do you want to contact with me ?</p>
                    <ul className={styles.contacts}>
                <li><a href="tel:+99483298347">+99483298347</a></li>
                <li><a href="mailto:lamangahramanoval@gmail.com">lamangahramanoval@gmail.com</a></li>
                    </ul>
            </section>
        </PageContainer>
        )
}

export default Contact