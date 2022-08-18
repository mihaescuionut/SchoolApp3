import { React, useState, useEffect }  from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Api from "../api.js";
import PopulateCards from "./PopulateCards.js";


export default () => {

  const [courses, setCourses] = useState([]);
  let getAllCourses = async()=>{

    let api = new Api();
    let courses = await api.getAllCourses();

    setCourses(courses);
  }

  useEffect(() => {
    AOS.init();
    getAllCourses();
  }, []);

  return (
    <section id="courses" className="dark:bg-darkBlue1 p-8 mt-10 w-full flex flex-col gap-3 md:h-full md:grid md:grid-cols-3 md:gap-2 md:mt-0">

      {courses.map((e=> <PopulateCards course={e}></PopulateCards>))}

 
    </section>
  );
};
