import { newE2EPage } from '@stencil/core/testing';

describe('multiselect', () => {
  it('should create multiselect', async () => {
    const page = await newE2EPage();
  
    await page.setContent(`
      <is-multiselect></is-multiselect>
    `);
  
    const element = await page.find('is-multiselect');

    expect(element).toHaveClass('hydrated');

    const placeholder = await page.find('is-multiselect > .multiselect > .multiselect__placeholder');
    expect(placeholder.textContent).toEqual('Pick some');
  });
});
