import { FaCheck } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect, React, useState, useContext } from "react";
import Api from "../api";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { Context } from "../../Context";

export default ({ crs }) => {
  const [user, setUser] = useContext(Context);
  const [courses, setCourses] = useState([]);
  const [curs, setCrs] = useState([]);
  const [enrol, setEnrol] = useState([]);
  const [stats, setStats] = useState([]);
  const [profesorCourse, setProfesorCourse] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  let fetchCourses = async () => {
    let api = new Api();
    let courses = await api.getAllCourses();
    setCourses(courses);
    courses.forEach((e) => {
      if (e.id == id) {
        setCrs(e);
      }
    });
  };

  let fetchEnrols = async () => {
    let api = new Api();
    let enr = await api.getEnroledCoursesById(user.id);
    let enrolBtn = document.querySelector("#enrol");
    enr.forEach((curs) => {
      if (curs.course_id == id) {
        enrolBtn.textContent = "UNROL";
        setEnrol(curs);
      }
    });
  };

  let handleEnrol = async (e) => {
    let el = e.target;
    let api = new Api();
    if (el.textContent == "ENROL") {
      let enrol = await api.enrolCourseById(user.id, curs.id);
      navigate("/enroledCourses");
    } else if (el.textContent == "UNROL") {
      let unrol = await api.unrolCourseById(enrol.id);
      navigate("/enroledCourses");
    } else if (el.textContent == "CANCEL") {
      navigate("/");
    } else if (el.textContent == "EDIT") {
      navigate(`/editCourse/${id}`);
    } else if (el.textContent == "DELETE") {
      let del = await api.deleteCourseById(id);
      navigate("/courses");
    }
  };

  let fetchStats = async () => {
    let api = new Api();
    let res = await api.getStatsById(id);
    setStats(res[0]);
  };

  let fetchProfesorCourseById = async () => {
    let api = new Api();
    let res = await api.getProfesorCourseById(id);
    console.log(res);
    setProfesorCourse(res[0]);
  };

  useEffect(() => {
    fetchCourses();
    fetchStats();
    fetchProfesorCourseById();
    fetchEnrols();
  }, [user]);

  return (
    <section
      id="courses"
      className="bg-darkBlue1 flex justify-center items-center w-full py-5 mt-10"
    >
      <div
        onClick={handleEnrol}
        className="flex flex-col p-6 m-3 mx-auto w-3/4 space-y-10 bg-gradient-to-br from-myLightDark to-myDarkDark rounded-2xl shadow-2xl shadow-black md:w-1/2"
      >
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col justify-center items-center mb-4 gap-4 text-center md:text-left">
            <p className="text-xl font-extrabold p-4 w-2/3 rounded-full text-center bg-black text-emerald-300 animate-bounce">
              {" "}
              {stats.length == 0 ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                <>WE GOT {stats[0].numar} ENROLS</>
              )}
            </p>
            <h3 className="font-bold text-2xl">{curs.name}</h3>

            <p className="text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="flex flex-col justify-center items-center gap-2"   >
              <div className="flex flex-row gap-2 items-center justify-center">
                <FaCheck /> <p> Beginner</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <FaCheck /> <p> Introduction to {curs.department} </p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <FaCheck /> <p> Accredited course</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <FaCheck /> <p> Computer science</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <FaCheck /> <p> Development</p>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center gap-4 w-full font-bold">
              {!user ? (
                <>
                  <button className="bg-green-600 p-3 rounded-xl w-1/3 hover:bg-opacity-90 transition-all hover:-translate-y-1 duration-500">
                    LOGIN
                  </button>
                  <button className="bg-sky-400 p-3 rounded-xl w-1/3 hover:bg-opacity-90 transition-all hover:-translate-y-1 duration-500">
                    CANCEL
                  </button>
                </>
              ) : user && user.role == "user" ? (
                <>
                  <button
                    id="enrol"
                    className="bg-teal-600 p-3 rounded-xl w-1/3 hover:bg-opacity-90 transition-all hover:-translate-y-1 duration-500"
                  >
                    ENROL
                  </button>
                  <button className="bg-sky-400 p-3 rounded-xl w-1/3 hover:bg-opacity-90 transition-all hover:-translate-y-1 duration-500">
                    CANCEL
                  </button>
                </>
              ) : (
                <>
                  <button className="bg-green-600 p-3 rounded-xl w-1/3 hover:bg-opacity-90 transition-all hover:-translate-y-1 duration-500">
                    EDIT
                  </button>
                  <button className="bg-red-400 p-3 rounded-xl w-1/3 hover:bg-opacity-90 transition-all hover:-translate-y-1 duration-500 ">
                    DELETE
                  </button>
                  <button className="bg-sky-400 p-3 rounded-xl w-1/3 hover:bg-opacity-90 transition-all hover:-translate-y-1 duration-500">
                    CANCEL
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
