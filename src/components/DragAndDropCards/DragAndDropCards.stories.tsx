import { ComponentStory, ComponentMeta } from '@storybook/react';
import DragAndDropCards from '.';

export default {
  title: 'DragAndDropCards',
  component: DragAndDropCards,
} as ComponentMeta<typeof DragAndDropCards>;

const Template: ComponentStory<typeof DragAndDropCards> = (args) => <DragAndDropCards { ...args } />;

export const Default = Template.bind({});

Default.args = {
  data: [
    {
      id: 1,
      content: 'Aqua-man',
      status: 'good'
    },
    {
      id: 2,
      content: 'Flash',
      status: 'normal'
    },
    {
      id: 3,
      content: 'Green Lantern',
      status: 'good'
    },
    {
      id: 4,
      content: 'Batman',
      status: 'bad'
    },
  ]
}
