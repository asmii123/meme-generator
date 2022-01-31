import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")
    
    async function  getMemeImage() {
        // const memesArray = memesData.data.memes
        // const randomNumber = Math.floor(Math.random() * memesArray.length)
        // setMemeImage(memesArray[randomNumber].url)
        const responsePromise = await fetch('https://meme-api.herokuapp.com/gimme');
        const responseJSON = await responsePromise.json();
       // return responseJSON.result;
       setMemeImage(responseJSON.url)

    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} className="meme--image" />
        </main>
    )
}