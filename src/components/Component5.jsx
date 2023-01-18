import React, {useState, useContext} from 'react'
import { NameContext } from '../NameContext'


export default function Component5(){
  const {name, setName} = useContext(NameContext)
  const [tempName, setTempName] = useState('')

  const handleTyping = event => {
    setTempName(event.target.value)
  }
  const changeName = (value) => {
    value.preventDefault();
    setName(tempName)
  }


return (
  <div>
    <h2>Component5</h2>

    <form>
      <label>
        Name: 
        <input type="text" onChange={handleTyping}/>
      </label>
      <button onClick={changeName}>Change name</button>
    </form>
    <h3>hello {name}!</h3>
  </div>
  )
}
