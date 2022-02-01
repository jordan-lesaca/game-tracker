import React, { useEffect, useState } from 'react'
import GameCard from './GameCard'
import GameForm from './GameForm'

function Games({user}){
    const [ games, setGames ] = useState([])

    function addGame(game){
        setGames([...games, game])
    }

    function deleteGame(game){
        setGames((games) =>
        games.filter(g => g.id !== game.id))
    }

    function editGame(game){
        const edited = games.map(g => {
            if (game.id === g.id){
                return game
            }
            return g
        })
        setGames(edited)
        console.log("It hit here!! Edit game")
    }

    useEffect(() => {
        fetch("/games")
        .then((r) => r.json())
        .then(setGames)    
        }, [] )
console.log(games)

    return (
        <div>
            <GameForm addGame={addGame} user={user}/>
            {games.map(game => <GameCard game={game} key={game.id} user={user} editGame={editGame} deleteGame={deleteGame}/>)} 
        </div>
    )
}

export default Games