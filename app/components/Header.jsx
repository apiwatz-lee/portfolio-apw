import { assets } from '@/assets/assets';
import Image from 'next/image';
import Container from '@mui/material/Container';

const Header = () => {
  return (
    <Container
      id='header'
      className=' flex flex-col items-center justify-center gap-4 w-full text-center min-h-screen py-20'
    >
      <div>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
        Hi! I'm Aphiwat Leelasawatsuk{' '}
        <Image src={assets.hand_icon} alt='' className='w-6' />
      </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo max-w-3xl'>
        Full Stack Developer
      </h1>
      <p className='max-w-2xl mx-auto font-ovo'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
        reiciendis facere molestiae recusandae distinctio cupiditate alias
        itaque nemo exercitationem asperiores?
      </p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a
          href='#contact'
          className='px-10 py-3 border rounded-full bg-black text-white flex items-center gap-2 '
        >
          contact me
          <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </a>

        <a
          href='/sample-resume.pdf'
          download
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 '
        >
          my resume <Image src={assets.download_icon} alt='' className='w-4' />
        </a>
      </div>
    </Container>
  );
};

export default Header;
