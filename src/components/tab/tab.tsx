import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'is-tab',
  styleUrl: 'tab.scss',
  scoped: true
})
export class Tab {

  /**
   * Customized name tab
   */
  @Prop() label: string;

  /**
   * Indicates if tab is active
   */
  @Prop() isactive: boolean;

  /**
   * Indicates if tab is blocked
   */
  @Prop() disable: boolean;

  @Watch('disable')
  watchIsDisable() {
    this.disable = !this.disable ? false : true;
  }

  // @Watch('isactive')
  // watchIsActive() {
  //   this.isactive = !this.isactive ? false : true;
  // }

  private handleOnClick = () => {

    this.isactive = !this.isactive;
  }

  render() {

    return (
      <Host>
        <li class='tab'>
          <a class={!this.disable ? (this.isactive ? 'tab-link-active' : 'tab-link')
            : 'tab-link-disable'}
            onClick={this.handleOnClick}
          >
            {this.label}
          </a>
        </li>
      </Host>
    );
  }
}
