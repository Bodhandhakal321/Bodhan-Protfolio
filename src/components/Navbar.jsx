import React from 'react'
import logo from '../assets/BodhanLogo.png';
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
// import {FaGmail} from 'react-icons/fa'


const Navbar = () => {
  return <nav className='  mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
    <img className='mx-4 w-16 h-auto sm:w-20 lg:w-24 ' src={logo} alt="logo" />
    </div>
        <div className='m-8  flex items-start justify-center gap-4 text-2xl '>
          <a 
          href='https://www.linkedin.com/in/bodhan-dhakal-624215232/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
          className='hover:text-blue-600'
          > 

            <FaLinkedin />
          </a>
          <a 
          href='https://github.com/Bodhandhakal321'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Github'
          className='hover:text-gray-700'
          > 

            <FaGithub />
          </a>
          <a
          href='https://www.instagram.com/dhakalbodhan/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Instagram'
          className='hover:text-pink-500'
          > 

            <FaInstagram />
          </a>
            {/* <FaGmail /> */}
        </div>
  </nav>
}

export default Navbar