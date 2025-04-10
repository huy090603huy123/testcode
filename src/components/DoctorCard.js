// src/components/DoctorCard.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function DoctorCard({ doctor }) {
  const { name, title, img } = doctor;
  return (
    <CardWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card border-0"> {/* Bỏ viền mặc định nếu muốn */}
        <div className="img-container">
          <img src={img} alt={name} className="card-img-top doctor-img" />
        </div>
        <div className="card-body text-center p-2"> {/* Giảm padding */}
          <p className="doctor-name mb-1">{name}</p>
          <p className="doctor-title mb-0">{title}</p>
        </div>
      </div>
    </CardWrapper>
  );
}

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

const CardWrapper = styled.div`
  .card {
    background-color: var(--greyBackground); /* Màu nền nhạt cho card */
    border-radius: 5px; /* Bo góc nhẹ */
    overflow: hidden; /* Đảm bảo ảnh không tràn viền */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
     transition: all 0.3s ease-in-out;
     cursor: pointer;
  }
   &:hover {
     transform: translateY(-5px); /* Hiệu ứng nhấc lên khi hover */
     box-shadow: 0 4px 8px rgba(0,0,0,0.15);
   }
  .img-container {
    width: 100%;
    padding-top: 75%; /* Tỷ lệ khung ảnh (ví dụ 4:3) */
    position: relative;
  }
  .doctor-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Đảm bảo ảnh vừa khung và không bị méo */
  }
  .card-body {
     background-color: white;
  }
  .doctor-name {
    font-size: 0.9rem;
    font-weight: bold;
    color: var(--mainBlue); /* Màu tên bác sĩ */
  }
  .doctor-title {
    font-size: 0.8rem;
    color: var(--mainDark);
  }
`;