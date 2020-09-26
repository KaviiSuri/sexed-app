import React from 'react'

import './Styles.css'


const CategoryCard = ({text, img}) => {
    return (
        <div className='category-card'>
            <img src={img} alt={text}/>
            <h4>{text}</h4>
        </div>
    )
}

export default CategoryCard
