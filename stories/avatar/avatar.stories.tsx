import { Avatar } from '@ark-ui/react/avatar';
import type { StoryObj } from '@storybook/react-vite';
import './avatar.css';

const meta = {
  title: 'Avatar',
  parameters: {
    layout: 'centered',
  },
};

export const Size: Story = {
  render() {
    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Avatar.Root className='avatar--xs'>
          <Avatar.Fallback>AB</Avatar.Fallback>
          <Avatar.Image src='https://i.pravatar.cc/300' alt='avatar' />
        </Avatar.Root>

        <Avatar.Root className='avatar--sm'>
          <Avatar.Fallback>AB</Avatar.Fallback>
          <Avatar.Image src='https://i.pravatar.cc/300' alt='avatar' />
        </Avatar.Root>

        <Avatar.Root className='avatar--md'>
          <Avatar.Fallback>AB</Avatar.Fallback>
          <Avatar.Image src='https://i.pravatar.cc/300' alt='avatar' />
        </Avatar.Root>

        <Avatar.Root className='avatar--lg'>
          <Avatar.Fallback>AB</Avatar.Fallback>
          <Avatar.Image src='https://i.pravatar.cc/300' alt='avatar' />
        </Avatar.Root>

        <Avatar.Root className='avatar--xl'>
          <Avatar.Fallback>AB</Avatar.Fallback>
          <Avatar.Image src='https://i.pravatar.cc/300' alt='avatar' />
        </Avatar.Root>
      </div>
    );
  },
};

export const Variants: Story = {
  render() {
    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Avatar.Root className='avatar--subtle'>
          <Avatar.Fallback>AB</Avatar.Fallback>
          <Avatar.Image alt='avatar' />
        </Avatar.Root>

        <Avatar.Root className='avatar--solid'>
          <Avatar.Fallback>AB</Avatar.Fallback>
          <Avatar.Image alt='avatar' />
        </Avatar.Root>

        <Avatar.Root className='avatar--outline'>
          <Avatar.Fallback>AB</Avatar.Fallback>
          <Avatar.Image alt='avatar' />
        </Avatar.Root>
      </div>
    );
  },
};

export const Shape: Story = {
  render() {
    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Avatar.Root className='avatar--rounded'>
          <Avatar.Fallback>AB</Avatar.Fallback>
          <Avatar.Image src='https://i.pravatar.cc/300' alt='avatar' />
        </Avatar.Root>

        <Avatar.Root className='avatar--square'>
          <Avatar.Fallback>AB</Avatar.Fallback>
          <Avatar.Image src='https://i.pravatar.cc/300' alt='avatar' />
        </Avatar.Root>

        <Avatar.Root className='avatar--full'>
          <Avatar.Fallback>AB</Avatar.Fallback>
          <Avatar.Image src='https://i.pravatar.cc/300' alt='avatar' />
        </Avatar.Root>
      </div>
    );
  },
};

export const AvatarDemo: Story = {
  render() {
    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Avatar.Root className='avatar--sm avatar--subtle avatar--square'>
          <Avatar.Fallback>AB</Avatar.Fallback>
          <Avatar.Image src='https://i.pravatar.cc/300' alt='avatar' />
        </Avatar.Root>
        <Avatar.Root className='avatar--lg avatar--outline avatar--rounded'>
          <Avatar.Fallback>AB</Avatar.Fallback>
          <Avatar.Image src='https://i.pravatar.cc/300' alt='avatar' />
        </Avatar.Root>
        <Avatar.Root className='avatar--xl avatar--solid avatar--full'>
          <Avatar.Fallback>AB</Avatar.Fallback>
          <Avatar.Image src='https://i.pravatar.cc/300' alt='avatar' />
        </Avatar.Root>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
