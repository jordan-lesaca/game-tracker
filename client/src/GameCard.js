import {useState} from 'react'
import EditForm from './EditForm'

function GameCard({game, deleteGame, user, editGame}){
    const [ editForm, setEditForm ] = useState(false) 
    const [ editButton, setEditButton ] = useState("Show Edit Form")

    function handleDelete(game){
        fetch(`/games/${game.id}`, {
            method: "DELETE"
        })
            .then(r => {deleteGame(game)}) 
        }

    function handleEditButtonClick(){
        setEditForm(!editForm)
            !editForm ? setEditButton("Hide Edit Form") : setEditButton("Show Edit Form")
        }    

    return (
        <div>
            <h1> {game.title} </h1>
            <h2> {game.release_year} </h2>
            <h3> {game.genre} </h3>  
            <button onClick={e => handleDelete(game)}>Delete</button>
            {editForm ? <EditForm handleEditButtonClick={handleEditButtonClick} editGame={editGame} game={game} user={user}/> : null} 
        </div>
    )
}
export default GameCard