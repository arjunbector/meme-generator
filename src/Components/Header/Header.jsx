import React from 'react'
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <img src="\public\trollface.png" alt="" />
      <div className={styles.memegenerator}>Meme Generator</div>
    </div>
  )
}

export default Header
