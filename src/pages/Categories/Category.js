import Post from 'components/Menu/Post'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams} from 'react-router-dom'
import {useEffect} from 'react'
import { fetchPosts, fetchTags } from 'redux/slices/posts'
const Category = () => {
    const dispatch = useDispatch()
   
    const {posts, tags} = useSelector(state => state.posts)
    const isPostsLoading = posts.status === 'loading'
    const isTagsLoading = tags.status === 'loading'
    const userData = useSelector((state) => state.auth.data)
    useEffect(() => {
        dispatch(fetchPosts())
        dispatch(fetchTags())
      }, []);
      
const {ctg} = useParams()
   return (
    <>
    {posts.items.filter((arr) => 
arr.category == ctg).map((obj, index) => (
        (
      
         <>
          <Post 
        id = {obj['_id']}
        title = {obj['title']}
        imageUrl = {obj['imageUrl']}
        user = {obj['user'].fullName}
      createdAt = {obj['createdAt']}
        viewsCount = {obj['viewsCount']}
        commentsCount = {obj['commentsCount']}
        isEditable = {userData ?._id === obj.user['_id']  } //Если userData есть, то мі вітаскиваем id и сравниваем его с id в статье
        tags = {!isTagsLoading ? tags.items : []} 
        category = {obj['category']}
       />
   </>
       
        )
    ))
        }
</>
   )
    }

 


export default Category