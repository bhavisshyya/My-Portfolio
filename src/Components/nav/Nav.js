import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserCircle, BiMessageDetail} from 'react-icons/bi'
import {RiBook2Line} from 'react-icons/ri'
import {useState} from 'react'
import {DiReact} from 'react-icons/di'
function Nav() {

  const [activeNav, setActiveNav]= useState('#');


  return (
   <nav>
    <a href='#' onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiOutlineHome/></a>
    <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><BiUserCircle/></a>
    <a href='#skill' onClick={()=>setActiveNav('#skill')} className={activeNav==='#skill'?'active':''}>< DiReact /></a>
    <a href='#project' onClick={()=>setActiveNav('#project')} className={activeNav==='#project'?'active':''}><RiBook2Line/></a>
    <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><BiMessageDetail/></a>
   </nav>
  )
}

export default Nav