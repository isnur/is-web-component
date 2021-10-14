import { newE2EPage } from '@stencil/core/testing';

describe('is-card-title', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<is-card-title></is-card-title>');

    const element = await page.find('is-card-title');
    expect(element).toHaveClass('hydrated');
  });
});
