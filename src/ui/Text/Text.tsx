import { cn } from '../../utils/className';

interface TextProps {
    children: string;
    className?: string;
}

export const Text = ({ children, className }: TextProps) => {
    return (
        <h1 className={cn('text-3xl mt-2 mb-5 font-bold', className)}>
            {children}
        </h1>
    );
};
