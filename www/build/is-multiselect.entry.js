import { r as registerInstance, e as createEvent, h, f as Host } from './index-9699d743.js';

const multiselectCss = ".sc-is-multiselect-h{display:block;position:relative}.multiselect.sc-is-multiselect{position:relative;min-height:35px;display:flex;flex-direction:column;justify-content:center;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px;outline:0;color:#35495e;font-family:Lato, Helvetica, sans-serif}.multiselect.multiselect__disabled.sc-is-multiselect{background:#e5e5e5;pointer-events:none;opacity:0.6}.multiselect__click-area.sc-is-multiselect{background-color:transparent;position:absolute;width:100%;height:100%;top:0;left:0;display:flex;justify-content:flex-end}.multiselect__placeholder.sc-is-multiselect{padding:5px 40px 5px 15px;display:flex;align-items:center;flex-wrap:wrap}.btnToggle.sc-is-multiselect{width:40px;height:35px;position:absolute;top:0;right:0;cursor:pointer;background-image:linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);background-position:calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px);background-size:5px 5px, 5px 5px, 1px 1.5em;background-repeat:no-repeat}.btnToggle.active.sc-is-multiselect{background-image:linear-gradient(45deg, gray 50%, transparent 50%), linear-gradient(135deg, transparent 50%, gray 50%);background-position:calc(100% - 15px) 1em, calc(100% - 20px) 1em}.multiselect__input.sc-is-multiselect{padding-left:10px;margin-top:-10px;width:100%;height:100%;display:flex}.multiselect__input.sc-is-multiselect input.sc-is-multiselect{width:calc(100% - 50px);height:100%;display:inline-block;min-height:35px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;transition:border 0.1s ease;box-sizing:border-box;vertical-align:top;outline:none;color:#35495e;font-family:Helvetica, sans-serif;font-size:14px}.multiselect__input.sc-is-multiselect .sc-is-multiselect::placeholder{opacity:0.5;color:#35495e;font-family:Helvetica, sans-serif}.multiselect__input.sc-is-multiselect .sc-is-multiselect:-ms-input-placeholder{color:#35495e;font-family:Helvetica, sans-serif}.multiselect__input.sc-is-multiselect .sc-is-multiselect::-ms-input-placeholder{color:#35495e;font-family:Helvetica, sans-serif}.multiselect__content.sc-is-multiselect{position:absolute;display:block;background:#fff;width:calc(100% - 2px);max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:3;-webkit-overflow-scrolling:touch}.multiselect__content--list.sc-is-multiselect{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect__content--item.sc-is-multiselect{padding:12px;line-height:16px;text-decoration:none;text-transform:none;position:relative;cursor:pointer;white-space:nowrap;display:flex;justify-content:space-between}.multiselect__content--item.sc-is-multiselect:hover{background:#00c092;color:white;outline:none}.multiselect__content--item.sc-is-multiselect:hover::after{content:attr(label-to-select);font-size:12px}.multiselect__content--selected.sc-is-multiselect{display:flex;justify-content:space-between;background:#e5e5e5;color:black}.multiselect__content--selected.sc-is-multiselect::after{content:attr(label-selected);color:#b9b9b9}.multiselect__content--selected.sc-is-multiselect:hover{background:#d0021b;color:white;outline:none}.multiselect__content--selected.sc-is-multiselect:hover::after{content:attr(label-to-remove);font-size:12px;color:white;font-weight:normal}.multiselect__content--selected--single.sc-is-multiselect:hover{background:#00c092;color:white;outline:none}.multiselect__content--selected--single.sc-is-multiselect:hover::after{content:attr(label-to-select);font-size:12px}.multiselect__content--remove.sc-is-multiselect{background:#d0021b;color:white;outline:none}.not-found.sc-is-multiselect{height:35px;display:flex;justify-content:center;align-items:center;font-size:12px;font-family:Helvetica, sans-serif}.multiselect__tag.sc-is-multiselect{z-index:1;display:flex;align-items:center;color:black;margin:2.5px 10px 2.5px 0}.multiselect__tag--remove.sc-is-multiselect{padding:0 8px;border-left:1px solid white;font-size:0.8em;line-height:1px;height:20px;display:flex;align-items:center;cursor:pointer}.multiselect__tag--remove[color~=primary].sc-is-multiselect{background-color:#327bb7;color:white}.multiselect__tag--more.sc-is-multiselect{height:25px;line-height:25px}.multiselect__tag.sc-is-multiselect is-badge.sc-is-multiselect{cursor:inherit;height:20px}";

