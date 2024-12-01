import { newSpecPage } from '@stencil/core/testing';
import { Card } from './card';

describe('bit-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<bit-card></bit-card>`,
    });
    expect(page.root).toEqualHtml(`
      <bit-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bit-card>
    `);
  });
});
