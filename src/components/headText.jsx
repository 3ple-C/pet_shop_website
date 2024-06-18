
const HeadText = (props) => {
    return (
        <div className={`space-y-3 xl:space-y-3 lg:space-y-2 xl:text-start md:text- text-center md:space-y-2 `}>
            <h3 className='xl:text-base lg:text-sm md:text-[10px] text-[#F8931F]'>{props.title}</h3>
            <h2 className='xl:text-[38px] lg:text-xl xl:leading-[48px] md:text-[26px] leading-[28px] text-[20px] font-bold m-0'>{props.subtitle}</h2>
        </div>
    )
}

export default HeadText;