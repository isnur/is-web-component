import { newE2EPage } from '@stencil/core/testing';

describe('is-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<is-card></is-card>');

    const element = await page.find('is-card');
    expect(element).toHaveClass('hydrated');
  });
});
