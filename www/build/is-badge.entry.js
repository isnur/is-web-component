import { r as registerInstance, h, H as Host } from './core-21c026b7.js';

const Badge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true`, make the badge rounded.
         */
        this.rounded = false;
    }
    render() {
        return (h(Host, { class: {
                [this.color]: true,
                'rounded': this.rounded,
                'hidden': !this.text
            } }, h("span", null, this.text)));
    }
    static get style() { return ".sc-is-badge-h {\n  \n  -webkit-font-smoothing: antialiased;\n  padding: var(--padding-top, 0) var(--padding-right, 8px) var(--padding-bottom, 0) var(--padding-left, 8px);\n  display: inline-block;\n  min-width: 10px;\n  height: var(--height, 24px);\n  color: var(--color, #fff);\n  text-align: center;\n  white-space: nowrap;\n  contain: content;\n  vertical-align: baseline;\n  background-color: var(--background-color, #327bb7);\n  border-color: transparent;\n}\n\n.sc-is-badge-h span.sc-is-badge {\n  \n  font-family: var(--font-family, \"Helvetica Neue\", Helvetica, Arial, sans-serif);\n  font-size: var(--font-size, 13px);\n  font-weight: var(--font-weight, normal);\n  line-height: 1;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.primary.sc-is-badge-h {\n  color: white;\n  background-color: #327bb7;\n}\n\n.secondary.sc-is-badge-h {\n  color: white;\n  background-color: #ff7d09;\n}\n\n.success.sc-is-badge-h {\n  color: white;\n  background-color: #00c092;\n}\n\n.warning.sc-is-badge-h {\n  color: white;\n  background-color: #e8d700;\n}\n\n.error.sc-is-badge-h {\n  color: white;\n  background-color: #d0021b;\n}\n\n.light.sc-is-badge-h {\n  color: black;\n  background-color: #e5e5e5;\n}\n\n.info.sc-is-badge-h {\n  color: black;\n  background-color: #b9b9b9;\n}\n\n.dark.sc-is-badge-h {\n  color: white;\n  background-color: #5d5d5d;\n}\n\n.white.sc-is-badge-h {\n  color: black;\n  background-color: white;\n}\n\n.black.sc-is-badge-h {\n  color: white;\n  background-color: black;\n}\n\n.rounded.sc-is-badge-h {\n  \n  border-radius: var(--border-radius, 4px);\n}\n\n.hidden.sc-is-badge-h {\n  display: none;\n}"; }
};

export { Badge as is_badge };
