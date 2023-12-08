import { useState } from "react";

const NewTaskForm = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');
    const [taskDesc, setTaskDesc] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskText.trim() !== '') {
            addTask(taskText, taskDesc);
            setTaskText('');
            setTaskDesc('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Enter a task"
            />
            <input
                type="text"
                value={taskDesc}
                onChange={(e) => setTaskDesc(e.target.value)}
                placeholder="Enter a task Description"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default NewTaskForm;
