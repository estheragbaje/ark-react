import { Menu } from '@ark-ui/react/menu';
import type { StoryObj } from '@storybook/react-vite';
import './menu.css';

const meta = {
  title: 'Menu',
  parameters: {
    layout: 'centered',
  },
};

export const Size: Story = {
  render() {
    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Menu.Root>
          <Menu.Trigger>
            Open menu <Menu.Indicator>➡️</Menu.Indicator>
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value='react'>React</Menu.Item>
              <Menu.Item value='solid'>Solid</Menu.Item>
              <Menu.Item value='vue'>Vue</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
