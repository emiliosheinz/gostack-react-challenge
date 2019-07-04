import React from 'react'

import fbLogo from '../../assets/facebook-logo.png'
import profileIcon from '../../assets/profile-icon.png'

import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <img
          src={fbLogo}
          alt='Logo do facebook'
          className='header__logo'
        />
        <div className='header__profile'>
          <p className='header__profile__text'>
            Meu perfil
        </p>
          <img
            src={profileIcon}
            alt='Imagem de perfil'
            className='header__profile__img'
          />
        </div>
      </div>
    </header>
  )
}

export default Header
