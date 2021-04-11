import { newE2EPage } from '@stencil/core/testing';

describe('is-card-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<is-card-image></is-card-image>');

    const element = await page.find('is-card-image');
    expect(element).toHaveClass('hydrated');
  });
});
