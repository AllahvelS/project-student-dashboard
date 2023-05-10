import StudentCard from "./StudentCard";
// import Sidebar from "./Sidebar";

export default function Students({students, filteredStudents }) {
    // display filtered students if filteredStudents array is not empty, otherwise display all students
    const displayStudents = filteredStudents.length > 0 ? filteredStudents : students;

    return (
        <div className="student-list">
            {/* Display the cohort title if filteredStudents array is not empty, otherwise display "All Students" */}
            <h3>{filteredStudents.length > 0 ? 
            filteredStudents[0].cohort.cohortCode.split("")
                .slice(0, -4)
                .join("") +
                " " +
                filteredStudents[0].cohort.cohortCode.slice(1).slice(-4) : "All Students"}</h3>
            {/* Display the total number of students */}
            <h4>Total Students: {displayStudents.length}</h4>
            {/* Display a StudentCard component for each student in the displayStudents array */}
            {
                displayStudents.map(student => {
                    return (
                        <StudentCard
                        key={student.id}
                        student={student} />
                    )
                })
            }
        </div>
    )
}
