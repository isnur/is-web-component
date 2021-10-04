import { newSpecPage } from '@stencil/core/testing';
import { CardTitle } from '../card-title';

describe('is-card-title', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CardTitle],
      html: `<is-card-title></is-card-title>`,
    });
    expect(page.root).toEqualHtml(`
      <is-card-title>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </is-card-title>
    `);
  });
});
