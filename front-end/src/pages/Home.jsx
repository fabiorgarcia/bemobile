import { useEffect, useState } from 'react'
import './Home.css'
import Search from '../components/atoms/Search'
import Table from '../components/organisms/Table'

function Home() {

  const [employees, setEmployees] = useState([]);
  const [employeesFilter, setEmployeesFilter] = useState([]);

  const [filterText, setfilterText] = useState('');

  function filterList(e) {
    setfilterText(e);
    let newArray = [];

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].name == e || employees[i].job == e || employees[i].phone == e) {
        newArray.push(employees[i]);
      }
    }

    if (newArray.length > 0) {
      setEmployeesFilter(newArray);
    } else {
      setEmployeesFilter(employees);
    }
    
  }
  





  useEffect(() => {
    fetch('http://localhost:5000/employees', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((resp) => resp.json())
      .then((data) => {
        setEmployees(data)
        setEmployeesFilter(data)
      })
      .catch((err) => consolo.log(err))
  },[])

  

  return (
    <>
      <div className='content'>
        <div className='filters'>
          <h1>Funcionários</h1>
          <div className='searchDiv'>
            <Search />
            <input type='text' placeholder='Pesquisar' value={filterText} onChange={(ev) => filterList(ev.target.value)}></input>
          </div>
        </div>

        <Table options={employeesFilter} />
        
      </div>
    </>
  )
}

export default Home
