import { newSpecPage } from '@stencil/core/testing';
import { Breadcrumb } from '../breadcrumb';

describe('is-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Breadcrumb],
      html: `<is-breadcrumb></is-breadcrumb>`,
    });
    expect(page.root).toEqualHtml(`
      <is-breadcrumb class="is-breadcrumb">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </is-breadcrumb>
    `);
  });
});
