

import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useDispatch } from 'react-redux'
import { Link} from 'react-router-dom'
import { fetchRemovePost } from 'redux/slices/posts'
export const Post = ({id, title, user, imageUrl, createdAt, viewsCount, commentCount, isEditable, isFullPost, text, tags, category}) => {
const dispatch = useDispatch()
  const onClickRemove = () => {
    if(window.confirm('Вы действительно хотите удалить?')){
dispatch(fetchRemovePost(id));
    }
}

  return (
    <>

 
   {isFullPost ? (
    (
    <div>
    <p>Путь к картинке{imageUrl}</p>  
   <div>Id: {id}</div>
  <div>Title: {title}</div>
 <div> Image: <img src = {`http://localhost:4444${imageUrl}`} alt = {'uploaded'} /></div>
 <div> User: {user}</div>
  <div>CreayadAt: {createdAt}</div>
  <div>ViewsCount: {viewsCount}</div>
  <div>CommentCount: {commentCount}</div>
  <div>Category: {category}</div>
  <ReactMarkdown children = {text} />
  </div>)) : (
    <div>
   
 
      (
       {isEditable ? 
  (<>
  <button onClick = {() => {onClickRemove()
  }}>Удалить!!!</button>
  <button><Link to = {`/posts/${id}/edit`}>Редактировать</Link></button>
  </>
  ) : ('Нельзя менять и удалять')}
  
    <div>Id: {id}</div>
   <div><Link to = {`/posts/${id}`}>Title: {title}</Link></div>
  <div> Image: <img src = {`http://localhost:4444${imageUrl}`} alt = {'uploaded'} /></div>
  <div> User: {user}</div>
   <div>CreayadAt: {createdAt}</div>
   <div>ViewsCount: {viewsCount}</div>
   <div>CommentCount: {commentCount}</div>
   <div>Tags: {tags}</div>
   <div>Category: {category}</div>
)
   </div>) } 

  </>
  )
  
  
  }


  
export default Post