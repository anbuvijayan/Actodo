import TodoItem from "./Todoitem";

function TodoList(props) {

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    return(
        <div className="bg-[#F7f] p-2 flex-grow border rounded-md">
                <h1 className="text-2xl">Today's Activity</h1>

                {activityArr.length===0?<p>You have't added anything yet</p>:""}
                {
                    activityArr.map(function(item,index){
                        return <TodoItem id={item.id} item={item} index={index} activityArr={activityArr} setActivityArr={setActivityArr}/>
                    })
                }
            </div>
    )
}

export default TodoList