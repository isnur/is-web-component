import { newSpecPage } from '@stencil/core/testing';
import { IsButton } from '../button';

describe('button', () => {
  let page;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [IsButton],
      html: `<is-button></is-button>`
    });
  });

  it('renders', async () => {
    expect(page.root).toEqualHtml(`
      <is-button>
        <mock:shadow-root>
            <button class="is-button is-default" type="button">
                <slot></slot>
            </button>
        </mock:shadow-root>
      </is-button>
    `);
  });
});
