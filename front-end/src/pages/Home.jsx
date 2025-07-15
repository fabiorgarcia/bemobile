import { useState } from 'react'
import './Home.css'
import Search from '../components/atoms/Search'
import Table from '../components/organisms/Table'

function Home() {

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
            <Search />
            <input type='text' placeholder='Pesquisar'></input>
          </div>
        </div>

        <Table options={employees} />
        
      </div>
    </>
  )
}

export default Home
