import { Button } from './Button';

const className = 'bg-blue-400 hover:bg-blue-200';

const handleClickBlue = () => {
    alert('Clicked blue');
};

export const ButtonBlue = ({ ...rest }) => (
    <Button
        label='Click Blue'
        onClick={handleClickBlue}
        className={className}
        {...rest}
    />
);
