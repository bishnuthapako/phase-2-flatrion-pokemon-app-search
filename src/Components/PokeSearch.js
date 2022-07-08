import React from 'react'

function PokeSearch({searchData, handleInput}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" type='text' value={searchData} onChange={handleInput}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default PokeSearch