import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import "./Signup.css"

function Signup(){
  return(
    <>
      <div className="signupAll">
        <div className="signupMain">
        <i><Link to="/"><IoIosArrowRoundBack /></Link></i>
            <h3>SIGNUP</h3>
            <p><Link to="/login">Already have an account?</Link></p>  
            <input type="text" name="" id=""  placeholder="User name"/>
            <input type="text" name="" id=""  placeholder="Password"/>
            <input type="text" name="" id=""  placeholder="confirm"/>
           
            <button>Signup</button>
        </div>
      </div>
    
    </>
  )

}

export default Signup;