// src/components/Navbar.js
import React, { useState } from 'react'; // Import useState nếu bạn muốn tự làm menu mobile
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo.png'; // Thay bằng đường dẫn logo của bạn

export default function Navbar() {
  // --- Phần xử lý menu mobile (Cần tự hoàn thiện) ---
  // const [isNavOpen, setIsNavOpen] = useState(false);
  // const toggleNav = () => setIsNavOpen(!isNavOpen);
  // --------------------------------------------------

  return (
    <NavWrapper className="navbar navbar-expand-lg navbar-light bg-light py-3"> {/* Sử dụng class Bootstrap để có base style */}
      <div className="container"> {/* Container để giới hạn chiều rộng */}
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo Bệnh viện" style={{ height: '40px' }} /> {/* Điều chỉnh chiều cao logo */}
        </Link>

        {/* Nút bật/tắt menu trên mobile (Cần thêm logic onClick) */}
        <button
          className="navbar-toggler"
          type="button"
          // onClick={toggleNav} // <--- Thêm sự kiện onClick ở đây
        >
          <i className="fas fa-bars"></i> {/* Icon hamburger */}
        </button>

        {/* Nội dung menu */}
        {/* Thêm class 'show' khi isNavOpen là true để hiện menu mobile */}
        <div className={`collapse navbar-collapse /*${isNavOpen ? 'show' : ''}*/`}>
          {/* Menu Chính (trái) */}
          <ul className="navbar-nav mr-auto"> {/* mr-auto đẩy menu sang trái */}
            <li className="nav-item dropdown"> {/* Ví dụ mục có menu con */}
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownSpecialty" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Chuyên khoa
              </a>
              {/* Menu con (Cần thư viện JS của Bootstrap hoặc tự code) */}
              {/* <div className="dropdown-menu" aria-labelledby="navbarDropdownSpecialty">
                <a className="dropdown-item" href="#">Cơ xương khớp</a>
                <a className="dropdown-item" href="#">Thần kinh</a>
                 <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Xem tất cả</a>
              </div> */}
            </li>
             <li className="nav-item">
              <Link to="/goi-kham" className="nav-link">Gói khám</Link> {/* Ví dụ link khác */}
            </li>
             <li className="nav-item">
              <Link to="/song-khoe" className="nav-link">Sống khoẻ</Link>
            </li>
            {/* Thêm các mục menu khác */}
          </ul>

          {/* Menu Phụ (phải) */}
          <ul className="navbar-nav ml-auto align-items-center"> {/* ml-auto đẩy sang phải */}
            <li className="nav-item">
              <Link to="/ho-tro" className="nav-link support-link">
                <i className="fas fa-headset mr-1"></i> {/* Icon hỗ trợ */}
                Hỗ trợ
              </Link>
            </li>
            <li className="nav-item language-switcher">
              <span className="active">VN</span> / <span>EN</span>
            </li>
          </ul>
        </div>
      </div>
    </NavWrapper>
  );
}

// Styled-components để tùy chỉnh thêm
const NavWrapper = styled.nav`
  background-color: white !important; /* Ghi đè màu nền Bootstrap */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Đổ bóng nhẹ */
  border-bottom: 1px solid #eee;

  .navbar-brand img {
    /* Có thể thêm style cho logo */
  }

  .nav-link {
    color: var(--mainDark) !important;
    font-weight: 500;
    margin: 0 0.5rem; /* Khoảng cách giữa các mục menu */
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--mainBlue) !important; /* Màu khi hover */
    }
  }

  /* Style cho menu dropdown (cơ bản) */
  .dropdown-toggle::after {
    margin-left: 0.4em; /* Khoảng cách icon dropdown */
  }

  .support-link {
     /* Style riêng cho nút Hỗ trợ nếu cần */
     color: var(--mainBlue) !important;
     font-weight: bold;
  }

  .language-switcher {
    margin-left: 1rem;
    font-size: 0.9rem;
    color: #6c757d; /* Màu xám */
    cursor: pointer;
    span {
      padding: 0 0.2rem;
    }
    span.active {
      font-weight: bold;
      color: var(--mainBlue);
    }
  }

  /* Nút toggler mobile */
  .navbar-toggler {
    border: none;
    &:focus {
      outline: none;
      box-shadow: none;
    }
     i {
       color: var(--mainBlue);
       font-size: 1.5rem;
     }
  }

  /* Style cho menu khi hiện trên mobile (cần JS để thêm/xoá class 'show') */
  @media (max-width: 991px) {
    .navbar-collapse {
      /* Style khi menu mobile hiện ra */
       background-color: white;
       padding: 1rem;
       margin-top: 0.5rem;
       box-shadow: 0 4px 8px rgba(0,0,0,0.1);
       border-radius: 5px;
    }
     .navbar-nav {
       align-items: flex-start !important; /* Căn trái các mục menu mobile */
     }
     .nav-item {
       margin-bottom: 0.5rem;
     }
      .language-switcher {
         margin-left: 0.5rem;
         margin-top: 0.5rem;
     }
  }
`;