import React from 'react'
import {NavLink}  from 'react-router-dom' 
type Props = {
  to: string
  children: React.ReactNode
  
  }
  const MenuItem = ({to, children}: Props) => {
    return (
    <div>
    <li><NavLink to = {to} className={({isActive}) => isActive ? 
    "menu-item-active" : "menu-item"}>{children}</NavLink></li>
    </div>
    )}

    export default MenuItem