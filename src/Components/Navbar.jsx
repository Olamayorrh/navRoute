import { Link } from "react-router-dom"
import logo from "../assets/react.svg"
import LogInOut from "./LogInOut";
import Profilepix from "./Avatar";

const Navbar = ()=>{
    return(
        <>
            <div style={{width:"100%",display:"flex",justifyContent:'space-around',height:"50px",backgroundColor:"red"}}>

                <div>

                    <Link to="/"><img src={logo} ></img></Link>

                </div>

                <div style={{display:"flex",gap:"20px", justifyContent:"space-around",alignItems:"center", color:"black"}}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/setting">Setting</Link>

                    <LogInOut />

                    <Profilepix />

                    

                    
                    
                </div>
            </div>
        
        </>
    )
}

export default Navbar;



