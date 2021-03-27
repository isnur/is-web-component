import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';

import { Color } from '../../interfaces';


@Component({
  tag: 'is-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class IsButton implements ComponentInterface {
  @Element() el: HTMLElement;

  /**
   * The color to use, default is `default`
   */
  @Prop() color: Color = 'default';

  /**
   * If `true`, then user cannot interact with the button and changed color
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Size of the button, default set normal
   */
  @Prop({ reflect: true }) size?: 'small' | 'medium' | 'large';

  /**
   * Display of the button
   */
  @Prop({ reflect: true }) display?: 'fullwidth';

  /**
   * Shape of the button
   */
  @Prop({ reflect: true }) shape?: 'round';

  /**
   * Contains a URL
   * If prop is set, an anchor tag will be rendered
   */
  @Prop() href: string | undefined;

  /**
   * Where to display linked url
   * apply when `href` props provided
   * clue: `_blank, _self`
   */
  @Prop() target: string | undefined;

  /**
   * Type of the button
   */
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';


  onClick = (event: Event): void => {
    // we dont need anymore event anymore when disabled is active
    if (this.disabled) {
      event.preventDefault();
      return;
    }

    if (this.type !== 'button') {
      const form = this.el.closest('form');
      if (form) {
        event.preventDefault();
        const fakeBtn = document.createElement('button');
        fakeBtn.type = this.type;
        fakeBtn.style.display = 'none';
        form.appendChild(fakeBtn);
        fakeBtn.click();
        fakeBtn.remove();
      }
    }
  }

  render() {
    const { color, disabled, size, display, shape, href, type, target } = this;
    const TagChose = href === undefined ? 'button' : 'a' as any;

    const attributes = (TagChose === 'button') ? { type, disabled } : {
      href, target
    }

    return (
      <Host
        onClick={this.onClick}
      >
        <TagChose
          {...attributes}
          class={{
            'is-button': true,
            [`is-${color}`]: true,
            [`is-${size}`]: size !== undefined,
            [`is-${display}`]: display !== undefined,
            [`is-${shape}`]: shape !== undefined,
            'is-disabled': disabled,
          }}
        >
          <slot></slot>
        </TagChose>
      </Host>
    );
  }

}
