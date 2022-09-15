import React, { useState } from "react";
import "./FormRating.css"

export default function FormRating(props) {
    const [userName, setUsername] = useState("")
    const [rate, setRate] = useState(0)
    const handleTriggerFormValues = function(event) {
        event.preventDefault()
        event.persist()
        let userData = { username: userName, rate }
        props.handleNewUserAndRate(userData)
    }
    return (
        <form action="#" method="get" onSubmit={handleTriggerFormValues}>
            <fieldset>
                <legend>Rating formulary</legend>
                <label htmlFor="userName">Type your name:</label>
                <input 
                    type="text" 
                    name="userName" 
                    id="userName" 
                    onChange={(event) => { setUsername(event.target.value)}}
                />
                <label htmlFor="userRating">Type your rate to these site: (1-10)</label>
                <input 
                    type="number" 
                    name="userRating" 
                    id="userRating" 
                    min={1} 
                    max={10} 
                    onChange={(event) => { setRate(event.target.value)}}
                />
                <br />
                <button type="submit">Send my rating</button>
            </fieldset>
        </form>
    )
}
