import { useState } from "react";

function AddTodoFrom(props) {

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const [newActivity,setNewactivity] = useState("")

    function handleChange(evt)
    {
        setNewactivity(evt.target.value)
    }

    function addActivity()
    {
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newActivity}])
        setNewactivity("")
    }

    return(
        <div className="flex flex-col gap-3">
                <h1>Manage Activities</h1>
                <div>
                    <input value={newActivity} onChange={handleChange} type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity?"/>
                    <button onClick={addActivity} className="bg-black text-white border border-black p-1">Add</button>
                </div>
            </div>
    )
}

export default AddTodoFrom