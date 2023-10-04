import React, { useState } from 'react'
import styles from './Meme.module.css';
import memeData from '../../Data/memeData.js'

const Meme = () => {
  const [memeImage, setMemeImage] = useState("")
  const getMemeImage = ()=>{
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random()*memesArray.length)
    setMemeImage(memesArray[randomNumber].url);
    
  }
  return (
    <div className={styles.formDiv}>
      <div className={styles.form}>
        <div className={styles.inputsBox}>
            <input
            type="text" 
            placeholder='Top text'
            />
            <input
            type="text"
            placeholder='Bottom text' />
        </div>
        <button 
        className={styles.btn}
        onClick={getMemeImage}>
            Get new meme image
        </button>
        <div className={styles.memeImage}>
          <img src={memeImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Meme
