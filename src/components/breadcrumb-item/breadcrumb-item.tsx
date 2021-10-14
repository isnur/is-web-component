import {Component, h, Host, Prop} from '@stencil/core';

@Component({
  tag: 'is-breadcrumb-item',
  styleUrl: 'breadcrumb-item.scss',
  shadow: true,
})
export class BreadcrumbItem {
  /**
   * Contains a URL
   * If prop is set, an anchor tag will be rendered
   */
  @Prop() href: string | undefined;

  /**
   * Where to display linked url
   * apply when `href` props provided
   * clue: `_blank, _self`
   */
  @Prop() target: string | undefined;

  /**
   * Active
   * the condition active of item,
   * basically used by latest item in breadcrumb component
   * */
  @Prop() active: boolean = false;

  render() {
    const { href, target, active } = this;
    const TagChose = href === undefined ? 'div' : 'a' as any;
    const attributes = (TagChose === 'button') ? {} : {
      href, target
    }

    return (
      <Host class={{
        [`item`]: true
      }}>
        <a
          {...attributes}
          class={{
            [`is-active`]: active
          }}
        >
          <slot></slot>
        </a>
      </Host>
    );
  }
}
