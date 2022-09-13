import React from 'react'

function Navbar() {
  return (
    <header className='bg-[#0d253f] p mx-auto text-white text-xs font-semibold'>
        <nav className='flex max-w-full md:max-w-7xl mx-auto justify-between'>
    <ul className='flex p-3'>
        <img className='px-2 h-4' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" />
        <li className='px-2'>Movies</li>
        <li className='px-2'>TV Shows</li>
        <li className='px-2'>People</li>
        <li className='px-2'>More</li>
    </ul>
    <ul className='flex p-3'>
        <li className='px-2'><svg fill="#FFF" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg></li>
        <li className='px-2 border border-inherit'>EN</li>
        <li className='px-2'>Login</li>
        <li className='px-2'>Join TMDB</li>
        <li className='px-2'><svg fill='#01b4e4' width="22" height="22" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7zm-3-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm3 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm3 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"/></svg></li>
    </ul>
        </nav>
    </header>
  )
}

export default Navbar