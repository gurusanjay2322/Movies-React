import React from 'react';
import TestimonialCard from './TestimonialCard';
import imgPlaceholder from '../assets/Testimonial/hitler.jpg'; // Sample image
import { Swiper, SwiperSlide } from 'swiper/react';
import './Styles.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

function Testimonials() {
  const testimonialsData = [
    {
      Name: "John Doe",
      content: "This product is fantastic! It has saved me so much time.",
      imgSrc: imgPlaceholder
    },
    {
      Name: "Jane Smith",
      content: "Great user experience and design, highly recommend!",
      imgSrc: imgPlaceholder
    },
    {
      Name: "Alice Johnson",
      content: "Amazing service and support. I love using this!",
      imgSrc: imgPlaceholder
    },
    {
      Name: "Michael Brown",
      content: "It exceeded my expectations in every way possible.",
      imgSrc: imgPlaceholder
    }
  ];

  // Define an array of background colors that go well with a black background
  const cardColors = ['#1e3d59', '#ff6e40', '#ffcc29', '#2ec4b6', '#00b4d8'];

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='font-Bebas text-5xl text-[#FF4191] bg-[#FFF078] w-56 text-center items-center'>
        TESTIMONIALS
      </div>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard
              Name={testimonial.Name}
              content={testimonial.content}
              imgSrc={testimonial.imgSrc}
              bgColor={cardColors[index % cardColors.length]} // Pass color to TestimonialCard
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
