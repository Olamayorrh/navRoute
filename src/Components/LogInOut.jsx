import { useState } from 'react'
import Form from './Form'
const LogInOut = ()=>{

    const [isclicked, setIsclicked] = useState(false)

    let clicked = ()=>{
        setIsclicked(!isclicked)
    }

    return(
        <div>
        {
            isclicked? <button onClick={clicked}>LOGIN</button>:<button onClick={clicked}>LOGOUT</button>
            

        }
        
    </div>
    )
}

export default LogInOut;