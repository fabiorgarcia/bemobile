import './Table.css'

function Table({options}) {

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

        <ul className='thead tbody'>
          <li>FOTO</li>
          <li>NOME</li>
          <li>CARGO</li>
          <li>DATA DE ADMISSÃO</li>
          <li>TELEFONE</li>
        </ul>
        
        {options.map((opt) => (
          <ul className='tbody' key={opt.id}>
            <li><div className='imageDiv' style={{ backgroundImage: `url(${opt.image})` }}></div></li>
            <li>{opt.name}</li>
            <li>{opt.job}</li>
            <li>{formatDateToDDMMYYYY(opt.admission_date)}</li>
            <li>{formatPhone(opt.phone)}</li>
          </ul>
        ))}
        
        
      </div>
    </>
  )
}

export default Table
