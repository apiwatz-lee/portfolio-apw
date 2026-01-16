import { assets, workData } from '@/assets/assets';
import { Container } from '@mui/material';
import Image from 'next/image';

const Work = () => {
  return (
    <Container id='work' className='py-10'>
      <h4 className='text-center mb-2 text-lg font-ovo'>My Portfolio </h4>
      <h2 className='text-center text-5xl font-ovo'>My latest work</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
        adipisci? Sed assumenda impedit atque eaque autem maxime totam,
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
        {workData.map(({ title, description, bgImage }, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${bgImage})` }}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
          >
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-[8%] -translalte-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <div>
                <Image src={assets.send_icon} alt='sendIcon' className='w-5' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Work;
