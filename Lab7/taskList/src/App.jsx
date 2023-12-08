import TaskList from './components/TaskList'
import './App.css'

const App = () => {
  return (
    <>
      <header>
        <h1>Task List</h1>
        <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="react" />
      </header>

      <main>
        <TaskList />
      </main>
    </>
  )
}

export default App