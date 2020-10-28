import { r as registerInstance, h, c as createEvent, H as Host, d as getElement } from './core-6ec07ed7.js';

const Alert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true` alert will close automatically.
         */
        this.autoClose = true;
        /**
         * Number of seconds to close alert automatically if autoClose `true`.
         */
        this.closeSecs = 3;
        /**
         * If closable or not.
         */
        this.closeable = true;
        /**
         * Customized close button text.
         */
        this.closeText = '\u2573';
        /**
         * If `true`, make the alert rounded.
         */
        this.rounded = false;
        this.countDownTimerId = null;
        this.close = () => {
            this.closed.emit(true);
            this.el.remove();
        };
        this.renderCloseText = () => {
            if (this.closeable) {
                return h("span", { class: "alert__close-text", onClick: () => this.close() }, this.closeText);
            }
            return null;
        };
        this.closed = createEvent(this, "closed", 7);
    }
    componentDidLoad() {
        if (this.el.attributes['auto-close']) {
            this.countDownTimerId = window.setTimeout(() => {
                this.close();
            }, this.closeSecs * 1000);
        }
    }
    componentDidUnload() {
        if (this.autoClose) {
            window.clearInterval(this.countDownTimerId);
        }
    }
    render() {
        return (h(Host, { class: {
                [this.color]: true,
                'rounded': this.rounded
            } }, h("div", { class: "alert__content" }, h("slot", null)), this.renderCloseText()));
    }
    get el() { return getElement(this); }
    static get style() { return ".sc-is-alert-h {\n  \n  -webkit-font-smoothing: antialiased;\n  padding: var(--padding-top, 8px) var(--padding-right, 16px) var(--padding-bottom, 8px) var(--padding-left, 16px);\n  min-height: var(--height, 24px);\n  color: var(--color, #fff);\n  background-color: var(--background-color, #327bb7);\n  border-color: transparent;\n  font-family: var(--font-family, \"Helvetica Neue\", Helvetica, Arial, sans-serif);\n  font-size: var(--font-size, 13px);\n  font-weight: var(--font-weight, normal);\n  line-height: 1;\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.sc-is-alert-h .alert__content.sc-is-alert {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n.sc-is-alert-h .alert__close-text.sc-is-alert {\n  cursor: pointer;\n  opacity: 0.7;\n  position: absolute;\n  top: 14px;\n  right: 16px;\n  font-size: 0.8em;\n}\n.sc-is-alert-h .alert__close-text.sc-is-alert:hover {\n  opacity: 0.85;\n}\n\n.primary.sc-is-alert-h {\n  color: white;\n  background-color: #327bb7;\n}\n\n.secondary.sc-is-alert-h {\n  color: white;\n  background-color: #ff7d09;\n}\n\n.success.sc-is-alert-h {\n  color: white;\n  background-color: #00c092;\n}\n\n.warning.sc-is-alert-h {\n  color: white;\n  background-color: #e8d700;\n}\n\n.error.sc-is-alert-h {\n  color: white;\n  background-color: #d0021b;\n}\n\n.light.sc-is-alert-h {\n  color: black;\n  background-color: #e5e5e5;\n}\n\n.info.sc-is-alert-h {\n  color: black;\n  background-color: #b9b9b9;\n}\n\n.dark.sc-is-alert-h {\n  color: white;\n  background-color: #5d5d5d;\n}\n\n.white.sc-is-alert-h {\n  color: black;\n  background-color: white;\n}\n\n.black.sc-is-alert-h {\n  color: white;\n  background-color: black;\n}\n\n.rounded.sc-is-alert-h {\n  \n  border-radius: var(--border-radius, 4px);\n}"; }
};

export { Alert as is_alert };
