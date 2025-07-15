import './HiddenInfo.css'


function HiddenInfo({infos}) {

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

      <div className='showInfo mobile' id={infos.id}>
        <div className='infos'>
          <div>
            <span>Cargo</span>
            {infos.job}</div>
          <div>
            <span>Data de admição</span>
            {formatDateToDDMMYYYY(infos.admission_date)}
          </div>
          <div>
            <span>Telefone</span>
            {formatPhone(infos.phone)}
          </div>
        </div>
      </div>


    </>
  )
}

export default HiddenInfo
