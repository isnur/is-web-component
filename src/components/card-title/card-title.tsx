import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'is-card-title',
  styleUrl: 'card-title.scss',
  shadow: true,
})
export class CardTitle {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
