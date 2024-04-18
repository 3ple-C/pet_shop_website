
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
                    <TestimonyShort />
                    <TestimonyLong />
                    <TestimonyShort />
                </div>
                <div className="flex gap-[22px] flex-wrap md:gap-6 md:px-0 md:flex-nowrap">
                    <TestimonyShort />
                    <TestimonyLong />
                    <TestimonyShort />
                </div>
            </div>
        </section>
    );
};

export default Testimonial;