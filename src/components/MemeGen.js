export default function MemeGen(){
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
        <button className='form--button'>
          Get a new meme image 🖼
        </button>
       </div>
     </main>
  )
}

