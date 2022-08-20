import logo from '../images/logos/logo.svg'

function Header() {
  return (
    <header className="header">
      <a href="#">
        <img src={logo} alt="Логотип Место Russia" className="header__logo" />
      </a>
    </header>
  )
}

export default Header
