import { useState } from "react";
import "./StudentCard.css";
import Details from "./Details";

function StudentCard ({student}) {

    const [showDetails, setShowDetails] = useState(false);


    const toggleShowDetails = () => {
        setShowDetails(!showDetails)
    }



    function handleBirthday (birthday) {
        let months = ["January","February", "March", "June", "July", "August", "September", "October", "November", "December"]

        let birthdate = new Date(birthday)
        let year = birthdate.getFullYear()
        let month = birthdate.getMonth()
        let day = birthdate.getDay()
        // console.log(`${months[month]} ${day}, ${year}`)
        return `${months[month]} ${day}, ${year}`
    }

    return (
        <div className=" student-card main-container container-fluid">
            <img className="card-img"src={student.profilePhoto} alt="profile"></img>
            <div className="container">
                <div className="text-start">
                <h3 className="text-start">{student.names.preferredName} {student.names.surname}</h3>
                    <p className=""> {student.username}</p>
                    <p><span className="text-success"> Birthday:</span> {student.dob}</p>
                    {handleBirthday(student.dob)}
                </div>
                {
                    showDetails ? (
                        <div>
                            <button className="show-more-button" type="submit" onClick={toggleShowDetails}>Show Details</button>
                            <Details student={student}/>
                        </div>
                       ) : (
                        <button className="show-more-button" type="submit" onClick={toggleShowDetails}>Show Details</button>
                        )}
            </div>
        </div>
    )
}
export default StudentCard;