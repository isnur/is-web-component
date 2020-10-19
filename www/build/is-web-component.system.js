System.register(['./index-5f5ef015.system.js', './app-globals-ddc62094.system.js'], function () {
    'use strict';
    var bootstrapLazy, patchBrowser, globalScripts;
    return {
        setters: [function (module) {
                bootstrapLazy = module.b;
            }, function (module) {
                patchBrowser = module.p;
                globalScripts = module.g;
            }],
        execute: function () {
            patchBrowser().then(function (options) {
                globalScripts();
                return bootstrapLazy([["is-multiselect.system", [[2, "is-multiselect", { "disabled": [4], "placeholder": [1], "items": [16], "selected": [16], "labelTo": [16], "limit": [2], "limitText": [16], "labelSelected": [1, "label-selected"], "showSelectedBadge": [4, "show-selected-badge"], "max": [2], "isExpanded": [32], "keyword": [32], "textSelected": [32], "tags": [32], "getSelected": [64] }, [[4, "click", "handleClick"]]]]], ["is-alert.system", [[6, "is-alert", { "color": [1], "autoClose": [4, "auto-close"], "closeSecs": [2, "close-secs"], "closeable": [4], "closeText": [1, "close-text"], "rounded": [4], "countDownTimerId": [32] }]]], ["is-modal.system", [[6, "is-modal", { "modalTitle": [1, "modal-title"], "cancelText": [1, "cancel-text"], "saveText": [1, "save-text"], "visible": [1540], "modalHeader": [1540, "modal-header"] }]]], ["is-readmore.system", [[4, "is-readmore", { "toggleOptions": [16], "contentExpanded": [32] }]]], ["is-badge.system", [[2, "is-badge", { "color": [1], "text": [1], "rounded": [4] }]]]], options);
            });
        }
    };
});
