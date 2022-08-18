import React from "react";
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
      className="flex flex-col items-center gap-4 pb-10 rounded-lg bg-gray-100 dark:bg-darkBlue3 relative"
      data-aos="zoom-out"
      data-aos-duration="1500"
    >
      <div className="card_header">

      <div className="absolute top-2 left-8 bg-gradient-to-br from-myLightDark to-cyan-300 p-4 rounded-full shadow-lg shadow-darkBlue text-center font-extrabold">
          90$
        </div>


        <div className="card_heading shadow-darkBlue shadow-lg w-1/2" data-aos="fade-left" data-aos-duration="1500">
          <h5 className="font-bold md:text-xl uppercase">
            {course.name}
          </h5>
        </div>


      </div>

      <div
        className="flex flex-col gap-1"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <div class="card__details">
          <ul>
            <li>Beginner</li>
            <li>Introduction to {course.department}</li>
            <li>Accredited course</li>
            <li>Computer science</li>
            <li>Easy to learn</li>
          </ul>
        </div>

      </div>

      <div
        onClick={handleNav}
        className="flex items-center justify-center space-x-4 w-full"
      >
        <button className="p-3 w-1/2 rounded-full bg-accentCyan font-bold hover:-skew-y-3 md:w-1/2">
          More Info
        </button>
      </div>
    </div>
  );
};
