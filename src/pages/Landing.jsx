
import Header from "../components/header";
import TodoContainer from "../components/Todocontainer";
import Card from "../components/card";
import { useLocation } from "react-router-dom"


function Landing() {
    const data = useLocation()

    return (
      <div className='bg-black p-16'>
        <div className='bg-[#EFEFEF] p-10 border rounded-md'>
          <Header username = {data.state.user} />
          <div className='flex justify-between text-center gap-7 my-5 flex-wrap'>
            <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
            <Card bgcolor={"#fD6663"} title={"Dec"} subtitle={"20"} />
            <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
          </div>
          <TodoContainer/>
        </div>
      </div>
    );
  }



export default Landing
