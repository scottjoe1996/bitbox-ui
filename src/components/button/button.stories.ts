import { withActions } from '@storybook/addon-actions/decorator';

export default {
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: 'select',
    },
    variant: {
      options: ['outlined', 'filled'],
      control: 'select',
    },
  },
  decorators: [withActions],
};

const Template = args => `<bit-button size="${args.size}" variant="${args.variant}" disabled="${args.disabled}" full-width="${args.fullWidth}">${args.content}</bit-button>`;

export const Component = Template.bind({});
Component.args = {
  size: 'medium',
  variant: 'outlined',
  disabled: false,
  fullWidth: false,
  content: 'Button',
};
