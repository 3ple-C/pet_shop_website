const FormHeader = (props) => {
    return (
        <div className={`space-y-2 text-center md:space-y-4`}>
            <h2 className="text-[20px] md:text-[32px] leading-8">{props.header}</h2>
            <h3 >{props.subHeader}</h3>
        </div>
    )
}

export default FormHeader;