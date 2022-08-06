import React from "react";
import Api from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";





export default()=>{
  let navigate = useNavigate();
  const [name, setName] = useState();
  const [department, setDepartment] = useState();

  let handleChange=(e)=>{
    let el = e.target;
    if(el.id == "course_name"){
      setName(el.value);
    }
    if(el.id == "course_department"){
      setDepartment(el.value);
    }
  }

  let handleCreate=(e)=>{
    let el = e.target;

    if(el.textContent == "CREATE"){
      let course = {
        name: name,
        department: department
      }

      let api = new Api();
      let create = api.createCourse(course);
    }else if(el.textContent == "CANCEL"){
      navigate("/");
    }
  }



    return(

        <section
        id="createCourse"
        className="dark:bg-darkBlue1 flex justify-center items-center h-full w-full py-5 mt-10"
      >
  
        <div className="flex flex-col justify-center items-center mx-auto w-full bg-darkBlue3 rounded-3xl p-10 gap-10 font-bold md:w-1/2">

            <p className="bg-black p-4 rounded-xl font-extrabold tracking-widest animate-pulse">CREATE A COURSE</p>
  
          <div onChange={handleChange} className="flex flex-col justify-center items-center gap-4 w-full">
  
            <div className="flex flex-row justify-center items-center gap-4 shadow-blue-600 shadow-sm rounded-xl p-4">
              <label htmlFor="course_name">COURSE NAME</label>
              <input
                className="inline-block w-40 rounded-lg text-center text-darkBlue3 font-bold focus:outline-none uppercase h-12"
                type="text"
                id="course_name"
                placeholder="Course Name"
              />
            </div>
            <div className="flex flex-row justify-center items-center gap-4 shadow-blue-600 shadow-sm rounded-xl p-4">
              <label htmlFor="course_name">DEPARTMENT</label>
              <input
                className="inline-block w-40 rounded-lg text-center text-darkBlue3 font-bold focus:outline-none uppercase h-12"
                type="text"
                id="course_department"
                placeholder="Department"
              />
            </div>
  
          </div>
  
          <div onClick={handleCreate} className="flex flex-row justify-around items-center gap-4 w-full md:w-1/2">
                <button
                  id="create"
                  className="bg-teal-600 p-3 rounded-xl w-1/2 hover:bg-opacity-90 transition-all hover:-translate-y-1 duration-500 "
                >
                  CREATE
                </button>
  
                <button className="bg-sky-400 p-3 rounded-xl w-1/2 hover:bg-opacity-90 transition-all hover:-translate-y-1 duration-500 ">
                  CANCEL
                </button>
              </div>
        </div>
      </section>



    )
}