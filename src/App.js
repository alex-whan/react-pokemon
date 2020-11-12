import React, { useState, useEffect } from 'react'; // React Hook
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Button from './components/Button/index';
import PokeCard from './components/PokeCard';
import List from './components/List';
import LoadingList from './components/LoadingList';
import axios from 'axios'; // like superagent for the front end?

const PAGE_COUNT = 10; // for Buttons
const PAGE_LIMIT = 9; // for limit
const PAGE_OFFSET = 151; // for Offset

// const buttons = []

// for (let i = 1; i <= PAGE_COUNT; i++) {
//   buttons.push(<Button key={i} type="secondary">{i}</Button>)
// }

// do we need the actual PokeAPI url endpoint here?
function App() {
  const [currentPageUrl, setCurrentPageURL] = useState('');
  const [prevPageUrl, setPrevPageUrl] = useState('');
  const [nextPageUrl, setNextPageUrl] = useState('');
  const ListLoading = LoadingList(List); // makes another component?
  const [appState, setAppState] = useState({
    // like combining two useState calls
    loading: false,
    pokemon: null,
  });

  // axios lets us request stuff from APIs on the front end (avoids the weird header/CORS errors?)
  useEffect(() => {
    setAppState({ loading: true }); // app state is an object itself
    let url = 'https://pokeapi.co/api/v2/pokemon';
    axios
      .get(url, {
        params: {
          offset: PAGE_OFFSET,
          limit: PAGE_LIMIT, // can we break these out into their own variable?
        },
      })
      .then(res => {
        // console.log('IN APP JS RESPONSE:', res.data);
        const allPokemon = res.data.results;
        setCurrentPageURL(url);
        setPrevPageUrl(res.data.previous);
        setNextPageUrl(res.data.next);
        setAppState({ loading: false, pokemon: allPokemon });
        console.log('allPokemon ARRAY: ', allPokemon);
      });
  }, [setAppState]);

  return (
    <div>
      <Header />
      <ListLoading isLoading={appState.loading} pokemon={appState.pokemon} />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

//TODO: Render 10 buttons (1-10) corresponding to different pages
// Bonus: If you click on a button, it'll take the user to a new route /localhost:3000/page/1 (second one will be page/2, etc)

//TODO: Make a reusable button component

// Port over features like header, etc
// Work in confines of this app
// Google React Navigate to different pages

// Programmatically see how you can generate more buttons (with an array)

// function App() {
//     useEffect(() => {

//         // axios lets us request stuff from APIs on the front end (avoids the weird header/CORS errors?)

//         let url = 'https://pokeapi.co/api/v2';
//         axios.get(`${url}/pokemon?offset=10&limit=6`)
//         .then((res) => {
//             console.log('IN APP JS RES:', res.data.results);
//             const [pokemons] = res.data.results;
//             // res.data.results = Pokemon objects
//             // res.data = includes above + pagination links
//         })
//     }, []);
