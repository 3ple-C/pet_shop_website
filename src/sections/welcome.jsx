import '../assets/css/main.css';
import welcomeImg from '../assets/images_new/Frame 11.png';
import welcomeImg2 from '../assets/images_new/Frame 98.png';
import welcomeImg3 from '../assets/images_new/Frame 9.png';
import welcomeImg4 from '../assets/images_new/Frame 10.png';

// components
import Text from '../components/textcontainer';
import HeadText from '../components/headText';

const Welcome = () => {
    const headText = "ABOUT US";
    const subHeadText = "Matching Paws with Loving Homes Worldwide";
    const text = "At Petshop, we're dedicated to facilitating the perfect match between families and their furry companions. With a focus on responsible breeding practices and utmost care, we ensure each dog finds a loving forever home. Our commitment extends beyond mere transactions – we're passionate about fostering lifelong bonds and enriching the lives of both pets and their owners.";

    return (
        <section className='w-full flex flex-col welcome gap-10 mt-14 lg:mt-28 md:mt-24 md:flex-row md:gap-6 md:px-14 md:max-h-min xl:px-20 xl:gap-10 xl:mt-30' id='welcome'>
            <div className='mobile order-1  px-4 md:px-1'>
                <img src={welcomeImg2} alt="rtc_messages" className='object-cover w-full' />
            </div>


            <div className=' px-4 space-y-3 xl:w-[58%] xl:pt-6 xl:space-y-3 lg:w-[80%] lg:space-x- md:w-[100%] md:px-0 md:space-y-2  md:order-' id='welcome_txt'>
                <HeadText title={headText} subtitle={subHeadText} />
                <div className='pt-3 pb-8'>
                    <Text content={text} />
                </div>

                <div className='desktop pt-5' id='welcome_img'>
                    <img src={welcomeImg} alt="rtc_messages" className='object- ' />
                </div>
            </div>

            <div className='xl:w-[40%] space-y- xl:mt-[-35px]' id='desktop_img'>
                <div className='desktop xl:mt-0 mt-14' id='welcome_img '>
                    <img src={welcomeImg3} alt="rtc_messages" className='object- ' />
                </div>
                <div className='desktop pt-8' id='welcome_img'>
                    <img src={welcomeImg4} alt="rtc_messages" className='object- ' />
                </div>
            </div>
        </section>
    );
};


export default Welcome;