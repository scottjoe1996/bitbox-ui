import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

describe('bit-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<bit-button></bit-button>',
    });
    expect(root).toEqualHtml(`
      <bit-button>
        <mock:shadow-root>
          <button>
            <slot></slot>
          </button>
        </mock:shadow-root>
      </bit-button>
    `);
  });

  it('renders with content', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: `<bit-button>Hello there!</bit-button>`,
    });
    expect(root).toEqualHtml(`
      <bit-button>
        <mock:shadow-root>
          <button>
            <slot></slot>
          </button>
        </mock:shadow-root>
        Hello there!
      </bit-button>
    `);
  });
});
