import { newSpecPage } from '@stencil/core/testing';
import { CardHeader } from '../card-header';

describe('is-card-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CardHeader],
      html: `<is-card-header></is-card-header>`,
    });
    expect(page.root).toEqualHtml(`
      <is-card-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </is-card-header>
    `);
  });
});
