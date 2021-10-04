import { newSpecPage } from '@stencil/core/testing';
import { IsDivider } from '../divider';

describe('divider', () => {
  let page;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [IsDivider],
      html: `<is-divider></is-divider>`
    });
  });

  it('renders', async () => {
    expect(page.root).toEqualHtml(`
      <is-divider>
        <mock:shadow-root>
          <div class="is-default is-divider is-no-text"></div>
        </mock:shadow-root>
      </is-divider>
    `);
  });
});
