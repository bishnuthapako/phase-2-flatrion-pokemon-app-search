import React, {useState} from 'react'
import { Form } from "semantic-ui-react";

function PokeForm({addOnData}) {

  const [name, setName]=useState("")
  const [hpValue, setHpValue]=useState(null)
  const [frontUrl, setFront]=useState("")
  const [backUrl, setBack]=useState("")

  function handleNameInput(e){
    setName(e.target.value)
  }

  function handleHpInput(e){
    setHpValue(e.target.value)
    // console.log(e.target.value, "hp")
  }
  function handleFrontUrl(e){
    setFront(e.target.value)
  }

  function handleBackUrl(e){
    setBack(e.target.value)
  }


  function formHandling(e){
    e.preventDefault();
    console.log(hpValue, "hp")
    const itemData= {
      name: name,
      hp: parseInt(hpValue),
      sprites:{
        front: frontUrl,
        back: backUrl
      }
    }
    // console.log(itemData,'item')

    fetch("http://localhost:3001/pokemon", {
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData)
    })  
    .then((res)=>res.json())
    .then((newItem)=>{
      addOnData(newItem)
    })
  }


  return (

    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={formHandling}
        // onSubmit={() => {
        //   console.log("submitting form...");
        // }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name={name} value={name} onChange={handleNameInput} required />
          <Form.Input fluid label="hp" placeholder="hp" name={hpValue} value={hpValue} onChange={handleHpInput} required/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name={frontUrl}
            value={frontUrl}
            onChange={handleFrontUrl} required
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name={backUrl}
            value={backUrl}
            onChange={handleBackUrl} required
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default PokeForm