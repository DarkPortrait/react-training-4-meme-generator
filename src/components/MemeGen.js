import React from 'react'
import data from '../data.js'

export default function MemeGen(){

  var firstMeme='https://i.imgflip.com/1bgw.jpg'

  const [meme, setMeme] = React.useState(firstMeme)

  function clickHandler(){
    const memesData = data.data.memes
    const randomNumber = Math.floor(Math.random()*memesData.length)
    console.log(memesData[randomNumber].url)
    setMeme(memesData[randomNumber].url)
  }

  return(
    <main>
      <div className='form'>
        <input 
          type='text'
          placeHolder='Top text'
          className='form--input'
        />
        <input 
          type='text'
          placeHolder='Bottom text'
          className='form--input'
        />
        <button 
          className='form--button'
          onClick={clickHandler}
        >
          Get a new meme image 🖼
        </button>
        <img
          src={meme}
          className='form--img'
        />
       </div>
     </main>
  )
}

