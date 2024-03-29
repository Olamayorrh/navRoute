import { useState } from "react"
import "./Form.css"

const Form = ()=>{


    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        imageUrl: ""

    })

    const inputChangeHandler = (e)=>{
        const { name, value, files } = e.target;
        setUserData((prevData) => ({
          ...prevData,
          [name]: name === 'imageUrl' ? URL.createObjectURL(files[0]) : value,
        }));
      };
       

    const formHandler = (e)=>{
        e.preventDefault();

        console.log(userData);
        
        
    }
    return(
        <>
            <form onSubmit={formHandler}>

                <input type="text" placeholder="Firstname" value= {userData.firstname}name="firstname" onChange={inputChangeHandler}></input><br></br>
                <input type="text" placeholder="Lastname" value= {userData.lastname}name="lastname" onChange={inputChangeHandler}></input><br></br>
                <input type="email" placeholder="Email" value={userData.email} name='email'onChange={inputChangeHandler}></input><br></br>
                <input type="password" placeholder="Password" value={userData.password} name= 'password'onChange={inputChangeHandler}></input><br></br>
                <input type='file' placeholder="pick an image"  name="imageUrl" onChange={inputChangeHandler}></input><br></br>
                {userData.imageUrl && <img src={userData.imageUrl} id="imgg"></img>}<br></br>
                <button type="submit">Submit</button>

                <div>
                <p>FirstName:{userData.firstname}</p>
                <p>LastName:{userData.lastname}</p>
                <p>Email:{userData.email}</p>
                <p>Password:{userData.password}</p>
                
                <img src={userData.imageUrl} id="imgg"></img>
                </div>
           
            </form>

            
        </>
    )
}


export default Form;