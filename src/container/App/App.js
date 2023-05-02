import AddPost from "pages/AddPost"
import { Route, Routes } from "react-router-dom"
import Home from "pages/Home"
import Login from "pages/Login"
import Header from "container/Header/Header"
import React from 'react'
import { useDispatch } from "react-redux"
import { fetchAuthMe, selectIsAuth } from "redux/slices/auth.js"
import { useSelector } from "react-redux"
import Registration from "pages/Registration"
import FullPost from "FullPost"

import Category from "pages/Categories/Category"
import Main from "container/Main/Main"



const App = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)

 React.useEffect(() => {
dispatch(fetchAuthMe)
  }, [])
 
 
    
return (

    <>
<Header />
<Routes>
<Route path='/' element = {<Main />} />
<Route path='/add-post' element = {<AddPost />} />
<Route path='/posts/:id' element = {<FullPost />} />
<Route path='/login' element = {<Login />} />
<Route path='/register' element = {<Registration />} />
<Route path='/posts/:id/edit' element = {<AddPost />} />
<Route path='/category/:ctg' element = {<Category/>} />
</Routes>








    </>
  )
}

export default App