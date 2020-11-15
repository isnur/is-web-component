import { Component, Host, h, Element, State } from "@stencil/core";

@Component({
  tag: "is-tabs",
  styleUrl: "tabs.scss",
  scoped: true,
})
export class Tabs {
  @Element() private element: HTMLElement;
  @State() children: Array<any> = [];
  @State() tabState: Array<boolean> = [];

  componentDidLoad() {
    let hostTab = this.element.querySelectorAll('is-tab');

    [].forEach.call(hostTab, (tb, index) => {
      // console.log(tb.getAttribute('isactive'), index);
      // console.log(tb.children[0], index);

      /**
       * Init the first tab
       */
      if (index === 0) {
        tb.setAttribute('isactive', true);
      } else {
        tb.setAttribute('isactive', false);
      }

      this.children.push(tb.children[0]);
      if (tb.children[0].className.split(' ')[0] !== 'tab') {
        // tb.children[0].remove();
      }
    });
  }

  // TODO - update only a single tab as active
  componentDidUpdate() {
    // let hostTab = this.element.querySelectorAll('is-tab');
    // console.log(this.element, 111);
  }

  render() {
    // console.log(this.children, 5000);

    return (
      <Host>
        <section>
          <ul class="tabs">
            <slot></slot>
          </ul>
          <div class="tabs-content">
            {this.children.map(child => {
              if (child.className.split(' ')[0] !== 'tab') {
                return (
                <div innerHTML={child.outerHTML}></div>
                );
              }
            })}
          </div>
        </section>
      </Host>
    );
  }
}
