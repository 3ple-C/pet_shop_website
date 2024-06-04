
import { TestimonyShort, TestimonyLong } from "../components/testimonyItem";

const Testimonial = () => {
    return (
        <section className='w-full space-y-12 welcome gap-10 mt-14 lg:mt-28 md:mt-24 md:flex-row md:gap-6 md:px-14 xl:px-20 xl:gap-10 xl:mt-30' id='testimonial'>
            <div className="flex flex-col items-center justify-center w-full space-y-3 xl:space-y-3 lg:space-y-2 md:space-y-2 ">
                <h3 className={`text-[#F8931F] xl:text-base lg:text-sm md:text-[10px] font-medium `}>Testimonial</h3>
                <h2 className='xl:text-[38px] lg:text-xl xl:leading-[48px] md:text-[26px] leading-[28px] text-[20px] font-bold m-0 text-center'>Heartwarming Stories from Our <br /> Happy Customers</h2>
            </div>

            <div className="flex flex-col gap-[22px] flex-wrap px-6 md:gap-6">
                <div className="flex gap-[22px] flex-wrap md:gap-6 md:px-0 md:flex-nowrap">
                    <TestimonyShort title="Onyema titus chinedu" message="Petshop is one of the original pet sellers, they have varieties of good breeds and they are affordable and trusted." location="Anambra State" />
                     <TestimonyLong title="Engr Chijioke Akanegbu" message="I have known the brand petshop and the man behind the brand for about 3years now and have closed a couple of deals with him and i can tell you he has not failed.they are a brand you can rely on anytime,anyday." location="Anambra State" />
                    <TestimonyShort title="Sammy" message="Thank you petshop for always giving a good service, the american pocket bully i purchased from you guys is really doing well and this is to more business from me." location="Imo State"/>
                </div>
                <div className="flex gap-[22px] flex-wrap md:gap-6 md:px-0 md:flex-nowrap">
                    <TestimonyShort title="Momah’s paw hub" message="One of the most reliable pet store i have had to shop from, always trustworthy, full of integrity, i have never had an issue buying from them." location="Rivers State"/>
                    <TestimonyLong title="Esomchi" message="Petshop has been the best plug to get your pets, i always say there are two comapnies petshop and others, they also provide other value added services like training your pets and i recommend them 100%." location="Imo State"/>
                    <TestimonyShort title="Urban layout" message="Petshop has good customer service and very reliable to the core, always ready to listen and proffer better solution, i recommend them highly for all of your pet needs." location="Lagos State"/>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;