import React from 'react'
import {AiFillFacebook, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai';
import {IoLogoInstagram} from 'react-icons/io'
import s from './Footer.module.css'

function Footer() {

  return (
    <div className='wrapper'>
      <div className={s.fotter}>
          <div className={s.sotial_icons}>
          <a href='https://www.facebook.com/'><AiFillFacebook/></a>
          <a href='https://www.instagram.com/'><IoLogoInstagram/></a>
          <a href='https://twitter.com/'><AiOutlineTwitter/></a>
          <a href='https://www.linkedin.com/'><AiFillLinkedin/></a>
          </div>
          <p className={s.developer}>Copyright ©2020 All rights reserved </p>
      </div>
    </div>
  )
}

export default Footer