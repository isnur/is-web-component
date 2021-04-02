import { newSpecPage } from '@stencil/core/testing';
import { BreadcrumbItem } from '../breadcrumb-item';

describe('breadcrumb-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BreadcrumbItem],
      html: `<breadcrumb-item></breadcrumb-item>`,
    });
    expect(page.root).toEqualHtml(`
      <breadcrumb-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </breadcrumb-item>
    `);
  });
});
