
const Taskdetails = (props) => {
    return (
        <div className="task">
            <h2>{props.task.name}</h2>
            <p>{props.task.taskdesc}</p>
            <div className="icons">
                <i className="material-icons">delete</i>
                <i className="material-icons">favorite</i>
            </div >
            <div className="subtasks">
                {props.task.subTasks.map(subtask => (
                    <div className="subtask" key={subtask.id}>
                        <h3>{subtask.name}</h3>
                        <p>{subtask.taskdesc}</p>
                        <div className="icons">
                            <i className="material-icons">delete</i>
                            <i className="material-icons">favorite</i>
                        </div >
                    </div>
                ))}
                </div>
      </div>
  )
}

export default Taskdetails