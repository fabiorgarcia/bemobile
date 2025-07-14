import betallent from '../assets/betallent.svg'
import './Header.css'

function Header() {

  return (
    <>
      <header>
        <div className='content'>
            <img src={betallent} className="logo" alt="BeTallent logo" />
        </div>
      </header>
    </>
  )
}

export default Header
