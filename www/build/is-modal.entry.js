import { r as registerInstance, e as createEvent, h } from './index-08b6f4be.js';

const modalCss = ".wrapper.sc-is-modal{opacity:0;visibility:hidden;position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0, 0, 0, 0.42);-webkit-transition:opacity 0.5s, visibility 0s 0.5s;transition:opacity 0.5s, visibility 0s 0.5s;display:flex;align-items:center;justify-content:center;z-index:1050}.wrapper.sc-is-modal .modal.sc-is-modal{font-family:Helvetica, sans-serif;font-size:14px;background-color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:90%;border:1px solid rgba(0, 0, 0, 0.2);border-radius:0.3rem}@media (min-width: 576px){.wrapper.sc-is-modal .modal.sc-is-modal{max-width:500px}}.wrapper.sc-is-modal .modal.sc-is-modal .modal-header.sc-is-modal{display:none;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:justify;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:0.3rem;border-top-right-radius:0.3rem}.wrapper.sc-is-modal .modal.sc-is-modal .modal-header.sc-is-modal h5.sc-is-modal{margin:0;font-weight:normal}.wrapper.sc-is-modal .modal.sc-is-modal .modal-header.sc-is-modal .title.sc-is-modal{font-size:1.25rem}.wrapper.sc-is-modal .modal.sc-is-modal .modal-header.sc-is-modal button.close.sc-is-modal{padding:0;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:grey;outline:0;float:right;font-size:1.5rem;font-weight:700;line-height:1;text-shadow:0 1px 0 #fff;opacity:0.5}.wrapper.sc-is-modal .modal.sc-is-modal .modal-header.sc-is-modal button.close.sc-is-modal .sc-is-modal:hover{color:black;cursor:pointer}.wrapper.sc-is-modal .modal.sc-is-modal .displayed.sc-is-modal{display:flex}.wrapper.sc-is-modal .modal.sc-is-modal .modal-body.sc-is-modal{position:relative;-ms-flex:1 1 auto;flex:1 1 auto;padding:1rem}.wrapper.sc-is-modal .modal.sc-is-modal .modal-footer.sc-is-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding:1rem;border-top:1px solid #dee2e6;border-bottom-right-radius:0.3rem;border-bottom-left-radius:0.3rem}.wrapper.sc-is-modal .modal.sc-is-modal .modal-footer.sc-is-modal .btn-primary.sc-is-modal{color:#fff;background-color:#007bff;border-color:#007bff;outline:none}.wrapper.sc-is-modal .modal.sc-is-modal .modal-footer.sc-is-modal .btn-primary.sc-is-modal:hover{background-color:#0069d9;border-color:#0062cc;cursor:pointer}.wrapper.sc-is-modal .modal.sc-is-modal .modal-footer.sc-is-modal .btn-secondary.sc-is-modal{color:#fff;background-color:#6c757d;border-color:#6c757d;outline:none}.wrapper.sc-is-modal .modal.sc-is-modal .modal-footer.sc-is-modal .btn-secondary.sc-is-modal:hover{background-color:#5a6269;border-color:#5a6269;cursor:pointer}.wrapper.sc-is-modal .modal.sc-is-modal .modal-footer.sc-is-modal>.sc-is-modal:not(:last-child){margin-right:0.25rem}.wrapper.sc-is-modal .modal.sc-is-modal .button-container.sc-is-modal{text-align:right}.wrapper.sc-is-modal .modal.sc-is-modal button.sc-is-modal{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:0.375rem 0.75rem;font-size:1rem;line-height:1.5;border-radius:0.25rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.wrapper.sc-is-modal .modal.sc-is-modal button.sc-is-modal:hover{background-color:#6c757d;border-color:#6c757d}.visible.sc-is-modal{opacity:1;visibility:visible;transform:scale(1);transition:visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s}";

const Modal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ok = createEvent(this, "ok", 7);
        this.cancel = createEvent(this, "cancel", 7);
        /**
         * The title to display in the modal.
         */
        this.modalTitle = 'Modal Title';
        /**
         * The text to display in the cancel button.
         */
        this.cancelText = 'Cancel';
        /**
         * The text to display in the save button.
         */
        this.saveText = 'Save';
        /**
         * If 'true' will make the modal visible.
         */
        this.visible = false;
        /**
         * If 'true' will show the modal header.
         */
        this.modalHeader = false;
        this.handleCancelClick = () => {
            this.visible = false;
            this.cancel.emit();
        };
        this.handleOkClick = () => {
            this.visible = false;
            this.ok.emit();
        };
        this.handleClose = () => {
            this.visible = false;
        };
    }
    render() {
        return (h("div", { class: this.visible ? 'wrapper visible' : 'wrapper' }, h("div", { class: "modal" }, h("div", { class: this.modalHeader ? 'modal-header displayed' : 'modal-header' }, h("h5", { class: "title" }, this.modalTitle), h("button", { type: "button", class: "close", "data-dismiss": "modal", "aria-label": "Close", onClick: this.handleClose }, h("span", { "aria-hidden": "true" }, "\u00D7"))), h("div", { class: "modal-body" }, h("slot", null)), h("div", { class: "modal-footer" }, h("button", { type: "button", class: "btn-secondary", onClick: this.handleCancelClick }, this.cancelText), h("button", { type: "button", class: "btn-primary", onClick: this.handleOkClick }, this.saveText)))));
    }
};
Modal.style = modalCss;

export { Modal as is_modal };
