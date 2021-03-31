import { newE2EPage } from '@stencil/core/testing';

describe('button', () => {
  it('should be rendered', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <is-button></is-button>
    `);

    const element = await page.find('is-button');
    expect(element).toHaveClasses(['hydrated']);
  });
});
