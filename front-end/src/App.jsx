import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Employees from './components/Employees'

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
      <Header />
      <Employees />

      <div className='content'>
        {employees.map((employee) => (
          <p key={employee.id}>{employee.name}</p>
        ))}
      </div>
      

    </>
  )
}

export default App
