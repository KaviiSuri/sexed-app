import React from "react";

import "./Styles.css";

import specialistImg from "../../assets/specialist-img.png";
import mapPinImg from "../../assets/map-pin.png"
import accountImg from "../../assets/profile-img.png"

const SpecialistDetails = () => {
  return (
    <div className="specialist-details">
        <span className='back'>&lt; Back</span>
      <div className="header">
        <img src={specialistImg} alt="" />
        <h3>Deepak Kumar</h3>
        <h4 className="qualification">M.A. Doctors of psychology</h4>
      </div>
      <p className="summary">
        Dr. Kumar is a practioner at Max Super Speciality Hospital in Saket and
        Moolchand Hospital in Lajpat Nagar...
      </p>
        <div className="location">
            <img src={mapPinImg} alt="location"/>
            <span>Dwarka, New Delhi</span>
        </div>
      <div className="rating">
        <div>Ratings</div>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <div className="reviews">
          <h4>Reviews</h4>
          <div className="review-card">
              <div className="review-header">
                  <img src={accountImg} alt=""/>
                  <h3>Deepika Pandey</h3>
              </div>
              <p>
                  Dr. Kumar does not prescribe unnecessary medicines or tests and is more than happy to guide you on all matters related to health and personal hygiene.
              </p>
          </div>
          <div className="review-card">
              <div className="review-header">
                  <img src={accountImg} alt=""/>
                  <h3>Deepika Pandey</h3>
              </div>
              <p>
                  Dr. Kumar does not prescribe unnecessary medicines or tests and is more than happy to guide you on all matters related to health and personal hygiene.
              </p>
          </div>
      </div>

      <button className="appointment">
          Book an appointment
      </button>
    </div>
  );
};

export default SpecialistDetails;
