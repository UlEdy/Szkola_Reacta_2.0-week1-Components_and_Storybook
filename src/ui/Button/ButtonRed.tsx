import { Button } from './Button';

const className = 'bg-red-400 hover:bg-red-200';

const handleClickRed = () => {
    alert('Clicked red');
};

export const ButtonRed = ({ ...rest }) => (
    <Button
        label='Click Red'
        onClick={handleClickRed}
        className={className}
        {...rest}
    />
);
