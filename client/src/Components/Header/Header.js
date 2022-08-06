import React from "react";
import { IoSchoolOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export default () => {
  let navigate = useNavigate();

  let handleNav = (e) => {
    let el = e.target;
    let menu = document.getElementById("menu");
    if (el.textContent == "Home") {
      navigate("/");
    } else if(el.textContent=="All Courses"){
      navigate('/courses')
    } else if (el.textContent == "My Courses") {
      navigate("/enroledCourses");
    }else if(el.textContent == "Statistics"){
      navigate('/statistics');
    }else if(el.id == "login"){
      navigate('/login');
    }else if(el.id == "menu-btn"){
      el.classList.toggle("open");
      menu.classList.toggle("flex");
      menu.classList.toggle("hidden");
    }else if(el.id == "new_course"){
      navigate('/createCourse')
    }
  };



  return (
    <header
    onClick={handleNav}  className="flex items-center justify-center p-10 text-center h-40 md:h-20 md:flex md:flex-row md:justify-between md:items-center w-full lg:justify-around"
    >
      <div className="hidden items-center justify-center mx-auto md:mx-0 text-white text-2xl font-bold md:flex">
        <IoSchoolOutline size="4rem"></IoSchoolOutline>
      </div>

      {/* MENU */}
      <div onClick={handleNav} className="h-10 hidden w-1/2 gap-10 md:flex md:space-x-8 md:items-center md:justify-center ">
        <div className="flex flex-row items-center gap-5 w-full">
          <a href="" className="hover:text-accentCyan font-bold">
            Home
          </a>
          <a href="" className="hover:text-accentCyan font-bold">
            All Courses
          </a>
          <a href="" className="hover:text-accentCyan font-bold">
            My Courses
          </a>
          <a href="" className="hover:text-accentCyan font-bold">
            Statistics
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 ">
        <a
            id="login"
            className="font-bold p-3 rounded-xl hover:opacity-90 hover:-translate-y-1 transition-all duration-500 cursor-pointer"
          >
            Login
          </a>
          <a
            className="bg-teal-400 font-bold p-3 rounded-xl hover:opacity-90 hover:-translate-y-1 transition-all duration-500 cursor-pointer"
          >
            SignUp
          </a>
          <button id="new_course" className="flex flex-row items-center justify-center p-3 bg-darkBlue3 gap-2 rounded-xl text-white font-bold hover:scale-110 transition-all duration-500">
             <FaPlus></FaPlus> Course
          </button>
          
        </div>
      </div>

      <div className="absolute left-10 md:hidden " >
        <button
          id="menu-btn"
          type="button"
          className="z-40 absolute w-full hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <div
        id="menu"
        className="absolute top-0 bottom-0 left-0 hidden flex-row justify-center items-center w-full h-24 pb-28 pt-28 pl-12 gap-20 text-lg text-white bg-black md:hidden"
      >
        <div className="flex flex-col justify-start items-center">
          {" "}
          <a href="" className="hover:text-accentCyan font-bold">
            Home
          </a>
          <a href="" className="hover:text-accentCyan font-bold">
            All Courses
          </a>
          <a href="" className="hover:text-accentCyan font-bold">
            My Courses
          </a>
          <a href="" className="hover:text-accentCyan font-bold">
            Statistics
          </a>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center">
        <a
            className="font-bold p-3 rounded-xl hover:opacity-90 hover:-translate-y-1 transition-all duration-500 cursor-pointer"
          >
            Login
          </a>
          <a
            className="bg-teal-400 p-2.5 rounded-xl hover:opacity-90 hover:-translate-y-1 transition-all duration-500 cursor-pointer"
          >
            SignUp
          </a>
        </div>
      </div>
    </header>
  );
};
