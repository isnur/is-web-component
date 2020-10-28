import { newE2EPage } from '@stencil/core/testing';

describe('is-pagination', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<is-pagination></is-pagination>');

    const element = await page.find('is-pagination');
    expect(element).toHaveClass('hydrated');
  });
});
