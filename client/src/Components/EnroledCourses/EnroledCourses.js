import React from "react";
import { useEffect, useState} from "react";
import Api from "../api";
import PopulateEnrolCourses from "./PopulateEnrolCourses";




export default()=>{

    const[enrol, setEnrol] = useState([]);

    let fetchEnroledCourses= async()=>{
        let api = new Api();
        let courses = await api.getEnroledCoursesById(3);
        setEnrol(courses);
    }

    useEffect(()=>{
        fetchEnroledCourses();
    }, []);


    return(

        <section
        id="courses"
        className="dark:bg-darkBlue flex flex-col gap-3 md:grid md:grid-cols-2 p-5 justify-center items-center w-full py-5 mt-28"
      >
        {enrol.map((e=> <PopulateEnrolCourses object={e}></PopulateEnrolCourses>))}
      </section>


    )
}