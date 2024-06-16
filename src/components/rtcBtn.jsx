const Button = (props, { className }) => {
    return (
        <div className="">
            <a href='https://wa.me/2348125925293' className={`bg-[#F8931F] text-center w-[10.8rem] rounded-[50px] block mx-auto py-4 md:mx-0 text-white  ${className}`}>{props.name}</a>
        </div>
    )
}

export default Button;