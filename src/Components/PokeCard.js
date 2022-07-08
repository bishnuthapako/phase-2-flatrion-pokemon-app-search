import React from 'react'
import { Card } from "semantic-ui-react";

function PokeCard({name,hp,image}) {


  return (

    <Card>
      <div>
        <div className="image">
          <img src={image} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  )
}

export default PokeCard