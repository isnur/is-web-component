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

  render() {
    const { src, alt, ratio } = this;

    return (
      <Host class={{
        [`is-${ratio}`]: ratio !== undefined,
      }}>
        <img src={src} alt={alt}/>
      </Host>
    );
  }
}
