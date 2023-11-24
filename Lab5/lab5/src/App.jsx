import { useState } from 'react'
import './App.css'

import ClickMe from '../components/ClickMe.jsx'
import DisplayTab from '../components/DisplayTab.jsx'
import TwoDisplayTab from '../components/TwoDisplayTab.jsx'
import DivForm from '../components/DivForm.jsx'
import AuthForm from '../components/AuthForm.jsx'

function App() {

  const [button, setbutton] = useState('You have not clicked any button')
  const [counter, setcounter] = useState(0)

  return (
    <div className='flex justify-evenly items-center w-full'>
      <div className='flex flex-col space-y-3'>
        <h2>ClickMe</h2>
      <ClickMe />
      
        <div className='mt-3'>
          <button onClick={() => setbutton('1')}>Button 1 </button>
          <button onClick={() => setbutton('2')}>Button 2</button>
          <button onClick={() => setbutton('3')}>Button 3</button>
          <p>
            Button {button} was clicked
          </p>
      </div>
    

      <button onClick={() => setcounter(counter + 1)}>Inc</button>
      <button onClick={() => setcounter(counter - 1)}>Dnc</button>
      <p>
        Counter {counter}
        </p>
      </div>

      <div>
        <DisplayTab tabEdit={['Heloo', 'Every', 'Nyan', 'From', 'React']} />
      </div>

      <div>
        <TwoDisplayTab />
      </div>

      <div>
        <h2>Auth Form</h2>
        <AuthForm/>
      </div>
      <div>
        <h2>DivForm</h2>
        <DivForm/>
      </div>
    </div>
  )
}

export default App
