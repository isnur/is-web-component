import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-e26a522c.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["is-badge",[[2,"is-badge",{"color":[1],"text":[1],"rounded":[4]}]]],["is-multiselect",[[2,"is-multiselect",{"disabled":[4],"placeholder":[1],"items":[16],"selected":[16],"labelTo":[16],"limit":[2],"limitText":[16],"labelSelected":[1,"label-selected"],"showSelectedBadge":[4,"show-selected-badge"],"max":[2],"isExpanded":[32],"keyword":[32],"textSelected":[32],"tags":[32],"getSelected":[64]},[[4,"click","handleClick"]]]]]], options);
});
