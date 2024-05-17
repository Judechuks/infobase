import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { TestimonialCard } from "../../components";
import { useGlobalContext } from "../../context";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonials.scss";

const Testimonials = () => {
  const { testimonialData } = useGlobalContext();

  return (
    <section id="testimonials">
      <h1 className="section-title">What People Say About Us</h1>
      {/* Swiper React Component */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}>
        {testimonialData?.data.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Testimonials;
