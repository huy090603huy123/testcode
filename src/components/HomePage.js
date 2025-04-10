// src/components/HomePage.js
import React, { Component } from 'react';
import Title from './Title';
import SpecialtyCard from './SpecialtyCard';
import DoctorCard from './DoctorCard';
import HeroSection from './HeroSection';
import MediaSection from './MediaSection'; // Import MediaSection
import { specialties } from '../specialtyData';
import { doctors } from '../doctorData';


export default class HomePage extends Component {
  state = {
    specialties: specialties,
    doctors: doctors,
  };

  render() {
    return (
      <React.Fragment>
        <HeroSection />

        {/* Phần Chuyên khoa phổ biến */}
        <div className="py-4" style={{ backgroundColor: 'var(--mainWhite)' }}>
          <div className="container">
            <Title name="Chuyên khoa" title="phổ biến" />
            <div className="row">
              {this.state.specialties.map(specialty => {
                return <SpecialtyCard key={specialty.id} specialty={specialty} />;
              })}
            </div>
          </div>
        </div>

        {/* Phần Bác sĩ nổi bật */}
        <div className="py-4" style={{ backgroundColor: 'var(--greyBackground)' }}>
          <div className="container">
            <Title name="Bác sĩ" title="nổi bật" />
            <div className="row">
              {this.state.doctors.map(doctor => {
                return <DoctorCard key={doctor.id} doctor={doctor} />;
              })}
            </div>
          </div>
        </div>

        {/* Phần Truyền Thông */}
        <MediaSection /> {/* Thêm MediaSection vào đây */}

      </React.Fragment>
    );
  }
}