
import {useForm} from 'react-hook-form'
import {Button, TextField} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuth, selectIsAuth } from 'redux/slices/auth'
import { Navigate} from 'react-router-dom'


export const Login = () => {
    const isAuth = useSelector(selectIsAuth)
  
    const dispatch = useDispatch()
    const {
register,
handleSubmit,
formState: {errors}
    } = useForm ({
defaultValues: {
email: 'dvdsfd@yandex.ru',
password: '1213124wcw3'

}, mode: 'onChange'

    })
 
 const onSubmit = async (values) => {
  
const data = await dispatch(fetchAuth(values));
if(!data.payload) {
    return alert('Не удалось авторизоваться')
}

if('token' in data.payload) {
    window.localStorage.setItem('token', data.payload.token)
 } 
}
if(isAuth) {
    return <Navigate to = "/" />
    
    }
  return (
    <div>
<form onSubmit = {handleSubmit(onSubmit)}>
Эмэил: <TextField 
type = 'email'
error = {Boolean(errors.email ?. message)}
{...register('email', {required: 'Укажите почту'})} 
helperText = {errors.email?.message} //   Если ємєл нет, то не нужно сообщение
/>  
Пароль: <TextField 
type = 'password'
error = {Boolean(errors.password ?. message)}
{...register('password', {required: 'Укажите пароль'})} 
helperText = {errors.password ?. message} />
<Button type = "submit" >Отправить</Button>
</form>
    </div>
  )
  }

export default Login