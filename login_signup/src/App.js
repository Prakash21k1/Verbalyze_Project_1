import "./App.css";
import {useState} from "react";
function App() {
  const [action, setAction] = useState("Login");
  return (
    <>
      <div className="block">
        <div className="section">
          <div className="Header">
            <div className="heading">{action}</div>
            <div className="line"></div>
          </div>
        </div>
        <div className="inputs">
          {action === "Login"?<div/>:<div className="form">
            <input type="text" placeholder="Name" />
          </div>}
          
          <div className="form">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form">
            <input type="password" placeholder="Password" />
          </div>
          {action === "Sign Up"?<div/>:<div className="reset">
            Forgot password? <span>Click Here</span>
          </div>}
          
          <div className="submit">
            <div className="signup" onClick={()=>{setAction("Sign Up")}}>Signup</div>
            <div className="signup" onClick={()=>{setAction("Login")}}>Login</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
