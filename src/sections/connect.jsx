
// css
import '../assets/css/main.css';
import grooming from '../assets/images_new/Frame 57(1).png';
import veterinary from '../assets/images_new/Frame 57_1.png';
import supplies from '../assets/images_new/Frame 57.png';

// components
import Services from '../components/service';
import Button from '../components/rtcBtn';


const Connect = () => {
    return (
        <section className='space-y-9 mt-14 xl:mt-30 lg:mt-28 md:mt-24 xl:space-y-20 md:space-y-16 ' id='services'>
            <div className='text-center space-y-2.5 xl:w-[] lg:w-[60%] lg:space-y-10 md:w-4/6 mx-auto'>
            <h2 className='xl:text-[38px] lg:text-xl xl:leading-[48px] md:text-[26px] leading-[28px] text-[20px] font-semibold m-0 text-center'>Our Services </h2>
                <p className='font-medium text-sm px-4 sm:text-base'>Explore our comprehensive services tailored to every stage of your dog ownership journey. From adoptions to grooming and training, we're here to support you and your beloved canine companion every step of the way.</p>
            </div>

            <div className='space-y-10'>
                <div className='w-full flex flex-col gap-20  welcome md:flex-row md:gap-6 md:px-14 xl:px-20 xl:gap-8'>
                    <Services src={grooming} heading="Dog Grooming" text="Indulge your furry friend with our professional dog grooming services. From baths to trims, our experienced groomers will pamper your pup, leaving them looking and feeling their best." />
                    <Services src={veterinary} heading="Veterinary Services" text="Ensure your dog's well-being with our top-notch veterinary care services. From routine check-ups to specialized treatments, our skilled veterinarians are dedicated to keeping your furry friend healthy." />
                    <Services src={supplies} heading="Pet Accessories & Supplies" text="Elevate your dog's style and comfort with our premium pet accessories and supplies. From stylish collars to cozy beds and interactive toys, we offer everything your furry friend needs to live their best life." />

                </div>

                <div className='flex justify-center'>
                    <Button name="BOOK NOW" />
                </div>
            </div>
        </section>
    );
};

export default Connect;