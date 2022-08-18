import Api from "../api";
import { React, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

export default () => {
  let [stats, setStats] = useState([]);

  let navigate = useNavigate();

  let fetchStats = async () => {
    let api = new Api();
    let resp = await api.getStats();
    setStats(resp[0]);
  };
  let handleToCourse = (e)=>{
    let el = e.target;
    if(el.textContent == "Go to course"){
      if(stats.length>0){
        let id = stats[0].course_id;
        navigate(`/course/${id}`)
      }
    }
  }

  useEffect(() => {
    fetchStats();
  }, []);
  return (
    <div className="bg-darkBlue h-1/2 mt-28">
      <div className="bg-darkBlue3 flex flex-col items-center mb-10 justify-center mx-auto p-6 md:grid md:grid-rows md:rounded-full">
        <h1 className="text-5xl font-bold text-emerald-400 animate-pulse">
          BEST SELLER
        </h1>
        <div className="flex flex-col items-center p-10 space-y-6 rounded-lg dark:bg-darkBlue3">
          <p className="text-xl font-extrabold text-emerald-100 p-4 rounded-full bg-black animate-bounce uppercase">We have {stats.length == 0 ? (
              <></>
            ) : (
              <>{stats[0].nr} enrols</>
            )}</p>
          <h1 className="font-bold text-xl md:text-xl underline uppercase ">
            {stats.length == 0 ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <>{stats[0].name}</>
            )}
          </h1>

          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-2 items-center">
              <FaCheck /> <p> Beginner</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <FaCheck />
              <p>
                Introduction to {stats.length == 0 ? (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  <> {stats[0].department}</>
                )}
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center ">
              <FaCheck /> <p> Accredited course</p>
            </div>
            <div className="flex flex-row gap-2 items-center ">
              <FaCheck /> <p>Computer Science</p>
            </div>
            <div className="flex flex-row gap-2 items-center ">
              <FaCheck /> <p>Easy to learn</p>
            </div>
          </div>
        </div>

        <div onClick={handleToCourse} className="flex items-center justify-center space-x-4 w-full">
          <button className="p-3 rounded-full w-1/2 bg-accentCyan font-bold hover:-translate-y-1.5 duration-200 hover:scale-95">
            Go to course
          </button>
        </div>
      </div>
    </div>
  );
};
