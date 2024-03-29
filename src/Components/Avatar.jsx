import { useState } from "react";
import "./Avatar.css"
const Profilepix =()=>{

    const [profilepic, setProfilepic] = useState("../src/assets/avatar.png")

    const profileSetter = (e) => {
          const file = e.target.files[0];
          if (file) {
            const url = URL.createObjectURL(file);
            setProfilepic(url);
          }
        }

    return(
        <div className="profilepic">
            <img src={profilepic} id="ppix"/>
            <label htmlFor="profilepix">Update Profilepix</label>
            <input type="file" onChange={profileSetter} accept="image/jpeg, image/png, image/jpg" id="profilepix"></input>
        </div>
    )
}

export default Profilepix;