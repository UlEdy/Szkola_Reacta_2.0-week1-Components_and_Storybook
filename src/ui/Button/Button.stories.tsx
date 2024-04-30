import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { fn } from '@storybook/test';

const meta = {
    title: 'UI/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Button',
    },
};

export const Orange: Story = {
    args: {
        label: 'Button Orange',
        className: 'bg-orange-400 hover:bg-orange-200',
    },
};
export const Purple: Story = {
    args: {
        label: 'Button Purple',
        className: 'bg-purple-400 hover:bg-purple-200',
    },
};
