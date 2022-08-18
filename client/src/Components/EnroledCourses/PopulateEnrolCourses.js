import React from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Api from "../api";
import { useEffect, useState} from "react";




export default({object})=>{
      let navigate = useNavigate();
      let [stats, setStats] = useState([]);

      let handleUnrolAndCancel=async (e)=>{
        let el = e.target;
        let id = object.id;
        if(el.textContent == "UNROL"){
          let api = new Api();
          let unrol = await api.unrolCourseById(id);
          window.location.reload();
        }else if(el.textContent == "CANCEL"){
          navigate('/');
        }
      }

    return (
        <div onClick={handleUnrolAndCancel} className="flex flex-col p-6 bg-darkBlue3 rounded-2xl shadow-2xl md:w-1/3" id={object.id}>
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col justify-center items-center mb-4 space-y-3 text-center md:text-left">
              <h3 className="font-bold text-2xl underline uppercase">{object.name}</h3>
  
              <p className="text-md text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p>
  
              <div className="grid grid-cols-2">
              <div className="flex flex-row gap-2 items-center">
                <FaCheck /> <p> Beginner</p>
              </div>
              <div className="flex flex-row gap-2 ml-3 items-center">
                <FaCheck /> <p> Introduction to {object.department} </p>
              </div>
              <div className="flex flex-row gap-2 items-center ">
                <FaCheck /> <p> Accredited course</p>
              </div>
              <div className="flex flex-row gap-2 ml-3 items-center ">
                <FaCheck /> <p> Data science</p>
              </div>
              <div className="flex flex-row gap-2 items-center ">
                <FaCheck /> <p> Development</p>
              </div>
              </div>
  
  
              <div className="flex flex-row justify-around items-center gap-4 w-full font-bold">
                <button className="bg-teal-600 p-3 rounded-xl w-1/2 hover:bg-opacity-90 transition-all hover:-translate-y-1 duration-500 ">
                  UNROL
                </button>
                <button className="bg-sky-400 p-3 rounded-xl w-1/2 hover:bg-opacity-90 transition-all hover:-translate-y-1 duration-500">
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}