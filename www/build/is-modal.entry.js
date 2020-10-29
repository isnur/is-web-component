import { r as registerInstance, c as createEvent, h } from './core-b4d71f8d.js';

const Modal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.ok = createEvent(this, "ok", 7);
        this.cancel = createEvent(this, "cancel", 7);
    }
    render() {
        return (h("div", { class: this.visible ? 'wrapper visible' : 'wrapper' }, h("div", { class: "modal" }, h("div", { class: this.modalHeader ? 'modal-header displayed' : 'modal-header' }, h("h5", { class: "title" }, this.modalTitle), h("button", { type: "button", class: "close", "data-dismiss": "modal", "aria-label": "Close", onClick: this.handleClose }, h("span", { "aria-hidden": "true" }, "\u00D7"))), h("div", { class: "modal-body" }, h("slot", null)), h("div", { class: "modal-footer" }, h("button", { type: "button", class: "btn-secondary", onClick: this.handleCancelClick }, this.cancelText), h("button", { type: "button", class: "btn-primary", onClick: this.handleOkClick }, this.saveText)))));
    }
    static get style() { return ".wrapper.sc-is-modal {\n  opacity: 0;\n  visibility: hidden;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.42);\n  -webkit-transition: opacity 0.5s, visibility 0s 0.5s;\n  transition: opacity 0.5s, visibility 0s 0.5s;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  z-index: 1050;\n}\n.wrapper.sc-is-modal .modal.sc-is-modal {\n  font-family: Helvetica, sans-serif;\n  font-size: 14px;\n  background-color: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  width: 90%;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n}\n\@media (min-width: 576px) {\n  .wrapper.sc-is-modal .modal.sc-is-modal {\n    max-width: 500px;\n  }\n}\n.wrapper.sc-is-modal .modal.sc-is-modal .modal-header.sc-is-modal {\n  display: none;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n}\n.wrapper.sc-is-modal .modal.sc-is-modal .modal-header.sc-is-modal h5.sc-is-modal {\n  margin: 0;\n  font-weight: normal;\n}\n.wrapper.sc-is-modal .modal.sc-is-modal .modal-header.sc-is-modal .title.sc-is-modal {\n  font-size: 1.25rem;\n}\n.wrapper.sc-is-modal .modal.sc-is-modal .modal-header.sc-is-modal button.close.sc-is-modal {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: grey;\n  outline: 0;\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.5;\n}\n.wrapper.sc-is-modal .modal.sc-is-modal .modal-header.sc-is-modal button.close.sc-is-modal .sc-is-modal:hover {\n  color: black;\n  cursor: pointer;\n}\n.wrapper.sc-is-modal .modal.sc-is-modal .displayed.sc-is-modal {\n  display: -ms-flexbox;\n  display: flex;\n}\n.wrapper.sc-is-modal .modal.sc-is-modal .modal-body.sc-is-modal {\n  position: relative;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  padding: 1rem;\n}\n.wrapper.sc-is-modal .modal.sc-is-modal .modal-footer.sc-is-modal {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  padding: 1rem;\n  border-top: 1px solid #dee2e6;\n  border-bottom-right-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n}\n.wrapper.sc-is-modal .modal.sc-is-modal .modal-footer.sc-is-modal .btn-primary.sc-is-modal {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n  outline: none;\n}\n.wrapper.sc-is-modal .modal.sc-is-modal .modal-footer.sc-is-modal .btn-primary.sc-is-modal:hover {\n  background-color: #0069d9;\n  border-color: #0062cc;\n  cursor: pointer;\n}\n.wrapper.sc-is-modal .modal.sc-is-modal .modal-footer.sc-is-modal .btn-secondary.sc-is-modal {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n  outline: none;\n}\n.wrapper.sc-is-modal .modal.sc-is-modal .modal-footer.sc-is-modal .btn-secondary.sc-is-modal:hover {\n  background-color: #5a6269;\n  border-color: #5a6269;\n  cursor: pointer;\n}\n.wrapper.sc-is-modal .modal.sc-is-modal .modal-footer.sc-is-modal > .sc-is-modal:not(:last-child) {\n  margin-right: 0.25rem;\n}\n.wrapper.sc-is-modal .modal.sc-is-modal .button-container.sc-is-modal {\n  text-align: right;\n}\n.wrapper.sc-is-modal .modal.sc-is-modal button.sc-is-modal {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n}\n.wrapper.sc-is-modal .modal.sc-is-modal button.sc-is-modal:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.visible.sc-is-modal {\n  opacity: 1;\n  visibility: visible;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition: visibility 0s linear 0s, opacity 0.25s 0s, -webkit-transform 0.25s;\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, -webkit-transform 0.25s;\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s, -webkit-transform 0.25s;\n}"; }
};

export { Modal as is_modal };
