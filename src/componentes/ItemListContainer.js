import React from 'react'

const ItemListContainer = ({greeting, imagen}) => {
  return (
    <div claseName= "container">
        <img src= {imagen} className="img-fluid" alt="imagen de fondo"></img>
        <div className='centered'><h1>{greeting}</h1></div>

    </div>
  )
}

export default ItemListContainer