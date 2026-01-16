import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Container from '@mui/material/Container';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const menu = [
    { name: 'Home', href: '#header' },
    { name: 'About me', href: '#about' },
    { name: 'Experiences', href: '#experiences' },
    // { name: 'Services', href: '#services' },
    { name: 'My work', href: '#work' },
    { name: 'Contact me', href: '#contact' },
  ];

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
    document.body.style.overflow = 'auto';
  };

  const scrollTo = (refName) => {
    const el = document.getElementById(refName);

    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <>
      <div className='fixed top-0 right-0 -z-10 '>
        <Image src={assets.header_bg_color} alt='' />
      </div>
      <div
        className={`fixed top-0 right-0 z-50 w-full 
          ${isScroll ? 'bg-white/50 backdrop-blur-lg' : ''}
          
        `}
      >
        <Container
          component='nav'
          className={` w-full py-4 flex items-center justify-between z-50 `}
        >
          <a href='#header' className='font-black text-xl'>
            APW.
          </a>

          <ul
            className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
              ${!isScroll && 'bg-white/50 shadow-sm backdrop-blur-sm'} 
              
            `}
          >
            {menu.map(({ name, href }, index) => {
              return (
                <li key={index}>
                  <a
                    className='font-ovo cursor-pointer'
                    onClick={() => scrollTo(href.substring(1))}
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className='flex items-center gap-4'>
            <button className='cursor-pointer'>
              <Image src={assets.moon_icon} alt='' className='w-6' />
            </button>

            <button className='block md:hidden ml-3' onClick={openMenu}>
              <Image src={assets.menu_black} alt='' className='w-6' />
            </button>
          </div>

          {/* ---------- mobile menu ----------------- */}

          <ul
            ref={sideMenuRef}
            className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white transition duration-500'
          >
            <div className='absolute top-6 right-6' onClick={closeMenu}>
              <Image
                src={assets.close_black}
                alt=''
                className='w-5 cursor-pointer'
              />
            </div>

            {menu.map(({ name, href }, index) => {
              return (
                <li key={index}>
                  <a
                    className='font-ovo cursor-pointer'
                    href={href}
                    onClick={() => {
                      scrollTo(href.substring(1));
                      closeMenu();
                    }}
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
