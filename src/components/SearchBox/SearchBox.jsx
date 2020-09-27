import React from 'react'

import './Styles.css'

const SearchBox = () => {
    return (
        <div className='search-container'>
            <span className="close">×</span>
            <input type="text" placeholder="Search"/>
        </div>
    )
}

export default SearchBox
