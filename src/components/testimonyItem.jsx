
const TestimonyShort = (props) => {
    const {message, title, location} = props
    return (
        <div className="space-y-6 w- xl:max-w-[282px] xl:min-w-[282px] border rounded-[5px] p-2">
            <div className="space-y-1.5">
                <h4 className="text-sm">{title}</h4>
                <p className="text-[12px]">{location}</p>
            </div>

            <p className="text-[12px] pb-8 lg:pb-6">
                {message}
            </p>
        </div>

    );
};

const TestimonyLong = (props) => {
    const {message, title, location} = props;
    return (
        <div className="space-y-6 w-full border rounded-[5px] p-2">
            <div className="space-y-1.5">
                <h4 className="text-sm">{title}</h4>
                <p className="text-[12px]">{location}</p>
            </div>

            <p className="text-[12px] pb-8 lg:pb-6">
                {message}
            </p>
        </div>

    );
};

export { TestimonyShort, TestimonyLong };