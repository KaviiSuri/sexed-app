import React from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'
import SpecialistCard from '../../components/SpecialistCard/SpecialistCard'

import {Link} from 'react-router-dom'

import './Styles.css'

const SpecialistPage = () => {
    return (
        <>
        <SearchBox />
        <div className='specialist-page-container'>
            <h1>Suggested Specialist</h1>
            <Link to='/specialist/details'>
                <SpecialistCard />
            </Link>
            
            <Link to='/specialist/details'>
                <SpecialistCard />
            </Link>
            
            <Link to='/specialist/details'>
                <SpecialistCard />
            </Link>
            
            <Link to='/specialist/details'>
                <SpecialistCard />
            </Link>

            <Link to='/specialist/details'>
                <SpecialistCard />
            </Link>
            


        </div>
        </>
    )
}

export default SpecialistPage
