import { r as registerInstance, h, H as Host } from './core-6ec07ed7.js';

const Readmore = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The options to config toggle text.
         */
        this.toggleOptions = {
            textOpen: 'Open',
            textClose: 'Close',
            textPosition: 'left',
            textClass: ''
        };
    }
    toggle() {
        this.contentExpanded = !this.contentExpanded;
    }
    setPosition() {
        if (this.toggleOptions.textPosition === 'right') {
            return 'align-right';
        }
        else if (this.toggleOptions.textPosition === 'center') {
            return 'align-center';
        }
        else {
            return 'align-left';
        }
    }
    componentDidLoad() {
        this.contentExpanded = false;
    }
    render() {
        return (h(Host, null, h("div", { class: {
                'content': true,
                'active': this.contentExpanded
            } }, h("slot", null)), h("div", { class: 'content-toggle ' + (this.setPosition()) + ' ' + this.toggleOptions.textClass, onClick: () => this.toggle() }, this.contentExpanded ? this.toggleOptions.textClose : this.toggleOptions.textOpen)));
    }
    static get style() { return "is-readmore {\n  display: block;\n}\nis-readmore .content {\n  position: relative;\n  width: 100%;\n  height: var(--height, 260px);\n  overflow: hidden;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\nis-readmore .content.active {\n  height: auto;\n  overflow: unset;\n  position: unset;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\nis-readmore .content.active:before {\n  display: none;\n}\nis-readmore .content:before {\n  background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.8) 40%, #ffffff 100%);\n  background: -o-linear-gradient(top, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.8) 40%, #ffffff 100%);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(255, 255, 255, 0)), color-stop(40%, rgba(255, 255, 255, 0.8)), to(#ffffff));\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.8) 40%, #ffffff 100%);\n  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.8) 40%, #ffffff 100%);\n  height: 45px;\n  bottom: 0;\n  position: absolute;\n  z-index: 2;\n  right: 0;\n  left: 0;\n  content: \"\";\n}\nis-readmore .content-toggle {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  cursor: pointer;\n}\nis-readmore .align-right {\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n}\nis-readmore .align-center {\n  -ms-flex-pack: center;\n  justify-content: center;\n}\nis-readmore .align-left {\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n}"; }
};

export { Readmore as is_readmore };
