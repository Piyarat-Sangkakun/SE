import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import adam from './adam.jpg';

function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
            <div className ='BG'>
          </div>
        </div>
        
          <ul className='nav-menu-items' >  
            <div className='div1'>
              <img src={adam} alt="images profile" />
              <h2>Adam</h2>
              <li1>Author(Thai)</li1>
            </div>
            <line />
            <div className='div2'>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            </div>
          </ul>
        
      </IconContext.Provider>
    </>
  );
}

export default Navbar;