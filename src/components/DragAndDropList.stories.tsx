import { ComponentStory, ComponentMeta } from '@storybook/react';

import DragAndDropList from './DragAndDropList';

export default {
  title: 'DragAndDropList',
  component: DragAndDropList,
} as ComponentMeta<typeof DragAndDropList>;

const Template: ComponentStory<typeof DragAndDropList> = (args) => <DragAndDropList {...args} />;

export const Default = Template.bind({});

Default.args = {
  itemsList: [
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
    { id: 4, text: "Item 4" },
    { id: 5, text: "Item 5" },
  ]
}

export const Checkbox = Template.bind({});

Checkbox.args = {
  itemsList: [
    { id: 1, text: "Item 1", checked: true },
    { id: 2, text: "Item 2", checked: false },
    { id: 3, text: "Item 3", checked: false },
    { id: 4, text: "Item 4", checked: true },
  ],
  withCheckbox: true,
}

