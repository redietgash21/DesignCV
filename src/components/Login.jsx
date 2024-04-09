


import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import "./Login.css"

function Login(){
  return(
    <>
      <div className="loginAll">
      
        <div className="loginMain">
           <i><Link to="/"><IoIosArrowRoundBack /></Link></i>
            <h3>LOGIN</h3>
            <p><Link to="/signup">Do not have an account?</Link></p>  
            <input type="text" name="" id=""  placeholder="User name"/>
            <input type="text" name="" id=""  placeholder="Password"/>
            <p><Link to="/forgetPassword">Forget password?</Link></p>
            <button>Login</button>
        </div>
      </div>
    
    </>
  )

}

export default Login;