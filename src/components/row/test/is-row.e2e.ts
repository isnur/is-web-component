import { newE2EPage } from '@stencil/core/testing';

describe('is-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<is-row></is-row>');

    const element = await page.find('is-row');
    expect(element).toHaveClass('hydrated');
  });
});
