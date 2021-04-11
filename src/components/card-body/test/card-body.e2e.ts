import { newE2EPage } from '@stencil/core/testing';

describe('is-card-body', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<is-card-body></is-card-body>');

    const element = await page.find('is-card-body');
    expect(element).toHaveClass('hydrated');
  });
});
