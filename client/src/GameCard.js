import {useState} from 'react'

function GameCard({game, deleteGame}){

    function handleDelete(game){
        fetch(`/games/${game.id}`, {
            method: "DELETE"
        })
            .then(r => {deleteGame(game)}) 
        }


    return (
        <div>
            <h1> {game.title} </h1>
            <h2> {game.release_year} </h2>
            <h3> {game.genre} </h3>  
            <button onClick={e => handleDelete(game)}>Delete</button>

        </div>
    )
}
export default GameCard