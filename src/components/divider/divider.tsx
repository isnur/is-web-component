import { Component, h, Element, Prop } from '@stencil/core';
import { Color } from '../../interfaces';

@Component({
  tag: 'is-divider',
  styleUrl: 'divider.scss',
  shadow: true,
})
export class IsDivider {
  @Element() el!: HTMLElement;

  /**
   * The decoration to change color of divider
   */
  @Prop() color: Color = 'default'

  /**
   * The text to shown at the divider
   */
  @Prop() text: string = '';

  /**
   * The align text of divider
   */
  @Prop() alignText: 'right' | 'left' | 'center' = 'center';


  render() {
    const { text, alignText, color } = this;

    return (
      <div class={{
        'is-divider': true,
        [`is-${alignText}`]: !!text,
        [`is-${color}`]: true,
        'is-no-text': !text,
      }}>
        { text }
      </div>
    );
  }
}
