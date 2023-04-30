
import React from 'react'
import {useForm} from 'react-hook-form'
import {Button, TextField} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRegister, selectIsAuth } from 'redux/slices/auth'
import {Navigate} from 'react-router-dom'

export const Registration = () => {
    const isAuth = useSelector(selectIsAuth)  //Булево значение авторизован я или нет
    const dispatch = useDispatch()
    const {
register,
handleSubmit,
setError,
formState: {errors}
    } = useForm ({
defaultValues: {
fullName: 'Вася Пупкин',
email: 'vasya@gmail.com',
password: 'dsfdssdsd'

}, mode: 'onChange'

    })
    const onSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values));
        if(!data.payload) {
            return alert('Не удалось зарегистрироваться')
        }
        if('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token)
         } 
        }
         if(isAuth) {
        return <Navigate to = '/' />
        
         }
  return (
    <div>
<form onSubmit = {handleSubmit(onSubmit)}>
FullName: <TextField 
type = 'text'
error = {Boolean(errors.fullName ?. message)}
{...register('fullName', {required: 'Укажите имя'})} 
helperText = {errors.fullName ?. message} //   Если ємєл нет, то не нужно сообщение
/>  
Эмэил: <TextField 
type = 'email'
error = {Boolean(errors.email ?. message)}
{...register('email', {required: 'Укажите почту'})} 
helperText = {errors.email ?. message} //   Если ємєл нет, то не нужно сообщение
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

export default Registration