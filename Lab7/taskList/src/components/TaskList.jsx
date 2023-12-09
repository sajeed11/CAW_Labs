import { useState } from 'react'
import Task from './Task'
import NewTaskForm from './NewTaskForm'
import '../App.css';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskText, taskDescription) => {
        setTasks([...tasks, { text: taskText, description: taskDescription, subtasks: [] }]);
    };

    const addSubtask = (taskIndex, subtaskText, subtaskDescription) => {
        const updatedTasks = [...tasks];
        updatedTasks[taskIndex].subtasks.push({ text: subtaskText, description: subtaskDescription, isDone: false });
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const deleteSubtask = (taskIndex, subtaskIndex) => {
        const updatedTasks = [...tasks];
        updatedTasks[taskIndex].subtasks.splice(subtaskIndex, 1);
        setTasks(updatedTasks);
    };

    const toggleSubtask = (taskIndex, subtaskIndex) => {
        const updatedTasks = [...tasks];
        updatedTasks[taskIndex].subtasks[subtaskIndex].isDone = !updatedTasks[taskIndex].subtasks[subtaskIndex].isDone;
        setTasks(updatedTasks);
    };
    return (
        <div data-testid="task-list">
            <div className='new-task-form'>
                <NewTaskForm addTask={addTask} />
            </div>
            <div className="task-list">
                <ul>
                    {tasks.map((task, index) => (
                        <Task
                            key={index}
                            index={index}
                            task={task}
                            deleteTask={deleteTask}
                            addSubtask={addSubtask}
                            deleteSubtask={deleteSubtask}
                            toggleSubtask={toggleSubtask}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TaskList