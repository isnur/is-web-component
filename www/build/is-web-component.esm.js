import { b as bootstrapLazy } from './index-9699d743.js';
import { p as patchBrowser, g as globalScripts } from './app-globals-803ad23a.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["is-multiselect",[[2,"is-multiselect",{"disabled":[4],"placeholder":[1],"items":[16],"selected":[16],"labelTo":[16],"limit":[2],"limitText":[16],"labelSelected":[1,"label-selected"],"showSelectedBadge":[4,"show-selected-badge"],"max":[2],"closeOnSelect":[4,"close-on-select"],"isExpanded":[32],"keyword":[32],"textSelected":[32],"tags":[32],"getSelected":[64]},[[4,"click","handleClick"]]]]],["is-alert",[[6,"is-alert",{"color":[1],"autoClose":[4,"auto-close"],"closeSecs":[2,"close-secs"],"closeable":[4],"closeText":[1,"close-text"],"rounded":[4],"countDownTimerId":[32]}]]],["is-modal",[[6,"is-modal",{"modalTitle":[1,"modal-title"],"cancelText":[1,"cancel-text"],"saveText":[1,"save-text"],"visible":[1540],"modalHeader":[1540,"modal-header"]}]]],["is-pagination",[[1,"is-pagination",{"color":[1],"totalRows":[8,"total-rows"],"perPage":[8,"per-page"],"currentPage":[8,"current-page"],"list":[32]}]]],["is-readmore",[[4,"is-readmore",{"toggleOptions":[16],"contentExpanded":[32]}]]],["is-tab",[[0,"is-tab",{"label":[1],"isActive":[4,"is-active"]}]]],["is-tabs",[[4,"is-tabs"]]],["is-badge",[[2,"is-badge",{"color":[1],"text":[1],"rounded":[4]}]]]], options);
});
