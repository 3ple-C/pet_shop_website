const Message = (props) => {
    return (
        <a href="/" className='hover:shadow-lg hover:scale-95 hover:duration-500 duration-500 block w-[45%] md:w-fit px-1 pb-1.5' id='message'>
            <div className='space-y-2 message'>
                <div className='message'>
                    <img src={props.src} alt="rtc_messages" className=' md:rounded-md' />
                </div>

                <h3 className='text-sm md:text-[20px] font-bold text-black '>{props.name}</h3>
            </div>
        </a>
    )
}


const LiveBox = (props) => {
    return (
        <a href="/" className='rounded-[20px] bg-[#01385F] text-white hover:shadow-lg hover:scale-95 hover:duration-500 duration-500 block  py-28 w-[90%] xl:w-[27%] xl:py-20 lg:w-[32%] lg:py-[6.5rem] md:w-[38%] md:py-[4.6rem]' id=''>
            <div className='space-y-4 flex flex-col items-center'>
                <div className='-'>
                    <img src={props.source} alt={props.alt} className='w-[55px]' />
                </div>
                <div className='text-2xl flex flex-col items-center gap-4'>
                    <p>{props.social}</p>
                    <h3 className='text-base md:text-2xl font-bold text-white underline'>{props.name}</h3>
                </div>
            </div>
        </a>
    )
}

export { Message, LiveBox };