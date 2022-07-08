import React, {useState, useEffect} from 'react'
import { Container } from 'semantic-ui-react'
import PokeForm from './PokeForm'
import PokeHeader from './PokeHeader'
import PokeSearch from './PokeSearch'
import PokeCollections from './PokeCollections'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import {Routes, Route} from 'react-router-dom'


function PokePage() {

  const [loadPoke, setLoadPoke]=useState([])
  const [items, setItems]=useState([])
  const [search, setSearch]=useState("")
  const [isLoading, setIsLoading]=useState(false)

  const apiUrl = "http://localhost:3001/pokemon"

  const getPokemonApi = async ()=>{
    const response = await fetch(apiUrl)
    const data = await response.json()
    setLoadPoke(data)
    setItems(data)
    setIsLoading(true)
    // console.log(data, 'poke')
  }
  
  useEffect(()=>{
    getPokemonApi()

  },[])

  function handleInput(event){
    setSearch(event.target.value)

  }

const getFilterPoke= loadPoke.filter((data)=>{
  if(search ===""){
    return true;
  } else{
    return data.name.toLowerCase().includes(search.toLowerCase())
  }

})

function handleAddOnData(newItem){
  setItems({...items, newItem})

}


  return (

    <Container>
      <br/>
      {/* <Routes>
        <Route path='/' element={<PokeHeader />} />
      </Routes> */}
      <PokeHeader />
      <br/>
      <br/>
      <PokeForm addOnData={handleAddOnData} />
      <br/>
      <PokeSearch searchData={search} handleInput={handleInput}/>
      <br/>
      {isLoading ? <PokeCollections pokeApiData={getFilterPoke} /> :
       <Segment>
       <Dimmer active inverted>
         <Loader inverted content='Loading' />
       </Dimmer>
 
       <Image src='/images/wireframe/short-paragraph.png' />
     </Segment>
}
      
    </Container>
  )
}

export default PokePage