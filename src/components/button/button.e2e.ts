import { newE2EPage } from '@stencil/core/testing';

describe('bit-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<bit-button></bit-button>');
    const element = await page.find('bit-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with content', async () => {
    const page = await newE2EPage();

    await page.setContent('<bit-button>Hello There!</bit-button>');
    const element = await page.find('bit-button');
    expect(element.textContent).toEqual('Hello There!');
  });
});
