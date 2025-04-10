// src/components/HomePage.js (thay thế ProductList.js)
import React, { Component } from 'react';
import Title from './Title'; // Sử dụng lại Title component nếu muốn
import SpecialtyCard from './SpecialtyCard';
import { specialties } from '../specialtyData'; // Import dữ liệu mới

// Bạn có thể cần tạo thêm component cho các phần khác (Hero, Bác sĩ, Truyền thông)
// import HeroSection from './HeroSection';
// import DoctorSection from './DoctorSection';
// import MediaSection from './MediaSection';

export default class HomePage extends Component {
  // Giữ lại state nếu cần cho các phần khác, hoặc xóa đi nếu không dùng context sản phẩm nữa
  state = {
    specialties: specialties, // Load dữ liệu chuyên khoa
    // doctors: [], // Có thể thêm state cho bác sĩ, v.v.
  };

  render() {
    return (
      <React.Fragment>
        {/* <HeroSection /> */} {/* Component cho banner */}

        {/* Phần Chuyên khoa phổ biến */}
        <div className="py-5">
          <div className="container">
            <Title name="Chuyên khoa" title="phổ biến" /> {/* Hoặc tiêu đề khác */}
            <div className="row">
              {this.state.specialties.map(specialty => {
                return <SpecialtyCard key={specialty.id} specialty={specialty} />;
              })}
            </div>
          </div>
        </div>

        {/* <DoctorSection doctors={this.state.doctors} /> */} {/* Component cho bác sĩ */}
        {/* <MediaSection /> */} {/* Component cho truyền thông */}

      </React.Fragment>
    );
  }
}