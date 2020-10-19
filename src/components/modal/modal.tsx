import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'is-modal',
  styleUrl: 'modal.scss',
  scoped: true
})
export class Modal {
  @Event() private ok: EventEmitter;
  @Event() private cancel: EventEmitter;

  /**
   * The title to display in the modal.
   */
  @Prop() modalTitle: string = 'Modal Title';

  /**
   * The text to display in the cancel button.
   */
  @Prop() cancelText: string = 'Cancel';

  /**
   * The text to display in the save button.
   */
  @Prop() saveText: string = 'Save';

  /**
   * If 'true' will make the modal visible.
   */
  @Prop({
    mutable: true,
    reflectToAttr: true
  })
  public visible: boolean = false;

  /**
   * If 'true' will show the modal header.
   */
  @Prop({
    mutable: true,
    reflectToAttr: true
  })
  public modalHeader: boolean = false;

  private handleCancelClick = () => {
    this.visible = false;
    this.cancel.emit()
  };

  private handleOkClick = () => {
    this.visible = false;
    this.ok.emit()
  };

  private handleClose = () => {
    this.visible = false;
  };


  render() {
    return (
      <div class={this.visible ? 'wrapper visible' : 'wrapper'}>
        <div class="modal">
          <div class={this.modalHeader ? 'modal-header displayed' : 'modal-header'}>
            <h5 class="title">{this.modalTitle}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={this.handleClose}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <slot/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn-secondary" onClick={this.handleCancelClick}>{this.cancelText}</button>
            <button type="button" class="btn-primary" onClick={this.handleOkClick}>{this.saveText}</button>
          </div>
        </div>
      </div>
    )
  }

}
