import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logorus.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
       <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-[89px] w-auto m-0 p-0" />
        </div>
        
      <nav className={`navCss ${isScrolled ? 'scrolled' : ''}`}>
        <ul className="navMenu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/about">About</Link></li>
          
        </ul>
      </nav>
      
      <hr className="hrCss" />
    </>
  );
}

export default Header;
