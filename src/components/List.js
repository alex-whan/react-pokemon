import React from 'react';
const List = (props) => {
    const { pokemon } = props;
    if(!pokemon || pokemon.length === 0){
        return (
            <div>Sorry, no results.</div>
        )
    }

    return (
        <div>
            <ul>
                {
                pokemon.map(poke => <li key={poke.name}>{poke.name}, {poke.url}</li>)
                }
            </ul>
        </div>
    )
}

export default List;