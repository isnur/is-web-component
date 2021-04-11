import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'is-card-body',
  styleUrl: 'card-body.scss',
  shadow: true,
})
export class CardBody {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
