import {
  Component,
  ComponentInterface,
  Host,
  Prop,
  State,
  Method,
  Watch,
  Listen,
  Event,
  EventEmitter,
  h
} from '@stencil/core';

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

  /**
   * The label to remove or select.
   */
  @Prop() labelTo: ILabelTo = {
    remove: 'Click to Remove',
    select: 'Click to Select'
  };

  /**
   * Limit the display of selected options. The rest will be hidden within the limitText string.
   */
  @Prop() limit: number = 3;

  /**
   * Function that process the message shown when selected elements pass the defined limit.
   */
  @Prop() limitText: Function = (count: number) => 'and ' + count + ' more';

  /**
   * The label when option is selected.
   */
  @Prop() labelSelected: string = '\u2713';

  /**
   * If `true`, The badges will show selected items.
   */
  @Prop() showSelectedBadge: boolean = false;

  /**
   * Maximum selected items can be selected.
   */
  @Prop() max: number;

  @State() isExpanded: boolean = false;
  @State() keyword: string = '';
  @State() textSelected: string = this.placeholder;
  @State() tags = null;

  /**
   * Get the selected items.
   */
  @Method()
  getSelected(): Promise<ISelectItem[] | undefined> {
    return Promise.resolve(this.selected);
  }

  /**
   * Emitted when the selected items has changed.
   */
  @Event() onSelected: EventEmitter;

  @Watch('items')
  setItems(newValue: ISelectItem[], oldValue: ISelectItem[]) {
    if (newValue !== oldValue) {
      this.items = newValue;
      this.textSelected = this.placeholder;
      this.selected = [];
      this.onFilteredItems();
    }
  }

  @Watch('selected')
  setSelected(newValue: ISelectItem[], oldValue: ISelectItem[]) {
    if (newValue !== oldValue) {
      this.updatePlaceholder();
    }
  }

  @Listen('click', {target: 'document'})
  handleClick(event: MouseEvent) {
    const isClickInside = this.multiselect.contains(event.target);

    if (!isClickInside) {
      this.toggle(false, true);
    }
  }

  private textInput?: HTMLInputElement;
  private multiselect?: any;
  private filteredItems: ISelectItem[] = this.items;

  private renderSelectedItems = () => {
    let selected = [];
    if (this.selected) {
      this.selected.map((item, i) => {
        if (i < this.limit) {
          selected.push(
            <div class="multiselect__tag">
              <is-badge color="primary" text={item.name}></is-badge>
              <span class="multiselect__tag--remove" color="primary" onClick={() => this.updateItems(item)}>x</span>
            </div>
          );
        } else {
          const count = this.selected.length - this.limit;
          selected[this.limit + 1] = <span class="multiselect__tag--more">{this.limitText(count)}</span>
        }
      });
    }
    return selected;
  };

  private toggle = (state: boolean, outside?: boolean) => {
    this.isExpanded = state;
    this.updatePlaceholder();
    if (!outside) {
      if (this.isExpanded) {
        setTimeout(() => {
          this.textInput.focus();
        }, 200);
      }
    }
  };

  private updatePlaceholder() {
    this.textSelected = this.placeholder;
    if (this.selected && this.selected.length > 0 && !this.isExpanded) {
      this.textSelected = this.selected.length + ' options selected';
    }
    if (this.showSelectedBadge) {
      this.tags = this.renderSelectedItems();
    }
    if (this.isExpanded) {
      this.textSelected = '';
    }
  }

  private isSelected = (item: ISelectItem) => {
    if (this.selected) {
      return this.selected.some(obj => obj.id === item.id)
    }
    return false;
  };

  private updateItems = (item: ISelectItem) => {
    if (this.isSelected(item)) {
      this.selected = this.selected.filter(obj => {
        return obj.id !== item.id;
      });
    } else {
      if (this.selected.length !== this.max) {
        if (this.selected && this.selected.length > 0) {
          this.selected = [...this.selected, item];
        } else {
          this.selected = [item];
        }
      }
    }
    this.onSelected.emit(this.selected);
  };

  private onFilteredItems = () => {
    const element = this.textInput;
    if (element) {
      this.keyword = element.value;
      this.filteredItems = this.items.filter(obj => {
        return obj['name'].toLowerCase().includes(this.keyword.toLowerCase());
      });
    } else {
      this.filteredItems = this.items;
    }
  };

  componentWillLoad() {
    this.textSelected = this.placeholder;
    if (this.selected.length > 0 && !this.isExpanded) {
      this.textSelected = this.selected.length + ' options selected';
    }
    if (this.showSelectedBadge) {
      this.tags = this.renderSelectedItems();
    }
  }

  render() {
    return (
      <Host ref={el => this.multiselect = el}>
        <div class={{
          'multiselect': true,
          'multiselect__disabled': this.disabled
        }}>

          <div class="multiselect__click-area" onClick={() => this.toggle(true)} style={{
            zIndex: this.isExpanded ? '-1' : '0'
          }}>
          </div>

          <div class="multiselect__placeholder">
            {this.showSelectedBadge && this.selected && this.selected.length > 0 ? this.tags : this.textSelected}
          </div>

          {this.isExpanded &&
          <div class="multiselect__input">
              <input
                  value={this.keyword}
                  onInput={() => this.onFilteredItems()}
                  ref={el => this.textInput = el}
                  placeholder={this.placeholder}
              />
          </div>
          }
          <div class={{
            'btnToggle': true,
            'active': this.isExpanded
          }} onClick={() => this.toggle(!this.isExpanded)}>&nbsp;</div>
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
                          label-selected={this.isSelected(item) ? this.labelSelected : null}
                          label-to-remove={this.isSelected(item) ? this.labelTo.remove : null}
                          label-to-select={!this.isSelected(item) ? this.labelTo.select : null}
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
