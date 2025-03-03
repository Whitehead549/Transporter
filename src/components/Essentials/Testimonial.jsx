import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import necessary CSS for autoplay

const testimonials = [
  {
    name: "Ethan Thompson",
    title: "Supply Chain Manager",
    rating: 5,
    text: "Rapidox Logistics has been a game-changer for our business. Their reliable and efficient services have helped us streamline our operations and improve customer satisfaction.",
  },
  {
    name: "Maya Ramos",
    title: "Operations Director",
    rating: 5,
    text: "Rapidox Logistics has consistently delivered exceptional service, providing timely and cost-effective solutions that meet our unique logistics needs.",
  },
  {
    name: "Lucas Brooks",
    title: "Logistics Manager",
    rating: 5,
    text: "Rapidox Logistics has provided us with reliable, efficient, and cost-effective logistics solutions, exceeding our expectations and improving our bottom line.",
  },
];

const Testimonial = () => {
  return (
    <div className="w-full px-4 py-10">
      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600">{testimonial.title}</p>
              <div className="mt-2 flex justify-center space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star ${
                      i < testimonial.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  ></i>
                ))}
              </div>
            </div>
            <blockquote className="mt-4 text-gray-600 italic text-sm">
              {testimonial.text}
            </blockquote>
          </div>
        ))}
      </div>

      {/* Mobile View with Swiper and Autoslide */}
      <div className="md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000, // Time between slides (in milliseconds)
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          modules={[Pagination, Autoplay]}
          grabCursor={true}
          touchRatio={1}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 shadow-lg rounded-xl">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <div className="mt-2 flex justify-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star ${
                          i < testimonial.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      ></i>
                    ))}
                  </div>
                </div>
                <blockquote className="mt-4 text-gray-600 italic text-sm">
                  {testimonial.text}
                </blockquote>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
