import React, { PokeCard } from "react"

function MainContent() {
    return (
    <main class="wrapper">
        <section>
            <div>
                <form action="/search" method="GET">
                <input type="text" name="search" placeholder="Search for Pokemon" required/>
                <button class="button" type="submit">Submit</button>
                </form>
            </div>
        </section>
        <section class="favorites-link">
            <div>
                <a href="/favorites">See Your Favorites</a>
            </div>
        </section>
        <section>
            <div>
                <button type="submit" id="leftButton">Previous Page</button>
                <button type="submit" id="rightButton">Next Page</button>
            </div>
        </section>
        <section class="pokedex" id="pokedex">
            <ul>
                { <PokeCard /> } 
            </ul>
        </section>
    </main>
    )
}

export default MainContent