import { ComponentProps } from 'react';
import { cn } from '../../utils/className';

type ButtonProps = {
    label: string;
    className?: string;
} & ComponentProps<'button'>;

const handleClick = () => {
    alert('Clicked');
};

export const Button = ({ label, className, ...rest }: ButtonProps) => {
    return (
        <button
            className={cn(
                'rounded-3xl p-2 m-2 w-28 border bg-gray-300  hover:border-zinc-100 hover:text-zinc-700',
                className
            )}
            onClick={handleClick}
            {...rest}
        >
            {label}
        </button>
    );
};
