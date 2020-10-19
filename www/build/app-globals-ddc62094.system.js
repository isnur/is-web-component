System.register(['./index-5f5ef015.system.js'], function (exports, module) {
    'use strict';
    var BUILD, CSS, plt, win, promiseResolve, consoleDevInfo, H, doc, NAMESPACE;
    return {
        setters: [function (module) {
                BUILD = module.B;
                CSS = module.C;
                plt = module.p;
                win = module.w;
                promiseResolve = module.a;
                consoleDevInfo = module.c;
                H = module.H;
                doc = module.d;
                NAMESPACE = module.N;
            }],
        execute: function () {
            /*
             Stencil Client Patch v1.17.3 | MIT Licensed | https://stenciljs.com
             */
            var noop = function () {
                /* noop*/
            };
            var IS_DENO_ENV = typeof Deno !== 'undefined';
            var IS_NODE_ENV = !IS_DENO_ENV &&
                typeof global !== 'undefined' &&
                typeof require === 'function' &&
                !!global.process &&
                typeof __filename === 'string' &&
                (!global.origin || typeof global.origin !== 'string');
            var IS_DENO_WINDOWS_ENV = IS_DENO_ENV && Deno.build.os === 'windows';
            var getCurrentDirectory = IS_NODE_ENV ? process.cwd : IS_DENO_ENV ? Deno.cwd : function () { return '/'; };
            var exit = IS_NODE_ENV ? process.exit : IS_DENO_ENV ? Deno.exit : noop;
            var getDynamicImportFunction = function (namespace) { return "__sc_import_" + namespace.replace(/\s|-/g, '_'); };
            var patchEsm = exports('a', function () {
                // NOTE!! This fn cannot use async/await!
                // @ts-ignore
                if (BUILD.cssVarShim && !(CSS && CSS.supports && CSS.supports('color', 'var(--c)'))) {
                    // @ts-ignore
                    return module.import(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-422250a0.system.js').then(function () {
                        if ((plt.$cssShim$ = win.__cssshim)) {
                            return plt.$cssShim$.i();
                        }
                        else {
                            // for better minification
                            return 0;
                        }
                    });
                }
                return promiseResolve();
            });
            var patchBrowser = exports('p', function () {
                // NOTE!! This fn cannot use async/await!
                if (BUILD.isDev && !BUILD.isTesting) {
                    consoleDevInfo('Running in development mode.');
                }
                if (BUILD.cssVarShim) {
                    // shim css vars
                    plt.$cssShim$ = win.__cssshim;
                }
                if (BUILD.cloneNodeFix) {
                    // opted-in to polyfill cloneNode() for slot polyfilled components
                    patchCloneNodeFix(H.prototype);
                }
                if (BUILD.profile && !performance.mark) {
                    // not all browsers support performance.mark/measure (Safari 10)
                    performance.mark = performance.measure = function () {
                        /*noop*/
                    };
                    performance.getEntriesByName = function () { return []; };
                }
                // @ts-ignore
                var scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
                    ? Array.from(doc.querySelectorAll('script')).find(function (s) { return new RegExp("/" + NAMESPACE + "(\\.esm)?\\.js($|\\?|#)").test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE; })
                    : null;
                var importMeta = module.meta.url;
                var opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
                if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
                    // Safari < v11 support: This IF is true if it's Safari below v11.
                    // This fn cannot use async/await since Safari didn't support it until v11,
                    // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
                    // so both the ESM file and nomodule file would get downloaded. Only Safari
                    // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
                    // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
                    // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
                    return {
                        then: function () {
                            /* promise noop */
                        },
                    };
                }
                if (!BUILD.safari10 && importMeta !== '') {
                    opts.resourcesUrl = new URL('.', importMeta).href;
                }
                else if (BUILD.dynamicImportShim || BUILD.safari10) {
                    opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
                    if (BUILD.dynamicImportShim) {
                        patchDynamicImport(opts.resourcesUrl, scriptElm);
                    }
                    if (BUILD.dynamicImportShim && !win.customElements) {
                        // module support, but no custom elements support (Old Edge)
                        // @ts-ignore
                        return module.import(/* webpackChunkName: "polyfills-dom" */ './dom-000b3f58.system.js').then(function () { return opts; });
                    }
                }
                return promiseResolve(opts);
            });
            var patchDynamicImport = function (base, orgScriptElm) {
                var importFunctionName = getDynamicImportFunction(NAMESPACE);
                try {
                    // test if this browser supports dynamic imports
                    // There is a caching issue in V8, that breaks using import() in Function
                    // By generating a random string, we can workaround it
                    // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
                    win[importFunctionName] = new Function('w', "return import(w);//" + Math.random());
                }
                catch (e) {
                    // this shim is specifically for browsers that do support "esm" imports
                    // however, they do NOT support "dynamic" imports
                    // basically this code is for old Edge, v18 and below
                    var moduleMap_1 = new Map();
                    win[importFunctionName] = function (src) {
                        var url = new URL(src, base).href;
                        var mod = moduleMap_1.get(url);
                        if (!mod) {
                            var script_1 = doc.createElement('script');
                            script_1.type = 'module';
                            script_1.crossOrigin = orgScriptElm.crossOrigin;
                            script_1.src = URL.createObjectURL(new Blob(["import * as m from '" + url + "'; window." + importFunctionName + ".m = m;"], { type: 'application/javascript' }));
                            mod = new Promise(function (resolve) {
                                script_1.onload = function () {
                                    resolve(win[importFunctionName].m);
                                    script_1.remove();
                                };
                            });
                            moduleMap_1.set(url, mod);
                            doc.head.appendChild(script_1);
                        }
                        return mod;
                    };
                }
            };
            var patchCloneNodeFix = function (HTMLElementPrototype) {
                var nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
                HTMLElementPrototype.cloneNode = function (deep) {
                    if (this.nodeName === 'TEMPLATE') {
                        return nativeCloneNodeFn.call(this, deep);
                    }
                    var clonedNode = nativeCloneNodeFn.call(this, false);
                    var srcChildNodes = this.childNodes;
                    if (deep) {
                        for (var i = 0; i < srcChildNodes.length; i++) {
                            // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                            if (srcChildNodes[i].nodeType !== 2) {
                                clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                            }
                        }
                    }
                    return clonedNode;
                };
            };
            var globalScripts = exports('g', function () { });
        }
    };
});
