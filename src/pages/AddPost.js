import { Button, Paper, TextField } from '@mui/material'
import React from 'react'
import axios from 'redux/axios'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import SimpleMDE from 'react-simplemde-editor'
import { selectIsAuth } from 'redux/slices/auth'


const AddPost = () => {
  const {id} = useParams()
 const isEditing = Boolean(id)
 const navigate = useNavigate()
  const isAuth = useSelector(selectIsAuth)
  const[text, setText] = React.useState('')
  const[loading, setLoading] = React.useState(false)
  const[title, setTitle] = React.useState('')
  const[tags, setTags] = React.useState('')
  const[imageUrl, setImageUrl] = React.useState('')
  const[category, setCategory] = React.useState('')
  console.log(loading)
  const inputFileRef = React.useRef(null)
  const onSubmit = async () => {
try {
setLoading(true);
const fields = {
  title,
  tags,
  text,
  imageUrl,
  category
  }
const {data} = isEditing ? 
await axios.patch(`/posts/${id}`, fields) :
await axios.post('/posts', fields) 
const _id = isEditing ? id : data._id

navigate(`/posts/${_id}`)
} catch (err) {
  console.log(err)
}


  }
  React.useEffect(() => {
if(id) {
axios.get(`/posts/${id}`).then(({data}) => {
setTitle(data.title);
setText(data.text);
setImageUrl(data.imageUrl)
setTags(data.tags.join(','))
setCategory(data.category)
}).catch((err)=> {
  console.log(err);
  alert('Ошибка при получении статьи')})}}, [id])



  
const handleChangeFile = async (event) => {
   try {
const formData = new FormData()

const file = event.target.files[0];
formData.append('image', file);
const {data} = await axios.post('/upload', formData)

setImageUrl(data.url)

   } catch (err) {
    console.log(err)
    alert('Ошибка при загрузке файла')

   }
  }
  const onClickRemoveImage =  () => {
    setImageUrl('')
  }
  const onChange = React.useCallback((value) => {
setText(value)

  }, [])
  const options = React.useMemo(
() => ({
spellChecker: false,
maxHeight: '400px',
autofocus: true,
placeHolder: "Введите текст",
status: false,
autosave: {
enabled: true,
delay: 1000

}

}),
[]
  )
  if(!window.localStorage.getItem('token') && !isAuth) {
    return <Navigate to = '' />
    }
  return (
    <>
    <Paper style = {{padding: 30}}>
Категория: <button onClick = {() => setCategory('first')}>Перші страви</button>
<button onClick = {() => setCategory('second')}>Другі страви</button>
<button onClick = {() => setCategory('drinks')}>Напої</button>
<button onClick = {() => setCategory('crisps')}>Закуски</button>
{category}
<Button onClick = {() => inputFileRef.current.click()} variant = 'outlined' size = 'large'>
  Загрузить превью
</Button>

<input ref = {inputFileRef} type = 'file' onChange = {handleChangeFile} hidden />
{imageUrl && (
  <>
<Button variant = 'contained' onClick = {onClickRemoveImage}>Удалить</Button>
{imageUrl}
<div sx = {{width: 100, height: 100}}>
<img src = {`http://localhost:4444${imageUrl}`} alt = 'Uploaded' />
</div>
</>
)


}
<br/>
<TextField
variant = 'outlined'
placeholder='Заголовок статьи'
value = {title}
onChange = {(e) => setTitle(e.target.value)}
fullWidth
/>
<br/>
<TextField
value = {tags}
onChange = {(e) => setTags(e.target.value)}
fullWidth
variant = 'outlined'
placeholder='Тэги'
/>
<br/>
<SimpleMDE style= {{margin:5}} value = {text} onChange = {onChange} options = {options} />


    </Paper>
    <div>
<Button variant = 'outlined' onClick = {onSubmit}>
{isEditing ? 'Сохранить' : 'Опубликовать'}

</Button>
<a href = '/'><Button size = 'large'>Отмена</Button></a>
    </div>
    </>
  )
}

export default AddPost