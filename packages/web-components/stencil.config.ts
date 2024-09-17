import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'bitbox-ui',
  globalStyle: 'src/global/style.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: 'global/assets/fonts/*',
          dest: 'assets/fonts',
        },
      ],
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'dist-custom-elements',
    },
    reactOutputTarget({
      outDir: '../react-components/src/components/',
    }),
    {
      type: 'www',
      serviceWorker: null, // disable service workers,
      copy: [
        {
          src: 'global/assets/fonts/*',
          dest: 'build/assets/fonts',
        },
      ],
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
};
