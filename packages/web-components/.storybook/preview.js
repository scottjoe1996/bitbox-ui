import { defineCustomElements } from '../dist/esm/loader';
import '../dist/bitbox-ui/bitbox-ui.css';

defineCustomElements();

/** @type { import('@storybook/web-components').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;