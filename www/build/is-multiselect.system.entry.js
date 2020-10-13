var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
System.register(['./index-5f5ef015.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, h, Host;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.e;
                h = module.h;
                Host = module.f;
            }],
        execute: function () {
            var multiselectCss = ".sc-is-multiselect-h{display:block;position:relative}.multiselect.sc-is-multiselect{position:relative;min-height:35px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px;outline:0;color:#35495e;font-family:Lato, Helvetica, sans-serif}.multiselect.multiselect__disabled.sc-is-multiselect{background:#e5e5e5;pointer-events:none;opacity:0.6}.multiselect__click-area.sc-is-multiselect{background-color:transparent;position:absolute;width:100%;height:100%;top:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.multiselect__placeholder.sc-is-multiselect{padding:5px 40px 5px 15px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}.btnToggle.sc-is-multiselect{width:40px;height:35px;position:absolute;top:0;right:0;cursor:pointer;background-image:linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);background-position:calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px);background-size:5px 5px, 5px 5px, 1px 1.5em;background-repeat:no-repeat}.btnToggle.active.sc-is-multiselect{background-image:linear-gradient(45deg, gray 50%, transparent 50%), linear-gradient(135deg, transparent 50%, gray 50%);background-position:calc(100% - 15px) 1em, calc(100% - 20px) 1em}.multiselect__input.sc-is-multiselect{padding-left:10px;margin-top:-10px;width:100%;height:100%;display:-ms-flexbox;display:flex}.multiselect__input.sc-is-multiselect input.sc-is-multiselect{width:calc(100% - 50px);height:100%;display:inline-block;min-height:35px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;-webkit-transition:border 0.1s ease;transition:border 0.1s ease;-webkit-box-sizing:border-box;box-sizing:border-box;vertical-align:top;outline:none;color:#35495e;font-family:Helvetica, sans-serif;font-size:14px}.multiselect__input.sc-is-multiselect .sc-is-multiselect::-webkit-input-placeholder{opacity:0.5;color:#35495e;font-family:Helvetica, sans-serif}.multiselect__input.sc-is-multiselect .sc-is-multiselect::-moz-placeholder{opacity:0.5;color:#35495e;font-family:Helvetica, sans-serif}.multiselect__input.sc-is-multiselect .sc-is-multiselect:-ms-input-placeholder{opacity:0.5;color:#35495e;font-family:Helvetica, sans-serif}.multiselect__input.sc-is-multiselect .sc-is-multiselect::-ms-input-placeholder{opacity:0.5;color:#35495e;font-family:Helvetica, sans-serif}.multiselect__input.sc-is-multiselect .sc-is-multiselect::placeholder{opacity:0.5;color:#35495e;font-family:Helvetica, sans-serif}.multiselect__input.sc-is-multiselect .sc-is-multiselect:-ms-input-placeholder{color:#35495e;font-family:Helvetica, sans-serif}.multiselect__input.sc-is-multiselect .sc-is-multiselect::-ms-input-placeholder{color:#35495e;font-family:Helvetica, sans-serif}.multiselect__content.sc-is-multiselect{position:absolute;display:block;background:#fff;width:calc(100% - 2px);max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:3;-webkit-overflow-scrolling:touch}.multiselect__content--list.sc-is-multiselect{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect__content--item.sc-is-multiselect{padding:12px;line-height:16px;text-decoration:none;text-transform:none;position:relative;cursor:pointer;white-space:nowrap;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.multiselect__content--item.sc-is-multiselect:hover{background:#00c092;color:white;outline:none}.multiselect__content--item.sc-is-multiselect:hover::after{content:attr(label-to-select);font-size:12px}.multiselect__content--selected.sc-is-multiselect{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;background:#e5e5e5;color:black}.multiselect__content--selected.sc-is-multiselect::after{content:attr(label-selected);color:#b9b9b9}.multiselect__content--selected.sc-is-multiselect:hover{background:#d0021b;color:white;outline:none}.multiselect__content--selected.sc-is-multiselect:hover::after{content:attr(label-to-remove);font-size:12px;color:white;font-weight:normal}.multiselect__content--remove.sc-is-multiselect{background:#d0021b;color:white;outline:none}.not-found.sc-is-multiselect{height:35px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:12px;font-family:Helvetica, sans-serif}.multiselect__tag.sc-is-multiselect{z-index:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:black;margin:2.5px 10px 2.5px 0}.multiselect__tag--remove.sc-is-multiselect{padding:0 8px;border-left:1px solid white;font-size:0.8em;line-height:1px;height:20px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer}.multiselect__tag--remove[color~=primary].sc-is-multiselect{background-color:#327bb7;color:white}.multiselect__tag--more.sc-is-multiselect{height:25px;line-height:25px}.multiselect__tag.sc-is-multiselect is-badge.sc-is-multiselect{cursor:inherit;height:20px}";
            var Multiselect = exports('is_multiselect', /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
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
                    this.limitText = function (count) { return 'and ' + count + ' more'; };
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
                    this.renderSelectedItems = function () {
                        var selected = [];
                        if (_this.selected) {
                            _this.selected.map(function (item, i) {
                                if (i < _this.limit) {
                                    selected.push(h("div", { class: "multiselect__tag" }, h("is-badge", { color: "primary", text: item.name }), h("span", { class: "multiselect__tag--remove", color: "primary", onClick: function () { return _this.updateItems(item); } }, "x")));
                                }
                                else {
                                    var count = _this.selected.length - _this.limit;
                                    selected[_this.limit + 1] = h("span", { class: "multiselect__tag--more" }, _this.limitText(count));
                                }
                            });
                        }
                        return selected;
                    };
                    this.toggle = function (state, outside) {
                        _this.isExpanded = state;
                        _this.updatePlaceholder();
                        if (!outside) {
                            if (_this.isExpanded) {
                                setTimeout(function () {
                                    _this.textInput.focus();
                                }, 200);
                            }
                        }
                    };
                    this.isSelected = function (item) {
                        if (_this.selected) {
                            return _this.selected.some(function (obj) { return obj.id === item.id; });
                        }
                        return false;
                    };
                    this.updateItems = function (item) {
                        if (_this.isSelected(item)) {
                            _this.selected = _this.selected.filter(function (obj) {
                                return obj.id !== item.id;
                            });
                        }
                        else {
                            if (_this.selected.length !== _this.max) {
                                if (_this.selected && _this.selected.length > 0) {
                                    _this.selected = __spreadArrays(_this.selected, [item]);
                                }
                                else {
                                    _this.selected = [item];
                                }
                            }
                        }
                        _this.selectedChanged.emit(_this.selected);
                    };
                    this.onFilteredItems = function () {
                        var element = _this.textInput;
                        if (element) {
                            _this.keyword = element.value;
                            _this.filteredItems = _this.items.filter(function (obj) {
                                return obj['name'].toLowerCase().includes(_this.keyword.toLowerCase());
                            });
                        }
                        else {
                            _this.filteredItems = _this.items;
                        }
                    };
                }
                /**
                 * Get the selected items.
                 */
                class_1.prototype.getSelected = function () {
                    return Promise.resolve(this.selected);
                };
                class_1.prototype.setItems = function (newValue, oldValue) {
                    if (newValue !== oldValue) {
                        this.items = newValue;
                        this.textSelected = this.placeholder;
                        this.selected = [];
                        this.onFilteredItems();
                    }
                };
                class_1.prototype.setSelected = function (newValue, oldValue) {
                    if (newValue !== oldValue) {
                        this.updatePlaceholder();
                    }
                };
                class_1.prototype.handleClick = function (event) {
                    var isClickInside = this.multiselect.contains(event.target);
                    if (!isClickInside) {
                        this.toggle(false, true);
                    }
                };
                class_1.prototype.updatePlaceholder = function () {
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
                };
                class_1.prototype.componentWillLoad = function () {
                    this.textSelected = this.placeholder;
                    if (this.selected.length > 0 && !this.isExpanded) {
                        this.textSelected = this.selected.length + ' options selected';
                    }
                    if (this.showSelectedBadge) {
                        this.tags = this.renderSelectedItems();
                    }
                };
                class_1.prototype.render = function () {
                    var _this = this;
                    return (h(Host, { ref: function (el) { return _this.multiselect = el; } }, h("div", { class: {
                            'multiselect': true,
                            'multiselect__disabled': this.disabled
                        } }, h("div", { class: "multiselect__click-area", onClick: function () { return _this.toggle(true); }, style: {
                            zIndex: this.isExpanded ? '-1' : '0'
                        } }), h("div", { class: "multiselect__placeholder" }, this.showSelectedBadge && this.selected && this.selected.length > 0 ? this.tags : this.textSelected), this.isExpanded &&
                        h("div", { class: "multiselect__input" }, h("input", { value: this.keyword, onInput: function () { return _this.onFilteredItems(); }, ref: function (el) { return _this.textInput = el; }, placeholder: this.placeholder })), h("div", { class: {
                            'btnToggle': true,
                            'active': this.isExpanded
                        }, onClick: function () { return _this.toggle(!_this.isExpanded); } }, "\u00A0")), this.isExpanded &&
                        h("div", { class: "multiselect__content" }, h("ul", { class: "multiselect__content--list" }, this.filteredItems.length > 0 ? this.filteredItems.map(function (item, i) {
                            return (h("li", { class: {
                                    'multiselect__content--item': true,
                                    'multiselect__content--selected': _this.isSelected(item)
                                }, key: i, onClick: function () { return _this.updateItems(item); }, "label-selected": _this.isSelected(item) ? _this.labelSelected : null, "label-to-remove": _this.isSelected(item) ? _this.labelTo.remove : null, "label-to-select": !_this.isSelected(item) ? _this.labelTo.select : null }, item.name));
                        }) : h("li", { class: "not-found" }, "Not found")))));
                };
                Object.defineProperty(class_1, "watchers", {
                    get: function () {
                        return {
                            "items": ["setItems"],
                            "selected": ["setSelected"]
                        };
                    },
                    enumerable: false,
                    configurable: true
                });
                return class_1;
            }()));
            Multiselect.style = multiselectCss;
        }
    };
});
