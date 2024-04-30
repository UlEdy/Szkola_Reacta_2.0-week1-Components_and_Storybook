import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
    title: 'UI/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Primary',
    },
};

export const TextRed: Story = {
    args: {
        children: 'Red text ',
        className: 'text-red-400',
    },
};
export const TextBlue: Story = {
    args: {
        children: 'Blue large text ',
        className: 'text-blue-400 text-6xl',
    },
};
