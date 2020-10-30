import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'is-tabs',
  styleUrl: 'tabs.scss',
  // scoped: true
})
export class Tabs {



  render() {

    return (
      <Host>
        <ul>
          <slot>
          </slot>
        </ul>
      </Host>
    );
  }
}
