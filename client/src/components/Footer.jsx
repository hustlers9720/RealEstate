import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white'>
      <div className='max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Company Info */}
        <div>
          <Link to='/'>
            <h2 className='font-bold text-xl flex flex-wrap mb-4'>
              <span className='text-slate-400'>Goyal</span>
              <span className='text-slate-200'>Estate</span>
            </h2>
          </Link>
          <p className='text-slate-300 text-sm'>
            Helping you find your dream home with trusted service and premium properties 
            tailored to your lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-lg font-semibold mb-4 text-slate-200'>Quick Links</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <Link to='/' className='text-slate-300 hover:text-slate-100 hover:underline'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' className='text-slate-300 hover:text-slate-100 hover:underline'>
                About Us
              </Link>
            </li>
            <li>
              <Link to='/search' className='text-slate-300 hover:text-slate-100 hover:underline'>
                Properties
              </Link>
            </li>
            <li>
              <Link to='/profile' className='text-slate-300 hover:text-slate-100 hover:underline'>
                My Account
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className='text-lg font-semibold mb-4 text-slate-200'>Contact Us</h3>
          <ul className='text-slate-300 text-sm space-y-2'>
            <li className='flex items-center gap-2'>
              <span>📍</span> 123 Estate Avenue, Dream City
            </li>
            <li className='flex items-center gap-2'>
              <span>📞</span> +91 9876543210
            </li>
            <li className='flex items-center gap-2'>
              <span>✉️</span> contact@goyalestate.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className='text-lg font-semibold mb-4 text-slate-200'>Follow Us</h3>
          <div className='flex gap-4 text-xl'>
            <a href="#" className='text-slate-300 hover:text-blue-400'>
              <FaFacebook />
            </a>
            <a href="#" className='text-slate-300 hover:text-pink-500'>
              <FaInstagram />
            </a>
            <a href="#" className='text-slate-300 hover:text-sky-400'>
              <FaTwitter />
            </a>
            <a href="#" className='text-slate-300 hover:text-red-500'>
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-slate-700 mt-6 py-4 text-center text-sm text-slate-400'>
        <div className='max-w-6xl mx-auto px-6'>
          &copy; {new Date().getFullYear()} GoyalEstate. All rights reserved. | 
          <Link to='/privacy' className='hover:underline ml-1 mr-1'>Privacy Policy</Link> | 
          <Link to='/terms' className='hover:underline ml-1'>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;