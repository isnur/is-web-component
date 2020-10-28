/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  IToggleOptions,
} from './components/readmore/readmore.interface';

export namespace Components {
  interface IsAlert {
    /**
    * If `true` alert will close automatically.
    */
    'autoClose': boolean;
    /**
    * Number of seconds to close alert automatically if autoClose `true`.
    */
    'closeSecs': number;
    /**
    * Customized close button text.
    */
    'closeText'?: string;
    /**
    * If closable or not.
    */
    'closeable': boolean;
    /**
    * The color options are: `"primary"`, `"secondary"`, `"success"`, `"warning"`, `"error"`, `"light"`, `"info"`, `"white"`, `"black"`, and `"dark"`.
    */
    'color'?: string;
    /**
    * If `true`, make the alert rounded.
    */
    'rounded'?: boolean;
  }
  interface IsBadge {
    /**
    * The color options are: `"primary"`, `"secondary"`, `"success"`, `"warning"`, `"error"`, `"light"`, `"info"`, `"white"`, `"black"`, and `"dark"`.
    */
    'color'?: string;
    /**
    * If `true`, make the badge rounded.
    */
    'rounded'?: boolean;
    /**
    * The text to display in the badge.
    */
    'text': string;
  }
  interface IsModal {
    /**
    * The text to display in the cancel button.
    */
    'cancelText': string;
    /**
    * If 'true' will show the modal header.
    */
    'modalHeader': boolean;
    /**
    * The title to display in the modal.
    */
    'modalTitle': string;
    /**
    * The text to display in the save button.
    */
    'saveText': string;
    /**
    * If 'true' will make the modal visible.
    */
    'visible': boolean;
  }
  interface IsMultiselect {
    /**
    * If `true`, the user cannot interact with the select.
    */
    'disabled': boolean;
    /**
    * Get the selected items.
    */
    'getSelected': () => Promise<ISelectItem[]>;
    /**
    * The options list items.
    */
    'items': ISelectItem[];
    /**
    * The label when option is selected.
    */
    'labelSelected': string;
    /**
    * The label to remove or select.
    */
    'labelTo': ILabelTo;
    /**
    * Limit the display of selected options. The rest will be hidden within the limitText string.
    */
    'limit': number;
    /**
    * Function that process the message shown when selected elements pass the defined limit.
    */
    'limitText': Function;
    /**
    * Maximum selected items can be selected.
    */
    'max': number;
    /**
    * The text to display when not selected items.
    */
    'placeholder': string;
    /**
    * The selected items.
    */
    'selected': ISelectItem[];
    /**
    * If `true`, The badges will show selected items.
    */
    'showSelectedBadge': boolean;
  }
  interface IsReadmore {
    /**
    * The options to config toggle text.
    */
    'toggleOptions': IToggleOptions;
  }
}

declare global {


  interface HTMLIsAlertElement extends Components.IsAlert, HTMLStencilElement {}
  var HTMLIsAlertElement: {
    prototype: HTMLIsAlertElement;
    new (): HTMLIsAlertElement;
  };

  interface HTMLIsBadgeElement extends Components.IsBadge, HTMLStencilElement {}
  var HTMLIsBadgeElement: {
    prototype: HTMLIsBadgeElement;
    new (): HTMLIsBadgeElement;
  };

  interface HTMLIsModalElement extends Components.IsModal, HTMLStencilElement {}
  var HTMLIsModalElement: {
    prototype: HTMLIsModalElement;
    new (): HTMLIsModalElement;
  };

  interface HTMLIsMultiselectElement extends Components.IsMultiselect, HTMLStencilElement {}
  var HTMLIsMultiselectElement: {
    prototype: HTMLIsMultiselectElement;
    new (): HTMLIsMultiselectElement;
  };

  interface HTMLIsReadmoreElement extends Components.IsReadmore, HTMLStencilElement {}
  var HTMLIsReadmoreElement: {
    prototype: HTMLIsReadmoreElement;
    new (): HTMLIsReadmoreElement;
  };
  interface HTMLElementTagNameMap {
    'is-alert': HTMLIsAlertElement;
    'is-badge': HTMLIsBadgeElement;
    'is-modal': HTMLIsModalElement;
    'is-multiselect': HTMLIsMultiselectElement;
    'is-readmore': HTMLIsReadmoreElement;
  }
}

