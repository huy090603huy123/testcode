// src/components/MediaSection.js
import React from 'react';
import styled from 'styled-components';
import Title from './Title'; // Có thể dùng lại Title

export default function MediaSection() {
  const youtubeVideoId = 'VIDEO_ID_CUA_BAN'; // <<<=== THAY ID VIDEO VÀO ĐÂY

  return (
    <MediaWrapper className="py-4"> {/* Thêm padding trên dưới */}
      <div className="container">
        <Title name="Truyền thông" title="nói gì về chúng tôi" /> {/* Hoặc tiêu đề khác */}
        <div className="row align-items-center"> {/* align-items-center để căn giữa theo chiều dọc nếu chiều cao khác nhau */}
          {/* Cột Video */}
          <div className="col-md-7 mb-3 mb-md-0">
            <div className="embed-responsive embed-responsive-16by9"> {/* Khung video tỷ lệ 16:9 */}
              <iframe
                className="embed-responsive-item"
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Cột Text */}
          <div className="col-md-5">
            <p>
              Nội dung giới thiệu về bệnh viện, các thành tựu, hoặc thông tin truyền thông liên quan.
              Bạn có thể thay thế đoạn văn bản này bằng nội dung thực tế. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            {/* Thêm nút hoặc link nếu cần */}
            {/* <button className="btn btn-outline-primary">Xem thêm</button> */}
          </div>
        </div>
      </div>
    </MediaWrapper>
  );
}

const MediaWrapper = styled.section`
  background-color: var(--mainWhite); /* Hoặc màu nền khác nếu muốn */

  .embed-responsive {
     border-radius: 5px; /* Bo góc video */
     overflow: hidden; /* Đảm bảo iframe không tràn */
     box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--mainDark);
    text-align: justify; /* Căn đều chữ */
  }

  /* Responsive: Cột video chiếm toàn bộ chiều rộng trên màn hình nhỏ */
  @media (max-width: 767px) {
    .col-md-7 {
       margin-bottom: 1.5rem; /* Khoảng cách giữa video và text trên mobile */
    }
     p {
       text-align: left; /* Bỏ căn đều trên mobile nếu muốn */
     }
  }
`;