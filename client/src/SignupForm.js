import React, { useState } from 'react'

function SignupForm({setUser}){
    const [ username, setUsername ] = useState("")
    const [ age, setAge ] = useState("")
    const [ competitive, setCompetitive ] = useState("")



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Create Username: </label>
                <input type="text" 
                id="username" 
                value={username}
                onChange={e => 
                setUsername(e.target.value)}/>

                <label> Age: </label>
                <input type="number" 
                id="age" 
                value={age}
                onChange={e => 
                setAge(e.target.value)}/>

                <label> Competitve Gamer?: </label>
                <select id="competitive" 
                name="competitive"
                value={competitive}
                onChange={e => 
                setCompetitive(e.target.value)}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <button type="submit"> Signup</button>
            </form>
        </div>
    )
}
export default SignupForm  