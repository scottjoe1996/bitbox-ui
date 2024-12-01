import { newE2EPage } from '@stencil/core/testing';

describe('bit-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bit-card></bit-card>');

    const element = await page.find('bit-card');
    expect(element).toHaveClass('hydrated');
  });
});
