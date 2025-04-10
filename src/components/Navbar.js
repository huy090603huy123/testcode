// src/components/Navbar.js
import React, { useState } from 'react'; // **** Thêm import useState ****
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo.png'; // Thay bằng đường dẫn logo của bạn

export default function Navbar() {
  // --- Khai báo state và hàm xử lý menu mobile ---
  const [isNavOpen, setIsNavOpen] = useState(false); // **** Khai báo state ****
  const toggleNav = () => setIsNavOpen(!isNavOpen);  // **** Hàm để bật/tắt ****
  // --------------------------------------------------

  return (
    <NavWrapper className="navbar navbar-expand-lg navbar-light bg-light py-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo Bệnh viện" style={{ height: '40px' }} />
        </Link>

        {/* Nút bật/tắt menu mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav} // **** Gắn sự kiện onClick ****
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Nội dung menu */}
        {/* Thêm class 'show' khi isNavOpen là true */}
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}> {/* **** Sử dụng isNavOpen **** */}
          {/* Menu Chính (trái) */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownSpecialty" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Chuyên khoa
              </a>
              {/* Menu con (Cần JS của Bootstrap hoặc tự code) */}
              {/* <div className="dropdown-menu" aria-labelledby="navbarDropdownSpecialty">...</div> */}
            </li>
             <li className="nav-item">
              <Link to="/goi-kham" className="nav-link">Gói khám</Link>
            </li>
             <li className="nav-item">
              <Link to="/song-khoe" className="nav-link">Sống khoẻ</Link>
            </li>
          </ul>

          {/* Menu Phụ (phải) */}
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item">
              <Link to="/ho-tro" className="nav-link support-link">
                <i className="fas fa-headset mr-1"></i>
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

// Styled-components (giữ nguyên như trước)
const NavWrapper = styled.nav`
  background-color: white !important;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-bottom: 1px solid #eee;

  .navbar-brand img {
    /* Style logo */
  }

  .nav-link {
    color: var(--mainDark) !important;
    font-weight: 500;
    margin: 0 0.5rem;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--mainBlue) !important;
    }
  }

  .dropdown-toggle::after {
    margin-left: 0.4em;
  }

  .support-link {
     color: var(--mainBlue) !important;
     font-weight: bold;
  }

  .language-switcher {
    margin-left: 1rem;
    font-size: 0.9rem;
    color: #6c757d;
    cursor: pointer;
    span {
      padding: 0 0.2rem;
    }
    span.active {
      font-weight: bold;
      color: var(--mainBlue);
    }
  }

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

  /* Style cho menu khi hiện trên mobile */
  @media (max-width: 991px) {
    .navbar-collapse.show { // Chỉ áp dụng style khi có class 'show'
       /* Style khi menu mobile hiện ra */
       display: block; // Cần thiết để ghi đè Bootstrap
       background-color: white;
       padding: 1rem;
       margin-top: 0.5rem;
       box-shadow: 0 4px 8px rgba(0,0,0,0.1);
       border-radius: 5px;
    }
     .navbar-collapse { // Style ẩn mặc định
       /* display: none; // Bootstrap đã xử lý */
     }
     .navbar-nav {
       align-items: flex-start !important;
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