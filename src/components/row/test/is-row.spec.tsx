import { newSpecPage } from '@stencil/core/testing';
import { IsRow } from '../is-row';

describe('is-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IsRow],
      html: `<is-row></is-row>`,
    });
    expect(page.root).toEqualHtml(`
      <is-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </is-row>
    `);
  });
});
