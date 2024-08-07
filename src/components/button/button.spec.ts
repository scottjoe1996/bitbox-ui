import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

describe('button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<bit-button></bit-button>',
    });
    expect(root).toEqualHtml(`
      <bit-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </bit-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: `<bit-button first="Stencil" last="'Don't call me a framework' JS"></bit-button>`,
    });
    expect(root).toEqualHtml(`
      <bit-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </bit-button>
    `);
  });
});
