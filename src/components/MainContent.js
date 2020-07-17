import React, { useEffect, useState } from "react"
import PokeCard from "./PokeCard"
import Button from "./Button"

const PAGE_COUNT = 10;
const PAGE_LIMIT = 10;


function MainContent() {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        fetch('/pokemon?offset=10&limit=6')
        .then((res) => {
            console.log('res', res.body);
            // setPokemon(res.body);
        })
    }, []);

    const buttons = []

    for (let i = 1; i <= PAGE_COUNT; i++) {
      buttons.push(<Button key={i} type="secondary">{i}</Button>)
    }
  

    return (
    <main className="wrapper">
        {pokemon.map((poke) => poke.name)}
        {buttons}
        {/* <section>
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
                <PokeCard /> 
            </ul>
        </section> */}
    </main>
    )
}

export default MainContent