import { useState } from 'react'
import './Table.css'
import arrow from '../../assets/arrow.svg'
import HiddenInfo from '../atoms/HiddenInfo';

function Table({options}) {

  const [showResults, setShowResults] = useState(0);
  const [toggleShow, setToggleShow] = useState(true);
  const [count, setCount] = useState(0);

  const moreInfo = (x) => {
    if (showResults == x) {
      setShowResults(0);  
    } else {
      setShowResults(x);
    }
  };
 
  function formatDateToDDMMYYYY(dateString) {
    const date = new Date(dateString); 
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function formatPhone(phone) {
    const part1 = phone.substring(0, 2);
    const part2 = phone.substring(5, 2) ;
    const part3 = part2.substring(0, 2);
    const part4 = phone.substring(4);
    const part5 = part4.substring(0, 5);
    const part6 = phone.substring(9);
    const newFormat = '+' + part1 + ' (' + part3 + ')' + ' ' + part5 + '-' + part6;
    return newFormat;
  }



  return (
    <>
      <div className='table'>

        <ul className='thead'>
          <li>FOTO</li>
          <li>NOME</li>
          <li className='hiddenInfo'>
            <ul className='thidden'>
              <li>CARGO</li>
              <li>DATA DE ADMISSÃO</li>
              <li>TELEFONE</li>
            </ul>
          </li>
          
          <li className='mobile'>●</li>
        </ul>
        
        {options.map((opt) => (
          <ul className={showResults != opt.id ? 'tbody' : "mobileInfos"} key={opt.id}>
            <li><div className='imageDiv' style={{ backgroundImage: `url(${opt.image})` }}></div></li>
            <li className='infoName'>{opt.name}</li>
            <li className='hiddenInfo desktop' id={opt.id}>
              <ul className='thidden'>
                <li>{opt.job}</li>
                <li>{formatDateToDDMMYYYY(opt.admission_date)}</li>
                <li>{formatPhone(opt.phone)}</li>
              </ul>
            </li>
            <li className='mobile cursor' onClick={() => moreInfo(opt.id)}>
              <img src={arrow} id={'ico'+opt.id} className={showResults != opt.id ? 'icoArrow' : "icoArrowOpem"} alt="Mais informações" />
            </li>
            {showResults == opt.id && <HiddenInfo infos={opt} />}
          </ul>
          
        ))}
        
      </div>
    </>
  )
}

export default Table
