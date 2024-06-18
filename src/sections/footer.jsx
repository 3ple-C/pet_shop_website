import '../assets/css/main.css'
import logo from '../assets/images_new/Logo 2.png';

// components
import { HashLink } from 'react-router-hash-link';

const Footer = ({className}) => {
    return (
        <footer className={`relative mt-20 ${className}`}>
            <div className='bg-black space-y-24 md:space-y-6'>
                <section className='mb-0 pt-[60px] lg:pt-[80px] md:pt-[] px-3 space-y-3 bg-black text-white md:pb-10 md:flex md:justify-between md:items-center xl:px-14 lg:px-6 md:px-7'>
                    <div className='flex flex-col md:w-fit md:items-center '>
                        <div className=' w-1/3 md:w-fit lg:w-fit'>
                            <a href="/"> <img src={logo} alt='logo' className='object-contain w-full' /></a>
                        </div>
                    </div>

                    <div className=' md:block p-1'>
                        <ul className='flex flex-col gap-5 lg:pe md:pe-  md:flex-row md:items-center md:gap-6 xl:gap-10 lg:gap-7'>
                            <li><HashLink smooth to="/#welcome" className='text-white'>About Us</HashLink></li>
                            <li className='text-white'><HashLink smooth to='/#services'>Our Services</HashLink></li>
                            <li><HashLink smooth to='/#contact_us' className='text-white'>Contact us</HashLink></li>
                        </ul>
                    </div>

                    <div>
                        <div className='space-x-7 pt-8 xl:space-x-[37px] xl:text-2xl md:text-normal lg:space-x-[40px] md:space-x-[30px] md:pt-0'>
                            <a href=""><i class="fa-brands fa-x-twitter"></i></a>
                            <a href="https://www.instagram.com/benjamin_petshop?igsh=MW1rZXg0MnRjbjc2dg=="><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://www.facebook.com/profile.php?id=61550878785515"><i class="fa-brands fa-facebook text-white"></i></a>
                        </div>
                    </div>
                </section>

                <p className='text-center pb-5 bg-black text-white mt-0 lg:text-base md:text-sm'>Copyright © 2024 Petshopng. All rights reserved</p>
            </div>
        </footer>
    );
};


export default Footer;