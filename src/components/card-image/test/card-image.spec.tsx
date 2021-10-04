import { newSpecPage } from '@stencil/core/testing';
import { CardImage } from '../card-image';

describe('is-card-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CardImage],
      html: `<is-card-image></is-card-image>`,
    });
    expect(page.root).toEqualHtml(`
      <is-card-image>
        <mock:shadow-root>
          <img />
        </mock:shadow-root>
      </is-card-image>
    `);
  });
});
