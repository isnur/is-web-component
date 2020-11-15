import { r as registerInstance, h, f as Host, g as getElement } from './index-08b6f4be.js';

const tabsCss = ".sc-is-tabs-h .tabs.sc-is-tabs{padding-top:15px;padding-bottom:15px;border-bottom:1.5px solid #dee2e6}-content.sc-is-tabs-h{margin:30px auto;width:100%}";

const Tabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.children = [];
        this.tabState = [];
    }
    componentDidLoad() {
        let hostTab = this.element.querySelectorAll('is-tab');
        [].forEach.call(hostTab, (tb, index) => {
            // console.log(tb.getAttribute('isactive'), index);
            console.log(tb.children[0], index);
            /**
             * Init the first tab
             */
            if (index === 0) {
                tb.setAttribute('isactive', true);
            }
            this.children.push(tb.children[0]);
            if (tb.children[0].className.split(' ')[0] !== 'tab') {
                // tb.children[0].style = 'display: none';
                // tb.children[0].remove();
            }
        });
    }
    // TODO - problem to
    componentDidUpdate() {
        // let hostTab = this.element.querySelectorAll('is-tab');
        console.log(this.element, 111);
    }
    render() {
        console.log(this.children, 7000);
        return (h(Host, null, h("section", null, h("ul", { class: "tabs" }, h("slot", null)), h("div", { class: "tabs-content" }, this.children.map(child => {
            if (child.className.split(' ')[0] !== 'tab') {
                return (h("div", { innerHTML: child.outerHTML }));
            }
            // return <div innerHTML={child.outerHTML}></div>;
        })))));
    }
    get element() { return getElement(this); }
};
Tabs.style = tabsCss;

export { Tabs as is_tabs };
