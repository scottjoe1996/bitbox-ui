import { newSpecPage } from '@stencil/core/testing';
import { CardTitle } from './card-title';

describe('bit-card-title', () => {
  it('renders with both title and subtitle', async () => {
    const page = await newSpecPage({
      components: [CardTitle],
      html: `<bit-card-title main="title" subtitle="subtitle"></bit-card-title>`,
    });
    expect(page.root).toEqualHtml(`
      <bit-card-title main="title" subtitle="subtitle">
        <mock:shadow-root>
          <div>
            <p class="title">title</>
            <p class="subtitle">subtitle</>
          </div>
        </mock:shadow-root>
      </bit-card-title>
    `);
  });

  it('renders with only title', async () => {
    const page = await newSpecPage({
      components: [CardTitle],
      html: `<bit-card-title main="title"></bit-card-title>`,
    });
    expect(page.root).toEqualHtml(`
      <bit-card-title main="title">
        <mock:shadow-root>
          <div>
            <p class="title">title</>
          </div>
        </mock:shadow-root>
      </bit-card-title>
    `);
  });
});