declare namespace LocalJSX {
  interface IsAlert {
    /**
    * If `true` alert will close automatically.
    */
    'autoClose'?: boolean;
    /**
    * Number of seconds to close alert automatically if autoClose `true`.
    */
    'closeSecs'?: number;
    /**
    * Customized close button text.
    */
    'closeText'?: string;
    /**
    * If closable or not.
    */
    'closeable'?: boolean;
    /**
    * The color options are: `"primary"`, `"secondary"`, `"success"`, `"warning"`, `"error"`, `"light"`, `"info"`, `"white"`, `"black"`, and `"dark"`.
    */
    'color'?: string;
    /**
    * Emitted when the alert is closed.
    */
    'onClosed'?: (event: CustomEvent<any>) => void;
    /**
    * If `true`, make the alert rounded.
    */
    'rounded'?: boolean;
  }
  interface IsBadge {
    /**
    * The color options are: `"primary"`, `"secondary"`, `"success"`, `"warning"`, `"error"`, `"light"`, `"info"`, `"white"`, `"black"`, and `"dark"`.
    */
    'color'?: string;
    /**
    * If `true`, make the badge rounded.
    */
    'rounded'?: boolean;
    /**
    * The text to display in the badge.
    */
    'text'?: string;
  }
  interface IsModal {
    /**
    * The text to display in the cancel button.
    */
    'cancelText'?: string;
    /**
    * If 'true' will show the modal header.
    */
    'modalHeader'?: boolean;
    /**
    * The title to display in the modal.
    */
    'modalTitle'?: string;
    'onCancel'?: (event: CustomEvent<any>) => void;
    'onOk'?: (event: CustomEvent<any>) => void;
    /**
    * The text to display in the save button.
    */
    'saveText'?: string;
    /**
    * If 'true' will make the modal visible.
    */
    'visible'?: boolean;
  }
  interface IsMultiselect {
    /**
    * If `true`, the user cannot interact with the select.
    */
    'disabled'?: boolean;
    /**
    * The options list items.
    */
    'items'?: ISelectItem[];
    /**
    * The label when option is selected.
    */
    'labelSelected'?: string;
    /**
    * The label to remove or select.
    */
    'labelTo'?: ILabelTo;
    /**
    * Limit the display of selected options. The rest will be hidden within the limitText string.
    */
    'limit'?: number;
    /**
    * Function that process the message shown when selected elements pass the defined limit.
    */
    'limitText'?: Function;
    /**
    * Maximum selected items can be selected.
    */
    'max'?: number;
    /**
    * Emitted when the selected items has changed.
    */
    'onSelectedChanged'?: (event: CustomEvent<any>) => void;
    /**
    * The text to display when not selected items.
    */
    'placeholder'?: string;
    /**
    * The selected items.
    */
    'selected'?: ISelectItem[];
    /**
    * If `true`, The badges will show selected items.
    */
    'showSelectedBadge'?: boolean;
  }
  interface IsReadmore {
    /**
    * The options to config toggle text.
    */
    'toggleOptions'?: IToggleOptions;
  }

  interface IntrinsicElements {
    'is-alert': IsAlert;
    'is-badge': IsBadge;
    'is-modal': IsModal;
    'is-multiselect': IsMultiselect;
    'is-readmore': IsReadmore;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'is-alert': LocalJSX.IsAlert & JSXBase.HTMLAttributes<HTMLIsAlertElement>;
      'is-badge': LocalJSX.IsBadge & JSXBase.HTMLAttributes<HTMLIsBadgeElement>;
      'is-modal': LocalJSX.IsModal & JSXBase.HTMLAttributes<HTMLIsModalElement>;
      'is-multiselect': LocalJSX.IsMultiselect & JSXBase.HTMLAttributes<HTMLIsMultiselectElement>;
      'is-readmore': LocalJSX.IsReadmore & JSXBase.HTMLAttributes<HTMLIsReadmoreElement>;
    }
  }
}


