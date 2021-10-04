import { Component, Host, h, Prop } from '@stencil/core';
import {Ratio} from "../../interfaces";

@Component({
  tag: 'is-card-image',
  styleUrl: 'card-image.scss',
  shadow: true,
})
export class CardImage {
  @Prop({ reflect: true }) src: string;
  @Prop({ reflect: true }) alt?: string;

  @Prop() ratio?: Ratio;

  /**
   * object-fit
   */
  @Prop() object?: 'cover' | 'fill' | 'contain' | 'scale-down' | 'none';

  render() {
    const { src, alt, ratio, object } = this;

    return (
      <Host class={{
        [`is-${ratio}`]: ratio !== undefined,
      }}>
        <img class={{
          [`is-object-${object}`]: object !== undefined,
        }} src={src} alt={alt}/>
      </Host>
    );
  }
}
