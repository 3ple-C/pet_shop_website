// stylesheet
import '../assets/css/main.css'

// Images
import EmailIcon from '../assets/images_new/ic_outline-email.png';
import Location from '../assets/images_new/mdi_address-marker-outline.png';
import CallIcon from '../assets/images_new/ic_outline-phone.png';


// components
import Contacts from '../components/contactItems';
import { Input } from '../components/input';
import { Textarea } from "../components/input";
import FormHeader from '../components/formHeader';

const Contact = () => {
    return (
        <div>

            <div className='flex flex-col gap-20 lg:pt-3 mt-14 xl:mt-30 lg:mt-28 md:mt-24 md:flex-row md:gap-0'  id='contact_us'>
                <div className='xl:w-[60%] order-1 bg-black text-white flex flex-col pt-24 ps-8 pb-32 gap-8 md:pb-0 xl:ps-32 xl:pt-32 lg:rounded-e-[20px]' id='contacts'>
                    <h2 className='text-white text-[32px] leading-[48px] font-bold '>Info</h2>
                    <Contacts source={EmailIcon} contacts="Info@Petshopng.com" />
                    <Contacts source={CallIcon} contacts="+234 98889999664" />
                    <Contacts source={Location} contacts="Amansea, Awka, Anambra state." />
                </div>

                <div className='lg:relative xl:w-[60%] md:w-[75%] md:order-2 px-4 lg:pe-8' >

                    <div className="bg-white form-container space-y-7 xl:px-20 lg:space-y-10 md:space-y-7" id='contact' >
                        <FormHeader header="Contact Us" subHeader="Have questions or inquiries? Contact us today! Reach out via phone, email, or fill out the form below. We look forward to hearing from you." className='pt-0' />

                        <form action="https://fabform.io/f/insert-form-id" method="POST" className="space-y-6 lg:space-y-8 md:space-y-6">
                            <Input type="text" placeholder="Name" />

                            <Input  type="email" placeholder="Email" />

                            <Textarea placeholder="Message" />

                            <div>
                                <a href='/' className={`bg-[#F8931F] mt-8 text-center w-full rounded block py-5 text-white `}>Send Message</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;





