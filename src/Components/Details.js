import React from "react";
import OneonOne from "./Oneonone";
import "./StudentCard.css";

export default function Details({ student }) {
  function percentCompare(current, total) {
    let percent = ((current / total) * 100).toFixed();
    if (percent >= 100) {
      return <span style={{ color: "green" }}>{percent}%</span>;
    }
    if (percent >= 50 && percent < 100) {
      return <span style={{ color: "#fccf03" }}>{percent}%</span>;
    }
    return <span style={{ color: "red" }}>{percent}%</span>;
  }

  const certifiedData = {
    resume: student.certifications.resume ? "✅" : "❌",
    linkedin: student.certifications.linkedin ? "✅" : "❌",
    github: student.certifications.github ? "✅" : "❌",
    mockInterview: student.certifications.mockInterview ? "✅" : "❌",
  };

  return (
    <div>
      <main className="detail-content">
        <ul className="detail-container">
          <h3> Codewars </h3>
          <li className="text-success">
            Current Total:{" "}
            <span className="text-black">{student.codewars.current.total}</span>
          </li>
          <li className="text-success">
            Last Week:{" "}
            <span className="text-black">{student.codewars.current.lastWeek}</span>
          </li>
          <li className="text-success">
            Goal:<span className="text-black"> {student.codewars.goal.total}</span>{" "}
          </li>
          <li className="text-success">
            Percent of Goal Achieved:
            <span className="">
              {" "}
              {percentCompare(student.codewars.current.total, student.codewars.goal.total)}
            </span>
          </li>
        </ul>
        <ul className="detail-container">
          <h3> Scores </h3>
          <li className="text-success">
            Assignments:{" "}
            <span className="text-black">
              {student.cohort.scores.assignments * 100}%
            </span>{" "}
          </li>
          <li className="text-success">
            Projects:{" "}
            <span className="text-black">{student.cohort.scores.projects * 100}%</span>{" "}
          </li>
          <li className="text-success">
            Assessments:
            <span className="text-black">
              {" "}
              {student.cohort.scores.assessments * 100}%
            </span>{" "}
          </li>
        </ul>
        <ul className="details-container">
          <h3> Certifications </h3>
          <li className="text-success">
            Resume: <span className="text-black">{certifiedData.resume}</span>
          </li>
          <li className="text-success">
            LinkedIn: <span className="text-black">{certifiedData.linkedin}</span>{" "}
          </li>
          <li className="text-success">
            Mock Interview:{" "}
            <span className="text-black">{certifiedData.mockInterview}</span>{" "}
          </li>
          <li className="text-success">
            Github: <span className="text-black">{certifiedData.github}</span>{" "}
          </li>
        </ul>
      </main>
      <div className="notes">
        <OneonOne />
      </div>
    </div>
  );
}
