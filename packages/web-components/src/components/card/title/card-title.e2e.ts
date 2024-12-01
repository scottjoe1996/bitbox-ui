import { newE2EPage } from '@stencil/core/testing';

describe('bit-card-title', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bit-card-title main="title" subtitle="subtitle"></bit-card-title>');

    const element = await page.find('bit-card-title');
    expect(element).toHaveClass('hydrated');
  });
});
