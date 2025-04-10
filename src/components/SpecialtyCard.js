// src/components/SpecialtyCard.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function SpecialtyCard({ specialty }) {
  const { name, img } = specialty;
  return (
    <CardWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-container">
          <img src={img} alt={name} className="card-img-top" />
        </div>
        <div className="card-footer text-center">
          <p className="mb-0 specialty-name">{name}</p>
        </div>
      </div>
    </CardWrapper>
  );
}

SpecialtyCard.propTypes = {
  specialty: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

const CardWrapper = styled.div`
  .card {
    border: 1px solid #eee; /* Viền mỏng cho thẻ */
    transition: all 0.3s linear;
    cursor: pointer; /* Thêm con trỏ khi hover */
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    padding: 0.5rem;
  }
  &:hover {
    .card {
      border: 1px solid var(--lightBlue); /* Màu viền khi hover */
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
    padding: 1rem; /* Thêm padding cho ảnh */
    height: 150px; /* Chiều cao cố định cho vùng ảnh */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-img-top {
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
    transition: all 0.3s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1); /* Hiệu ứng zoom nhẹ khi hover */
  }
  .specialty-name {
    font-size: 0.9rem;
    font-weight: bold;
    color: var(--mainDark); /* Màu chữ tên chuyên khoa */
  }
`;