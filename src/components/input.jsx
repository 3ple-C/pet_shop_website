
const Input = (props) => {
    const {type, name, placeholder} = props;
    return (
        <div class="m space-y-4">
            <input type={type} id="name" name={name} placeholder={placeholder} required
                class="w-full form-input border-[#666666] px-3 py-5 border rounded   focus:outline-none " />
        </div>
    );
};

const Textarea = (props) => {
    const { placeholder } = props
    return (
        <div class="mb-6 space-y-4">
            <textarea id="message" name="message" rows="14" placeholder={placeholder} required
                class="w-full form-textarea border-[#666666] px-3 py-5 border rounded focus:outline-none"></textarea>
        </div>
    );
};

const Select = (props) => {
    return (
        <div class="mb-6 space-y-4">
            <select id="message" name="message" rows="14" placeholder="How can we help you?" required
                class="w-full form-select border-[#666666] px-3 py-5 border rounded focus:outline-none mb-3 md:mb-3 ">
                <option value="">Dept 1</option>
                <option value="">Dept 1</option>
                <option value="">Dept 1</option>
                <option value="">Dept 1</option>
                <option value="">Dept 1</option>
                <option value="">Dept 1</option>
                <option value="">Dept 1</option>
            </select>
        </div>
    );
};

export { Input, Textarea, Select };