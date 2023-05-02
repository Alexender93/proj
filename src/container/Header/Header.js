
import 'assets/scss/components/header/header-content.scss'
import 'assets/scss/components/header/header-menu.scss'
import 'assets/js/main'
import 'assets/icons/style.css'
import 'assets/css/style.css'
import 'assets/js/slider'
import 'assets/scss/components/header/header.scss'
import Menu from 'components/Menu/Menu'
import { useSelector } from 'react-redux'
import {logout, selectIsAuth} from 'redux/slices/auth'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'
import { Link} from 'react-router-dom'





const Header = () => {
  const authData = []
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)
 const data = 0;
  const onClickLogout = () => {
    if(window.confirm('Вы хотите выйти?'))
dispatch(logout())
window.localStorage.removeItem('token')

  }

  return (
    <header className="header">
      
{(isAuth)  ? (
  
<>
<h1> Привет {}</h1>
<Link to = '/add-post'><Button>Написать статью</Button></Link>
<Button onClick = {() => onClickLogout()}>Выйти</Button>
</>

) : (
  <>
<Link to = '/login'>
  <Button>Войти</Button>
  </Link>
  <Link to = '/register'>Создать аккаунт</Link>
</>
)}

<div className='header-container'>
<div className="header-content">
  <div className="header-content__container">
    <img className='header-content__image' alt=''/>
<h1 className="header-content__title">Японська їжа вдома</h1>
<div className="header-content__adress">
<p>Дніпро</p>
<p>Запорызьке Шосе, д.20</p>
</div>
<div className="header-content__about">
<div className="header-content__phone">
  <p className='loh'>+3806812345678</p>
  <p>Заказать звонок</p>
</div>
<div className="header-content__shedule">
  <p>9:00 - 20:00</p>
  <p>Ежедневно</p>
</div>
</div>
<div className="header-content__like">
  <a href="#">Like</a>
</div>
<div id="nav-icon3">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
</div>

</div>
<div className="header-menu">
<div className="header-menu__container">
  <nav className="header-navbar">
<div id="nav-icon3">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
<Menu />



</nav>
<div className="header-actions">

</div>


  </div>
</div>
</div>
<div className = 'carousel' id='carousel'>

<div id="slides" className="slides-container">
<div className="slide active">Slide 1</div>
<div className="slide ">Slide 2</div>
<div className="slide">Slide 3</div>
<div className="slide">Slide 4</div>
<div className="slide">Slide 5</div>
</div>

<div className = 'controls' id='controls-container'>

{/* <span className = 'control control-prev' id="btn-prev"><FontAwesomeIcon icon="fa-solid fa-angle-left" /></span>

<span className = 'control control-next'id="btn-next"><FontAwesomeIcon icon="fa-solid fa-angle-right" /> */}
 {/* </span> */}
</div>

{/* <div className="indicators" id="indicators-container">
<div className='indicator active' data-slide-to = "0">1</div>
<div className='indicator' data-slide-to = "1">2</div>
<div className='indicator' data-slide-to = "2">3</div>
<div className='indicator' data-slide-to = "3">4</div>
<div className='indicator' data-slide-to = "4">5</div>

</div> */}

</div>

    </header>
    

  )
}

export default Header