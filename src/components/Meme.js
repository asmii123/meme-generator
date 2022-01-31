import React from "react"


export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")
    
    async function  getMemeImage() {
     
        const responsePromise = await fetch('https://meme-api.herokuapp.com/gimme');
        const responseJSON = await responsePromise.json();
   
       setMemeImage(responseJSON.url)

    }
    
    return (
        <main>
            <div className="form">
    
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