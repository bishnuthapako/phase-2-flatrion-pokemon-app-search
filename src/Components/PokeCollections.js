import React from 'react'
import { Card } from "semantic-ui-react";
import PokeCard from './PokeCard'

function PokeCollections({pokeApiData}) {

  console.log(pokeApiData, 'api')

  const getPokemonData = pokeApiData.map((poke)=><PokeCard
  key={poke.id}
  name = {poke.name}
  hp={poke.hp}
  image = {poke.sprites.front}
  
  />)


  return (
    <Card.Group itemsPerRow={6}>
    {/* <h1>Hello From Pokemon Collection</h1> */}
    {getPokemonData}
  </Card.Group>
  )
}

export default PokeCollections