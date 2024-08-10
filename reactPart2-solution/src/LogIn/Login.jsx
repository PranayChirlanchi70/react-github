import { useState } from "react";

function Login() {
  const [login, setLogin] = useState(true);

  const Authentication =() =>{

    setLogin(!login)

  }

  return (
    <div className="main">
      <div className="card">
        <img
          id="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
          alt=""
        />
        <div className="inputs-div">

        {!login && (

        <>
        <input
        
        className="input"
        type="text"
        id="userDeatails"
        placeholder="Phone number or e-mail "
      />

    <input
    
        className="input"
        type="text"
        id="userDeatails"
        placeholder="Full Name"
      />
        </>
         )} 
            
          <input
            className="input"
            type="text"
            id="userDeatails"
            placeholder="Phone number, Username, or e-mail "
          />
          <input
            className="input"
            type="password"
            id="password"
            placeholder="Password"
          />
          <button className="input" id="btn">
            {login ? "Log in" : "Sign Up"  }
          </button>
        </div>

        <h4 id="footer-text">
          {login ? "Don't have an Account?" : "have an Account"  } <span id="highlight-text" onClick={Authentication}>{login ? "Sign Up" : "Log in"}</span>
        </h4>
      </div>
    </div>
  );
}
export default Login;
