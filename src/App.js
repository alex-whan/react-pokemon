import React, { useEffect } from "react" // React Hook
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"


// do we need the actual PokeAPI url endpoint here?
function App() {
    useEffect(() => {
        let url = 'https://pokeapi.co/api/v2/';
        fetch(`${url}/pokemon?offset=10&limit=6`)
        .then((res) => {
            console.log(res);
        })
    }, []);

    return (
    // Need some kind of JSX element here
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App

//TODO: Render 10 buttons (1-10) corresponding to different pages
    // Bonus: If you click on a button, it'll take the user to a new route /localhost:3000/page/1 (second one will be page/2, etc)

//TODO: Make a reusable button component

// Port over features like header, etc
// Work in confines of this app
// Google React Navigate to different pages

// Programmatically see how you can generate more buttons (with an array)