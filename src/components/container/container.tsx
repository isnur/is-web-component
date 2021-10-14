import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'is-container',
  styleUrl: 'container.scss',
  shadow: true,
})
export class Container {

  /**
   * When set to true, makes the row 100% wide all the time
   */
   @Prop() fluid?: boolean | string = false;

   /**
    * Specify the HTML tag to render instead of the default tag
    */
   @Prop() tag?: string = 'div';

   render() {
    return (
      <Host>
        <this.tag class={{
          container: !(this.fluid || this.fluid === ''),
          'container-fluid': this.fluid === true || this.fluid === '',
        }}>
          <slot></slot>
        </this.tag>
      </Host>
    );
  }

}
