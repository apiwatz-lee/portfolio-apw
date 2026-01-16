import Container from '@mui/material/Container';

const Contact = () => {
  return (
    <Container id='contact' className='py-10 flex flex-col items-center gap-8'>
      <div className='text-2xl font-light'>Connect with me</div>
      <div className='text-4xl md:text-6xl'>Get in touch</div>
      <div className='text-mdmd:text-xl w-full md:w-150 text-center font-light'>
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </div>
      <form className='py-4 space-y-4'>
        <div className='flex gap-4'>
          <input
            type='text'
            placeholder='Your Name'
            className='border border-gray-400 rounded-lg px-4 py-2 w-full mb-4'
          />
          <input
            type='email'
            placeholder='Your Email'
            className='border border-gray-400 rounded-lg px-4 py-2 w-full mb-4'
          />
        </div>
        <div>
          <textarea
            placeholder='Your Message'
            className='border border-gray-400 rounded-lg px-4 py-2 w-full h-40 mb-4'
          ></textarea>
        </div>
        <div className='text-center'>
          <button
            type='submit'
            className='bg-[#202020] text-white rounded-full px-6 py-2 hover:bg-[#202020] transition-colors duration-300'
          >
            Send Message
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Contact;
