import React from 'react';
import TestimonialCard from './TestimonialCard';
import imgPlaceholder from '../assets/Testimonial/hitler.jpg'; // Sample image
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Styles.css';
import { Pagination } from 'swiper/modules';

function Testimonials() {
  const testimonialsData = [
    {
      Name: "John Doe",
      content: "This product is fantastic! It has saved me so much time.",
      imgSrc: imgPlaceholder,
      bgColor: "#f9f9f9"
    },
    {
      Name: "Jane Smith",
      content: "Great user experience and design, highly recommend!",
      imgSrc: imgPlaceholder,
      bgColor: "#e0f7fa"
    },
    {
      Name: "Alice Johnson",
      content: "Amazing service and support. I love using this!",
      imgSrc: imgPlaceholder,
      bgColor: "#fbe9e7"
    },
    {
      Name: "Michael Brown",
      content: "It exceeded my expectations in every way possible.",
      imgSrc: imgPlaceholder,
      bgColor: "#f1f8e9"
    },{
      Name: "Michael Brown",
      content: "It exceeded my expectations in every way possible.",
      imgSrc: imgPlaceholder,
      bgColor: "#f1f8e9"
    },{
      Name: "Michael Brown",
      content: "It exceeded my expectations in every way possible.",
      imgSrc: imgPlaceholder,
      bgColor: "#f1f8e9"
    },{
      Name: "Michael Brown",
      content: "It exceeded my expectations in every way possible.",
      imgSrc: imgPlaceholder,
      bgColor: "#f1f8e9"
    },{
      Name: "Michael Brown",
      content: "It exceeded my expectations in every way possible.",
      imgSrc: imgPlaceholder,
      bgColor: "#f1f8e9"
    },{
      Name: "Michael Brown",
      content: "It exceeded my expectations in every way possible.",
      imgSrc: imgPlaceholder,
      bgColor: "#f1f8e9"
    },{
      Name: "Michael Brown",
      content: "It exceeded my expectations in every way possible.",
      imgSrc: imgPlaceholder,
      bgColor: "#f1f8e9"
    },{
      Name: "Michael Brown",
      content: "It exceeded my expectations in every way possible.",
      imgSrc: imgPlaceholder,
      bgColor: "#f1f8e9"
    },{
      Name: "Michael Brown",
      content: "It exceeded my expectations in every way possible.",
      imgSrc: imgPlaceholder,
      bgColor: "#f1f8e9"
    },{
      Name: "Michael Brown",
      content: "It exceeded my expectations in every way possible.",
      imgSrc: imgPlaceholder,
      bgColor: "#f1f8e9"
    },{
      Name: "Michael Brown",
      content: "It exceeded my expectations in every way possible.",
      imgSrc: imgPlaceholder,
      bgColor: "#f1f8e9"
    },{
      Name: "Michael Brown",
      content: "It exceeded my expectations in every way possible.",
      imgSrc: imgPlaceholder,
      bgColor: "#f1f8e9"
    },{
      Name: "Michael Brown",
      content: "It exceeded my expectations in every way possible.",
      imgSrc: imgPlaceholder,
      bgColor: "#f1f8e9"
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='font-Bebas text-5xl text-[#FF4191] bg-[#FFF078] w-56 text-center'>
        TESTIMONIALS
      </div>
      <div className='mt-8 w-full max-w-5xl h-[220px]'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                Name={testimonial.Name}
                content={testimonial.content}
                imgSrc={testimonial.imgSrc}
                bgColor={testimonial.bgColor}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
