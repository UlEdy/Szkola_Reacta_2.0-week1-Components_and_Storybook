import { Text } from '../../ui';

interface PostProps {
    header: string;
    content: string;
}

const className = 'text-xl font-medium';

export const Post = ({ header, content }: PostProps) => {
    return (
        <div className='m-3'>
            <Text className={className}>{header}</Text>
            <p>{content}</p>
        </div>
    );
};
