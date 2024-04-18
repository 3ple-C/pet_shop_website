import '../assets/css/main.css';

// components
import Text from '../components/textcontainer';

const Services = (props) => {
    return (
        <section className=''>
            <div className=' px-4 space-y-4 xl:space-y-4 lg:space-x- md:w-[100%] md:px-4 xl:px-2 md:space-y-2  md:order-2' id='welcome_text'>
                <div className='space-y-6'>
                    <div>
                        <img src={props.src} alt="Pet_shop_Dogs" />
                    </div>
                    <h2 className='xl:text-[24px] lg:text-xl xl:leading-[32px] md:text-[20px] leading-[28px] text-[18px] font-semibold m-0'>{props.heading}</h2>
                </div>

                <div className='text-sm pb-3'>
                    <Text content={props.text} />
                </div>
            </div>
        </section>
    );
};


export default Services;