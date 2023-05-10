// import { useState } from "react";
import "./Sidebar.css"

export default function Sidebar({ students, setFilteredStudents }) {
    // create an empty object to store unique cohort codes
    const uniqueCohortCodes = {};
  
    // sort the students array by cohort start date
    const sortedCohorts = students.sort((a, b) => {
      const yearA = parseInt(a.cohort.cohortCode.slice(-4));
      const yearB = parseInt(b.cohort.cohortCode.slice(-4));
      return yearA - yearB;
    });
  
    // function to toggle the display of students by cohort start date
    const toggleShowCohort = (cohortCode) => {
      if (cohortCode === "All") {
        // if the "All Students" button is clicked, show all students
        setFilteredStudents([]);
      } else {
        // otherwise, filter the students array by cohort start date 
        const filteredStudents = students.filter((student) => {
          return student.cohort.cohortCode === cohortCode;
        });
        //update state
        setFilteredStudents(filteredStudents);
        console.log(filteredStudents)
      }
    };
  
    return (
      <div>
        <h3>Choose a Class by Start Date</h3>
        <ul className="list-group list-group-flush">
          <li
            onClick={() => toggleShowCohort("All")}
            className="list-group-item"
          >
            <strong>All Students</strong>
          </li>
          {/* map through sorted cohorts, set a variable for the cohort code(ex: "Winter2025"). then split the string. use slice to remove the last 4 from the string(the year in this case). rejoin the string.. add a space and reattach the last 4 characters so that there is a space in between the season and year . */}
          {sortedCohorts.map((student) => {
            let cohortCodes =
              student.cohort.cohortCode
                .split("")
                .slice(0, -4)
                .join("") +
                " " +
                student.cohort.cohortCode.slice(1).slice(-4);
  
            // check if the current cohort code has already been displayed
            if (uniqueCohortCodes[cohortCodes]) {
              return null;
            }
  
            // add the current cohort code
            uniqueCohortCodes[cohortCodes] = true;
  
            return (
              // display a button for each unique cohort code
              <li
                key={cohortCodes}
                onClick={() => toggleShowCohort(student.cohort.cohortCode)}
                className="list-group-item"
              >
                {cohortCodes}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  