import "./App.css"
import { Dropdown, DropdownButton } from 'react-bootstrap' 
import {useState} from "react"

function Login(){
    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [showSignUp, setShowSignUp] = useState(true)
    function loginFn(e){
        e.preventDefault()
        const data = {
            userId: userId,
            password: password,
            email:email,
            userName:userName
        }
        console.log("Data is " + JSON.stringify(data))
    }

return(
    <div>
     <div className="bg-info d-flex justify-content-center align-item-center vh-100">
         <div className="card card-signin m-4 p-5 shadow-lg rounded-4">
            <div className="row m-2">
                <div>
       <h4 className="text-center">{showSignUp ? "Sign up" : "Login"}</h4>
       <form onSubmit={loginFn}>
           <div className="input-group m-1">
                 <input type="text" className="form-control" placeholder="User Id" id="userId"
                 value={userId} onChange={(e)=>setUserId(e.target.value)} required autoFocus />
             </div>
             <div className="input-group m-1">
                 <input type="password" className="form-control" 
                 placeholder="Password" 
                 value={password} onChange={(e)=> setPassword(e.target.value)} 
                 required />
             </div>
                {
                    showSignUp && (
                        <>
                        <div className="input-group m-1">
                            <input type="text" className="form-control" placeholder="Email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                       </div>
                       <div  className="input-group m-1">
                         <input type="text" className="form-control" placeholder="User Name" id="userName" value={userName} onChange={(e)=>setUserName(e.target.value)} required/>
                        </div>
                        <div>
                            <DropdownButton>
                                <Dropdown.Item>CUSTOMER</Dropdown.Item>
                                <Dropdown.Item>ENGINEER</Dropdown.Item>
                            </DropdownButton>
                            </div>  
                        </>
                    )
                }
                  <div className="input-group my-2"> 
                        <input type="submit" className="form-control btn
                        btn-primary" value={showSignUp ? "Sign Up" : "Login"}/>
                                 </div>
                           </form>
                        </div>
                    </div>
                 </div>
          </div>
    </div>
)

}

export default  Login;
