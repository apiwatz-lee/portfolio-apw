const Contact = () => {
  return (
    <div
      id='contact'
      className='py-8 flex flex-col items-center gap-8 px-[12%]'
    >
      <div class='text-2xl font-light'>Connect with me</div>
      <div class='text-4xl md:text-6xl'>Get in touch</div>
      <div class='text-mdmd:text-xl w-full md:w-150 text-center font-light'>
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </div>
      <form class='py-4 space-y-4'>
        <div class='flex gap-4'>
          <input
            type='text'
            placeholder='Your Name'
            class='border border-gray-400 rounded-lg px-4 py-2 w-full mb-4'
          />
          <input
            type='email'
            placeholder='Your Email'
            class='border border-gray-400 rounded-lg px-4 py-2 w-full mb-4'
          />
        </div>
        <div>
          <textarea
            placeholder='Your Message'
            class='border border-gray-400 rounded-lg px-4 py-2 w-full h-40 mb-4'
          ></textarea>
        </div>
        <div class='text-center'>
          <button
            type='submit'
            class='bg-[#202020] text-white rounded-full px-6 py-2 hover:bg-[#202020] transition-colors duration-300'
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
