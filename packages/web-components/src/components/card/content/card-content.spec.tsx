import { newSpecPage } from '@stencil/core/testing';
import { CardTitle } from './card-content';

describe('bit-card-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CardTitle],
      html: `<bit-card-content><p>Hello there!</p></bit-card-content>`,
    });
    expect(page.root).toEqualHtml(`
      <bit-card-content>
        <mock:shadow-root>
          <div>
            <slot></slot>
          </div>
        </mock:shadow-root>
        <p>Hello there!</p>
      </bit-card-title>
    `);
  });
});
