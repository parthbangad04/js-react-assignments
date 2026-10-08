import { useState } from "react";

import ProfileCard from "./assignments/Assignment4Profile/ProfileCard";
import ControlledForm from "./assignments/Assignment5ControlledForm/ControlledForm";
import Counter from "./assignments/Assignment6Counter/Counter";

import profileImage from "./assets/profile.png";
import "./App.css";

function App() {
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const assignments = [
    {
      number: "01",
      title: "JavaScript Calculator",
      type: "JavaScript",
      description:
        "A professional calculator using functions, arithmetic operations, and switch-case.",
      path: "/assignments/Assignment1Calculator/calculator.html",
    },
    {
      number: "02",
      title: "DOM To-Do List",
      type: "JavaScript + DOM",
      description:
        "Add tasks, mark them as completed, and delete tasks dynamically using DOM.",
      path: "/assignments/Assignment2Todo/todo.html",
    },
    {
      number: "03",
      title: "Form Validation",
      type: "JavaScript",
      description:
        "Registration form with name, email, phone, and password validation.",
      path: "/assignments/Assignment3Validation/validation.html",
    },
    {
      number: "04",
      title: "React Profile Card",
      type: "React + Props",
      description:
        "A reusable React profile card created using component props.",
      component: "profile",
    },
    {
      number: "05",
      title: "Controlled React Form",
      type: "React + useState",
      description:
        "A controlled form that displays entered information in real time.",
      component: "form",
    },
    {
      number: "06",
      title: "React Counter",
      type: "React + useState",
      description:
        "A simple counter with increment, decrement, and reset functionality.",
      component: "counter",
    },
  ];

  // Show selected React assignment
  if (selectedAssignment === "profile") {
    return (
      <div className="assignment-view">
        <button
          className="back-button"
          onClick={() => setSelectedAssignment(null)}
        >
          ← Back to Dashboard
        </button>

        <ProfileCard
          name="Parth Bangad"
          image={profileImage}
          description="MCA student passionate about software development, web technologies, and building practical applications."
        />
      </div>
    );
  }

  if (selectedAssignment === "form") {
    return (
      <div className="assignment-view">
        <button
          className="back-button"
          onClick={() => setSelectedAssignment(null)}
        >
          ← Back to Dashboard
        </button>

        <ControlledForm />
      </div>
    );
  }

  if (selectedAssignment === "counter") {
    return (
      <div className="assignment-view">
        <button
          className="back-button"
          onClick={() => setSelectedAssignment(null)}
        >
          ← Back to Dashboard
        </button>

        <Counter />
      </div>
    );
  }

  return (
    <div className="dashboard">

      <header className="dashboard-header">

        <div className="header-badge">
          WEB DEVELOPMENT PROJECT
        </div>

        <h1>JS & React Assignment Hub</h1>

        <p>
          Six practical assignments built with JavaScript,
          DOM, and React.
        </p>

        <div className="header-info">
          <span>6 Assignments</span>
          <span>•</span>
          <span>JavaScript</span>
          <span>•</span>
          <span>React</span>
        </div>

      </header>

      <main className="assignment-grid">

        {assignments.map((assignment) => (

          <div
            className="assignment-card"
            key={assignment.number}
          >

            <div className="card-top">

              <span className="assignment-number">
                {assignment.number}
              </span>

              <span className="assignment-type">
                {assignment.type}
              </span>

            </div>

            <h2>{assignment.title}</h2>

            <p>{assignment.description}</p>

            {assignment.path ? (

              <a
                href={assignment.path}
                className="assignment-button"
              >
                Open Assignment
                <span>→</span>
              </a>

            ) : (

              <button
                className="assignment-button"
                onClick={() =>
                  setSelectedAssignment(assignment.component)
                }
              >
                Open Assignment
                <span>→</span>
              </button>

            )}

          </div>

        ))}

      </main>

      <footer className="dashboard-footer">

        <p>
          Developed by <strong>Parth Bangad</strong>
        </p>

        <span>
          JavaScript • DOM • React • CSS
        </span>

      </footer>

    </div>
  );
}

export default App;