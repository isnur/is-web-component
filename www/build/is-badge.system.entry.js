System.register(['./index-5f5ef015.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, Host;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                Host = module.f;
            }],
        execute: function () {
            var badgeCss = ".sc-is-badge-h{-webkit-font-smoothing:antialiased;padding:var(--padding-top, 0) var(--padding-right, 8px) var(--padding-bottom, 0) var(--padding-left, 8px);display:inline-block;min-width:10px;height:var(--height, 24px);color:var(--color, #fff);text-align:center;white-space:nowrap;contain:content;vertical-align:baseline;background-color:var(--background-color, #327bb7);border-color:transparent}.sc-is-badge-h span.sc-is-badge{font-family:var(--font-family, \"Helvetica Neue\", Helvetica, Arial, sans-serif);font-size:var(--font-size, 13px);font-weight:var(--font-weight, normal);line-height:1;display:-ms-flexbox;display:flex;height:100%;-ms-flex-align:center;align-items:center}.primary.sc-is-badge-h{color:white;background-color:#327bb7}.secondary.sc-is-badge-h{color:white;background-color:#ff7d09}.success.sc-is-badge-h{color:white;background-color:#00c092}.warning.sc-is-badge-h{color:white;background-color:#e8d700}.error.sc-is-badge-h{color:white;background-color:#d0021b}.light.sc-is-badge-h{color:black;background-color:#e5e5e5}.info.sc-is-badge-h{color:black;background-color:#b9b9b9}.dark.sc-is-badge-h{color:white;background-color:#5d5d5d}.white.sc-is-badge-h{color:black;background-color:white}.black.sc-is-badge-h{color:white;background-color:black}.rounded.sc-is-badge-h{border-radius:var(--border-radius, 4px)}.hidden.sc-is-badge-h{display:none}";
            var Badge = exports('is_badge', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * If `true`, make the badge rounded.
                     */
                    this.rounded = false;
                }
                class_1.prototype.render = function () {
                    var _a;
                    return (h(Host, { class: (_a = {},
                            _a[this.color] = true,
                            _a['rounded'] = this.rounded,
                            _a['hidden'] = !this.text,
                            _a) }, h("span", null, this.text)));
                };
                return class_1;
            }()));
            Badge.style = badgeCss;
        }
    };
});
