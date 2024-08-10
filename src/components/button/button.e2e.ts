import { newE2EPage } from '@stencil/core/testing';

describe('bit-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<bit-button></bit-button>');
    const button = await page.find('bit-button');
    expect(button).toHaveClass('hydrated');
  });

  it('renders with content', async () => {
    const page = await newE2EPage();

    await page.setContent('<bit-button>Hello There!</bit-button>');
    const button = await page.find('bit-button');
    expect(button.textContent).toEqual('Hello There!');
  });

  it('should emit click event when clicked', async () => {
    const page = await newE2EPage();

    await page.setContent('<bit-button>Hello There!</bit-button>');
    const button = await page.find('bit-button');
    const focusEventSpy = await page.spyOnEvent('click');

    await button.click();
    await page.waitForChanges();

    expect(focusEventSpy).toHaveReceivedEvent();
  });
});
