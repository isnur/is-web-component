import { r as registerInstance, h, f as Host } from './index-9699d743.js';

const tabsCss = "";

const Tabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("ul", null, h("slot", null))));
    }
};
Tabs.style = tabsCss;

export { Tabs as is_tabs };
