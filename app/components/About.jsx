import { assets, infoList, toolsData, skills } from '@/assets/assets';
import Image from 'next/image';
import Container from '@mui/material/Container';
import apwCover from '@/public/apw-cover2.jpg';

const About = () => {
  return (
    <Container id='about' className='py-10'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-ovo'>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center lg:items-start gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={apwCover} alt='' className='w-full rounded-3xl' />
        </div>
        <div className='flex-1'>
          <p className='mb-10 lg:max-w-2xl font-ovo text-center lg:text-left w-full'>
            I am a developer who transitioned from business operations into
            software development, combining analytical thinking with modern web
            technologies. My expertise lies in building performant, scalable web
            applications.
          </p>

          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 lg:max-w-2xl'>
            {infoList.map(
              ({ icon, iconDark, title, description, url }, index) => (
                <li
                  onClick={() => url && window.open(url, '_blank')}
                  className={`border-[0.5px] border-gray-400 rounded-xl p-6 ${url ? 'cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-md' : ''}`}
                  key={index}
                >
                  <Image src={icon} alt={title} className='w-7 mt-3' />
                  <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                  <p className='text-gray-600 text-sm'>{description}</p>
                </li>
              ),
            )}
          </ul>

          <h4 className='my-6 text-gray-700 font-ovo'>Tools I use</h4>

          <ul className='flex items-center gap-3 sm:gap-5 flex-wrap'>
            {skills.map(({ logo, name, link }, index) => (
              <a
                key={index}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-md'
                href={link}
                target='_blank'
              >
                <img src={logo} alt={name} />
                {/* <Image src={logo} alt='tools' className='w-5 sm:w-7' /> */}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default About;
