
import MenuItem from 'components/Menu/MenuItem'
import { useSelector } from 'react-redux'
import { logout, selectIsAuth } from 'redux/slices/auth'
import { useDispatch } from 'react-redux'
import { Button, Divider } from '@mui/material'
import 'assets/scss/components/header/header-menu.scss'
type Props = {}

const Menu = (props: Props) => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()
  return (
    <>
    <ul className="header-navbar__list">
<li><MenuItem to = '/'>Головна</MenuItem></li>
<li><MenuItem to = 'news'>Відгуки</MenuItem></li>
<li><MenuItem to = 'callback'>Контакти</MenuItem></li>

{isAuth ? (
  <>
<li><div className = 'btn btn--white'><p onClick = {() => logout()}>Вийти</p></div></li>
<li><div className = 'btn btn--white'><MenuItem to = '/AddPost'>Створити статтю</MenuItem></div></li>
</>

) : (
  <>
 <li><div className = 'btn btn--white'><MenuItem to = '/login'>Увійти</MenuItem></div></li>
 <li><div className = 'btn btn--white'><MenuItem to = '/register'>Створити аккаунт</MenuItem></div></li>
</>


)}

</ul>
</>

  )
}

export default Menu