// Messages Image
import german from '../assets/images_new/Frame 14 (2).png';
import rott from '../assets/images_new/Frame 15.png';
import cucassian from '../assets/images_new/Frame 16.png';
import eskimos from '../assets/images_new/Frame 19.png';
import alphos from '../assets/images_new/Frame 17.png';
import golden from '../assets/images_new/Frame 18.png';
import pitbull from '../assets/images_new/Frame 20.png';
import bully from '../assets/images_new/Frame 21.png';
import boer from '../assets/images_new/Frame 22.png';
import bull from '../assets/images_new/Frame 23.png';
import neapolitan from '../assets/images_new/Frame 24.png';
import cane from '../assets/images_new/Frame 25.png';
import kangal from '../assets/images_new/Frame 26.png';
import doberman from '../assets/images_new/Frame 27 (2).png';
import siberian from '../assets/images_new/Frame 28.png';
import pomeranian from '../assets/images_new/Frame 29.png';

// components
import { Message } from '../components/message';
import HeadText from '../components/headText';
import Button from '../components/rtcBtn';


const Messages = () => {
    return (
        <div>
            <section className='space-y-16 pt-16 xl:space-y-20 md:space-y-16 xl:pt-30 lg:pt-28 md:pt-24 pb-6' id='explore'>
                <div className='text-center lg:text-start space-y-3 lg:space-y-4 lg:px-[6rem]'>
                    <HeadText title="Explore" subtitle="Explore Our Canine Companions" />
                    <p className='font-medium text-sm px-3 lg:px-0 sm:text-base lg:pt-2 lg:w-[60%]'>Discover your future furry friend! Browse our selection of lovable dogs ready for adoption or purchase. Your perfect match awaits!</p>
                </div>

                <div className=' messages mx-auto flex flex-wrap justify-center px-2 gap-3' id='messages'>
                    <Message src={german} name="German Shepherds" />
                    <Message src={rott} name="Rottweilers" />
                    <Message src={cucassian} name="Caucasian Shepherds" />
                    <Message src={alphos} name="American Eskimos" />
                    <Message src={golden} name="Lhasa aspos" />
                    <Message src={eskimos} name="Golden Retrievers" />
                    <Message src={pitbull} name="Pitbull" />
                    <Message src={bully} name="Pocket Bully" />
                    <Message src={boer} name="Boerboel" />
                    <Message src={bull} name="Bull Mastiff" />
                    <Message src={neapolitan} name="Neapolitan Mastiff" />
                    <Message src={cane} name="Cane Corso" />
                    <Message src={kangal} name="Kangal Shepherd" />
                    <Message src={doberman} name="Dobermann" />
                    <Message src={siberian} name="Siberian Husky " />
                    <Message src={pomeranian} name="Pomeranian" />

                </div>
            </section>

            <div className='w-fit mx-auto mt-[22px]'>
                <Button name="SHOP NOW" />
            </div>
        </div>
    );
};

export default Messages;