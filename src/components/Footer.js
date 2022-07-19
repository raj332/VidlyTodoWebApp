import React from 'react';

export const Footer = () => {
  let footerstyle={
position:"fixed",
bottom:"0",
width:"100%"
  }
  return (
    <footer className='bg-dark text-light py-2'style={footerstyle} >
      <p className='text-center'>Copyright &copy; My Todos list.com</p>
      
    </footer>
  );
};
