import React from 'react'
import logo from '../utils/images/EHANFLIX.png';

const Header = () => {
  return (
    <div className='absolute px-8 bg-gradient-to-b from-black'>
        <img className='w-[200px] p-3' src={logo} alt='logo'/>
    </div>
  )
}

export default Header