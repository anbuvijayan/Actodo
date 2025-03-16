import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate()
  const [eusername, setEusername] = useState("");
  const [epassword, setEpassword] = useState("");
  const [ruser, setRuser] = useState(true)

  const users = props.users

  

  function handelUInput(evt) {
    setEusername(evt.target.value);
  }

  function handlePInput(evt) {
    setEpassword(evt.target.value);
  }

  function checkUser() {
    const user = users.find(item => item.username === eusername && item.password === epassword);
     
    var userfound =false
    
    if (user) {
      console.log("Login Successful");
      userfound = true
      navigate("./Landing",{state:{user:eusername}})
    } 

    if (userfound===false){
        console.log("Login Failed")
        setRuser(false)
        
    }
  }

  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
       {ruser? <p>I help you manage your activities after you log in :)</p>: <p className="text-red-400">Please Sign Up Before you Login</p>}

        <div className="flex flex-col gap-2 my-4">
          <input
            type="text"
            className="w-52 border-black p-2 bg-transparent border rounded-md"
            placeholder="Username"
            onChange={handelUInput}
          />

          <input
            type="password"
            className="w-52 border-black p-2 bg-transparent border rounded-md"
            placeholder="Password"
            onChange={handlePInput}
          />

          <button className="bg-[#8272DA] w-52 p-2 rounded-md text-white" onClick={checkUser}>
            Login
          </button>

          <p>
            Don't have an account?
            <Link to="/signup" className="underline text-blue-600"> Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;