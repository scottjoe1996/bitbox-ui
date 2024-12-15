import { newE2EPage } from '@stencil/core/testing';

describe('bit-card-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bit-card-content><p>Hello there!</p></bit-card-content>');

    const element = await page.find('bit-card-content');
    expect(element).toHaveClass('hydrated');
  });
});
