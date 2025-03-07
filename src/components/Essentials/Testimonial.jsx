import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Ethan Thompson",
    title: "Supply Chain Manager",
    rating: 5,
    text: "Rapidox Logistics has been a game-changer for our business. Their reliable and efficient services have helped us streamline our operations and improve customer satisfaction.",
  },
  {
    name: "Maya Ramos",
    title: "Operations Director",
    rating: 5,
    text: "Rapidox Logistics has consistently delivered exceptional service, providing timely and cost-effective solutions that meet our unique logistics needs.",
  },
  {
    name: "Lucas Brooks",
    title: "Logistics Manager",
    rating: 5,
    text: "Rapidox Logistics has provided us with reliable, efficient, and cost-effective logistics solutions, exceeding our expectations and improving our bottom line.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

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

      {/* Mobile View with Custom Carousel */}
      <div className="md:hidden relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full bg-white p-6 shadow-lg rounded-xl"
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
              <blockquote className="mt-4 text-gray-600 text-sm">
                {testimonial.text}
              </blockquote>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-custom_blue" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;