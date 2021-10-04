import {Component, Host, h, Prop} from '@stencil/core';
import {Color} from "../../interfaces";

@Component({
  tag: 'is-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card {

  /**
   * when set as `true`, than card cannot be interacted.
   */
  @Prop() disabled: boolean = false;

  /**
   * change color background
   */
  @Prop() color?: Color;

  /**
   * href be filled make card become hover
   */
  @Prop() href?: string;

  /**
   * target
   * `_blank', '_self', etc
   */
  @Prop() target: string;


  /**
   *
   */
  private clickable(): boolean {
    return this.href !== undefined;
  }

  render() {
    const { color, href, target } = this;
    const TagChoose = this.clickable() ? 'a' : 'div' as any;

    const attributes = (TagChoose === 'a') ?
      { href, target } : { }

    return (
      <Host class={{
        'is-disabled': this.disabled,
      }}>
        <TagChoose class={{
          'is-card': true,
          [`is-${color}`]: color !== undefined,
        }}
          {...attributes}
          >
          <slot></slot>
        </TagChoose>
      </Host>
    );
  }
}
