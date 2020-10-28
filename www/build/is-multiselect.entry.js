import { r as registerInstance, h, c as createEvent, H as Host } from './core-6ec07ed7.js';

const Multiselect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            this.selectedChanged.emit(this.selected);
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
        this.selectedChanged = createEvent(this, "selectedChanged", 7);
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
            this.textSelected = this.selected.length + ' options selected';
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
            this.textSelected = this.selected.length + ' options selected';
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
                        'multiselect__content--selected': this.isSelected(item)
                    }, key: i, onClick: () => this.updateItems(item), "label-selected": this.isSelected(item) ? this.labelSelected : null, "label-to-remove": this.isSelected(item) ? this.labelTo.remove : null, "label-to-select": !this.isSelected(item) ? this.labelTo.select : null }, item.name));
            }) : h("li", { class: "not-found" }, "Not found")))));
    }
    static get watchers() { return {
        "items": ["setItems"],
        "selected": ["setSelected"]
    }; }
    static get style() { return ".sc-is-multiselect-h {\n  display: block;\n  position: relative;\n}\n\n.multiselect.sc-is-multiselect {\n  position: relative;\n  min-height: 35px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-pack: center;\n  justify-content: center;\n  border-radius: 5px;\n  border: 1px solid #e8e8e8;\n  background: #fff;\n  font-size: 14px;\n  outline: 0;\n  color: #35495e;\n  font-family: Lato, Helvetica, sans-serif;\n}\n.multiselect.multiselect__disabled.sc-is-multiselect {\n  background: #e5e5e5;\n  pointer-events: none;\n  opacity: 0.6;\n}\n\n.multiselect__click-area.sc-is-multiselect {\n  background-color: transparent;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n}\n\n.multiselect__placeholder.sc-is-multiselect {\n  padding: 5px 40px 5px 15px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n\n.btnToggle.sc-is-multiselect {\n  width: 40px;\n  height: 35px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n  background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px);\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat;\n}\n.btnToggle.active.sc-is-multiselect {\n  background-image: linear-gradient(45deg, gray 50%, transparent 50%), linear-gradient(135deg, transparent 50%, gray 50%);\n  background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em;\n}\n\n.multiselect__input.sc-is-multiselect {\n  padding-left: 10px;\n  margin-top: -10px;\n  width: 100%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n}\n.multiselect__input.sc-is-multiselect input.sc-is-multiselect {\n  width: calc(100% - 50px);\n  height: 100%;\n  display: inline-block;\n  min-height: 35px;\n  line-height: 20px;\n  border: none;\n  border-radius: 5px;\n  background: #fff;\n  padding: 0 0 0 5px;\n  -webkit-transition: border 0.1s ease;\n  transition: border 0.1s ease;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  vertical-align: top;\n  outline: none;\n  color: #35495e;\n  font-family: Helvetica, sans-serif;\n  font-size: 14px;\n}\n.multiselect__input.sc-is-multiselect .sc-is-multiselect::-webkit-input-placeholder {\n  \n  opacity: 0.5;\n  \n  color: #35495e;\n  font-family: Helvetica, sans-serif;\n}\n.multiselect__input.sc-is-multiselect .sc-is-multiselect::-moz-placeholder {\n  \n  opacity: 0.5;\n  \n  color: #35495e;\n  font-family: Helvetica, sans-serif;\n}\n.multiselect__input.sc-is-multiselect .sc-is-multiselect:-ms-input-placeholder {\n  \n  opacity: 0.5;\n  \n  color: #35495e;\n  font-family: Helvetica, sans-serif;\n}\n.multiselect__input.sc-is-multiselect .sc-is-multiselect::-ms-input-placeholder {\n  \n  opacity: 0.5;\n  \n  color: #35495e;\n  font-family: Helvetica, sans-serif;\n}\n.multiselect__input.sc-is-multiselect .sc-is-multiselect::placeholder {\n  \n  opacity: 0.5;\n  \n  color: #35495e;\n  font-family: Helvetica, sans-serif;\n}\n.multiselect__input.sc-is-multiselect .sc-is-multiselect:-ms-input-placeholder {\n  \n  color: #35495e;\n  font-family: Helvetica, sans-serif;\n}\n.multiselect__input.sc-is-multiselect .sc-is-multiselect::-ms-input-placeholder {\n  \n  color: #35495e;\n  font-family: Helvetica, sans-serif;\n}\n\n.multiselect__content.sc-is-multiselect {\n  position: absolute;\n  display: block;\n  background: #fff;\n  width: calc(100% - 2px);\n  max-height: 240px;\n  overflow: auto;\n  border: 1px solid #e8e8e8;\n  border-top: none;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  z-index: 3;\n  -webkit-overflow-scrolling: touch;\n}\n.multiselect__content--list.sc-is-multiselect {\n  list-style: none;\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  min-width: 100%;\n  vertical-align: top;\n}\n.multiselect__content--item.sc-is-multiselect {\n  padding: 12px;\n  line-height: 16px;\n  text-decoration: none;\n  text-transform: none;\n  position: relative;\n  cursor: pointer;\n  white-space: nowrap;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n.multiselect__content--item.sc-is-multiselect:hover {\n  background: #00c092;\n  color: white;\n  outline: none;\n}\n.multiselect__content--item.sc-is-multiselect:hover::after {\n  content: attr(label-to-select);\n  font-size: 12px;\n}\n.multiselect__content--selected.sc-is-multiselect {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  background: #e5e5e5;\n  color: black;\n}\n.multiselect__content--selected.sc-is-multiselect::after {\n  content: attr(label-selected);\n  color: #b9b9b9;\n}\n.multiselect__content--selected.sc-is-multiselect:hover {\n  background: #d0021b;\n  color: white;\n  outline: none;\n}\n.multiselect__content--selected.sc-is-multiselect:hover::after {\n  content: attr(label-to-remove);\n  font-size: 12px;\n  color: white;\n  font-weight: normal;\n}\n.multiselect__content--remove.sc-is-multiselect {\n  background: #d0021b;\n  color: white;\n  outline: none;\n}\n\n.not-found.sc-is-multiselect {\n  height: 35px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  font-size: 12px;\n  font-family: Helvetica, sans-serif;\n}\n\n.multiselect__tag.sc-is-multiselect {\n  z-index: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  color: black;\n  margin: 2.5px 10px 2.5px 0;\n}\n.multiselect__tag--remove.sc-is-multiselect {\n  padding: 0 8px;\n  border-left: 1px solid white;\n  font-size: 0.8em;\n  line-height: 1px;\n  height: 20px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  cursor: pointer;\n}\n.multiselect__tag--remove[color~=primary].sc-is-multiselect {\n  background-color: #327bb7;\n  color: white;\n}\n.multiselect__tag--more.sc-is-multiselect {\n  height: 25px;\n  line-height: 25px;\n}\n.multiselect__tag.sc-is-multiselect is-badge.sc-is-multiselect {\n  cursor: inherit;\n  height: 20px;\n}"; }
};

export { Multiselect as is_multiselect };
