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
          <div>
            <slot></slot>
          </div>
        </mock:shadow-root>
      </bit-card>
    `);
  });
});
