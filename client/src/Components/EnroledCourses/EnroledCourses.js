import { React, useContext, useEffect, useState } from "react";
import Api from "../api";
import PopulateEnrolCourses from "./PopulateEnrolCourses";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";
import ZeroCourses from "./ZeroCourses";


export default () => {
  let navigate = useNavigate();
  const [enrol, setEnrol] = useState([]);
  const [user, setUser] = useContext(Context);

  let fetchEnroledCourses = async () => {
    let api = new Api();
    let courses = await api.getEnroledCoursesById(user.id);
    console.log(courses.length);
    setEnrol(courses);
  };

  useEffect(() => {
    fetchEnroledCourses();
  }, [user]);

  return (


    <section id="courses" className="flex flex-col justify-center items-center w-full">

      
      <div className="bg-darkBlue flex flex-col justify-center items-center gap-3 md:flex md:flex-row md:flex-wrap p-5 md:items-stretch w-full py-5 mt-28">
        {enrol.length > 0 ? (
          enrol.map((e) => (
            <PopulateEnrolCourses object={e}></PopulateEnrolCourses>
          ))
        ) : (
         <ZeroCourses/>
        )}
      </div>


    </section>
  );
};
