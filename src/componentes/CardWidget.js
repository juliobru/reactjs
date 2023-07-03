import React from 'react'
import { BsFillCartFill } from "react-icons/bs";
import Nav from 'react-bootstrap/Nav';

const CardWidget = () => {
  return (
    <div>
      
        <Nav.Link eventKey="link-3"><BsFillCartFill/><span>0</span></Nav.Link>
        
      
    </div>
  )
}

export default CardWidget