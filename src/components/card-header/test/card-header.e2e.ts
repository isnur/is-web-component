import { newE2EPage } from '@stencil/core/testing';

describe('is-card-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<is-card-header></is-card-header>');

    const element = await page.find('is-card-header');
    expect(element).toHaveClass('hydrated');
  });
});
