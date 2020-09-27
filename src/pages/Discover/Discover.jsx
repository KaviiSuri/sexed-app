import React from 'react'

import './Styles.css'

import continueWatchingImg from '../../assets/continue-watching.png'
import sexualHygieneImg from "../../assets/sexual-hygiene.png"
import nonBinary from '../../assets/non-binary.png'
import profileImg from "../../assets/profile-img.png"

import CategoryCard from '../../components/Category-Card/CategoryCard'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import { Link } from 'react-router-dom'


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
            <span className="blue">See more</span>
            <section className="scrollable">
                <Link to='/category/sexual_hygeine'>
                    <CategoryCard text='Sexual Hygiene & Health' img={sexualHygieneImg} />
                </Link>
                
                <Link to='/category/sexual_hygeine'>
                    <CategoryCard text='Sexual Hygiene & Health' img={sexualHygieneImg} />
                </Link>
                
                <Link to='/category/sexual_hygeine'>
                    <CategoryCard text='Sexual Hygiene & Health' img={sexualHygieneImg} />
                </Link>
                
                <Link to='/category/sexual_hygeine'>
                    <CategoryCard text='Sexual Hygiene & Health' img={sexualHygieneImg} />
                </Link>
                
                <Link to='/category/sexual_hygeine'>
                    <CategoryCard text='Sexual Hygiene & Health' img={sexualHygieneImg} />
                </Link>
                
            </section>

            <h2>Recommended for you</h2>
            <span className="blue">See more</span>
            <section className="scrollable">
                <ArticleCard 
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, recusandae '
                    heading='What it means to be Non-Binary'
                    img={nonBinary}
                    showMore
                />
                <ArticleCard 
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, recusandae '
                    heading='What it means to be Non-Binary'
                    img={nonBinary}
                    showMore
                />
            </section>
            
            <h2>Learn from</h2>
            <span className="blue">See more</span>
            <section className="scrollable">
                <ProfileCard img={profileImg} name='Rakhee Thakkar'/>
                <ProfileCard img={profileImg} name='Rakhee Thakkar'/>
                <ProfileCard img={profileImg} name='Rakhee Thakkar'/>
                <ProfileCard img={profileImg} name='Rakhee Thakkar'/>
            </section>

            <h2>Must Watch</h2>
            <span className="blue">See more</span>
            <section className="scrollable">
                <ArticleCard 
                    text=''
                    heading='Before yo have your first kiss'
                    img={nonBinary}
                />
                <ArticleCard 
                    text=''
                    heading='Before yo have your first kiss'
                    img={nonBinary}
                />
            </section>
            

        </div>
	)
}

export default Discover
 