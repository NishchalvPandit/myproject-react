import { useState } from 'react'

function App() {
  const name = "Nishchal Pandit";

 
  const age = 22;

 
  const isStudent = true;


  const skills = ["React", "HTML", "CSS", "JavaScript"];

  const user = {
    fullName: "Nishchal Pandit",
    country: "Nepal",
    email: "nishchal@example.com",
  };

  return (
    <div>
  

      <h3>String:</h3>
      <p>{name}</p>

      <h3>Number:</h3>
      <p>{age}</p>

      <h3>Boolean:</h3>
      {/* boolean prints only true/false */}
      <p>{isStudent ? "Yes, Student" : "Not a Student"}</p>

      <h3>Array:</h3>
      <p>{skills.join(", ")}</p>

      <h3>Object:</h3>
      <p>Name: {user.fullName}</p>
      <p>Country: {user.country}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default App;


