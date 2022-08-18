import { React, useContext } from "react";
import { IoSchoolOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { Context } from "../../Context";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default () => {
  let navigate = useNavigate();
  const [user, setUser] = useContext(Context);

  let handleNav = (e) => {
    let el = e.target;
    if (el.textContent == "Home") {
      navigate("/");
    } else if (el.textContent == "All Courses") {
      navigate("/courses");
    } else if (el.textContent == "My Courses") {
      navigate("/enroledCourses");
    } else if (el.textContent == "Statistics") {
      navigate("/statistics");
    } else if (el.id == "login") {
      navigate("/login");
    } else if (el.textContent == "Sign Out") {
      setUser(undefined);
      Cookies.remove("authenticatedUser");
    } else if (el.textContent == "Sign Up") {
      navigate("/register");
    } else if (el.id == "new_course") {
      navigate("/createCourse");
    }
  };

  let navToggle = ()=>{

    let menu = document.getElementById('menu');
    let menuBtn = document.getElementById('menu-btn');

      menuBtn.classList.toggle('open');
      menu.classList.toggle('flex');
      menu.classList.toggle('hidden');

  }

  return (
    <header
      onClick={handleNav}
      className="flex items-center justify-center p-10 text-center h-40 md:h-20 md:flex md:flex-row md:justify-between md:items-center w-full"
    >
      <div className="hidden items-center justify-center mx-auto text-white text-2xl font-bold md:flex md: w-1/12">
        <IoSchoolOutline size="4rem"></IoSchoolOutline>
      </div>

      {/* MENU */}
      <div
        onClick={handleNav}
        className="h-10 hidden w-full md:flex md:flex-row md:justify-around md:items-center"
      >
        <div className="flex flex-row items-center justify-center w-full gap-5">
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

        <div className="flex flex-row items-center justify-center w-1/3 gap-2">
          {user && user.role == "professor" ? (
            <>
              <p>Welcome, {user.name}</p>
              <a className="bg-red-400 font-bold p-3 w-full rounded-xl hover:opacity-90 hover:-translate-y-1 transition-all duration-500 cursor-pointer">
                Sign Out
              </a>
              <button
                id="new_course"
                className="flex flex-row items-center justify-center p-3 bg-darkBlue3 gap-2 rounded-xl text-white font-bold hover:scale-110 transition-all duration-500"
              >
                <FaPlus></FaPlus> Course
              </button>
            </>
          ) : user && user.role == "user" ? (
            <>
              <p>Welcome, {user.name}</p>
              <a className="bg-red-400 font-bold p-3 w-full rounded-xl hover:opacity-90 hover:-translate-y-1 transition-all duration-500 cursor-pointer">
                Sign Out
              </a>
            </>
          ) : (
            <>
              <a
                id="login"
                className="font-bold p-3 rounded-xl hover:opacity-90 hover:-translate-y-1 transition-all duration-500 cursor-pointer"
              >
                Login
              </a>
              <a className="bg-teal-400 font-bold p-4 rounded-xl hover:opacity-90 hover:-translate-y-1 transition-all duration-500 cursor-pointer">
                Sign Up
              </a>
            </>
          )}
        </div>
      </div>

      <div className="absolute left-10 md:hidden">
        <button onClick={navToggle}
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
        {user && user.role == "professor" ? (
            <>
              <p>Welcome, {user.name}</p>
              <a className="bg-red-400 font-bold p-3 w-full rounded-xl hover:opacity-90 hover:-translate-y-1 transition-all duration-500 cursor-pointer">
                Sign Out
              </a>
              <button
                id="new_course"
                className="flex flex-row items-center justify-center p-3 bg-darkBlue3 gap-2 rounded-xl text-white font-bold hover:scale-110 transition-all duration-500"
              >
                <FaPlus></FaPlus> Course
              </button>
            </>
          ) : user && user.role == "user" ? (
            <>
              <p>Welcome, {user.name}</p>
              <a className="bg-red-400 font-bold p-3 w-full rounded-xl hover:opacity-90 hover:-translate-y-1 transition-all duration-500 cursor-pointer">
                Sign Out
              </a>
            </>
          ) : (
            <>
              <a
                id="login"
                className="font-bold p-3 rounded-xl hover:opacity-90 hover:-translate-y-1 transition-all duration-500 cursor-pointer"
              >
                Login
              </a>
              <a className="bg-teal-400 font-bold p-3 rounded-xl hover:opacity-90 hover:-translate-y-1 transition-all duration-500 cursor-pointer">
                Sign Up
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
