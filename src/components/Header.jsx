





import { Link } from "react-router-dom"

import "./Header.css"
function Header() {
 
    return (
        <>
        <div className="header">
            <div className="left">
                <span>Home</span>
                {/* <span>Design</span>         */}
            </div>
            <div className="right">
                
                    <Link to="./login"><button className="headerBtn">LOGIN</button></Link>
                
                
                   <Link to="signup"><button className="headerBtn">SIGNUP</button></Link> 
                            
            </div>
        </div>
      </>
    )
  
}

export default Header