import React from "react"

// All you need to do with functional components is return what you want the JSX to represent
// Try to put things on their own lines to make it more like HTML
// Eventually we'll be rendering other components we've created

function MyInfo() {
    return (
        <div>
            <h1>Alex Whan</h1>
            <p>I am a developer in the Seattle area.</p>
            <ul>
                <li>Bulbasaur</li>
                <li>Charmander</li>
                <li>Squirtle</li>
            </ul>
        </div>
    )
}

export default MyInfo;

