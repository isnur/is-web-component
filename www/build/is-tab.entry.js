import { r as registerInstance, h, f as Host } from './index-08b6f4be.js';

const tabCss = ".sc-is-tab-h .tab.sc-is-tab{display:inline-block;cursor:pointer}.sc-is-tab-h .tab-link.sc-is-tab{color:#495057;padding:15px;margin:0 -2px;border-width:0.2rem;border-top:1.5px solid transparent;border-left:1.5px solid transparent;border-right:1.5px solid transparent;border-radius:5px 5px 0 0;text-decoration:none !important}.sc-is-tab-h .tab-link-active.sc-is-tab{color:#6c757d;padding:15px;margin:0 -2px;border-width:0.2rem;border-radius:5px 5px 0 0;border-top:1.5px solid #dee2e6;border-left:1.5px solid #dee2e6;border-right:1.5px solid #dee2e6;border-bottom:1.5px solid #fff}.sc-is-tab-h .tab-link-disable.sc-is-tab{color:#49506c;padding:15px;margin:0 -2px;border:none;cursor:auto}.sc-is-tab-h .tab-link.sc-is-tab:hover{color:#007bff;border-top:1.5px solid #dddddd;border-left:1.5px solid #dddddd;border-right:1.5px solid #dddddd}";

const Tab = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // @Watch('isactive')
        // watchIsActive() {
        //   this.isactive = !this.isactive ? false : true;
        // }
        this.handleOnClick = () => {
            this.isactive = !this.isactive;
        };
    }
    watchIsDisable() {
        this.disable = !this.disable ? false : true;
    }
    render() {
        return (h(Host, null, h("li", { class: 'tab' }, h("a", { class: !this.disable ? (this.isactive ? 'tab-link-active' : 'tab-link')
                : 'tab-link-disable', onClick: this.handleOnClick }, this.label))));
    }
    static get watchers() { return {
        "disable": ["watchIsDisable"]
    }; }
};
Tab.style = tabCss;

export { Tab as is_tab };
