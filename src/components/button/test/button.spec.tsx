import { newSpecPage } from '@stencil/core/testing';
import { IsButton } from '../button';

describe('button', () => {
  it('should be renders', async () => {
    const page = await newSpecPage({
      components: [IsButton],
      html: `<is-button></is-button>`
    });

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

  it('should use disabled class when disabled property is defined', async () => {
    const page = await newSpecPage({
      components: [IsButton],
      html: `<is-button disabled></is-button>`
    });

    expect(page.root).toEqualHtml(`
      <is-button disabled>
        <mock:shadow-root>
            <button class="is-button is-default is-disabled" type="button">
                <slot></slot>
            </button>
        </mock:shadow-root>
      </is-button>
    `);
  });
});
