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

  render() {
    const { align, size } = this

    return (
      <Host class={{
        [`is-breadcrumb`]: true,
        [`is-${align}`]: align !== undefined,
        [`is-${size}`]: size !== undefined,
      }}>
        <slot></slot>
      </Host>
    );
  }

}
