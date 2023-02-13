import React from 'react'
import styles from "../styles/contact.module.css"

const contact = () => {
  return (
    <div>
    <h1 className={styles.css3}>
      this is [filename].module.css
    </h1>
    <h1 className={`${styles.css4} ${styles.css5}`}>
      multiple classes, this is [filename].module.css
    </h1>
    </div>
  )
}

export default contact
