import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faTrophy, faTruck, faUsers } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatCard = ({ icon, title, value, inView, isThousandFormat }) => (
  <div className="flex flex-col justify-center items-center text-center bg-[#1c1c3a] hover:bg-[#28284a] transition-all duration-300 ease-in-out shadow-lg rounded-lg px-6 py-8 m-4">
    <div className="text-[#9f9fc8] text-4xl mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-5xl font-bold text-[#FFD700]">
      {inView && (
        <>
          <CountUp
            end={isThousandFormat ? value / 1000 : value}
            duration={2}
            separator=","
            decimals={isThousandFormat && value % 1000 !== 0 ? 1 : 0}
          />
          {isThousandFormat && "K"}
        </>
      )}
    </p>
  </div>
);

const DailyStats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const stats = [
    {
      title: "Offices Worldwide",
      value: 85,
      icon: <FontAwesomeIcon icon={faGlobe} />,
      isThousandFormat: false,
    },
    {
      title: "Awards Won",
      value: 25,
      icon: <FontAwesomeIcon icon={faTrophy} />,
      isThousandFormat: false,
    },
    {
      title: "Delivered Packages",
      value: 112000,
      icon: <FontAwesomeIcon icon={faTruck} />,
      isThousandFormat: true,
    },
    {
      title: "Satisfied Clients",
      value: 92000,
      icon: <FontAwesomeIcon icon={faUsers} />,
      isThousandFormat: true,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#0f0f2d] to-[#151540] text-[#9f9fc8] py-16">
      <div
        ref={ref}
        className="flex flex-wrap justify-center items-center w-4/5 mx-auto"
      >
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
            inView={inView}
            isThousandFormat={stat.isThousandFormat}
          />
        ))}
      </div>
    </div>
  );
};

export default DailyStats;
