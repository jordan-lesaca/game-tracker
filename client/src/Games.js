import React, { useEffect, useState } from 'react'
import GameCard from './GameCard'
import GameForm from '/GameForm'

function Games({user}){
    const [ games, setGames ] = useState([])

    function addGame(game){
        setGames([...games, game])
    }

    function deleteGame(game){
        setGames((games) =>
        games.filter(g => g.id !== game.id))
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
            {games.map(game => <GameCard game={game} key={game.id} user={user} deleteGame={deleteGame}/>)} 
        </div>
    )
}

export default Games