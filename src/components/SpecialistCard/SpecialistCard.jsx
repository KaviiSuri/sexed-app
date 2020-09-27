import React from 'react'

import "./Styles.css"

import specialistImg from "../../assets/specialist-img.png"

const SpecialistCard = () => {
    return (
        <div className='specialist-card'>
            <div className="header">
                <img src={specialistImg} alt=""/>
                <h3>Deepak Kumar</h3>
                <h4 className="qualification">M.A. Doctors of psychology</h4>
            </div>
            <p className="summary">
                Dr. Kumar is a practioner at Max Super Speciality Hospital in Saket and Moolchand Hospital in Lajpat Nagar...
            </p>

            <div className="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>

        </div>
    )
}

export default SpecialistCard
