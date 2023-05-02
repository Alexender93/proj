import React from 'react'

import { useDispatch } from "react-redux";
import {useEffect} from 'react'
import { useSelector } from "react-redux";
import { fetchPosts, fetchTags } from 'redux/slices/posts.js';
import {Post} from 'components/Menu/Post/index.js';

const Home = () => {
    const dispatch = useDispatch()
   
    const {posts, tags} = useSelector(state => state.posts)
    const isPostsLoading = posts.status === 'loading'
    const isTagsLoading = tags.status === 'loading'
    const userData = useSelector((state) => state.auth.data)
    useEffect(() => {
        dispatch(fetchPosts())
        dispatch(fetchTags())
      }, []);
      console.log(posts)
  return (
    <>
    {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) => (
        isPostsLoading ? <Post isLoading = {true} key = {index}/> : (
          <>
        <Post 
        id = {obj._id}
        title = {obj.title}
        imageUrl = {obj.imageUrl}
        user = {obj.user.fullName}
      createdAt = {obj.createdAt}
        viewsCount = {obj.viewsCount}
        commentsCount = {obj.commentsCount}
        isEditable = {userData ?._id === obj.user._id  } //Если userData есть, то мі вітаскиваем id и сравниваем его с id в статье
        tags = {!isTagsLoading ? tags.items : []} 
        category = {obj.category}
       />
   
        </>
        )
            ))}   
    







    
    </>
  )
}

export default Home