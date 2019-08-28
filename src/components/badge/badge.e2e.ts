import { newE2EPage } from '@stencil/core/testing';

describe('badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<is-badge></is-badge>');
    const element = await page.find('is-badge');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the text data', async () => {
    const page = await newE2EPage();

    await page.setContent('<is-badge></is-badge>');
    const component = await page.find('is-badge');
    const element = await page.find('is-badge');
    expect(element).toHaveClass('hidden');

    component.setProperty('text', 'Active');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Active`);

    component.setProperty('rounded', 'true');
    await page.waitForChanges();
    expect(element).toHaveClass('rounded');

    component.setProperty('color', 'primary');
    await page.waitForChanges();
    expect(element).toHaveClass('primary');
  });
});
