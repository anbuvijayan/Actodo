import AddTodoFrom from "./AddTodoFrom";
import TodoList from "./TodoList";
import { useState } from "react";

function TodoContainer() {

    const [activityArr,setActivityArr] = useState([
       
    ])

    return(
        <div className="flex gap-7 flex-wrap"> 
            <AddTodoFrom activityArr={activityArr} setActivityArr={setActivityArr}/>
            <TodoList activityArr={activityArr} setActivityArr={setActivityArr}/>
        </div>
    )
}

export default TodoContainer