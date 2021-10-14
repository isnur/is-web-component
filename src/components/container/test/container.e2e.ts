import { newE2EPage } from '@stencil/core/testing';

describe('is-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<is-container></is-container>');

    const element = await page.find('is-container');
    expect(element).toHaveClass('hydrated');
  });
});
