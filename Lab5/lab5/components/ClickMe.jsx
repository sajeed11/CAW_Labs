import { useState } from 'react'    


const ClickMe = () => {
    const [oddNumberClicked, setoddNumberClicked] = useState(0)

  return (
      <div>
          
            <div>
              <button onClick={() => setoddNumberClicked(oddNumberClicked + 1)}>You clicked  { oddNumberClicked} times</button>
              {oddNumberClicked != 0 ? 
                  oddNumberClicked % 2 === 0 != 0 ? <p>Not Clicked</p> : <p>Clicked</p>
                  : ''
              }
            </div>
      </div>
  )
}

export default ClickMe