import { useState } from "react";
import "./Oneonone.css";

export default function OneonOne() {
  // state variable to hold an array of notes
  const [notes, setNotes] = useState([]);

  // handle function for the form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const customerName = event.target.elements.customerName.value; // Get the value of the customer name input
    const comment = event.target.elements.comment.value; // Get the value of the comment input
    const newNote = { customerName, comment }; // Create a new note object
    setNotes([...notes, newNote]);
    // Update the notes state by creating a new array containing all the previous notes plus the newNote object. 
    // The spread operator creates a copy of notes array, and the newNote object is added to the end.
        event.target.reset(); // Reset the form inputs
  };

  return (
    <div>
      <h4>1-on-1 Notes</h4>
      <form className="notes-container" onSubmit={handleSubmit}>
        <label>
          Customer Name
          <input type="text" id="customerName" name="customerName" />
        </label>
        <div className="comment-container">
          <label>
            Comment
            <input type="text" id="comment" name="comment" />
          </label>
          <button className="note-btn" type="submit">Add Note</button>
        </div>
      </form>
      <ul className="note-list">
        {notes.map((note, index) => (
          <li key={index}>
            <strong>{note.customerName}:</strong> says, "{note.comment}"
             {/* Display the customer name and comment for each note */}
          </li>
        ))}
      </ul>
    </div>
  );
}
