// src/components/HeroSection.js
import React from 'react';
import styled from 'styled-components';
import heroBanner from '../assets/images/hero-banner.png'; // Thay bằng đường dẫn ảnh của bạn

export default function HeroSection() {
  return (
    <HeroWrapper>
      {/* Banner chính */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1>Đặt lịch khám ngay</h1>
          <h2>Chăm sóc sức khoẻ toàn diện</h2>
          <button className="btn btn-primary btn-lg mt-3">Tìm bác sĩ</button> {/* Hoặc nút khác */}
        </div>
      </div>

      {/* Hàng icon bên dưới banner */}
      <div className="container icon-section">
        <div className="row text-center">
          <div className="col icon-item">
            <i className="fas fa-calendar-alt fa-2x mb-2"></i>
            <p>Đặt lịch khám</p>
          </div>
          <div className="col icon-item">
            <i className="fas fa-book-medical fa-2x mb-2"></i>
            <p>Hồ sơ sức khoẻ</p>
          </div>
          <div className="col icon-item">
            <i className="fas fa-search fa-2x mb-2"></i>
            <p>Tra cứu</p>
          </div>
          <div className="col icon-item">
            <i className="fas fa-user-md fa-2x mb-2"></i>
            <p>Chuyên gia</p>
          </div>
           <div className="col icon-item">
            <i className="fas fa-question-circle fa-2x mb-2"></i>
            <p>Hỏi đáp</p>
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.section`
  .hero-banner {
    background: url(${heroBanner}) no-repeat center center/cover;
    height: 400px; /* Điều chỉnh chiều cao banner */
    position: relative;
    display: flex;
    align-items: center; /* Căn giữa nội dung theo chiều dọc */
    justify-content: center; /* Căn giữa nội dung theo chiều ngang */
    color: white;
    text-align: center;

    /* Lớp phủ mờ để chữ dễ đọc hơn */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 70, 120, 0.4); /* Màu xanh và độ mờ */
    }
  }

  .hero-content {
    position: relative; /* Để nằm trên lớp phủ */
    z-index: 1;
    max-width: 600px; /* Giới hạn chiều rộng nội dung */

    h1 {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
      text-shadow: 1px 1px 3px rgba(0,0,0,0.5); /* Đổ bóng cho chữ */
    }

    h2 {
      font-size: 1.5rem;
      font-weight: normal;
       text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
    }

    .btn-primary {
       /* Tùy chỉnh style nút nếu cần */
       background-color: var(--mainYellow);
       border-color: var(--mainYellow);
       color: var(--mainDark);
       font-weight: bold;
       &:hover {
         background-color: darken(var(--mainYellow), 10%);
         border-color: darken(var(--mainYellow), 10%);
       }
    }
  }

  .icon-section {
    padding: 2rem 0;
    background-color: var(--mainWhite); /* Nền trắng cho phần icon */
    margin-top: -50px; /* Kéo phần icon lên trên banner một chút */
    position: relative; /* Để nằm trên banner */
    z-index: 2;
    border-radius: 8px; /* Bo góc */
    box-shadow: 0 4px 10px rgba(0,0,0,0.1); /* Đổ bóng */
    max-width: 800px; /* Giới hạn chiều rộng */
  }

  .icon-item {
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    color: var(--mainBlue); /* Màu icon */

    p {
       font-size: 0.9rem;
       margin-top: 0.5rem;
       color: var(--mainDark); /* Màu chữ */
       font-weight: 500;
    }

    &:hover {
      transform: translateY(-5px); /* Hiệu ứng nhấc lên khi hover */
      color: var(--lightBlue); /* Đổi màu icon khi hover */
    }

     i {
       /* Style cho icon nếu cần */
     }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .hero-banner {
      height: 300px;
    }
    .hero-content h1 {
      font-size: 2rem;
    }
     .hero-content h2 {
      font-size: 1.2rem;
    }
    .icon-section {
      margin-top: -30px;
      padding: 1.5rem 0;
    }
     .icon-item i {
      font-size: 1.5em; /* Giảm kích thước icon trên mobile */
    }
     .icon-item p {
       font-size: 0.8rem;
     }
  }
   @media (max-width: 576px) {
     .icon-section .row {
        /* Có thể cho các item icon xuống dòng trên màn hình nhỏ */
        /* display: flex; flex-wrap: wrap; justify-content: center; */
     }
     .icon-item {
         flex-basis: 33.33%; /* Ví dụ: 3 icon một hàng */
         margin-bottom: 1rem;
     }
   }
`;