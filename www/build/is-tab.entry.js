import { r as registerInstance, e as createEvent, h, f as Host } from './index-9699d743.js';

const tabCss = ":host .tab{font-size:40px}:host .tab-link{color:blue}";

const Tab = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tabClick = createEvent(this, "tabClick", 7);
    }
    render() {
        return (h(Host, null, h("li", { class: 'tab' }, h("a", { class: 'tab-link', onClick: this.tabClick }, this.label))));
    }
};
Tab.style = tabCss;

export { Tab as is_tab };
