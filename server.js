const express = require('express');
const superagent = require('superagent');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/pokemon', getPokemon);

app.get('/ping', function (req, res) {
 return res.send('pong');
});

// Figure out how to read params from request
// res.send Pokemon (use network tab to see)
// If you don't know how, try to just google answer
// Check express docs

async function getPokemon(req, res) {
  let promiseArray = [];

  console.log('Req :', req.query);
  const { limit, offset } = req.query;
  const coercedLimit = parseInt(limit);
  const coercedOffset = parseInt(offset);
  // const limit = 10;
  // const offset = 10;

  // console.log(offset+limit);

  for(let i = coercedOffset; i <= coercedOffset + coercedLimit - 1; i++){
    console.log('this is i:', i);
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promiseArray.push(superagent.get(url));
  }

  console.log('POKEMON BEFORE:');
  const pokemonResponses = await Promise.all(promiseArray);
  const pokemon = pokemonResponses.map(({body}) => ({
    name: body.name ? body.name : 'Name not available.',
    url: body.species.url ? body.species.url : 'URL not available.',
    pokedex_number: body.species.url.split('/')[body.species.url.split('/').length - 2],
    image: body.sprites.front_default ? body.sprites.front_default : 'Image not available.',
    type1: body.types[0].type.name ? body.types[0].type.name : 'Type 1 not available.',
    // if(body.types.length > 1){ 
    //   // checks to see if Pokemon has a second type
    //   type2: body.types[1].type.name
    // } else {
    //   type2: null
    // }

  }));
  console.log('POKEMON AFTER:', pokemon);
  
  return res.send(pokemon);
 };

app.get('/', function (req, res) {
  console.log('Hello World');
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);