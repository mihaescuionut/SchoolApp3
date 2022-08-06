import React from "react";
import img from '../../images/illustration-intro.png';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default () => {
  let navigate = useNavigate();
  let handleToCourses=(e)=>{
    let el = e.target;
    if(el.textContent == "Get Started"){
      navigate("/courses");
    }
  }
  useEffect(()=>{
    AOS.init();
  }, []);


  return (
    <section
      id="hero"
      className="bg-no-repeat bg-contain bg-bottom mt-28 md:mt-0"
    >
      <div onClick={handleToCourses} className="container mx-auto px-6 text-center md:pt-20 pb-52">
        <img src={img} alt="" className="mx-auto" data-aos="flip-left" data-aos-duration="1500"/>
        <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl">
          All your courses in one secure location, assessible anywhere.
        </h1>
        <p className="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg">
          This is where it stores all your most important courses in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="p-3 rounded-full w-52 bg-accentCyan hover:scale-95 font-bold">
          Get Started
        </button>
      </div>
    </section>
  );
};
