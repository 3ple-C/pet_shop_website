import styles from '../assets/css/Navbar.module.css';
import logo from '../assets/images_new/Logo 2.png';

import { useState } from 'react'

// components
import Button from '../components/rtcBtn';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
    // adding the states 
    const [isActive, setIsActive] = useState(false);
    //add the active class
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };
    //clean up function to remove the active class
    const removeActive = () => {
        setIsActive(false)
    }


    return (

        <div className='lg:fixed w-full md:z-10'>
            <nav className={`${styles.navbar} '  justify-between py-5 mb-[-2px] xl:px-24 lg:px-16 md:px-12 md:py-0 sm:px-10 ' `}  >
                {/* logo */}

                <HashLink smooth to='/#header' className={`${styles.logo}`}>
                    <div className='w-fit'>
                        <img src={logo} alt='logo' className='w-[52%] object-contain md:w-[66%]' id='nav_img'/>
                    </div>
                </HashLink>
                <ul className={`${styles.navMenu} 'gap-7 xl:gap-12 lg:gap-8 ' ${isActive ? styles.active : ''}`}>

                    <li onClick={removeActive}>
                        <HashLink smooth to='/#welcome' className={`${styles.navLink} 'font-medium xl:text-base' `}>About Us</HashLink>
                    </li>
                    <li >
                        <HashLink smooth to='/#services' className={`${styles.navLink}`}>Our Services</HashLink>
                    </li>
                    <li onClick={removeActive}>
                        <HashLink smooth to='/#explore' className={`${styles.navLink}`}>Explore</HashLink>
                    </li>
                    <li onClick={removeActive} className='md:hidden'>
                        <HashLink smooth to='/#contact_us' className={`${styles.navLink}`}><Button name="Contact Us" /></HashLink>
                    </li>

                </ul>

                <div className='hidden md:block  '>
                    <HashLink smooth to='/#contact_us' className={`${styles.navLink}`}><Button name="Contact Us" /></HashLink>
                </div>

                <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
                    <span className={`${styles.bar}`}></span>
                    <span className={`${styles.bar} 'w-[10px]' `}></span>
                    <span className={`${styles.bar}`}></span>
                </div>
            </nav>


        </div>
    );
};

export default Navbar;