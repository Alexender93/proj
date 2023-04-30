import React from 'react'
import './Main.scss'
import {Routes, Route} from 'react-router-dom'

type Props = {}

const Main = (props: Props) => {
  return (

    <main>
    <Routes> 
      <Route path = '/' element = ''/>
      <Route path = 'recepe' element = '' />
      <Route path = 'news' element = '' />
      <Route path = 'callback' element = '' />
      <Route path = 'telegram' element = '' />
      </Routes>
 <section className = 'categories'>
  <div className = 'categories-title'>
 <h2 className='categories-title__messsage'>Категории:</h2>
 </div>
<div className = 'categories__container'>
<article className = 'categories-item'>
<div className='categories-item__image'></div>
<div className='categories-item__desc'>
<h3 className = 'categories-item__title'>
<a href='#'  className='categories-item__link'>Перші страви</a>
</h3>
<div className='categories-item__count'> 
<b>1 млн. просмотров</b>
<div className = 'btn btn-brown'><a href="#">Перейти к категории</a></div>
</div>
</div>

</article>

<article className = 'categories-item'>
<div className='categories-item__image'></div>
<div className='categories-item__desc'>
<h3 className = 'categories-item__title'>
<a href='#'  className='categories-item__link'>Перші страви</a>
</h3>
<div className='categories-item__count'> 
<b>1 млн. просмотров</b>
<div className = 'btn btn-brown'><a href="#">Перейти к категории</a></div>
</div>
</div>
</article>

<article className = 'categories-item'>
<div className='categories-item__image'></div>
<div className='categories-item__desc'>
<h3 className = 'categories-item__title'>
<a href='#'  className='categories-item__link'>Перші страви</a>
</h3>
<div className='categories-item__count'> 
<b>1 млн. просмотров</b>
<div className = 'btn btn-brown'><a href="#">Перейти к категории</a></div>
</div>
</div>
</article>

<article className = 'categories-item'>
<div className='categories-item__image'></div>
<div className='categories-item__desc'>
<h3 className = 'categories-item__title'>
<a href='#'  className='categories-item__link'>Перші страви</a>
</h3>
<div className='categories-item__count'> 
<b>1 млн. просмотров</b>
<div className = 'btn btn--brown'><a href="#">Перейти к категории</a></div>
</div>
</div>

</article>







</div>



<div className = 'categories-footer'>
  <div className='btn btn--brown-lg'>Показать все статьи</div>
</div>
</section>


    
    
    </main>
  )
}

export default Main