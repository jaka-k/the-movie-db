import React from 'react';

const style = {
  navbarContainer: 'bg-[#0d253f] p mx-auto text-white text-xs font-semibold',
  navbar: 'flex max-w-full md:max-w-7xl mx-auto justify-between',
  navbar__list: 'flex p-3',
  navbar__listElement: 'mx-2',
  navbar__logo: 'mx-2 h-4',
  navbar__plusIcon: 'px-3 h-4',
  navbar__language: 'mx-2 px-1 mb-1 rounded-sm ring-1 ring-white',
  navbar__searchIcon: 'ml-3 h-6',
};

function Navbar() {
  return (
    <header className={style.navbarContainer}>
      <nav className={style.navbar}>
        <ul className={style.navbar__list}>
          <img
            className={style.navbar__logo}
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt=""
          />
          <li className={style.navbar__listElement}>Movies</li>
          <li className={style.navbar__listElement}>TV Shows</li>
          <li className={style.navbar__listElement}>People</li>
          <li className={style.navbar__listElement}>More</li>
        </ul>
        <ul className={style.navbar__list}>
          <img
            className={style.navbar__plusIcon}
            src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg"
            alt=""
          />
          <li className={style.navbar__language}>EN</li>
          <li className={style.navbar__listElement}>Login</li>
          <li className={style.navbar__listElement}>Join TMDB</li>
          <img
            className={style.navbar__searchIcon}
            src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg"
            alt=""
          />
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
