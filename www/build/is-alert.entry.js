import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-9699d743.js';

const alertCss = ".sc-is-alert-h{-webkit-font-smoothing:antialiased;padding:var(--padding-top, 8px) var(--padding-right, 16px) var(--padding-bottom, 8px) var(--padding-left, 16px);min-height:var(--height, 24px);color:var(--color, #fff);background-color:var(--background-color, #327bb7);border-color:transparent;font-family:var(--font-family, \"Helvetica Neue\", Helvetica, Arial, sans-serif);font-size:var(--font-size, 13px);font-weight:var(--font-weight, normal);line-height:1;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center}.sc-is-alert-h .alert__content.sc-is-alert{display:block;height:100%;width:100%}.sc-is-alert-h .alert__close-text.sc-is-alert{cursor:pointer;opacity:0.7;position:absolute;top:14px;right:16px;font-size:0.8em}.sc-is-alert-h .alert__close-text.sc-is-alert:hover{opacity:0.85}.primary.sc-is-alert-h{color:white;background-color:#327bb7}.secondary.sc-is-alert-h{color:white;background-color:#ff7d09}.success.sc-is-alert-h{color:white;background-color:#00c092}.warning.sc-is-alert-h{color:white;background-color:#e8d700}.error.sc-is-alert-h{color:white;background-color:#d0021b}.light.sc-is-alert-h{color:black;background-color:#e5e5e5}.info.sc-is-alert-h{color:black;background-color:#b9b9b9}.dark.sc-is-alert-h{color:white;background-color:#5d5d5d}.white.sc-is-alert-h{color:black;background-color:white}.black.sc-is-alert-h{color:white;background-color:black}.rounded.sc-is-alert-h{border-radius:var(--border-radius, 4px)}";

const Alert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closed = createEvent(this, "closed", 7);
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
    }
    componentWillLoad() {
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
};
Alert.style = alertCss;

export { Alert as is_alert };
