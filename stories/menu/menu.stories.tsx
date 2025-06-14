import { useCheckboxGroup } from '@ark-ui/react/checkbox';
import { Menu } from '@ark-ui/react/menu';
import type { StoryObj } from '@storybook/react-vite';
import {
  CheckIcon,
  ChevronRight,
  LucideClipboardPaste,
  LucideCopy,
  LucideScissors,
} from 'lucide-react';
import { useState } from 'react';
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
          <Menu.Trigger className='button button--variant-outline button--size-sm'>
            Open menu
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content className='menu--sm'>
              <Menu.Item value='react'>React</Menu.Item>
              <Menu.Item value='solid'>Solid</Menu.Item>
              <Menu.Item value='vue'>Vue</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>

        <Menu.Root>
          <Menu.Trigger className='button button--variant-outline button--size-md'>
            Open menu
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content className='menu--md'>
              <Menu.Item value='react'>React</Menu.Item>
              <Menu.Item value='solid'>Solid</Menu.Item>
              <Menu.Item value='vue'>Vue</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>

        <Menu.Root>
          <Menu.Trigger className='button button--variant-outline button--size-lg'>
            Open menu
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content className='menu--lg'>
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

export const ItemDisabled: Story = {
  render() {
    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Menu.Root>
          <Menu.Trigger className='button button--variant-outline button--size-sm'>
            Open menu
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content className='menu--sm'>
              <Menu.Item value='react' disabled>
                React
              </Menu.Item>
              <Menu.Item value='solid'>Solid</Menu.Item>
              <Menu.Item value='vue'>Vue</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      </div>
    );
  },
};

export const TriggerWithIndicator: Story = {
  render() {
    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Menu.Root>
          <Menu.Trigger className='button button--variant-outline button--size-sm'>
            Open menu
            <Menu.Indicator>
              <ChevronRight />
            </Menu.Indicator>
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content className='menu--sm'>
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

export const CheckboxAndRadio: Story = {
  render: () => {
    const group = useCheckboxGroup({ defaultValue: ['react'] });
    const [value, setValue] = useState('react');

    const items = [
      { title: 'React', value: 'react' },
      { title: 'Vue', value: 'vue' },
      { title: 'Solid', value: 'solid' },
    ];

    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Menu.Root>
          <Menu.Trigger className='button button--variant-outline button--size-sm'>
            Checkbox menu
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content className='menu--sm'>
              {items.map(({ title, value }) => (
                <Menu.CheckboxItem
                  key={value}
                  value={value}
                  checked={group.isChecked(value)}
                  onCheckedChange={() => group.toggleValue(value)}
                >
                  <Menu.ItemIndicator>
                    <CheckIcon />
                  </Menu.ItemIndicator>
                  <Menu.ItemText>{title}</Menu.ItemText>
                </Menu.CheckboxItem>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>

        <Menu.Root>
          <Menu.Trigger className='button button--variant-outline button--size-sm'>
            Radio menu
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content className='menu--sm'>
              <Menu.RadioItemGroup
                value={value}
                onValueChange={(e) => setValue(e.value)}
              >
                {items.map(({ title, value }) => (
                  <Menu.RadioItem key={value} value={value}>
                    <Menu.ItemIndicator>
                      <CheckIcon />
                    </Menu.ItemIndicator>
                    <Menu.ItemText>{title}</Menu.ItemText>
                  </Menu.RadioItem>
                ))}
              </Menu.RadioItemGroup>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      </div>
    );
  },
};

export const ItemGroup: Story = {
  render() {
    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Menu.Root>
          <Menu.Trigger className='button button--variant-outline button--size-sm'>
            Open menu
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content className='menu--sm'>
              <Menu.ItemGroup>
                <Menu.ItemGroupLabel>JS Frameworks</Menu.ItemGroupLabel>
                <Menu.Item value='react'>React</Menu.Item>
                <Menu.Item value='solid'>Solid</Menu.Item>
                <Menu.Item value='vue'>Vue</Menu.Item>
              </Menu.ItemGroup>
              <Menu.Separator />
              <Menu.ItemGroup>
                <Menu.ItemGroupLabel>CSS Frameworks</Menu.ItemGroupLabel>
                <Menu.Item value='panda'>Panda</Menu.Item>
                <Menu.Item value='tailwind'>Tailwind</Menu.Item>
              </Menu.ItemGroup>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      </div>
    );
  },
};

const MenuItemCommand = (props: React.PropsWithChildren) => (
  <span data-scope='menu' data-part='item-command' {...props} />
);

export const IconAndCommand: Story = {
  render() {
    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Menu.Root>
          <Menu.Trigger className='button button--variant-outline button--size-sm'>
            Open menu
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content className='menu--sm'>
              <Menu.Item value='cut'>
                <LucideScissors />
                <Menu.ItemText>Cut</Menu.ItemText>
                <MenuItemCommand>⌘X</MenuItemCommand>
              </Menu.Item>
              <Menu.Item value='copy'>
                <LucideCopy />
                <Menu.ItemText>Copy</Menu.ItemText>
                <MenuItemCommand>⌘C</MenuItemCommand>
              </Menu.Item>
              <Menu.Item value='paste'>
                <LucideClipboardPaste />
                <Menu.ItemText>Paste</Menu.ItemText>
                <MenuItemCommand>⌘V</MenuItemCommand>
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