const Multiselect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.selectedChanged = createEvent(this, "selectedChanged", 7);
        /**
         * If `true`, the user cannot interact with the select.
         */
        this.disabled = false;
        /**
         * The text to display when not selected items.
         */
        this.placeholder = "Pick some";
        /**
         * The options list items.
         */
        this.items = [];
        /**
         * The selected items.
         */
        this.selected = [];
        /**
         * The label to remove or select.
         */
        this.labelTo = {
            remove: 'Click to Remove',
            select: 'Click to Select'
        };
        /**
         * Limit the display of selected options. The rest will be hidden within the limitText string.
         */
        this.limit = 3;
        /**
         * Function that process the message shown when selected elements pass the defined limit.
         */
        this.limitText = (count) => 'and ' + count + ' more';
        /**
         * The label when option is selected.
         */
        this.labelSelected = '\u2713';
        /**
         * If `true`, The badges will show selected items.
         */
        this.showSelectedBadge = false;
        /**
         * Enable/disable closing after selecting an option
         */
        this.closeOnSelect = false;
        this.isExpanded = false;
        this.keyword = '';
        this.textSelected = this.placeholder;
        this.tags = null;
        this.filteredItems = this.items;
        this.renderSelectedItems = () => {
            let selected = [];
            if (this.selected) {
                this.selected.map((item, i) => {
                    if (i < this.limit) {
                        selected.push(h("div", { class: "multiselect__tag" }, h("is-badge", { color: "primary", text: item.name }), h("span", { class: "multiselect__tag--remove", color: "primary", onClick: () => this.updateItems(item) }, "x")));
                    }
                    else {
                        const count = this.selected.length - this.limit;
                        selected[this.limit + 1] = h("span", { class: "multiselect__tag--more" }, this.limitText(count));
                    }
                });
            }
            return selected;
        };
        this.toggle = (state, outside) => {
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
        this.isSelected = (item) => {
            if (this.selected) {
                return this.selected.some(obj => obj.id === item.id);
            }
            return false;
        };
        this.updateItems = (item) => {
            if (this.max === 1) {
                this.selected = [item];
            }
            else {
                if (this.isSelected(item)) {
                    this.selected = this.selected.filter(obj => {
                        return obj.id !== item.id;
                    });
                }
                else {
                    if (this.selected.length !== this.max) {
                        if (this.selected && this.selected.length > 0) {
                            this.selected = [...this.selected, item];
                        }
                        else {
                            this.selected = [item];
                        }
                    }
                }
            }
            this.selectedChanged.emit(this.selected);
            if (this.closeOnSelect) {
                this.toggle(false);
            }
        };
        this.onFilteredItems = () => {
            const element = this.textInput;
            if (element) {
                this.keyword = element.value;
                this.filteredItems = this.items.filter(obj => {
                    return obj['name'].toLowerCase().includes(this.keyword.toLowerCase());
                });
            }
            else {
                this.filteredItems = this.items;
            }
        };
    }
    /**
     * Get the selected items.
     */
    getSelected() {
        return Promise.resolve(this.selected);
    }
    setItems(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.items = newValue;
            this.textSelected = this.placeholder;
            this.selected = [];
            this.onFilteredItems();
        }
    }
    setSelected(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.updatePlaceholder();
        }
    }
    handleClick(event) {
        const isClickInside = this.multiselect.contains(event.target);
        if (!isClickInside) {
            this.toggle(false, true);
        }
    }
    updatePlaceholder() {
        this.textSelected = this.placeholder;
        if (this.selected && this.selected.length > 0 && !this.isExpanded) {
            if (this.max === 1) {
                this.textSelected = this.selected[0].name;
            }
            else {
                this.textSelected = this.selected.length + ' options selected';
            }
        }
        if (this.showSelectedBadge) {
            this.tags = this.renderSelectedItems();
        }
        if (this.isExpanded) {
            this.textSelected = '';
        }
    }
    componentWillLoad() {
        this.textSelected = this.placeholder;
        if (this.selected.length > 0 && !this.isExpanded) {
            if (this.max === 1) {
                this.textSelected = this.selected[0].name;
            }
            else {
                this.textSelected = this.selected.length + ' options selected';
            }
        }
        if (this.showSelectedBadge) {
            this.tags = this.renderSelectedItems();
        }
    }
    render() {
        return (h(Host, { ref: el => this.multiselect = el }, h("div", { class: {
                'multiselect': true,
                'multiselect__disabled': this.disabled
            } }, h("div", { class: "multiselect__click-area", onClick: () => this.toggle(true), style: {
                zIndex: this.isExpanded ? '-1' : '0'
            } }), h("div", { class: "multiselect__placeholder" }, this.showSelectedBadge && this.selected && this.selected.length > 0 ? this.tags : this.textSelected), this.isExpanded &&
            h("div", { class: "multiselect__input" }, h("input", { value: this.keyword, onInput: () => this.onFilteredItems(), ref: el => this.textInput = el, placeholder: this.placeholder })), h("div", { class: {
                'btnToggle': true,
                'active': this.isExpanded
            }, onClick: () => this.toggle(!this.isExpanded) }, "\u00A0")), this.isExpanded &&
            h("div", { class: "multiselect__content" }, h("ul", { class: "multiselect__content--list" }, this.filteredItems.length > 0 ? this.filteredItems.map((item, i) => {
                return (h("li", { class: {
                        'multiselect__content--item': true,
                        'multiselect__content--selected': this.isSelected(item),
                        'multiselect__content--selected--single': this.isSelected(item) && this.max === 1
                    }, key: i, onClick: () => this.updateItems(item), "label-selected": this.isSelected(item) ? this.labelSelected : null, "label-to-remove": this.isSelected(item) && this.max !== 1 ? this.labelTo.remove : null, "label-to-select": !this.isSelected(item) ? this.labelTo.select : null }, item.name));
            }) : h("li", { class: "not-found" }, "Not found")))));
    }
    static get watchers() { return {
        "items": ["setItems"],
        "selected": ["setSelected"]
    }; }
};
Multiselect.style = multiselectCss;

export { Multiselect as is_multiselect };
