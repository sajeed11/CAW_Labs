import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ClickMe from '../components/ClickMe.jsx'

function App() {

  const [button, setbutton] = useState('You have not clicked any button')
  const [counter, setcounter] = useState(0)

  return (
    <>
      <div>
      <ClickMe />
      </div>

      <button onClick={() => setbutton('1')}>Button 1 </button>
      <button onClick={() => setbutton('2')}>Button 2</button>
      <button onClick={() => setbutton('3')}>Button 3</button>
      <p>
        Button {button} was clicked
      </p>

      <button onClick={() => setcounter(counter + 1)}>Inc</button>
      <button onClick={() => setcounter(counter - 1)}>Dnc</button>
      <p>
        Counter {counter}
      </p>
    </>
  )
}

export default App
