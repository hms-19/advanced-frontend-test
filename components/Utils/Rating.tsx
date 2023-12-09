import React from 'react'
import { FaStar } from 'react-icons/fa'

const Rating = ({rate}: {rate: number}) => {
    
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if(rate >= i){
            stars.push(<FaStar key={i} style={{ display: 'inline', color: "#feed02" }} />);
        }
        else{
            stars.push(<FaStar key={i} style={{ display: 'inline', color: "#42423e" }} />)
        }
    }
  return (
    <>
        {
            stars.map(star => (
                star
            ))
        }
    </>
  )
}

export default Rating