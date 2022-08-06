import { React, useState, useEffect} from "react";
import { useParams, useNavigate  } from "react-router-dom";
import Api from "../api";

export default () => {
   
  const [courses, setCourses] = useState([]);
  const [curs, setCurs] = useState([]);
  const [name, setName] = useState();
  const [department, setDepartment] = useState();
  let navigate = useNavigate();
  let {id} = useParams();
  
  let handleChange=(e)=>{
    let el = e.target;
    console.log(el.value);
    if(el.id == "course_name"){
      setName(el.value);
    }
    else if(el.id == "course_department"){
      setDepartment(el.value);
    }
  };
  let handleEditAndCancel= async (e)=>{
    let el = e.target;
    const crs = {
      name: name,
      department: department
    };
      if(el.textContent == "SAVE"){
        let api = new Api();
        api.editCourse(id, crs);
        navigate('/');
      }else if(el.textContent == "CANCEL"){
        navigate('/');
      }



  }

  let fetchCourses = async () => {
    let api = new Api();
    let courses = await api.getAllCourses();
    setCourses(courses);
    courses.forEach((e) => {
      if (e.id == id) {
        setCurs(e);
      }
    });
  };



  useEffect(()=>{
    fetchCourses();
  }, []);


  return (



    <section
      id="editCourse"
      className="dark:bg-darkBlue1 flex justify-center items-center h-full w-full py-5 mt-10"
    >

      <div className="flex flex-col justify-center items-center mx-auto w-full bg-darkBlue3 rounded-3xl p-10 gap-10 font-bold md:w-1/2">

      <h3 className="text-2xl uppercase w-full text-center">EDIT THE <span className="underline font-extrabold text-sky-400">{curs.name}</span> COURSE</h3>
        

        <div onChange={handleChange} className="flex flex-col justify-center items-center gap-4 w-full">

          <div className="flex flex-row justify-center items-center gap-4">
            <label htmlFor="course_name">COURSE NAME</label>
            <input
              className="inline-block w-40 rounded-lg text-center text-darkBlue3 font-bold focus:outline-none uppercase h-12"
              type="text"
              id="course_name"
              placeholder="Course Name"
            />
          </div>
          <div className="flex flex-row justify-center items-center gap-4">
            <label htmlFor="course_name">DEPARTMENT</label>
            <input
              className="inline-block w-40 rounded-lg text-center text-darkBlue3 font-bold focus:outline-none uppercase h-12"
              type="text"
              id="course_department"
              placeholder="Department"
            />
          </div>

        </div>

        <div  onClick={handleEditAndCancel}  className="flex flex-row justify-around items-center gap-4 w-full md:w-1/2">
              <button
                id="enrol"
                className="bg-teal-600 p-3 rounded-xl w-1/2 hover:bg-opacity-90 transition-all hover:-translate-y-1 duration-500 "
              >
                SAVE
              </button>

              <button className="bg-sky-400 p-3 rounded-xl w-1/2 hover:bg-opacity-90 transition-all hover:-translate-y-1 duration-500 ">
                CANCEL
              </button>
            </div>
      </div>
    </section>
  );
};
