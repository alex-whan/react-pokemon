import React from "react"

function PokeCard() {
  return (
    <li>
      <div>
        <h3>#Pokedex Number</h3>
      </div>
      <div>
        <h2>Pokemon Name</h2>
      </div>
      <div>
        <img src="" alt="Pokemon Sprite" />
      </div>
      <div>
        <img class="type" src="" alt="Type 1" />
        <img class="type" src="" alt="Type 2" />
      </div>
      <form action="/add" method="post">
        <input type="hidden" name="pokedex_number" value="Pokedex Number"></input>
        <input type="hidden" name="url" value="url"></input>
        <input type="hidden" name="name" value="Pokemon Name"></input>
        <input type="hidden" name="image" value="Pokemon Sprite"></input>
        <input type="hidden" name="type1" value="Type 1"></input>
        <input type="hidden" name="type2" value="Type 2"></input>
      </form>
    </li>
  )
}

export default PokeCard;