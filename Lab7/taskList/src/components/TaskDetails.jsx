
const Taskdetails = (props) => {
    return (
        <div className="task">
            <h2>{props.task.name}</h2>
            <p>{props.task.taskdesc}</p>
            <div className="icons">
                <i className="material-icons">delete</i>
                <i className="material-icons">favorite</i>
            </div >
      </div>
  )
}

export default Taskdetails