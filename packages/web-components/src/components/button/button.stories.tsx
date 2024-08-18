import { html } from 'lit';

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
      control: 'radio',
    },
    variant: {
      options: ['outlined', 'filled'],
      control: 'radio',
    },
  },
  decorators: [withActions],
};

const disableControlParameters = {
  controls: { disable: true },
};

const Template = args => html`<bit-button size="${args.size}" variant="${args.variant}" disabled="${args.disabled}" full-width="${args.fullWidth}">${args.content}</bit-button>`;

const EachVariantTemplate = () =>
  html` <div style="display: flex; justify-content: space-between; align-items: center; width: 500px">
    <bit-button variant="text">Text</bit-button>
    <bit-button variant="outlined">Outlined</bit-button>
    <bit-button variant="filled">Filled</bit-button>
  </div>`;

export const Component = Template.bind({});
Component.args = {
  size: 'medium',
  variant: 'outlined',
  disabled: false,
  fullWidth: false,
  content: 'Button',
};

export const EachVariant = EachVariantTemplate.bind({});
EachVariant.parameters = disableControlParameters;
