// src/doctorData.js
import doctor1Img from './assets/images/doctors/doctor1.jpg'; // Thay bằng đường dẫn ảnh thực tế
import doctor2Img from './assets/images/doctors/doctor2.jpg';
import doctor3Img from './assets/images/doctors/doctor3.jpg';
import doctor4Img from './assets/images/doctors/doctor4.jpg';
import doctor5Img from './assets/images/doctors/doctor5.jpg';
// Import các ảnh khác

export const doctors = [
  {
    id: 1,
    name: 'ThS. BS. Nguyễn Thị Tố Uyên',
    title: 'Phó khoa Cơ xương khớp',
    img: doctor1Img,
  },
  {
    id: 2,
    name: 'ThS. BS. Nguyễn Văn A', // Thay tên và chức danh
    title: 'Trưởng khoa Thần kinh',
    img: doctor2Img,
  },
  {
    id: 3,
    name: 'PGS. TS. Trần Thị B',
    title: 'Chuyên gia Tiêu hoá',
    img: doctor3Img,
  },
  {
    id: 4,
    name: 'BS. CKII. Lê Văn C',
    title: 'Phó khoa Tim mạch',
    img: doctor4Img,
  },
   {
    id: 5,
    name: 'GS. TS. Phạm Thị D',
    title: 'Chuyên gia Tai mũi họng',
    img: doctor5Img,
  },
  // Thêm các bác sĩ khác
];