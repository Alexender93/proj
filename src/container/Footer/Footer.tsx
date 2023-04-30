import React from 'react'
import './Footer.scss'
type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
    <div className = 'footer'>
        <div className='footer-lists'>
        <div className='footer-lists__container'>
</div>
        </div>
        <div className = 'footer-callback'>
        <div className = 'footer-callback__container'>
        <h2>Японська їжа вдома</h2>

</div>
</div>
<div className = 'footer-menu'>
<div className = 'footer-menu__container'>
<nav className="footer-navbar">
<ul className="footer-navbar__list">
<li><a className = "header-navbar__item" href='#'>Головна</a></li>
<li><a className = "header-navbar__item" href='#'>Рецепти</a></li>
<li><a className = "header-navbar__item" href='#'>Новини</a></li>
<li><a className = "header-navbar__item" href='#'>Зворотній зв'язок</a></li>
<li><a className = "header-navbar__item icon-telegram" href='#'>Телеграм</a></li>

</ul>



</nav>
<div className="header-actions">
<a className="btn btn--light" href="#">Создать свой блог</a>
<a className="btn btn--light" href="#">Любимые статьи</a>
</div>



</div>


</div>


</div>
<div className="footer-copyright">
<div className="footer-copyright__container">




</div>



</div>


  
    </footer>
  )
}

export default Footer