import { newSpecPage } from '@stencil/core/testing';
import { CardTitle } from './card-title';

describe('bit-card-title', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CardTitle],
      html: `<bit-card-title></bit-card-title>`,
    });
    expect(page.root).toEqualHtml(`
      <bit-card-title>
        <mock:shadow-root>
          <div>
            <slot></slot>
          </div>
        </mock:shadow-root>
      </bit-card-title>
    `);
  });
});
