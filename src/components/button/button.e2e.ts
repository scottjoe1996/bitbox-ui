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

  it('renders with button width matching container when fullWidth is true', async () => {
    const containerWidth = '500px';
    const page = await newE2EPage();

    await page.setContent(`<div style="width: ${containerWidth}"><bit-button full-width="true">Hello There!</bit-button><bit-button>Hello There!</bit-button><div>`);
    const fullWidthButton = await page.find('bit-button[full-width="true"]');
    const regularButton = await page.find('bit-button:not([full-width])');
    expect((await fullWidthButton.getComputedStyle()).width).toEqual(containerWidth);
    expect((await regularButton.getComputedStyle()).width).not.toEqual(containerWidth);
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

  it('should not emit click event when clicked if disabled is "true"', async () => {
    const page = await newE2EPage();

    await page.setContent('<bit-button disabled="true">Hello There!</bit-button>');
    const button = await page.find('bit-button');
    const focusEventSpy = await page.spyOnEvent('click');

    await button.click();
    await page.waitForChanges();

    expect(focusEventSpy).not.toHaveReceivedEvent();
  });
});
