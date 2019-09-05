import { Component, ComponentInterface, Host, Prop, State, Method, h } from '@stencil/core';

@Component({
  tag: 'is-multiselect',
  styleUrl: 'multiselect.scss',
  scoped: true
})
export class Multiselect implements ComponentInterface {
  /**
   * If `true`, the user cannot interact with the select.
   */
  @Prop() disabled = false;

  /**
   * The text to display when not selected items.
   */
  @Prop() placeholder: string = "Pick some";

  /**
   * The options list items.
   */
  @Prop() items: ISelectItem[] = [];

  /**
   * The selected items.
   */
  @Prop() selected: ISelectItem[] = [];

  @State() isExpanded = false;
  @State() keyword = '';
  @State() textSelected = this.placeholder;
  
  /**
   * Get the selected items.
   */
  @Method()
  getSelected(): Promise<ISelectItem[] | undefined> {
    return Promise.resolve(this.selected);
  }

  private textInput?: HTMLInputElement;
  private multiselect?: any;
  private filteredItems: ISelectItem[] = this.items;
  private onClick = () => {
    this.toggle(true);
    setTimeout(() => {
      this.textInput.focus();
    }, 200);
  }
  private toggle = (state: boolean) => {
    this.isExpanded = state;
    if (this.selected.length > 0 && !this.isExpanded) {
      this.textSelected = this.selected.length + ' options selected';
    } else {
      this.textSelected = this.placeholder;
    }
  }
  private isSelected = (item: ISelectItem) => {
    return this.selected.some(obj => obj.id === item.id)
  }
  private updateItems = (item: ISelectItem) => {
    if (this.isSelected(item)) {
      this.selected = this.selected.filter(obj => {
        return obj.id !== item.id;
      });
    } else {
      this.selected = [...this.selected, item];
    }
  }
  private onFilteredItems = (event: Event) => {
    const element = event.target as HTMLInputElement;
    this.keyword = element.value;
    this.filteredItems = this.items.filter(obj => {
      return obj['name'].toLowerCase().includes(this.keyword.toLowerCase());
    });
  }

  componentDidLoad() {
    document.addEventListener('click', (event: MouseEvent) => {
      var isClickInside = this.multiselect.contains(event.target);

      if (!isClickInside) {
        this.toggle(false);
      }
    });
  }

  render() {
    return (
      <Host ref={el => this.multiselect = el}>
        <div class={{
          'multiselect': true,
          'multiselect__disabled': this.disabled
        }}>
          <div class="multiselect__click-area" onClick={this.onClick} style={{
            zIndex: this.isExpanded ? '-1' : '0'
          }}>
            <span class={{
              'btnToggle': true,
              'active': this.isExpanded
            }} onClick={() => this.toggle(false)}></span>
          </div>
          {this.isExpanded ?
            <div class="multiselect__input">
              <input
                value={this.keyword}
                onInput={(event: UIEvent) => this.onFilteredItems(event)}
                ref={el => this.textInput = el}
                placeholder={this.placeholder}
              />
              <span class={{
                'btnToggle': true,
                'active': this.isExpanded
              }} onClick={() => this.toggle(false)}></span>
            </div> :
            <div class="multiselect__placeholder">
              {this.textSelected}
            </div>
          }
        </div>
        {
          this.isExpanded &&
          <div class="multiselect__content">
            <ul class="multiselect__content--list">
              {
                this.filteredItems.length > 0 ? this.filteredItems.map((item: ISelectItem, i) => {
                  return (
                    <li class={{
                      'multiselect__content--item': true,
                      'multiselect__content--selected': this.isSelected(item)
                    }} key={i}
                      onClick={() => this.updateItems(item)}
                    >{item.name}</li>
                  )
                }) : <li class="not-found">Not found</li>
              }
            </ul>
          </div>
        }
      </Host>
    );
  }
}
