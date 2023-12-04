import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import './App.css'

const App = () => {
  return (
    <>
      <header>
        <h1>Task List</h1>
        <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="react" />
      </header>

      <div className='new-task-form'>
        <TaskForm />
      </div>

      <nav className="filter">
        <button >All tasks</button>
        <button >Favorites tasks</button >
      </nav >

      <div className="loading">
            Loading tasks...
      </div>


      <main>
        <TaskList />
      </main>
    </>
  )
}

export default App