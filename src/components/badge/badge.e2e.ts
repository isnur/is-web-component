import { newE2EPage } from '@stencil/core/testing';

describe('badge', () => {
  it('should create badge', async () => {
    const page = await newE2EPage();
  
    await page.setContent(`
      <is-badge></is-badge>
    `);
  
    const element = await page.find('is-badge');
  
    expect(element).toHaveClasses(['hidden', 'hydrated']);
  
    element.setProperty('text', 'Active');
    await page.waitForChanges();
    expect(element.textContent).toEqual('Active');
    expect(element).not.toHaveClass('hidden');

    element.setProperty('rounded', 'true');
    await page.waitForChanges();
    expect(element).toHaveClass('rounded');

    element.setProperty('color', 'primary');
    await page.waitForChanges();
    expect(element).toHaveClass('primary');
  });
});
