import React from 'react'
import styles from './index.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <h2>You can contact with us:</h2>
        <ul className={styles.contactList}>
          <li>Number: <a href="tel:+994513106096">+994513106096</a></li>
          <li>Email:   <a href="mailto:gahramanovalamann@gmail.com">gahramanovalamann@gmail.com</a></li>
        </ul>
        <p>All right reserved</p>
      </div>
    </footer>
  )
}

export default Footer