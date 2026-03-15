import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './Button.js';

const meta: Meta<typeof Button> = {
  title: 'Компоененты/Button',
  component: Button,
  tags: ['autodocs'],
  // args: {
  //   //👇 Now all Button stories will be primary.
  //   variant: 'secondary',
  // },
};

export default meta;

type Store = StoryObj<typeof Button>;

export const Primary: Store = {
  args: {
    children: 'Кнопка',
    variant: 'primary',
  },
};

export const Secondary: Store = {
  parameters: {
    docs: {
      description: {
        story: 'Второстепенная кнопка'
      }
    }
  },
  args: {
    children: 'Кнопка',
    variant: 'secondary',
  },
};
