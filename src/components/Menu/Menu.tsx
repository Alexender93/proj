import React from 'react'
import MenuItem from 'components/Menu/MenuItem'
import { useSelector } from 'react-redux'
import { logout, selectIsAuth } from 'redux/slices/auth'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'
type Props = {}

const Menu = (props: Props) => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()
  return (
    <>
    <ul className="header-navbar__list">
<MenuItem to = '/'>Main</MenuItem>
<MenuItem to = 'recepe'>Recepe</MenuItem>
<MenuItem to = 'news'>News</MenuItem>
<MenuItem to = 'callback'>Callback</MenuItem>
<MenuItem to = 'telegram'>Telegram</MenuItem>
{isAuth ? (
  <>
<MenuItem to = ''><Button onClick = {() => logout}>Выйти</Button></MenuItem>
<MenuItem to = '/AddPost'>Создать статью</MenuItem>
</>

) : (
  <>
 <MenuItem to = '/login'>Войти</MenuItem>

</>


)}

</ul>
</>

  )
}

export default Menu