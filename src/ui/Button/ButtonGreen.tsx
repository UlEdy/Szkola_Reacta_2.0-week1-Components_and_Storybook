import { Button } from './Button';

const className = 'bg-green-400 hover:bg-green-200';

const handleClickGreen = () => {
    alert('Clicked green');
};

export const ButtonGreen = ({ ...rest }) => (
    <Button
        label='Click Green'
        onClick={handleClickGreen}
        className={className}
        {...rest}
    />
);
