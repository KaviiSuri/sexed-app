import React from 'react'

import './Styles.css'

import continueWatchingImg from '../../assets/continue-watching.png'
import sexualHygieneImg from "../../assets/sexual-hygiene.png"
import CategoryCard from '../../Category-Card/CategoryCard'

const Discover = () => {
	return (
		<div className='discover-container'>
            <h1>Discover</h1>
            <span className='red-line'></span>
            
            <h2>Continue Watching</h2>
            <div className="header-content">
                <img src={continueWatchingImg} alt="continue watching"/>
                <div className="text">
                    <h3>Human Development</h3>
                    <span>Sexual Orientation</span>
                </div>
            </div>

            <h2>Categories</h2>
            <section className="scrollable">
                <CategoryCard text='Sexual Hygiene & Health' img={sexualHygieneImg} />
            </section>
        </div>
	)
}

export default Discover
