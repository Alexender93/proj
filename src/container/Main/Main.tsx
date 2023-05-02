import React from 'react'
import './Main.scss'
import { Link } from 'react-router-dom'




const Main = () => {

  return (

    <main>
    
 <section className = 'categories'>
  <div className = 'categories-title'>
 <h2 className='categories-title__messsage'>Категории:</h2>
 </div>
<div className = 'categories__container'>
<article className = 'categories-item'>
<div className='categories-item__image' style={{backgroundImage: "url(" + "https://static.sushiwok.ru/img/f9a7418885f783951870c8677b33e013/1024x1024"+")", backgroundPosition: 'center'}}></div>
<div className='categories-item__desc'>
<h3 className = 'categories-item__title'>
Перші страви
</h3>
<div className='categories-item__count'> 
<div className = 'btn btn-brown'><Link className='categories-item__link' to = '/category/first'>Перейти к категории</Link></div>
</div>
</div>

</article>

<article className = 'categories-item'>
<div className='categories-item__image' style={{backgroundImage: "url(" + "https://aussiedlerbote.de/wp-content/uploads/2022/04/momiji.jpg"+")", backgroundPosition: 'center'}}></div>
<div className='categories-item__desc'>
<h3 className = 'categories-item__title'>
Другі страви
</h3>
<div className='categories-item__count'> 
<div className = 'btn btn-brown'><Link className='categories-item__link' to = '/category/second'>Перейти к категории</Link ></div>
</div>
</div>
</article>

<article className = 'categories-item'>
<div className='categories-item__image' style={{backgroundImage: "url(" + "https://yume.com.ua/image/catalog/yap444.jpg"+")", backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}></div>
<div className='categories-item__desc'>
<h3 className = 'categories-item__title'>
Напої
</h3>
<div className='categories-item__count'> 
<div className = 'btn btn-brown'><Link className='categories-item__link' to = '/category/drink'>Перейти к категории</Link></div>
</div>
</div>
</article>

<article className = 'categories-item'>
<div className='categories-item__image' style={{backgroundImage: "url(" + "https://online-sushi.com.ua/image/cache/catalog/vega/1.v.slivochnyj-roll-810x450.png"+")", backgroundPosition: 'center'}}></div>
<div className='categories-item__desc'>
<h3 className = 'categories-item__title'>
Закуски
</h3>
<div className='categories-item__count'> 
<div className = 'btn btn--brown'><Link className='categories-item__link' to = '/category/crisps'>Перейти к категории</Link></div>
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