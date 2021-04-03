import { newE2EPage } from '@stencil/core/testing';

describe('is-breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<is-breadcrumb></is-breadcrumb>');

    const element = await page.find('is-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });
});
