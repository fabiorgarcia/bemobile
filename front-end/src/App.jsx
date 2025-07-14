import { useState } from 'react'
import betallent from './assets/betallent.svg'
import './App.css'

function App() {
  const [employees, setEmployees] = useState([])

  fetch('http://localhost:3000/employees', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((resp) => resp.json())
  .then((data) => {
    setEmployees(data)
  })
  .catch((err) => consolo.log(err))

  return (
    <>
      <div>

        <img src={betallent} className="logo react" alt="BeTallent logo" />
      </div>
      <h2>Teste</h2>

    </>
  )
}

export default App
