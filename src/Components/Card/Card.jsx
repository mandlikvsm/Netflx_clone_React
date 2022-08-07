import React from 'react'
import './card.scss'
import { Link } from 'react-router-dom';


const Card = ({ img }) => {
    
    
  return (
    <>
      
      <Link to="/details"><img className='card' src={img} alt="cover" /></Link>

     
      
      
      </>
  )
}

export default Card