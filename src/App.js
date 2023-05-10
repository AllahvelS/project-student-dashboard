import React, { useState } from "react";
import StudentData from "./data/data.json"; 
import Header from "./Components/Header";
import Students from "./Components/Students";
import Sidebar from "./Components/Sidebar";

function App() {
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [cohortCode, setCohortCode] = useState(""); // Adding state for cohort code

  // Function to filter students based on the selected cohort code
  const filterTitle = (title) => {
    const filtered = StudentData.filter((student) => {
      return student.cohort.cohortCode === title;
    });
    setFilteredStudents(filtered); // Updating the state with the filtered students
    setCohortCode(title); // Updating the state with the selected cohort code
  };
  
  return (
    <div className="container-fluid">
      <Header /> 
      <div className="row mt-5">
        <div className="col-md">
          <Sidebar students={StudentData} setFilteredStudents={setFilteredStudents} filterTitle={filterTitle} /> 
        </div>
        <div className="col-sm">
          <Students students={StudentData} filteredStudents={filteredStudents} cohortCode={cohortCode}/> 
        </div>
      </div>
    </div>
  );
}

export default App;
