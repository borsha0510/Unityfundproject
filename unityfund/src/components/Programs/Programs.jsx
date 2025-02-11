import React from 'react'
import './Programs.css'
import cloth from '../../assets/cloth.png'
import food from '../../assets/food.png'
import medicine from '../../assets/medicine.png'

const Programs = () => {
  return (
    <div className='programs'>
       <div className="program">
        <img src={cloth} alt='' />
        <div className="caption">
            <p>Donate for clothes</p>
        </div>
       </div>
       <div className="program">
        <img src={food} alt='' />
        <div className="caption">
            <p>Donate for foods</p>
        </div>
       </div>
       <div className="program">
        <img src={medicine} alt='' />
        <div className="caption">
            <p>Donate for medicines</p>
        </div>
       </div>
    </div>
  )
}

export default Programs