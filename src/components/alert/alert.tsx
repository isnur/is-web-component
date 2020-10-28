import { Component, Host, Prop, State, Event, EventEmitter, Element, h } from '@stencil/core';

@Component({
  tag: 'is-alert',
  styleUrl: 'alert.scss',
  scoped: true
})
export class Alert {
  /**
     * The color options are: `"primary"`, `"secondary"`, `"success"`, `"warning"`, `"error"`, `"light"`, `"info"`, `"white"`, `"black"`, and `"dark"`.
     */
  @Prop() color?: string;

  /**
   * If `true` alert will close automatically.
   */
  @Prop() autoClose: boolean = true;

  /**
   * Number of seconds to close alert automatically if autoClose `true`.
   */
  @Prop() closeSecs: number = 3;

  /**
   * If closable or not.
   */
  @Prop() closeable: boolean = true;

  /**
   * Customized close button text.
   */
  @Prop() closeText?: string = '\u2573';

  /**
   * If `true`, make the alert rounded.
   */
  @Prop() rounded?: boolean = false;

  @State() countDownTimerId = null;

  @Element() el: HTMLElement;

  private close = () => {
    this.closed.emit(true);
    this.el.remove()
  }

  /**
   * Emitted when the alert is closed.
   */
  @Event() closed: EventEmitter;

  private renderCloseText = () => {
    if (this.closeable) {
      return <span class="alert__close-text" onClick={() => this.close()}>{this.closeText}</span>
    }
    return null;
  };

  componentWillLoad() {
    if (this.el.attributes['auto-close']) {
      this.countDownTimerId = window.setTimeout(() => {
        this.close()
      }, this.closeSecs * 1000)
    }
  }

  componentDidUnload() {
    if (this.autoClose) {
      window.clearInterval(this.countDownTimerId);
    }
  }

  render() {
    return (
      <Host
        class={{
          [this.color]: true,
          'rounded': this.rounded
        }}
      >
        <div class="alert__content">
          <slot></slot>
        </div>
        {this.renderCloseText()}
      </Host>
    );
  }
}
