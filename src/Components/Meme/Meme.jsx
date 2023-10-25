import React, { useState, useEffect } from "react";
import styles from "./Meme.module.css";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>{
      setAllMemeImages(data);
      console.log(data);
    });
  },[])
  
  const handleChange = (event)=>{
    const {name, value} = event.target;
    setMeme((prev)=>({
      ...prev,
      [name] : value,

    }))
  }

  const getMemeImage = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prev) => ({
      ...prev,
      randomImage: url,
    }));
  };

  return (
    <div className={styles.formDiv}>
      <div className={styles.form}>
        <div className={styles.inputsBox}>
          <input
          type="text" 
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          />
          <input 
          type="text" 
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          />
        </div>
        <button className={styles.btn} onClick={getMemeImage}>
          Get new meme image
        </button>
        <div className={styles.meme}>
          {meme.randomImage && (
            <div className={styles.memeImage}>
              <img src={meme.randomImage} alt="" />
              <h2 className={styles.meme_top_text}>{meme.topText}</h2>
              <h2 className={styles.meme_bottom_text}>{meme.bottomText}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};  

export default Meme;
