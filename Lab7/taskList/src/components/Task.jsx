import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Task = ({ index, task, deleteTask, addSubtask, deleteSubtask, toggleSubtask }) => {

    const [subtaskText, setSubtaskText] = useState('');
    const [subTaskDesc, setsubTaskDesc] = useState('')

    const handleSubtaskSubmit = (e) => {
        e.preventDefault();
        if (subtaskText.trim() !== '') {
            addSubtask(index, subtaskText, subTaskDesc);
            setSubtaskText('');
            setsubTaskDesc('');
        }
    };

    return (
        <div className="task">
            <div className="task-main">
                <div className="task-name">{task.text}</div>
                <div className="task-description">{task.description}</div>
                <button className="delete-btn" onClick={() => deleteTask(index)}>Delete Task</button>
            </div>
            <div className="subTask-container">
                <form onSubmit={handleSubtaskSubmit}>
                    <input
                        type="text"
                        value={subtaskText}
                        onChange={(e) => setSubtaskText(e.target.value)}
                        placeholder="Enter a subtask"
                    />
                    <input
                        type="text"
                        value={subTaskDesc}
                        onChange={(e) => setsubTaskDesc(e.target.value)}
                        placeholder="Enter a description"
                    />
                    <button type="submit">Add Subtask</button>
                </form>
            </div>
            <ul className="subTask">
                    {task.subtasks.map((subtask, subtaskIndex) => (
                        <li  key={subtaskIndex}>
                            <strong>{subtask.text}</strong>
                            <p>{subtask.description}</p>
                            <p>{subtask.isDone ? 'Done' : ''}</p>
                            <div className="subTask-btns">
                                <button className="delete-btn" onClick={() => deleteSubtask(index, subtaskIndex)}>Delete</button>
                                <button className="done-btn" onClick={() => toggleSubtask(index, subtaskIndex)}>Done</button>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
)
}

export default Task