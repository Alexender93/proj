
import 'assets/scss/components/header/header-content.scss'
import 'assets/scss/components/header/header-menu.scss'
import React from 'react'
import 'assets/icons/style.css'
import 'assets/css/style.css'

import 'assets/scss/components/header/header.scss'
import Menu from 'components/Menu/Menu'
import { useSelector } from 'react-redux'
import {logout, selectIsAuth} from 'redux/slices/auth'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'
import { Link} from 'react-router-dom'
import Slider from 'components/Menu/Slider/Slider.js'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'






const Header = () => {
 let elem = document.getElementById('nav-icon3');
const authData = []
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)
 const data = 0;
  const onClickLogout = () => {
    if(window.confirm('Вы хотите выйти?'))
dispatch(logout())
window.localStorage.removeItem('token')

  }
const [counter, setCounter] = React.useState(0)
  return (
    <header className="header">
<div className='header-container'>
<div className="header-content">
  <div className="header-content__container">
   <h1 className="header-content__title"><span> Моя</span><span> кухня</span></h1>
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
<FontAwesomeIcon icon={faHeart} style={{color: "white", width: "20.9", height: "18.23px"}} />
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

 <span className = 'control control-prev' id="btn-prev"><button>left</button></span>
 <span className = 'control control-pause' id="btn-pause"><button>pause</button></span>
<span className = 'control control-next'id="btn-next"><button>right</button>
 </span> 
</div>

 <div className="indicators" id="indicators-container">
<div className='indicator active' data-slide-to = "0">1</div>
<div className='indicator' data-slide-to = "1">2</div>
<div className='indicator' data-slide-to = "2">3</div>
<div className='indicator' data-slide-to = "3">4</div>
<div className='indicator' data-slide-to = "4">5</div>
</div>

</div>

    </header>
  

  )
  
}

export default Header