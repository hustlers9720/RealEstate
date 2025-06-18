import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
 // Make sure this path is correct

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className='bg-slate-200 shadow-md sticky top-0 z-50'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        {/* Logo and Brand Name - Combined Link */}
        <Link to='/' className='flex items-center gap-1'>
          {/* <img
            src={logo}
            alt='Goyal Estate Logo'
            className='h-10 w-20 ' // Adjust size as needed
          /> */}
          <h1 className='font-bold text-sm sm:text-xl'>
            <span className='text-slate-500'>Goyal</span>
            <span className='text-slate-700'>Estate</span>
          </h1>
        </Link>

        {/* Search Bar */}
        <form
          onSubmit={handleSubmit}
          className='bg-slate-100 p-2 rounded-lg flex items-center flex-1 mx-4 max-w-md'
        >
          <input
            type='text'
            placeholder='Search properties...'
            className='bg-transparent focus:outline-none w-full px-2'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type='submit' className='px-2'>
            <FaSearch className='text-slate-600' />
          </button>
        </form>

        {/* Navigation Links */}
        <ul className='flex items-center gap-4'>
          <Link to='/' className='hidden sm:inline-block'>
            <li className='text-slate-700 hover:underline'>Home</li>
          </Link>
          <Link to='/about' className='hidden sm:inline-block'>
            <li className='text-slate-700 hover:underline'>About</li>
          </Link>
          <Link to='/contact' className='hidden sm:inline-block'>
            <li className='text-slate-700 hover:underline'>Contact</li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-8 w-8 object-cover border-2 border-slate-400'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className='text-slate-700 hover:underline'>Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}