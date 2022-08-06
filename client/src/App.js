import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";
import Details from './Components/CourseDetails/Details';
import EnroledCourses from "./Components/EnroledCourses/EnroledCourses";
import Statistics from "./Components/Statistics/Statistics";
import EditCourse from "./Components/ProfesorFolder/EditCourse";
import CreateCourse from "./Components/ProfesorFolder/CreateCourse";
import LogIn from "./Components/LogIn/LogIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/courses" element={<Card/>}/>
          <Route path="/course/:id" element={<Details/>}/>
          <Route path="/enroledCourses" element={<EnroledCourses></EnroledCourses>}/>
          <Route path="/statistics" element={<Statistics></Statistics>}/>
          <Route path="/editCourse/:id" element={<EditCourse/>}/>
          <Route path="/createCourse" element={<CreateCourse/>}/>
          <Route path="/login" element={<LogIn/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
