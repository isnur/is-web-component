import { newSpecPage } from '@stencil/core/testing';
import { IsContainer } from '../is-container';

describe('is-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IsContainer],
      html: `<is-container></is-container>`,
    });
    expect(page.root).toEqualHtml(`
      <is-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </is-container>
    `);
  });
});
