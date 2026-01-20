import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const hideDuration = 6000;

  const isSomeFormEmpty = () => {
    return !name || !email || !message;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isSending) return;
    if (isSomeFormEmpty()) return;
    setIsSending(true);
    try {
      await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'apiwatz.lee@gmail.com',
          from: `${name}`,
          subject: 'Intersested in your portfolio!',
          email,
          message,
        }),
      });
      setIsSent(true);
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      clearForm();
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsSent(false);
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setIsSending(false);
    setTimeout(() => {
      setIsSent(false);
    }, hideDuration);
  };

  return (
    <Container id='contact' className='py-10 flex flex-col items-center gap-8'>
      <div className='text-2xl font-light'>Connect with me</div>
      <div className='text-4xl md:text-6xl'>Get in touch</div>
      <div className='text-mdmd:text-xl w-full md:w-150 text-center font-light'>
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </div>
      <form
        type='submit'
        onSubmit={sendEmail}
        className='py-4 space-y-4 w-full max-w-xl'
      >
        <div className='flex gap-4'>
          <input
            type='text'
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border border-gray-400 rounded-lg px-4 py-2 w-full mb-4'
          />
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Your Email'
            className='border border-gray-400 rounded-lg px-4 py-2 w-full mb-4'
          />
        </div>
        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Your Message'
            className='border border-gray-400 rounded-lg px-4 py-2 w-full h-40 mb-4'
          ></textarea>
        </div>
        <div className='text-center'>
          <button
            type='submit'
            disabled={isSending}
            className='bg-[#202020] text-white rounded-full px-6 py-2 hover:bg-[#202020] transition-colors duration-300 cursor-pointer'
          >
            Send Message
          </button>
        </div>
      </form>

      {isSent && (
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={isSent}
          autoHideDuration={hideDuration}
          onClose={handleClose}
          message={`${isSent ? 'Thank you for your interest! I will get back to you soon.' : 'Failed to send message. Please try again later.'}`}
          key={'bottom' + 'center'}
        />
      )}
    </Container>
  );
};

export default Contact;
