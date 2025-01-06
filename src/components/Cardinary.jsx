import React from 'react';
import logisticImage from '../assets/project-1.jpg'; // Replace with your background image path
import imageIcon from '../assets/ship-icon.png'; // Replace with your image icon path

const Cardinary = () => {
    return (
          <div className="relative w-full min-h-screen flex justify-center items-center overflow-hidden">  
            {/* Background Image */}
            <div className="absolute w-[420px] h-[290px] object-contain">
                <img
                    src={logisticImage}
                    alt="Logistic background"
                    className="w-full h-full object-cover object-top shadow-lg brightness-75"
                />
            </div>

            {/* Card Content */}
            <div className="relative z-10 flex justify-center items-center top-[14rem] ">
                <div className="relative bg-[#fff] shadow-2xl p-16 w-[360px] h-[180px] text-center animate-fadeIn">
                    {/* Image Icon in the Top-Right Corner */}
                    <div className="absolute top-[-2.5rem] right-4 bg-[#ffc439] rounded-full w-24 h-24 pl-4">
                        <img
                            src={imageIcon}
                            alt="Icon"
                            className="w-36 h-36 object-contain" // Adjust size as needed
                        />
                    </div>

                    {/* Card Title */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Delivery Logistics</h2>
                    
                    {/* Card Description */}
                    <p className=" text-lg leading-relaxed">
                        "Efficient and reliable logistics solutions to ensure your goods reach their destination on time."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cardinary;
