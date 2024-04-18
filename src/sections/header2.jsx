
import '../assets/css/main.css';

// components
import Button from '../components/rtcBtn';
import bottom_img from '../assets/images_new/Pexels Photo by Nancy Guth.png';
import bottom_mobile from '../assets/images_new/Pexels Photo by Nancy Guth (2).png'

const Header2 = () => {
    return (
        <div className='header2 relative w-full pt-1 pb-[0px] md:pt-10 md:pb-[198px] px-4 md:px-1' id='header'>
            <div className=' flex flex-col text-center gap-6 h-[68vh] items-center justify-center align-middle mt-[-40px] pb-[58px] md:mt-0 md:gap-8 w-[100%] md:pb-[0] md:w-[48%] md:mx-auto md:h-screen '>
                <h2 className='text-white text-[24px] px-8 md:px-0 leading-[32px] lg:text-[48px] lg:leading-[64px]'>Your Journey to Puppy Love Starts at <span className='text-[#F8931F]'>Petshop.</span></h2>

                <p className=' text-white text-sm md:mt-[-35px] xl:text-[16px] lg:px-[40px] lg:pt-8 lg:text-normal sm:text-[14px]'>
                    Welcome to Petshop, your premier destination for finding your new furry family member. Discover a wide selection of dogs ready to bring joy and love into your home today.
                </p>

                <Button name="SHOP NOW" />
            </div>

            <div className='absolute bottom-0 w-[78%] md:w-[58%] start-[50%] translate-x-[-50%] pt-12'>
                <img src={bottom_img} alt="pet shop" className='hidden md:block  object-contain' />
                <img src={bottom_mobile} alt="pet shop" className='md:hidden object-contain ps-3' />
            </div>

        </div>
    );
};

export default Header2;