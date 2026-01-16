import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <div className='container mx-auto py-4'>
      <div className='text-center'>APW</div>
      <div className='text-center'>
        <EmailIcon /> apiwatz.lee@gmail.com
      </div>

      <Divider className='pt-4' />
      <div className='flex justify-between w-full text-sm text-gray-500 py-4'>
        <div>© {new Date().getFullYear()} APW. All rights reserved.</div>
        <div className='items-center'>
          Made with <FavoriteIcon fontSize='small' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
