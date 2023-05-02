import axios from 'redux/axios';
import Post from 'components/Menu/Post';
import React from 'react'
import { useParams } from 'react-router-dom';

const FullPost = () => {
    const [data, setData] = React.useState();
    const[isLoading, setLoading] = React.useState(true)
    const {id} = useParams()
    console.log(useParams())
    React.useEffect(() => {
axios 
.get(`/posts/${id}`)
.then((res) => {
setData(res.data)
setLoading(false)
})
.catch((err) => {
alert('Ошибка при получении статьи')

}, [])
 })
 console.log(data)
if(isLoading) {
return <Post isLoading = {isLoading} isFullPost/>
} else 
  return (
    <>
    
    <Post 
     id = {data._id}
     title = {data.title}
     imageUrl = {data.imageUrl}
     user = {data.user}
   createdAt = {data.createdAt}
     viewsCount = {data.viewsCount}
     commentsCount = {data.commentsCount}
     tags = {data.tags}
     text = {data.text}
     category= {data.category}
     isFullPost
    />
   
    </>
  )
}

export default FullPost