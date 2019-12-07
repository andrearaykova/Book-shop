import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer id='footer'>
        &copy; Book Library {(new Date().getFullYear())}
      </footer>
    </div>
  )
};

export default Footer;
