import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'is-row',
  styleUrl: 'row.scss',
  shadow: true,
})
export class Row {

  /**
   * Align columns items together on the cross axis: 'start', 'center', 'end', 'around', 'between' or 'stretch'. Has no effect on single rows of items
   */
  @Prop() alignContent?: string | null = null;

  /**
   * Horizontal alignment/spacing of all columns: 'start', 'center', 'end', 'around', or 'between'
   */
  @Prop() alignH?: string | null = null;

  /**
   * Vertical alignment of all columns in a row: 'start', 'center', 'end', 'baseline', or 'stretch'
   */
  @Prop() alignV?: string | null = null;

  /**
   * When set, removes the margin from the row and removes the padding from the child columns
   */
  @Prop() noGutters?: boolean = false;

  /**
  * Specify the HTML tag to render instead of the default tag
  */
  @Prop() tag?: string = 'div';

  render() {
    return (
      <Host>
        <this.tag class={{
          'row': true,
          'no-gutters': this.noGutters,
          [`align-items-${this.alignV}`]: this.alignV,
          [`justify-content-${this.alignH}`]: this.alignH,
          [`align-content-${this.alignContent}`]: this.alignContent
        }}>
          <slot></slot>
        </this.tag>
      </Host>
    );
  }

}
