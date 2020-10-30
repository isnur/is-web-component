import { Component, Host, h, Prop, Event } from '@stencil/core';

@Component({
  tag: 'is-tab',
  styleUrl: 'tab.scss',
})
export class Tab {

  /**
   * Customized name tab
   */
  @Prop() label: string;

  @Prop() isActive: boolean;

  @Event() tabClick; // TODO - descover the correct type

  render() {
    return (
      <Host>
        <li class='tab'>
          <a class='tab-link' onClick={this.tabClick}>
            {this.label}
          </a>
        </li>
      </Host>
    );
  }
}

// {!!this.isActive ? 'tab-link' : 'tab'}
