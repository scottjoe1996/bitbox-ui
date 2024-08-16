import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

describe('bit-button', () => {
  it('renders with medium size and outlined variant by default', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<bit-button></bit-button>',
    });
    expect(root).toEqualHtml(`
      <bit-button>
        <mock:shadow-root>
          <button class="medium outlined">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </bit-button>
    `);
  });

  it('renders with specified size', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<bit-button size="small"></bit-button>',
    });
    expect(root).toEqualHtml(`
      <bit-button size="small">
        <mock:shadow-root>
          <button class="small outlined">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </bit-button>
    `);
  });

  it('renders with specified variant', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<bit-button variant="filled"></bit-button>',
    });
    expect(root).toEqualHtml(`
      <bit-button variant="filled">
        <mock:shadow-root>
          <button class="medium filled">
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
          <button class="medium outlined">
            <slot></slot>
          </button>
        </mock:shadow-root>
        Hello there!
      </bit-button>
    `);
  });
});
