import { newSpecPage } from '@stencil/core/testing';
import { Card } from '../card';

describe('is-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<is-card></is-card>`,
    });
    expect(page.root).toEqualHtml(`
      <is-card>
        <mock:shadow-root>
          <div class="is-card">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </is-card>
    `);
  });
});
