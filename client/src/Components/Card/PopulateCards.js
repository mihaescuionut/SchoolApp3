import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default ({ course }) => {
  const navigate = useNavigate();
  let handleNav = (e) => {
    let el = e.target;
    if (el.textContent == "More Info") {
      navigate("/course/" + course.id);
    }
  };
  return (
    <div
      id={course.id}
      className="flex flex-col items-center p-10 gap-4 rounded-lg bg-gray-100 dark:bg-darkBlue3"
      data-aos="zoom-out"
      data-aos-duration="1500"
    >
      <h5 className="font-bold md:text-xl underline uppercase">
        {course.name}
      </h5>
      <p className="text-sm mt-0">By Ionut</p>

      <div
        className="flex flex-col gap-1"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <div className="flex flex-row gap-2 items-center">
          <FaCheck /> <p> Beginner</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <FaCheck /> <p> Introduction to {course.department}</p>
        </div>
        <div className="flex flex-row gap-2 items-center ">
          <FaCheck /> <p> Accredited course</p>
        </div>
        <div className="flex flex-row gap-2 items-center ">
          <FaCheck /> <p> Data science</p>
        </div>
        <div className="flex flex-row gap-2 items-center ">
          <FaCheck /> <p> Development</p>
        </div>

        <div className="flex flex-col justify-center items-center mt-5">
          <h4 className="line-through"> 100$ </h4>
          <span className="text-2xl">90$/YEAR</span>
        </div>
      </div>

      <div
        onClick={handleNav}
        className="flex items-center justify-center space-x-4 w-full"
      >
        <button className="p-3 rounded-full w-full bg-accentCyan font-bold hover:scale-95 md:w-1/2">
          More Info
        </button>
      </div>
    </div>
  );
};
