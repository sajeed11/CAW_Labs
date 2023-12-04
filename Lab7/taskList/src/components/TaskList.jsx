import TaskDetails from './TaskDetails'
import '../App.css'

const TaskList = () => {
    const tasks = [
        { id: 1, name: 'Task 1', taskdesc: "I have no idea", subTasks: [{ id: 1, name: 'Sub Task 1', taskdesc: "I have no idea" }, { id: 2, name: 'Sub Task 2', taskdesc: "I have no idea" }] },
        { id: 2, name: 'Task 2', taskdesc: "I have no idea", subTasks: [{ id: 1, name: 'Sub Task 1', taskdesc: "I have no idea" }, { id: 2, name: 'Sub Task 2', taskdesc: "I have no idea" }] },
        { id: 3, name: 'Task 3', taskdesc: "I have no idea", subTasks: [{ id: 1, name: 'Sub Task 1', taskdesc: "I have no idea" }, { id: 2, name: 'Sub Task 2', taskdesc: "I have no idea" }] },
    ]
    return (
        <>
            <div className="task-list">
                {tasks.map(task => (
                    <TaskDetails key={task.id} task={task} />
                ))}
            </div>
        </>
    )
}

export default TaskList