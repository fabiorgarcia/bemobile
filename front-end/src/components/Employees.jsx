import { useState } from 'react'
import './Employees.css'
import search from '../assets/search.svg'
import Table from './Table'

function Employees() {

  const [employees, setEmployees] = useState([])

  fetch('http://localhost:5000/employees', {
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
      <div className='content'>
        <div className='filters'>
          <h1>Funcionários</h1>
          <div className='searchDiv'>
            <img src={search} className="icoSearch" alt="Filtrar" />
            <input type='text' placeholder='Pesquisar'></input>
          </div>
        </div>

        <Table options={employees} />
        
      </div>
    </>
  )
}

export default Employees
