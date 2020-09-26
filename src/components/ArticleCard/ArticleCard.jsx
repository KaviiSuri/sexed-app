import React from 'react'

import './Styles.css'

function ArticleCard(props) {
    return (
        <div className='artcle-card-container'>
            <img src={props.img} alt={props.text}/>
            <h5>{props.heading}</h5>
            <p className="summary">
                {props.text}
                {props.showMore ? <span>See more</span> : <></>}
            </p>
        </div>
    )
}

export default ArticleCard
