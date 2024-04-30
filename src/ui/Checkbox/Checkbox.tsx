interface CheckboxProps {
    name: string;
    label: string;
}

export const Checkbox = ({ name, label }: CheckboxProps) => {
    return (
        <>
            <input
                type='checkbox'
                name={name}
                value={name}
                defaultChecked
                className='mx-2'
            />
            <label htmlFor='done'>{label}</label>
        </>
    );
};
