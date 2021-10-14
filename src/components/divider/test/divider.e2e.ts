import { newE2EPage } from '@stencil/core/testing';

describe('divider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<is-divider></is-divider>');

    const element = await page.find('is-divider');
    expect(element).toHaveClass('hydrated');
  });
});
