import "./App.css";
import { getAuth,signInWithPopup,GoogleAuthProvider,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";
import {useState} from "react";
import app  from "./firebase";



function App() {
  const handleGoogleLogin = async()=>{
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider).then((result)=>{
      alert("Google Login Successful")
  })
  .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
  }

  const auth = getAuth(app);
  const [email,setEmail] = useState("")
  const [password,setpassword] = useState("")
  const sign_up = () =>{

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          alert("account created")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          
          // ..
        });
  }

  const login = () =>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Login successful")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
}


sendPasswordResetEmail(auth,  email)
  .then(() => {
    // Password reset email sent!
    alert("password reset mail sent")
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Enter email")
    
  //   // ..
  });

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
          {action === "Login" || "Password Reset"?<div/>:<div className="form">
            <input type="text" placeholder="Name" />
          </div>}
          
          <div className="form">
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          
          {action === "Password Reset"?<div/>:<div className="form">
            <input type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)}/>
          </div>}

          {action === "SignUp"?<div/>:<div className="reset" onClick={()=>{setAction("Password Reset")}}>
            Forgot password? <span onClick={sendPasswordResetEmail}>Click Here</span>
          </div>}

          
          <div className="submit">
            <div className="Google">
            <button onClick={handleGoogleLogin}>Sign In with google</button>
            </div>
            <div className="signup" onClick={()=>{setAction("SignUp")}}>
            <button onClick={sign_up}>SIgnup</button></div>
            <div className="signup" onClick={()=>{setAction("Login")}}>
            <button onClick={login}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
