import {Component, h, Host, Prop} from '@stencil/core';

@Component({
  tag: 'is-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true,
})
export class Breadcrumb {

  @Prop() align?: 'left' | 'right' | 'center';

  /**
   * Size of the breadcrumb, default set normal
   */
  @Prop({ reflect: true }) size?: 'small' | 'medium' | 'large';

  /**
   * Use different separator for each item
   * default is '/'
   */
  @Prop() separator?: 'dot' | 'arrow' | 'slash';

  render() {
    const { align, size, separator } = this

    return (
      <Host class={{
        [`is-breadcrumb`]: true,
        [`has-separator-${separator}`]: separator !== undefined,
        [`is-${align}`]: align !== undefined,
        [`is-${size}`]: size !== undefined,
      }}>
        <slot></slot>
      </Host>
    );
  }

}
