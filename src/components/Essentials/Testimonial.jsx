import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import necessary CSS for autoplay

const testimonials = [
  {
    name: "Scott Hannah",
    title: "Warehouse Manager, Bailiwick",
    rating: 5,
    text: "Spring Co Logistics has been a trusted, reliable partner for Bailiwick since the first shipment they picked up. They give me peace of mind knowing that my US shipments will get to their destinations safely.",
  },
  {
    name: "Avic Gonzalez",
    title: "Transportation Manager, Beckman Coulter",
    rating: 5,
    text: "I was really impressed with Spring Co Logistics' consultative approach to our distribution needs. They simply have the best execution and customer service of all my supply chain providers.",
  },
  {
    name: "Lisa Veach",
    title: "Parts Manager, Power Curbers",
    rating: 5,
    text: "As always, Spring Co Logistics once again came through for us when the shipment had to be there. I know I can always count on you and I can go home and let you handle it. That is priceless.",
  },
];

const Testimonial = () => {
  return (
    <div className="w-full px-4 py-10 bg-gradient-to-r from-blue-50 to-white">
      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300 ease-in-out"
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
