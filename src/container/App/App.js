import AddPost from "pages/AddPost"
import { Route, Routes } from "react-router-dom"
import Home from "pages/Home"
import Login from "pages/Login"
import Header from "container/Header/Header"


import Registration from "pages/Registration"
import FullPost from "FullPost"



const App = () => {
  // const dispatch = useDispatch()
 

  // React.useEffect(() => {
  //   dispatch(fetchAuthMe)
  //     }, [])
     
 
    
return (

    <>
<Header />
<Routes>
<Route path='/' element = {<Home />} />
<Route path='/add-post' element = {<AddPost />} />
<Route path='/posts/:id' element = {<FullPost />} />
<Route path='/login' element = {<Login />} />
<Route path='/register' element = {<Registration />} />
<Route path='/posts/:id/edit' element = {<AddPost />} />
</Routes>








    </>
  )
}

export default App