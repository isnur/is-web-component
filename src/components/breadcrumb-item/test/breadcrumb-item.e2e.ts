import { newE2EPage } from '@stencil/core/testing';

describe('breadcrumb-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<breadcrumb-item></breadcrumb-item>');

    const element = await page.find('breadcrumb-item');
    expect(element).toHaveClass('hydrated');
  });
});
