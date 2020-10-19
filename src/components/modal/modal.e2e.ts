import { newE2EPage } from '@stencil/core/testing';

describe('modal', () => {
  it('should create modal', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <is-modal></is-modal>
    `);

    const element = await page.find('is-modal');
    expect(element).not.toHaveClass('visible');
  });
});
