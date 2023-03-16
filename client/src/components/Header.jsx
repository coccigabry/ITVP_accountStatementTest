import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo_senza payoff 1.png'
import { AuthContext } from '../context/context'


const Header = () => {
  const { userLogged, login } = useContext(AuthContext)

  return (
    <div className='headerContainer'>
      <div className='headerLogo'>
        <Link to='/'>
          <img src={Logo} alt='it value partner logo' />
        </Link>
      </div>
      <div className='headerLinks'>
        <Link className='headerLink' to='/'>
          <h3>ACCOUNTS AND CARDS</h3>
        </Link>
        <Link className='headerLink' to='/'>
          <h3>LOANS AND MORTGAGES</h3>
        </Link>
        <Link className='headerLink' to='/'>
          <h3>CONSULTING</h3>
        </Link>
        <Link className='headerLink' to='/'>
          <h3>TRADING</h3>
        </Link>
        <div className='headerBurger'>
          <p className='headerBurgerRect' style={{ top: '41px' }} />
          <p className='headerBurgerRect' style={{ top: '48.74px' }} />
          <p className='headerBurgerRect' style={{ top: '56.48px' }} />
        </div>
      </div>
      <div className='headerLoginContainer'>
        {
          userLogged
            ? <div className='headerUserLogged'>
              <span className='headerUserName'>WELCOME, JO</span>
              <div className='headerUserImg'></div>
            </div>
            : <button className='headerLoginBtn' onClick={login}>LOGIN</button>
        }
      </div>
    </div>
  )

}

export default Header