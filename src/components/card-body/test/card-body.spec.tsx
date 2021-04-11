import { newSpecPage } from '@stencil/core/testing';
import { CardBody } from '../card-body';

describe('is-card-body', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CardBody],
      html: `<is-card-body></is-card-body>`,
    });
    expect(page.root).toEqualHtml(`
      <is-card-body>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </is-card-body>
    `);
  });
});
