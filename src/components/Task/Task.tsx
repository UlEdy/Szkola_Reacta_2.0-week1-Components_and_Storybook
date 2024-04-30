import { ReactNode, FC } from 'react';

export const Task: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <div className='border border-amber-50 rounded-xl m-2 py-2 px-6 bg-red-50 w-2/5'>
                {children}
            </div>
        </>
    );
};
