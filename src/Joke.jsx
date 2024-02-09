import { useState } from 'react';

export default function Joke({ id, text }){

const [likes, setLike] = useState(0)

function handleLike() {
setLike(likes + 1);
console.log(`like id: ${id}`)
}

function handleDislike() {
    setLike(likes - 1);
    console.log(`dislike id: ${id}`)
    }

const [favorite, setFavorite] = useState(false)
function handleFavorite(){
setFavorite(!favorite)
}

return(

    <div className="App">
        <p>{text}</p>
        <p>likes: {likes}</p>
        <p>Favorite: {favorite ? 'Yes': 'No'}</p>
        <button onClick={handleLike}>👍</button>
        <button onClick={handleDislike}>👎</button>
        <button onClick={handleFavorite}>⭐</button>
    </div>
)
}

