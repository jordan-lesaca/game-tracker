import React, { useEffect, useState } from 'react'
import GameCard from './GameCard'

function Games({user}){
    const [ games, setGames ] = useState([])

    useEffect(() => {
        fetch("/games")
        .then((r) => r.json())
        .then(setGames)    
        }, [] )
console.log(games)

    return (
        <div>
            {games.map(game => <GameCard game={game} key={game.id} user={user}/>)} 
        </div>
    )
}

export default Games