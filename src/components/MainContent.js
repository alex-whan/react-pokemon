import React, { useEffect, useState } from 'react';
import PokeCard from './PokeCard';
import Button from './Button';
import axios from 'axios';

const PAGE_COUNT = 10;
const PAGE_LIMIT = 10;
const PAGE_OFFSET = 0;

function MainContent() {
  // let url = '/pokemon?offset=10&limit=6';
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get('/pokemon?offset=10&limit=9').then(res => {
      console.log('RESPONSE BOD in MAIN CONTENT COMPONENT:', res.results);
      // setPokemon(res.body);
    });
  }, []);

  const buttons = [];

  for (let i = 1; i <= PAGE_COUNT; i++) {
    buttons.push(
      <Button key={i} type="secondary">
        {i}
      </Button>
    );
  }

  return (
    <main className="wrapper">
      {buttons}
      <ul>
        {loading ? (
          <li>Loading...</li>
        ) : (
          pokemon.map(poke => <li key={poke.id}>{poke.name}</li>)
        )}
      </ul>
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
  );
}

export default MainContent;
