import React from "react";
import ReactDOM from "react-dom"
import LoginForm from "./LoginForm";

const App = () => {
  return (
    <div>
      <LoginForm/>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)