import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'is-badge',
  styleUrl: 'badge.scss',
  scoped: true
})
export class Badge {
  /**
     * The color options are: `"primary"`, `"secondary"`, `"success"`, `"warning"`, `"error"`, `"light"`, `"info"`, `"white"`, `"black"`, and `"dark"`.
     */
  @Prop() color?: string;
  
  /**
   * The text to display in the badge.
   */
  @Prop() text: string;

  /**
   * If `true`, make the badge rounded.
   */
  @Prop() rounded?: boolean = false;

  render() {
    return (
      <Host
        class={{
          [this.color]: true,
          'rounded': this.rounded,
          'hidden': !this.text
        }}
      >
        <span>{this.text}</span>
      </Host>
    );
  }
}
