import React from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'
import SpecialistCard from '../../components/SpecialistCard/SpecialistCard'

import './Styles.css'

const SpecialistPage = () => {
    return (
        <>
        <SearchBox />
        <div className='specialist-page-container'>
            <h1>Suggested Specialist</h1>
            <SpecialistCard />
            <SpecialistCard />
            <SpecialistCard />
            <SpecialistCard />
            <SpecialistCard />
        </div>
        </>
    )
}

export default SpecialistPage
