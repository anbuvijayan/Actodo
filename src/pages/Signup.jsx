import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers
    
     const [eusername, setEusername] = useState("");
      const [epassword, setEpassword] = useState("");

      
  function handelUInput(evt) {
    setEusername(evt.target.value);
  }

  function handlePInput(evt) {
    setEpassword(evt.target.value);
  }

  function addUser(){
    setusers([...users,{username:eusername,password:epassword}])
    navigate("/")

  }




  return (
    <div className="bg-black p-16 ">
      <div className="bg-[#EFEFEF] p-10 border rounded-md ">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        <p> Sign up here :)</p>

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

          <input 
            type="password"
            className="w-52 border-black p-2 bg-transparent border rounded-md"
            placeholder="Confirm Password"
          />

          <button className="bg-[#FCA201] w-52 p-2 rounded-md text-white" onClick={addUser}>Signup</button>

          <p>
            Already have an account?
            <Link to="/" className="underline text-blue-600"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
