var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
System.register([], function (exports, module) {
    'use strict';
    return {
        execute: function () {
            var _this = this;
            var NAMESPACE = exports('N', 'is-web-component');
            var BUILD = exports('B', /* is-web-component */ { allRenderFn: true, appendChildSlotFix: false, asyncLoading: true, asyncQueue: true, attachStyles: true, cloneNodeFix: false, cmpDidLoad: true, cmpDidRender: false, cmpDidUnload: true, cmpDidUpdate: false, cmpShouldUpdate: false, cmpWillLoad: true, cmpWillRender: false, cmpWillUpdate: false, connectedCallback: false, constructableCSS: true, cssAnnotations: true, cssVarShim: true, devTools: false, disconnectedCallback: false, dynamicImportShim: true, element: false, event: true, hasRenderFn: true, hostListener: true, hostListenerTarget: true, hostListenerTargetBody: false, hostListenerTargetDocument: true, hostListenerTargetParent: false, hostListenerTargetWindow: false, hotModuleReplacement: false, hydrateClientSide: false, hydrateServerSide: false, hydratedAttribute: false, hydratedClass: true, initializeNextTick: true, isDebug: false, isDev: true, isTesting: true, lazyLoad: true, lifecycle: true, lifecycleDOMEvents: true, member: true, method: true, mode: false, observeAttribute: true, profile: false, prop: true, propBoolean: true, propMutable: true, propNumber: true, propString: true, reflect: true, safari10: true, scoped: true, scriptDataOpts: true, shadowDelegatesFocus: false, shadowDom: false, shadowDomShim: true, slot: true, slotChildNodesFix: false, slotRelocation: true, state: true, style: true, svg: false, taskQueue: true, transformTagName: false, updatable: true, vdomAttribute: true, vdomClass: true, vdomFunctional: false, vdomKey: true, vdomListener: true, vdomPropOrAttr: true, vdomRef: true, vdomRender: true, vdomStyle: true, vdomText: true, vdomXlink: false, watchCallback: true });
            var scopeId;
            var contentRef;
            var hostTagName;
            var i = 0;
            var useNativeShadowDom = false;
            var checkSlotFallbackVisibility = false;
            var checkSlotRelocate = false;
            var isSvgMode = false;
            var renderingRef = null;
            var queueCongestion = 0;
            var queuePending = false;
            var win = exports('w', typeof window !== 'undefined' ? window : {});
            var CSS = exports('C', BUILD.cssVarShim ? win.CSS : null);
            var doc = exports('d', win.document || { head: {} });
            var H = exports('H', (win.HTMLElement || /** @class */ (function () {
                function HTMLElement() {
                }
                return HTMLElement;
            }())));
            var plt = exports('p', {
                $flags$: 0,
                $resourcesUrl$: '',
                jmp: function (h) { return h(); },
                raf: function (h) { return requestAnimationFrame(h); },
                ael: function (el, eventName, listener, opts) { return el.addEventListener(eventName, listener, opts); },
                rel: function (el, eventName, listener, opts) { return el.removeEventListener(eventName, listener, opts); },
                ce: function (eventName, opts) { return new CustomEvent(eventName, opts); },
            });
            var supportsShadow = BUILD.shadowDomShim && BUILD.shadowDom ? /*@__PURE__*/ (function () { return (doc.head.attachShadow + '').indexOf('[native') > -1; })() : true;
            var supportsListenerOptions = /*@__PURE__*/ (function () {
                var supportsListenerOptions = false;
                try {
                    doc.addEventListener('e', null, Object.defineProperty({}, 'passive', {
                        get: function () {
                            supportsListenerOptions = true;
                        },
                    }));
                }
                catch (e) { }
                return supportsListenerOptions;
            })();
            var promiseResolve = exports('a', function (v) { return Promise.resolve(v); });
            var supportsConstructibleStylesheets = BUILD.constructableCSS
                ? /*@__PURE__*/ (function () {
                    try {
                        new CSSStyleSheet();
                        return true;
                    }
                    catch (e) { }
                    return false;
                })()
                : false;
            var Context = {};
            var addHostEventListeners = function (elm, hostRef, listeners, attachParentListeners) {
                if (BUILD.hostListener && listeners) {
                    // this is called immediately within the element's constructor
                    // initialize our event listeners on the host element
                    // we do this now so that we can listen to events that may
                    // have fired even before the instance is ready
                    if (BUILD.hostListenerTargetParent) {
                        // this component may have event listeners that should be attached to the parent
                        if (attachParentListeners) {
                            // this is being ran from within the connectedCallback
                            // which is important so that we know the host element actually has a parent element
                            // filter out the listeners to only have the ones that ARE being attached to the parent
                            listeners = listeners.filter(function (_a) {
                                var flags = _a[0];
                                return flags & 16;
                            } /* TargetParent */);
                        }
                        else {
                            // this is being ran from within the component constructor
                            // everything BUT the parent element listeners should be attached at this time
                            // filter out the listeners that are NOT being attached to the parent
                            listeners = listeners.filter(function (_a) {
                                var flags = _a[0];
                                return !(flags & 16 /* TargetParent */);
                            });
                        }
                    }
                    listeners.map(function (_a) {
                        var flags = _a[0], name = _a[1], method = _a[2];
                        var target = BUILD.hostListenerTarget ? getHostListenerTarget(elm, flags) : elm;
                        var handler = hostListenerProxy(hostRef, method);
                        var opts = hostListenerOpts(flags);
                        plt.ael(target, name, handler, opts);
                        (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(function () { return plt.rel(target, name, handler, opts); });
                    });
                }
            };
            var hostListenerProxy = function (hostRef, methodName) { return function (ev) {
                if (BUILD.lazyLoad) {
                    if (hostRef.$flags$ & 256 /* isListenReady */) {
                        // instance is ready, let's call it's member method for this event
                        hostRef.$lazyInstance$[methodName](ev);
                    }
                    else {
                        (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
                    }
                }
                else {
                    hostRef.$hostElement$[methodName](ev);
                }
            }; };
            var getHostListenerTarget = function (elm, flags) {
                if (BUILD.hostListenerTargetDocument && flags & 4 /* TargetDocument */)
                    return doc;
                if (BUILD.hostListenerTargetWindow && flags & 8 /* TargetWindow */)
                    return win;
                if (BUILD.hostListenerTargetBody && flags & 32 /* TargetBody */)
                    return doc.body;
                if (BUILD.hostListenerTargetParent && flags & 16 /* TargetParent */)
                    return elm.parentElement;
                return elm;
            };
            // prettier-ignore
            var hostListenerOpts = function (flags) { return supportsListenerOptions
                ? ({
                    passive: (flags & 1 /* Passive */) !== 0,
                    capture: (flags & 2 /* Capture */) !== 0,
                })
                : (flags & 2 /* Capture */) !== 0; };
            var CONTENT_REF_ID = 'r';
            var ORG_LOCATION_ID = 'o';
            var SLOT_NODE_ID = 's';
            var TEXT_NODE_ID = 't';
            var HYDRATE_ID = 's-id';
            var HYDRATED_STYLE_ID = 'sty-id';
            var HYDRATE_CHILD_ID = 'c-id';
            var HYDRATED_CSS = '{visibility:hidden}.hydrated{visibility:inherit}';
            var XLINK_NS = 'http://www.w3.org/1999/xlink';
            var createTime = function (fnName, tagName) {
                if (tagName === void 0) { tagName = ''; }
                if (BUILD.profile && performance.mark) {
                    var key_1 = "st:" + fnName + ":" + tagName + ":" + i++;
                    // Start
                    performance.mark(key_1);
                    // End
                    return function () { return performance.measure("[Stencil] " + fnName + "() <" + tagName + ">", key_1); };
                }
                else {
                    return function () {
                        return;
                    };
                }
            };
            var uniqueTime = function (key, measureText) {
                if (BUILD.profile && performance.mark) {
                    if (performance.getEntriesByName(key).length === 0) {
                        performance.mark(key);
                    }
                    return function () {
                        if (performance.getEntriesByName(measureText).length === 0) {
                            performance.measure(measureText, key);
                        }
                    };
                }
                else {
                    return function () {
                        return;
                    };
                }
            };
            var inspect = function (ref) {
                var _a;
                var hostRef = getHostRef(ref);
                if (!hostRef) {
                    return undefined;
                }
                var flags = hostRef.$flags$;
                var hostElement = hostRef.$hostElement$;
                return _a = {
                        renderCount: hostRef.$renderCount$,
                        flags: {
                            hasRendered: !!(flags & 2 /* hasRendered */),
                            hasConnected: !!(flags & 1 /* hasConnected */),
                            isWaitingForChildren: !!(flags & 4 /* isWaitingForChildren */),
                            isConstructingInstance: !!(flags & 8 /* isConstructingInstance */),
                            isQueuedForUpdate: !!(flags & 16 /* isQueuedForUpdate */),
                            hasInitializedComponent: !!(flags & 32 /* hasInitializedComponent */),
                            hasLoadedComponent: !!(flags & 64 /* hasLoadedComponent */),
                            isWatchReady: !!(flags & 128 /* isWatchReady */),
                            isListenReady: !!(flags & 256 /* isListenReady */),
                            needsRerender: !!(flags & 512 /* needsRerender */),
                        },
                        instanceValues: hostRef.$instanceValues$,
                        ancestorComponent: hostRef.$ancestorComponent$,
                        hostElement: hostElement,
                        lazyInstance: hostRef.$lazyInstance$,
                        vnode: hostRef.$vnode$,
                        modeName: hostRef.$modeName$,
                        onReadyPromise: hostRef.$onReadyPromise$,
                        onReadyResolve: hostRef.$onReadyResolve$,
                        onInstancePromise: hostRef.$onInstancePromise$,
                        onInstanceResolve: hostRef.$onInstanceResolve$,
                        onRenderResolve: hostRef.$onRenderResolve$,
                        queuedListeners: hostRef.$queuedListeners$,
                        rmListeners: hostRef.$rmListeners$
                    },
                    _a['s-id'] = hostElement['s-id'],
                    _a['s-cr'] = hostElement['s-cr'],
                    _a['s-lr'] = hostElement['s-lr'],
                    _a['s-p'] = hostElement['s-p'],
                    _a['s-rc'] = hostElement['s-rc'],
                    _a['s-sc'] = hostElement['s-sc'],
                    _a;
            };
            var installDevTools = function () {
                if (BUILD.devTools) {
                    var stencil = (win.stencil = win.stencil || {});
                    var originalInspect_1 = stencil.inspect;
                    stencil.inspect = function (ref) {
                        var result = inspect(ref);
                        if (!result && typeof originalInspect_1 === 'function') {
                            result = originalInspect_1(ref);
                        }
                        return result;
                    };
                }
            };
            var rootAppliedStyles = new WeakMap();
            var registerStyle = function (scopeId, cssText, allowCS) {
                var style = styles.get(scopeId);
                if (supportsConstructibleStylesheets && allowCS) {
                    style = (style || new CSSStyleSheet());
                    style.replace(cssText);
                }
                else {
                    style = cssText;
                }
                styles.set(scopeId, style);
            };
            var addStyle = function (styleContainerNode, cmpMeta, mode, hostElm) {
                var scopeId = getScopeId(cmpMeta, mode);
                var style = styles.get(scopeId);
                if (!BUILD.attachStyles) {
                    return scopeId;
                }
                // if an element is NOT connected then getRootNode() will return the wrong root node
                // so the fallback is to always use the document for the root node in those cases
                styleContainerNode = styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc;
                if (style) {
                    if (typeof style === 'string') {
                        styleContainerNode = styleContainerNode.head || styleContainerNode;
                        var appliedStyles = rootAppliedStyles.get(styleContainerNode);
                        var styleElm = void 0;
                        if (!appliedStyles) {
                            rootAppliedStyles.set(styleContainerNode, (appliedStyles = new Set()));
                        }
                        if (!appliedStyles.has(scopeId)) {
                            if (BUILD.hydrateClientSide && styleContainerNode.host && (styleElm = styleContainerNode.querySelector("[" + HYDRATED_STYLE_ID + "=\"" + scopeId + "\"]"))) {
                                // This is only happening on native shadow-dom, do not needs CSS var shim
                                styleElm.innerHTML = style;
                            }
                            else {
                                if (BUILD.cssVarShim && plt.$cssShim$) {
                                    styleElm = plt.$cssShim$.createHostStyle(hostElm, scopeId, style, !!(cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */));
                                    var newScopeId = styleElm['s-sc'];
                                    if (newScopeId) {
                                        scopeId = newScopeId;
                                        // we don't want to add this styleID to the appliedStyles Set
                                        // since the cssVarShim might need to apply several different
                                        // stylesheets for the same component
                                        appliedStyles = null;
                                    }
                                }
                                else {
                                    styleElm = doc.createElement('style');
                                    styleElm.innerHTML = style;
                                }
                                if (BUILD.hydrateServerSide || BUILD.hotModuleReplacement) {
                                    styleElm.setAttribute(HYDRATED_STYLE_ID, scopeId);
                                }
                                styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                            }
                            if (appliedStyles) {
                                appliedStyles.add(scopeId);
                            }
                        }
                    }
                    else if (BUILD.constructableCSS && !styleContainerNode.adoptedStyleSheets.includes(style)) {
                        styleContainerNode.adoptedStyleSheets = __spreadArrays(styleContainerNode.adoptedStyleSheets, [style]);
                    }
                }
                return scopeId;
            };
            var attachStyles = function (hostRef) {
                var cmpMeta = hostRef.$cmpMeta$;
                var elm = hostRef.$hostElement$;
                var flags = cmpMeta.$flags$;
                var endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
                var scopeId = addStyle(BUILD.shadowDom && supportsShadow && elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta, hostRef.$modeName$, elm);
                if ((BUILD.shadowDom || BUILD.scoped) && BUILD.cssAnnotations && flags & 10 /* needsScopedEncapsulation */) {
                    // only required when we're NOT using native shadow dom (slot)
                    // or this browser doesn't support native shadow dom
                    // and this host element was NOT created with SSR
                    // let's pick out the inner content for slot projection
                    // create a node to represent where the original
                    // content was first placed, which is useful later on
                    // DOM WRITE!!
                    elm['s-sc'] = scopeId;
                    elm.classList.add(scopeId + '-h');
                    if (BUILD.scoped && flags & 2 /* scopedCssEncapsulation */) {
                        elm.classList.add(scopeId + '-s');
                    }
                }
                endAttachStyles();
            };
            var getScopeId = function (cmp, mode) { return 'sc-' + (BUILD.mode && mode && cmp.$flags$ & 32 /* hasMode */ ? cmp.$tagName$ + '-' + mode : cmp.$tagName$); };
            var convertScopedToShadow = function (css) { return css.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, '$1{'); };
            // Private
            var computeMode = function (elm) { return modeResolutionChain.map(function (h) { return h(elm); }).find(function (m) { return !!m; }); };
            // Public
            var setMode = function (handler) { return modeResolutionChain.push(handler); };
            var getMode = function (ref) { return getHostRef(ref).$modeName$; };
            /**
             * Default style mode id
             */
            /**
             * Reusable empty obj/array
             * Don't add values to these!!
             */
            var EMPTY_OBJ = {};
            /**
             * Namespaces
             */
            var SVG_NS = 'http://www.w3.org/2000/svg';
            var HTML_NS = 'http://www.w3.org/1999/xhtml';
            var isDef = function (v) { return v != null; };
            var noop = function () {
                /* noop*/
            };
            var isComplexType = function (o) {
                // https://jsperf.com/typeof-fn-object/5
                o = typeof o;
                return o === 'object' || o === 'function';
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
            /**
             * Production h() function based on Preact by
             * Jason Miller (@developit)
             * Licensed under the MIT License
             * https://github.com/developit/preact/blob/master/LICENSE
             *
             * Modified for Stencil's compiler and vdom
             */
            // const stack: any[] = [];
            // export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
            // export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
            var h = exports('h', function (nodeName, vnodeData) {
                var children = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    children[_i - 2] = arguments[_i];
                }
                var child = null;
                var key = null;
                var slotName = null;
                var simple = false;
                var lastSimple = false;
                var vNodeChildren = [];
                var walk = function (c) {
                    for (var i_1 = 0; i_1 < c.length; i_1++) {
                        child = c[i_1];
                        if (Array.isArray(child)) {
                            walk(child);
                        }
                        else if (child != null && typeof child !== 'boolean') {
                            if ((simple = typeof nodeName !== 'function' && !isComplexType(child))) {
                                child = String(child);
                            }
                            else if (BUILD.isDev && typeof nodeName !== 'function' && child.$flags$ === undefined) {
                                consoleDevError("vNode passed as children has unexpected type.\nMake sure it's using the correct h() function.\nEmpty objects can also be the cause, look for JSX comments that became objects.");
                            }
                            if (simple && lastSimple) {
                                // If the previous child was simple (string), we merge both
                                vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                            }
                            else {
                                // Append a new vNode, if it's text, we create a text vNode
                                vNodeChildren.push(simple ? newVNode(null, child) : child);
                            }
                            lastSimple = simple;
                        }
                    }
                };
                walk(children);
                if (vnodeData) {
                    if (BUILD.isDev && nodeName === 'input') {
                        validateInputProperties(vnodeData);
                    }
                    // normalize class / classname attributes
                    if (BUILD.vdomKey && vnodeData.key) {
                        key = vnodeData.key;
                    }
                    if (BUILD.slotRelocation && vnodeData.name) {
                        slotName = vnodeData.name;
                    }
                    if (BUILD.vdomClass) {
                        var classData_1 = vnodeData.className || vnodeData.class;
                        if (classData_1) {
                            vnodeData.class =
                                typeof classData_1 !== 'object'
                                    ? classData_1
                                    : Object.keys(classData_1)
                                        .filter(function (k) { return classData_1[k]; })
                                        .join(' ');
                        }
                    }
                }
                if (BUILD.isDev && vNodeChildren.some(isHost)) {
                    consoleDevError("The <Host> must be the single root component. Make sure:\n- You are NOT using hostData() and <Host> in the same component.\n- <Host> is used once, and it's the single root component of the render() function.");
                }
                if (BUILD.vdomFunctional && typeof nodeName === 'function') {
                    // nodeName is a functional component
                    return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
                }
                var vnode = newVNode(nodeName, null);
                vnode.$attrs$ = vnodeData;
                if (vNodeChildren.length > 0) {
                    vnode.$children$ = vNodeChildren;
                }
                if (BUILD.vdomKey) {
                    vnode.$key$ = key;
                }
                if (BUILD.slotRelocation) {
                    vnode.$name$ = slotName;
                }
                return vnode;
            });
            var newVNode = function (tag, text) {
                var vnode = {
                    $flags$: 0,
                    $tag$: tag,
                    $text$: text,
                    $elm$: null,
                    $children$: null,
                };
                if (BUILD.vdomAttribute) {
                    vnode.$attrs$ = null;
                }
                if (BUILD.vdomKey) {
                    vnode.$key$ = null;
                }
                if (BUILD.slotRelocation) {
                    vnode.$name$ = null;
                }
                return vnode;
            };
            var Host = exports('f', {});
            var isHost = function (node) { return node && node.$tag$ === Host; };
            var vdomFnUtils = {
                forEach: function (children, cb) { return children.map(convertToPublic).forEach(cb); },
                map: function (children, cb) { return children
                    .map(convertToPublic)
                    .map(cb)
                    .map(convertToPrivate); },
            };
            var convertToPublic = function (node) { return ({
                vattrs: node.$attrs$,
                vchildren: node.$children$,
                vkey: node.$key$,
                vname: node.$name$,
                vtag: node.$tag$,
                vtext: node.$text$,
            }); };
            var convertToPrivate = function (node) {
                if (typeof node.vtag === 'function') {
                    var vnodeData = Object.assign({}, node.vattrs);
                    if (node.vkey) {
                        vnodeData.key = node.vkey;
                    }
                    if (node.vname) {
                        vnodeData.name = node.vname;
                    }
                    return h.apply(void 0, __spreadArrays([node.vtag, vnodeData], node.vchildren || []));
                }
                var vnode = newVNode(node.vtag, node.vtext);
                vnode.$attrs$ = node.vattrs;
                vnode.$children$ = node.vchildren;
                vnode.$key$ = node.vkey;
                vnode.$name$ = node.vname;
                return vnode;
            };
            var validateInputProperties = function (vnodeData) {
                var props = Object.keys(vnodeData);
                var typeIndex = props.indexOf('type');
                var minIndex = props.indexOf('min');
                var maxIndex = props.indexOf('max');
                var stepIndex = props.indexOf('min');
                var value = props.indexOf('value');
                if (value === -1) {
                    return;
                }
                if (value < typeIndex || value < minIndex || value < maxIndex || value < stepIndex) {
                    consoleDevWarn("The \"value\" prop of <input> should be set after \"min\", \"max\", \"type\" and \"step\"");
                }
            };
            /**
             * Production setAccessor() function based on Preact by
             * Jason Miller (@developit)
             * Licensed under the MIT License
             * https://github.com/developit/preact/blob/master/LICENSE
             *
             * Modified for Stencil's compiler and vdom
             */
            var setAccessor = function (elm, memberName, oldValue, newValue, isSvg, flags) {
                if (oldValue !== newValue) {
                    var isProp = isMemberInElement(elm, memberName);
                    var ln = memberName.toLowerCase();
                    if (BUILD.vdomClass && memberName === 'class') {
                        var classList = elm.classList;
                        var oldClasses_1 = parseClassList(oldValue);
                        var newClasses_1 = parseClassList(newValue);
                        classList.remove.apply(classList, oldClasses_1.filter(function (c) { return c && !newClasses_1.includes(c); }));
                        classList.add.apply(classList, newClasses_1.filter(function (c) { return c && !oldClasses_1.includes(c); }));
                    }
                    else if (BUILD.vdomStyle && memberName === 'style') {
                        // update style attribute, css properties and values
                        if (BUILD.updatable) {
                            for (var prop in oldValue) {
                                if (!newValue || newValue[prop] == null) {
                                    if (!BUILD.hydrateServerSide && prop.includes('-')) {
                                        elm.style.removeProperty(prop);
                                    }
                                    else {
                                        elm.style[prop] = '';
                                    }
                                }
                            }
                        }
                        for (var prop in newValue) {
                            if (!oldValue || newValue[prop] !== oldValue[prop]) {
                                if (!BUILD.hydrateServerSide && prop.includes('-')) {
                                    elm.style.setProperty(prop, newValue[prop]);
                                }
                                else {
                                    elm.style[prop] = newValue[prop];
                                }
                            }
                        }
                    }
                    else if (BUILD.vdomKey && memberName === 'key')
                        ;
                    else if (BUILD.vdomRef && memberName === 'ref') {
                        // minifier will clean this up
                        if (newValue) {
                            newValue(elm);
                        }
                    }
                    else if (BUILD.vdomListener && (BUILD.lazyLoad ? !isProp : !elm.__lookupSetter__(memberName)) && memberName[0] === 'o' && memberName[1] === 'n') {
                        // Event Handlers
                        // so if the member name starts with "on" and the 3rd characters is
                        // a capital letter, and it's not already a member on the element,
                        // then we're assuming it's an event listener
                        if (memberName[2] === '-') {
                            // on- prefixed events
                            // allows to be explicit about the dom event to listen without any magic
                            // under the hood:
                            // <my-cmp on-click> // listens for "click"
                            // <my-cmp on-Click> // listens for "Click"
                            // <my-cmp on-ionChange> // listens for "ionChange"
                            // <my-cmp on-EVENTS> // listens for "EVENTS"
                            memberName = memberName.slice(3);
                        }
                        else if (isMemberInElement(win, ln)) {
                            // standard event
                            // the JSX attribute could have been "onMouseOver" and the
                            // member name "onmouseover" is on the window's prototype
                            // so let's add the listener "mouseover", which is all lowercased
                            memberName = ln.slice(2);
                        }
                        else {
                            // custom event
                            // the JSX attribute could have been "onMyCustomEvent"
                            // so let's trim off the "on" prefix and lowercase the first character
                            // and add the listener "myCustomEvent"
                            // except for the first character, we keep the event name case
                            memberName = ln[2] + memberName.slice(3);
                        }
                        if (oldValue) {
                            plt.rel(elm, memberName, oldValue, false);
                        }
                        if (newValue) {
                            plt.ael(elm, memberName, newValue, false);
                        }
                    }
                    else if (BUILD.vdomPropOrAttr) {
                        // Set property if it exists and it's not a SVG
                        var isComplex = isComplexType(newValue);
                        if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
                            try {
                                if (!elm.tagName.includes('-')) {
                                    var n = newValue == null ? '' : newValue;
                                    // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                                    if (memberName === 'list') {
                                        isProp = false;
                                        // tslint:disable-next-line: triple-equals
                                    }
                                    else if (oldValue == null || elm[memberName] != n) {
                                        elm[memberName] = n;
                                    }
                                }
                                else {
                                    elm[memberName] = newValue;
                                }
                            }
                            catch (e) { }
                        }
                        /**
                         * Need to manually update attribute if:
                         * - memberName is not an attribute
                         * - if we are rendering the host element in order to reflect attribute
                         * - if it's a SVG, since properties might not work in <svg>
                         * - if the newValue is null/undefined or 'false'.
                         */
                        var xlink = false;
                        if (BUILD.vdomXlink) {
                            if (ln !== (ln = ln.replace(/^xlink\:?/, ''))) {
                                memberName = ln;
                                xlink = true;
                            }
                        }
                        if (newValue == null || newValue === false) {
                            if (newValue !== false || elm.getAttribute(memberName) === '') {
                                if (BUILD.vdomXlink && xlink) {
                                    elm.removeAttributeNS(XLINK_NS, memberName);
                                }
                                else {
                                    elm.removeAttribute(memberName);
                                }
                            }
                        }
                        else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex) {
                            newValue = newValue === true ? '' : newValue;
                            if (BUILD.vdomXlink && xlink) {
                                elm.setAttributeNS(XLINK_NS, memberName, newValue);
                            }
                            else {
                                elm.setAttribute(memberName, newValue);
                            }
                        }
                    }
                }
            };
            var parseClassListRegex = /\s/;
            var parseClassList = function (value) { return (!value ? [] : value.split(parseClassListRegex)); };
            var updateElement = function (oldVnode, newVnode, isSvgMode, memberName) {
                // if the element passed in is a shadow root, which is a document fragment
                // then we want to be adding attrs/props to the shadow root's "host" element
                // if it's not a shadow root, then we add attrs/props to the same element
                var elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
                var oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
                var newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
                if (BUILD.updatable) {
                    // remove attributes no longer present on the vnode by setting them to undefined
                    for (memberName in oldVnodeAttrs) {
                        if (!(memberName in newVnodeAttrs)) {
                            setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
                        }
                    }
                }
                // add new & update changed attributes
                for (memberName in newVnodeAttrs) {
                    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
                }
            };
            var createElm = function (oldParentVNode, newParentVNode, childIndex, parentElm) {
                // tslint:disable-next-line: prefer-const
                var newVNode = newParentVNode.$children$[childIndex];
                var i = 0;
                var elm;
                var childNode;
                var oldVNode;
                if (BUILD.slotRelocation && !useNativeShadowDom) {
                    // remember for later we need to check to relocate nodes
                    checkSlotRelocate = true;
                    if (newVNode.$tag$ === 'slot') {
                        if (scopeId) {
                            // scoped css needs to add its scoped id to the parent element
                            parentElm.classList.add(scopeId + '-s');
                        }
                        newVNode.$flags$ |= newVNode.$children$
                            ? // slot element has fallback content
                                2 /* isSlotFallback */
                            : // slot element does not have fallback content
                                1 /* isSlotReference */;
                    }
                }
                if (BUILD.isDev && newVNode.$elm$) {
                    consoleError("The JSX " + (newVNode.$text$ !== null ? "\"" + newVNode.$text$ + "\" text" : "\"" + newVNode.$tag$ + "\" element") + " node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes");
                }
                if (BUILD.vdomText && newVNode.$text$ !== null) {
                    // create text node
                    elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
                }
                else if (BUILD.slotRelocation && newVNode.$flags$ & 1 /* isSlotReference */) {
                    // create a slot reference node
                    elm = newVNode.$elm$ = BUILD.isDebug || BUILD.hydrateServerSide ? slotReferenceDebugNode(newVNode) : doc.createTextNode('');
                }
                else {
                    if (BUILD.svg && !isSvgMode) {
                        isSvgMode = newVNode.$tag$ === 'svg';
                    }
                    // create element
                    elm = newVNode.$elm$ = (BUILD.svg
                        ? doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, BUILD.slotRelocation && newVNode.$flags$ & 2 /* isSlotFallback */ ? 'slot-fb' : newVNode.$tag$)
                        : doc.createElement(BUILD.slotRelocation && newVNode.$flags$ & 2 /* isSlotFallback */ ? 'slot-fb' : newVNode.$tag$));
                    if (BUILD.svg && isSvgMode && newVNode.$tag$ === 'foreignObject') {
                        isSvgMode = false;
                    }
                    // add css classes, attrs, props, listeners, etc.
                    if (BUILD.vdomAttribute) {
                        updateElement(null, newVNode, isSvgMode);
                    }
                    if ((BUILD.shadowDom || BUILD.scoped) && isDef(scopeId) && elm['s-si'] !== scopeId) {
                        // if there is a scopeId and this is the initial render
                        // then let's add the scopeId as a css class
                        elm.classList.add((elm['s-si'] = scopeId));
                    }
                    if (newVNode.$children$) {
                        for (i = 0; i < newVNode.$children$.length; ++i) {
                            // create the node
                            childNode = createElm(oldParentVNode, newVNode, i, elm);
                            // return node could have been null
                            if (childNode) {
                                // append our new node
                                elm.appendChild(childNode);
                            }
                        }
                    }
                    if (BUILD.svg) {
                        if (newVNode.$tag$ === 'svg') {
                            // Only reset the SVG context when we're exiting <svg> element
                            isSvgMode = false;
                        }
                        else if (elm.tagName === 'foreignObject') {
                            // Reenter SVG context when we're exiting <foreignObject> element
                            isSvgMode = true;
                        }
                    }
                }
                if (BUILD.slotRelocation) {
                    elm['s-hn'] = hostTagName;
                    if (newVNode.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
                        // remember the content reference comment
                        elm['s-sr'] = true;
                        // remember the content reference comment
                        elm['s-cr'] = contentRef;
                        // remember the slot name, or empty string for default slot
                        elm['s-sn'] = newVNode.$name$ || '';
                        // check if we've got an old vnode for this slot
                        oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
                        if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
                            // we've got an old slot vnode and the wrapper is being replaced
                            // so let's move the old slot content back to it's original location
                            putBackInOriginalLocation(oldParentVNode.$elm$, false);
                        }
                    }
                }
                return elm;
            };
            var putBackInOriginalLocation = function (parentElm, recursive) {
                plt.$flags$ |= 1 /* isTmpDisconnected */;
                var oldSlotChildNodes = parentElm.childNodes;
                for (var i_2 = oldSlotChildNodes.length - 1; i_2 >= 0; i_2--) {
                    var childNode = oldSlotChildNodes[i_2];
                    if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
                        // // this child node in the old element is from another component
                        // // remove this node from the old slot's parent
                        // childNode.remove();
                        // and relocate it back to it's original location
                        parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
                        // remove the old original location comment entirely
                        // later on the patch function will know what to do
                        // and move this to the correct spot in need be
                        childNode['s-ol'].remove();
                        childNode['s-ol'] = undefined;
                        checkSlotRelocate = true;
                    }
                    if (recursive) {
                        putBackInOriginalLocation(childNode, recursive);
                    }
                }
                plt.$flags$ &= ~1 /* isTmpDisconnected */;
            };
            var addVnodes = function (parentElm, before, parentVNode, vnodes, startIdx, endIdx) {
                var containerElm = ((BUILD.slotRelocation && parentElm['s-cr'] && parentElm['s-cr'].parentNode) || parentElm);
                var childNode;
                if (BUILD.shadowDom && containerElm.shadowRoot && containerElm.tagName === hostTagName) {
                    containerElm = containerElm.shadowRoot;
                }
                for (; startIdx <= endIdx; ++startIdx) {
                    if (vnodes[startIdx]) {
                        childNode = createElm(null, parentVNode, startIdx, parentElm);
                        if (childNode) {
                            vnodes[startIdx].$elm$ = childNode;
                            containerElm.insertBefore(childNode, BUILD.slotRelocation ? referenceNode(before) : before);
                        }
                    }
                }
            };
            var removeVnodes = function (vnodes, startIdx, endIdx, vnode, elm) {
                for (; startIdx <= endIdx; ++startIdx) {
                    if ((vnode = vnodes[startIdx])) {
                        elm = vnode.$elm$;
                        callNodeRefs(vnode);
                        if (BUILD.slotRelocation) {
                            // we're removing this element
                            // so it's possible we need to show slot fallback content now
                            checkSlotFallbackVisibility = true;
                            if (elm['s-ol']) {
                                // remove the original location comment
                                elm['s-ol'].remove();
                            }
                            else {
                                // it's possible that child nodes of the node
                                // that's being removed are slot nodes
                                putBackInOriginalLocation(elm, true);
                            }
                        }
                        // remove the vnode's element from the dom
                        elm.remove();
                    }
                }
            };
            var updateChildren = function (parentElm, oldCh, newVNode, newCh) {
                var oldStartIdx = 0;
                var newStartIdx = 0;
                var idxInOld = 0;
                var i = 0;
                var oldEndIdx = oldCh.length - 1;
                var oldStartVnode = oldCh[0];
                var oldEndVnode = oldCh[oldEndIdx];
                var newEndIdx = newCh.length - 1;
                var newStartVnode = newCh[0];
                var newEndVnode = newCh[newEndIdx];
                var node;
                var elmToMove;
                while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
                    if (oldStartVnode == null) {
                        // Vnode might have been moved left
                        oldStartVnode = oldCh[++oldStartIdx];
                    }
                    else if (oldEndVnode == null) {
                        oldEndVnode = oldCh[--oldEndIdx];
                    }
                    else if (newStartVnode == null) {
                        newStartVnode = newCh[++newStartIdx];
                    }
                    else if (newEndVnode == null) {
                        newEndVnode = newCh[--newEndIdx];
                    }
                    else if (isSameVnode(oldStartVnode, newStartVnode)) {
                        patch(oldStartVnode, newStartVnode);
                        oldStartVnode = oldCh[++oldStartIdx];
                        newStartVnode = newCh[++newStartIdx];
                    }
                    else if (isSameVnode(oldEndVnode, newEndVnode)) {
                        patch(oldEndVnode, newEndVnode);
                        oldEndVnode = oldCh[--oldEndIdx];
                        newEndVnode = newCh[--newEndIdx];
                    }
                    else if (isSameVnode(oldStartVnode, newEndVnode)) {
                        // Vnode moved right
                        if (BUILD.slotRelocation && (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                            putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
                        }
                        patch(oldStartVnode, newEndVnode);
                        parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
                        oldStartVnode = oldCh[++oldStartIdx];
                        newEndVnode = newCh[--newEndIdx];
                    }
                    else if (isSameVnode(oldEndVnode, newStartVnode)) {
                        // Vnode moved left
                        if (BUILD.slotRelocation && (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                            putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
                        }
                        patch(oldEndVnode, newStartVnode);
                        parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
                        oldEndVnode = oldCh[--oldEndIdx];
                        newStartVnode = newCh[++newStartIdx];
                    }
                    else {
                        // createKeyToOldIdx
                        idxInOld = -1;
                        if (BUILD.vdomKey) {
                            for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                                if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
                                    idxInOld = i;
                                    break;
                                }
                            }
                        }
                        if (BUILD.vdomKey && idxInOld >= 0) {
                            elmToMove = oldCh[idxInOld];
                            if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                                node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                            }
                            else {
                                patch(elmToMove, newStartVnode);
                                oldCh[idxInOld] = undefined;
                                node = elmToMove.$elm$;
                            }
                            newStartVnode = newCh[++newStartIdx];
                        }
                        else {
                            // new element
                            node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                            newStartVnode = newCh[++newStartIdx];
                        }
                        if (node) {
                            if (BUILD.slotRelocation) {
                                parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
                            }
                            else {
                                oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
                            }
                        }
                    }
                }
                if (oldStartIdx > oldEndIdx) {
                    addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode, newCh, newStartIdx, newEndIdx);
                }
                else if (BUILD.updatable && newStartIdx > newEndIdx) {
                    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
                }
            };
            var isSameVnode = function (vnode1, vnode2) {
                // compare if two vnode to see if they're "technically" the same
                // need to have the same element tag, and same key to be the same
                if (vnode1.$tag$ === vnode2.$tag$) {
                    if (BUILD.slotRelocation && vnode1.$tag$ === 'slot') {
                        return vnode1.$name$ === vnode2.$name$;
                    }
                    if (BUILD.vdomKey) {
                        return vnode1.$key$ === vnode2.$key$;
                    }
                    return true;
                }
                return false;
            };
            var referenceNode = function (node) {
                // this node was relocated to a new location in the dom
                // because of some other component's slot
                // but we still have an html comment in place of where
                // it's original location was according to it's original vdom
                return (node && node['s-ol']) || node;
            };
            var parentReferenceNode = function (node) { return (node['s-ol'] ? node['s-ol'] : node).parentNode; };
            var patch = function (oldVNode, newVNode) {
                var elm = (newVNode.$elm$ = oldVNode.$elm$);
                var oldChildren = oldVNode.$children$;
                var newChildren = newVNode.$children$;
                var tag = newVNode.$tag$;
                var text = newVNode.$text$;
                var defaultHolder;
                if (!BUILD.vdomText || text === null) {
                    if (BUILD.svg) {
                        // test if we're rendering an svg element, or still rendering nodes inside of one
                        // only add this to the when the compiler sees we're using an svg somewhere
                        isSvgMode = tag === 'svg' ? true : tag === 'foreignObject' ? false : isSvgMode;
                    }
                    // element node
                    if (BUILD.vdomAttribute || BUILD.reflect) {
                        if (BUILD.slot && tag === 'slot')
                            ;
                        else {
                            // either this is the first render of an element OR it's an update
                            // AND we already know it's possible it could have changed
                            // this updates the element's css classes, attrs, props, listeners, etc.
                            updateElement(oldVNode, newVNode, isSvgMode);
                        }
                    }
                    if (BUILD.updatable && oldChildren !== null && newChildren !== null) {
                        // looks like there's child vnodes for both the old and new vnodes
                        updateChildren(elm, oldChildren, newVNode, newChildren);
                    }
                    else if (newChildren !== null) {
                        // no old child vnodes, but there are new child vnodes to add
                        if (BUILD.updatable && BUILD.vdomText && oldVNode.$text$ !== null) {
                            // the old vnode was text, so be sure to clear it out
                            elm.textContent = '';
                        }
                        // add the new vnode children
                        addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
                    }
                    else if (BUILD.updatable && oldChildren !== null) {
                        // no new child vnodes, but there are old child vnodes to remove
                        removeVnodes(oldChildren, 0, oldChildren.length - 1);
                    }
                    if (BUILD.svg && isSvgMode && tag === 'svg') {
                        isSvgMode = false;
                    }
                }
                else if (BUILD.vdomText && BUILD.slotRelocation && (defaultHolder = elm['s-cr'])) {
                    // this element has slotted content
                    defaultHolder.parentNode.textContent = text;
                }
                else if (BUILD.vdomText && oldVNode.$text$ !== text) {
                    // update the text content for the text only vnode
                    // and also only if the text is different than before
                    elm.data = text;
                }
            };
            var updateFallbackSlotVisibility = function (elm) {
                // tslint:disable-next-line: prefer-const
                var childNodes = elm.childNodes;
                var childNode;
                var i;
                var ilen;
                var j;
                var slotNameAttr;
                var nodeType;
                for (i = 0, ilen = childNodes.length; i < ilen; i++) {
                    childNode = childNodes[i];
                    if (childNode.nodeType === 1 /* ElementNode */) {
                        if (childNode['s-sr']) {
                            // this is a slot fallback node
                            // get the slot name for this slot reference node
                            slotNameAttr = childNode['s-sn'];
                            // by default always show a fallback slot node
                            // then hide it if there are other slots in the light dom
                            childNode.hidden = false;
                            for (j = 0; j < ilen; j++) {
                                if (childNodes[j]['s-hn'] !== childNode['s-hn']) {
                                    // this sibling node is from a different component
                                    nodeType = childNodes[j].nodeType;
                                    if (slotNameAttr !== '') {
                                        // this is a named fallback slot node
                                        if (nodeType === 1 /* ElementNode */ && slotNameAttr === childNodes[j].getAttribute('slot')) {
                                            childNode.hidden = true;
                                            break;
                                        }
                                    }
                                    else {
                                        // this is a default fallback slot node
                                        // any element or text node (with content)
                                        // should hide the default fallback slot node
                                        if (nodeType === 1 /* ElementNode */ || (nodeType === 3 /* TextNode */ && childNodes[j].textContent.trim() !== '')) {
                                            childNode.hidden = true;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        // keep drilling down
                        updateFallbackSlotVisibility(childNode);
                    }
                }
            };
            var relocateNodes = [];
            var relocateSlotContent = function (elm) {
                // tslint:disable-next-line: prefer-const
                var childNode;
                var node;
                var hostContentNodes;
                var slotNameAttr;
                var relocateNodeData;
                var j;
                var i = 0;
                var childNodes = elm.childNodes;
                var ilen = childNodes.length;
                for (; i < ilen; i++) {
                    childNode = childNodes[i];
                    if (childNode['s-sr'] && (node = childNode['s-cr'])) {
                        // first got the content reference comment node
                        // then we got it's parent, which is where all the host content is in now
                        hostContentNodes = node.parentNode.childNodes;
                        slotNameAttr = childNode['s-sn'];
                        for (j = hostContentNodes.length - 1; j >= 0; j--) {
                            node = hostContentNodes[j];
                            if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
                                // let's do some relocating to its new home
                                // but never relocate a content reference node
                                // that is suppose to always represent the original content location
                                if (isNodeLocatedInSlot(node, slotNameAttr)) {
                                    // it's possible we've already decided to relocate this node
                                    relocateNodeData = relocateNodes.find(function (r) { return r.$nodeToRelocate$ === node; });
                                    // made some changes to slots
                                    // let's make sure we also double check
                                    // fallbacks are correctly hidden or shown
                                    checkSlotFallbackVisibility = true;
                                    node['s-sn'] = node['s-sn'] || slotNameAttr;
                                    if (relocateNodeData) {
                                        // previously we never found a slot home for this node
                                        // but turns out we did, so let's remember it now
                                        relocateNodeData.$slotRefNode$ = childNode;
                                    }
                                    else {
                                        // add to our list of nodes to relocate
                                        relocateNodes.push({
                                            $slotRefNode$: childNode,
                                            $nodeToRelocate$: node,
                                        });
                                    }
                                    if (node['s-sr']) {
                                        relocateNodes.map(function (relocateNode) {
                                            if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node['s-sn'])) {
                                                relocateNodeData = relocateNodes.find(function (r) { return r.$nodeToRelocate$ === node; });
                                                if (relocateNodeData && !relocateNode.$slotRefNode$) {
                                                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                                                }
                                            }
                                        });
                                    }
                                }
                                else if (!relocateNodes.some(function (r) { return r.$nodeToRelocate$ === node; })) {
                                    // so far this element does not have a slot home, not setting slotRefNode on purpose
                                    // if we never find a home for this element then we'll need to hide it
                                    relocateNodes.push({
                                        $nodeToRelocate$: node,
                                    });
                                }
                            }
                        }
                    }
                    if (childNode.nodeType === 1 /* ElementNode */) {
                        relocateSlotContent(childNode);
                    }
                }
            };
            var isNodeLocatedInSlot = function (nodeToRelocate, slotNameAttr) {
                if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
                    if (nodeToRelocate.getAttribute('slot') === null && slotNameAttr === '') {
                        return true;
                    }
                    if (nodeToRelocate.getAttribute('slot') === slotNameAttr) {
                        return true;
                    }
                    return false;
                }
                if (nodeToRelocate['s-sn'] === slotNameAttr) {
                    return true;
                }
                return slotNameAttr === '';
            };
            var callNodeRefs = function (vNode) {
                if (BUILD.vdomRef) {
                    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
                    vNode.$children$ && vNode.$children$.map(callNodeRefs);
                }
            };
            var renderVdom = function (hostRef, renderFnResults) {
                var hostElm = hostRef.$hostElement$;
                var cmpMeta = hostRef.$cmpMeta$;
                var oldVNode = hostRef.$vnode$ || newVNode(null, null);
                var rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
                hostTagName = hostElm.tagName;
                // <Host> runtime check
                if (BUILD.isDev && Array.isArray(renderFnResults) && renderFnResults.some(isHost)) {
                    throw new Error("The <Host> must be the single root component.\nLooks like the render() function of \"" + hostTagName.toLowerCase() + "\" is returning an array that contains the <Host>.\n\nThe render() function should look like this instead:\n\nrender() {\n  // Do not return an array\n  return (\n    <Host>{content}</Host>\n  );\n}\n  ");
                }
                if (BUILD.reflect && cmpMeta.$attrsToReflect$) {
                    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
                    cmpMeta.$attrsToReflect$.map(function (_a) {
                        var propName = _a[0], attribute = _a[1];
                        return (rootVnode.$attrs$[attribute] = hostElm[propName]);
                    });
                }
                rootVnode.$tag$ = null;
                rootVnode.$flags$ |= 4 /* isHost */;
                hostRef.$vnode$ = rootVnode;
                rootVnode.$elm$ = oldVNode.$elm$ = (BUILD.shadowDom ? hostElm.shadowRoot || hostElm : hostElm);
                if (BUILD.scoped || BUILD.shadowDom) {
                    scopeId = hostElm['s-sc'];
                }
                if (BUILD.slotRelocation) {
                    contentRef = hostElm['s-cr'];
                    useNativeShadowDom = supportsShadow && (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) !== 0;
                    // always reset
                    checkSlotFallbackVisibility = false;
                }
                // synchronous patch
                patch(oldVNode, rootVnode);
                if (BUILD.slotRelocation) {
                    // while we're moving nodes around existing nodes, temporarily disable
                    // the disconnectCallback from working
                    plt.$flags$ |= 1 /* isTmpDisconnected */;
                    if (checkSlotRelocate) {
                        relocateSlotContent(rootVnode.$elm$);
                        var relocateData = void 0;
                        var nodeToRelocate = void 0;
                        var orgLocationNode = void 0;
                        var parentNodeRef = void 0;
                        var insertBeforeNode = void 0;
                        var refNode = void 0;
                        var i_3 = 0;
                        for (; i_3 < relocateNodes.length; i_3++) {
                            relocateData = relocateNodes[i_3];
                            nodeToRelocate = relocateData.$nodeToRelocate$;
                            if (!nodeToRelocate['s-ol']) {
                                // add a reference node marking this node's original location
                                // keep a reference to this node for later lookups
                                orgLocationNode = BUILD.isDebug || BUILD.hydrateServerSide ? originalLocationDebugNode(nodeToRelocate) : doc.createTextNode('');
                                orgLocationNode['s-nr'] = nodeToRelocate;
                                nodeToRelocate.parentNode.insertBefore((nodeToRelocate['s-ol'] = orgLocationNode), nodeToRelocate);
                            }
                        }
                        for (i_3 = 0; i_3 < relocateNodes.length; i_3++) {
                            relocateData = relocateNodes[i_3];
                            nodeToRelocate = relocateData.$nodeToRelocate$;
                            if (relocateData.$slotRefNode$) {
                                // by default we're just going to insert it directly
                                // after the slot reference node
                                parentNodeRef = relocateData.$slotRefNode$.parentNode;
                                insertBeforeNode = relocateData.$slotRefNode$.nextSibling;
                                orgLocationNode = nodeToRelocate['s-ol'];
                                while ((orgLocationNode = orgLocationNode.previousSibling)) {
                                    refNode = orgLocationNode['s-nr'];
                                    if (refNode && refNode['s-sn'] === nodeToRelocate['s-sn'] && parentNodeRef === refNode.parentNode) {
                                        refNode = refNode.nextSibling;
                                        if (!refNode || !refNode['s-nr']) {
                                            insertBeforeNode = refNode;
                                            break;
                                        }
                                    }
                                }
                                if ((!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode) || nodeToRelocate.nextSibling !== insertBeforeNode) {
                                    // we've checked that it's worth while to relocate
                                    // since that the node to relocate
                                    // has a different next sibling or parent relocated
                                    if (nodeToRelocate !== insertBeforeNode) {
                                        if (!nodeToRelocate['s-hn'] && nodeToRelocate['s-ol']) {
                                            // probably a component in the index.html that doesn't have it's hostname set
                                            nodeToRelocate['s-hn'] = nodeToRelocate['s-ol'].parentNode.nodeName;
                                        }
                                        // add it back to the dom but in its new home
                                        parentNodeRef.insertBefore(nodeToRelocate, insertBeforeNode);
                                    }
                                }
                            }
                            else {
                                // this node doesn't have a slot home to go to, so let's hide it
                                if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
                                    nodeToRelocate.hidden = true;
                                }
                            }
                        }
                    }
                    if (checkSlotFallbackVisibility) {
                        updateFallbackSlotVisibility(rootVnode.$elm$);
                    }
                    // done moving nodes around
                    // allow the disconnect callback to work again
                    plt.$flags$ &= ~1 /* isTmpDisconnected */;
                    // always reset
                    relocateNodes.length = 0;
                }
            };
            // slot comment debug nodes only created with the `--debug` flag
            // otherwise these nodes are text nodes w/out content
            var slotReferenceDebugNode = function (slotVNode) { return doc.createComment("<slot" + (slotVNode.$name$ ? ' name="' + slotVNode.$name$ + '"' : '') + "> (host=" + hostTagName.toLowerCase() + ")"); };
            var originalLocationDebugNode = function (nodeToRelocate) { return doc.createComment("org-location for " + (nodeToRelocate.localName ? "<" + nodeToRelocate.localName + "> (host=" + nodeToRelocate['s-hn'] + ")" : "[" + nodeToRelocate.textContent + "]")); };
            var getElement = exports('g', function (ref) { return (BUILD.lazyLoad ? getHostRef(ref).$hostElement$ : ref); });
            var createEvent = exports('e', function (ref, name, flags) {
                var elm = getElement(ref);
                return {
                    emit: function (detail) {
                        if (BUILD.isDev && !elm.isConnected) {
                            consoleDevWarn("The \"" + name + "\" event was emitted, but the dispatcher node is no longer connected to the dom.");
                        }
                        return emitEvent(elm, name, {
                            bubbles: !!(flags & 4 /* Bubbles */),
                            composed: !!(flags & 2 /* Composed */),
                            cancelable: !!(flags & 1 /* Cancellable */),
                            detail: detail,
                        });
                    },
                };
            });
            var emitEvent = function (elm, name, opts) {
                var ev = plt.ce(name, opts);
                elm.dispatchEvent(ev);
                return ev;
            };
            var attachToAncestor = function (hostRef, ancestorComponent) {
                if (BUILD.asyncLoading && ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent['s-p']) {
                    ancestorComponent['s-p'].push(new Promise(function (r) { return (hostRef.$onRenderResolve$ = r); }));
                }
            };
            var scheduleUpdate = function (hostRef, isInitialLoad) {
                if (BUILD.taskQueue && BUILD.updatable) {
                    hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
                }
                if (BUILD.asyncLoading && hostRef.$flags$ & 4 /* isWaitingForChildren */) {
                    hostRef.$flags$ |= 512 /* needsRerender */;
                    return;
                }
                attachToAncestor(hostRef, hostRef.$ancestorComponent$);
                // there is no ancestorc omponent or the ancestor component
                // has already fired off its lifecycle update then
                // fire off the initial update
                var dispatch = function () { return dispatchHooks(hostRef, isInitialLoad); };
                return BUILD.taskQueue ? writeTask(dispatch) : dispatch;
            };
            var dispatchHooks = function (hostRef, isInitialLoad) {
                var elm = hostRef.$hostElement$;
                var endSchedule = createTime('scheduleUpdate', hostRef.$cmpMeta$.$tagName$);
                var instance = BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
                var promise;
                if (isInitialLoad) {
                    if (BUILD.lazyLoad && BUILD.hostListener) {
                        hostRef.$flags$ |= 256 /* isListenReady */;
                        if (hostRef.$queuedListeners$) {
                            hostRef.$queuedListeners$.map(function (_a) {
                                var methodName = _a[0], event = _a[1];
                                return safeCall(instance, methodName, event);
                            });
                            hostRef.$queuedListeners$ = null;
                        }
                    }
                    emitLifecycleEvent(elm, 'componentWillLoad');
                    if (BUILD.cmpWillLoad) {
                        promise = safeCall(instance, 'componentWillLoad');
                    }
                }
                else {
                    emitLifecycleEvent(elm, 'componentWillUpdate');
                    if (BUILD.cmpWillUpdate) {
                        promise = safeCall(instance, 'componentWillUpdate');
                    }
                }
                emitLifecycleEvent(elm, 'componentWillRender');
                if (BUILD.cmpWillRender) {
                    promise = then(promise, function () { return safeCall(instance, 'componentWillRender'); });
                }
                endSchedule();
                return then(promise, function () { return updateComponent(hostRef, instance, isInitialLoad); });
            };
            var updateComponent = function (hostRef, instance, isInitialLoad) {
                // updateComponent
                var elm = hostRef.$hostElement$;
                var endUpdate = createTime('update', hostRef.$cmpMeta$.$tagName$);
                var rc = elm['s-rc'];
                if (BUILD.style && isInitialLoad) {
                    // DOM WRITE!
                    attachStyles(hostRef);
                }
                var endRender = createTime('render', hostRef.$cmpMeta$.$tagName$);
                if (BUILD.isDev) {
                    hostRef.$flags$ |= 1024 /* devOnRender */;
                }
                if (BUILD.hasRenderFn || BUILD.reflect) {
                    if (BUILD.vdomRender || BUILD.reflect) {
                        // looks like we've got child nodes to render into this host element
                        // or we need to update the css class/attrs on the host element
                        // DOM WRITE!
                        renderVdom(hostRef, callRender(hostRef, instance));
                    }
                    else {
                        elm.textContent = callRender(hostRef, instance);
                    }
                }
                if (BUILD.cssVarShim && plt.$cssShim$) {
                    plt.$cssShim$.updateHost(elm);
                }
                if (BUILD.isDev) {
                    hostRef.$renderCount$++;
                    hostRef.$flags$ &= ~1024 /* devOnRender */;
                }
                if (BUILD.hydrateServerSide) {
                    try {
                        // manually connected child components during server-side hydrate
                        serverSideConnected(elm);
                        if (isInitialLoad) {
                            // using only during server-side hydrate
                            if (hostRef.$cmpMeta$.$flags$ & 1 /* shadowDomEncapsulation */) {
                                elm['s-en'] = '';
                            }
                            else if (hostRef.$cmpMeta$.$flags$ & 2 /* scopedCssEncapsulation */) {
                                elm['s-en'] = 'c';
                            }
                        }
                    }
                    catch (e) {
                        consoleError(e);
                    }
                }
                if (BUILD.asyncLoading && rc) {
                    // ok, so turns out there are some child host elements
                    // waiting on this parent element to load
                    // let's fire off all update callbacks waiting
                    rc.map(function (cb) { return cb(); });
                    elm['s-rc'] = undefined;
                }
                endRender();
                endUpdate();
                if (BUILD.asyncLoading) {
                    var childrenPromises = elm['s-p'];
                    var postUpdate = function () { return postUpdateComponent(hostRef); };
                    if (childrenPromises.length === 0) {
                        postUpdate();
                    }
                    else {
                        Promise.all(childrenPromises).then(postUpdate);
                        hostRef.$flags$ |= 4 /* isWaitingForChildren */;
                        childrenPromises.length = 0;
                    }
                }
                else {
                    postUpdateComponent(hostRef);
                }
            };
            var callRender = function (hostRef, instance) {
                // in order for bundlers to correctly treeshake the BUILD object
                // we need to ensure BUILD is not deoptimized within a try/catch
                // https://rollupjs.org/guide/en/#treeshake tryCatchDeoptimization
                var allRenderFn = BUILD.allRenderFn ? true : false;
                var lazyLoad = BUILD.lazyLoad ? true : false;
                var taskQueue = BUILD.taskQueue ? true : false;
                var updatable = BUILD.updatable ? true : false;
                try {
                    renderingRef = instance;
                    instance = allRenderFn ? instance.render() : instance.render && instance.render();
                    if (updatable && taskQueue) {
                        hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
                    }
                    if (updatable || lazyLoad) {
                        hostRef.$flags$ |= 2 /* hasRendered */;
                    }
                }
                catch (e) {
                    consoleError(e);
                }
                renderingRef = null;
                return instance;
            };
            var getRenderingRef = function () { return renderingRef; };
            var postUpdateComponent = function (hostRef) {
                var tagName = hostRef.$cmpMeta$.$tagName$;
                var elm = hostRef.$hostElement$;
                var endPostUpdate = createTime('postUpdate', tagName);
                var instance = BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
                var ancestorComponent = hostRef.$ancestorComponent$;
                if (BUILD.cmpDidRender) {
                    if (BUILD.isDev) {
                        hostRef.$flags$ |= 1024 /* devOnRender */;
                    }
                    safeCall(instance, 'componentDidRender');
                    if (BUILD.isDev) {
                        hostRef.$flags$ &= ~1024 /* devOnRender */;
                    }
                }
                emitLifecycleEvent(elm, 'componentDidRender');
                if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
                    hostRef.$flags$ |= 64 /* hasLoadedComponent */;
                    if (BUILD.asyncLoading && BUILD.cssAnnotations) {
                        // DOM WRITE!
                        addHydratedFlag(elm);
                    }
                    if (BUILD.cmpDidLoad) {
                        if (BUILD.isDev) {
                            hostRef.$flags$ |= 2048 /* devOnDidLoad */;
                        }
                        safeCall(instance, 'componentDidLoad');
                        if (BUILD.isDev) {
                            hostRef.$flags$ &= ~2048 /* devOnDidLoad */;
                        }
                    }
                    emitLifecycleEvent(elm, 'componentDidLoad');
                    endPostUpdate();
                    if (BUILD.asyncLoading) {
                        hostRef.$onReadyResolve$(elm);
                        if (!ancestorComponent) {
                            appDidLoad(tagName);
                        }
                    }
                }
                else {
                    if (BUILD.cmpDidUpdate) {
                        // we've already loaded this component
                        // fire off the user's componentDidUpdate method (if one was provided)
                        // componentDidUpdate runs AFTER render() has been called
                        // and all child components have finished updating
                        if (BUILD.isDev) {
                            hostRef.$flags$ |= 1024 /* devOnRender */;
                        }
                        safeCall(instance, 'componentDidUpdate');
                        if (BUILD.isDev) {
                            hostRef.$flags$ &= ~1024 /* devOnRender */;
                        }
                    }
                    emitLifecycleEvent(elm, 'componentDidUpdate');
                    endPostUpdate();
                }
                if (BUILD.hotModuleReplacement) {
                    elm['s-hmr-load'] && elm['s-hmr-load']();
                }
                if (BUILD.method && BUILD.lazyLoad) {
                    hostRef.$onInstanceResolve$(elm);
                }
                // load events fire from bottom to top
                // the deepest elements load first then bubbles up
                if (BUILD.asyncLoading) {
                    if (hostRef.$onRenderResolve$) {
                        hostRef.$onRenderResolve$();
                        hostRef.$onRenderResolve$ = undefined;
                    }
                    if (hostRef.$flags$ & 512 /* needsRerender */) {
                        nextTick(function () { return scheduleUpdate(hostRef, false); });
                    }
                    hostRef.$flags$ &= ~(4 /* isWaitingForChildren */ | 512 /* needsRerender */);
                }
                // ( •_•)
                // ( •_•)>⌐■-■
                // (⌐■_■)
            };
            var forceUpdate = function (ref) {
                if (BUILD.updatable) {
                    var hostRef = getHostRef(ref);
                    var isConnected = hostRef.$hostElement$.isConnected;
                    if (isConnected && (hostRef.$flags$ & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                        scheduleUpdate(hostRef, false);
                    }
                    // Returns "true" when the forced update was successfully scheduled
                    return isConnected;
                }
                return false;
            };
            var appDidLoad = function (who) {
                // on appload
                // we have finish the first big initial render
                if (BUILD.cssAnnotations) {
                    addHydratedFlag(doc.documentElement);
                }
                if (BUILD.asyncQueue) {
                    plt.$flags$ |= 2 /* appLoaded */;
                }
                nextTick(function () { return emitEvent(win, 'appload', { detail: { namespace: NAMESPACE } }); });
                if (BUILD.profile && performance.measure) {
                    performance.measure("[Stencil] " + NAMESPACE + " initial load (by " + who + ")", 'st:app:start');
                }
            };
            var safeCall = function (instance, method, arg) {
                if (instance && instance[method]) {
                    try {
                        return instance[method](arg);
                    }
                    catch (e) {
                        consoleError(e);
                    }
                }
                return undefined;
            };
            var then = function (promise, thenFn) {
                return promise && promise.then ? promise.then(thenFn) : thenFn();
            };
            var emitLifecycleEvent = function (elm, lifecycleName) {
                if (BUILD.lifecycleDOMEvents) {
                    emitEvent(elm, 'stencil_' + lifecycleName, {
                        bubbles: true,
                        composed: true,
                        detail: {
                            namespace: NAMESPACE,
                        },
                    });
                }
            };
            var addHydratedFlag = function (elm) { return (BUILD.hydratedClass ? elm.classList.add('hydrated') : BUILD.hydratedAttribute ? elm.setAttribute('hydrated', '') : undefined); };
            var serverSideConnected = function (elm) {
                var children = elm.children;
                if (children != null) {
                    for (var i_4 = 0, ii = children.length; i_4 < ii; i_4++) {
                        var childElm = children[i_4];
                        if (typeof childElm.connectedCallback === 'function') {
                            childElm.connectedCallback();
                        }
                        serverSideConnected(childElm);
                    }
                }
            };
            var initializeClientHydrate = function (hostElm, tagName, hostId, hostRef) {
                var endHydrate = createTime('hydrateClient', tagName);
                var shadowRoot = hostElm.shadowRoot;
                var childRenderNodes = [];
                var slotNodes = [];
                var shadowRootNodes = BUILD.shadowDom && shadowRoot ? [] : null;
                var vnode = (hostRef.$vnode$ = newVNode(tagName, null));
                if (!plt.$orgLocNodes$) {
                    initializeDocumentHydrate(doc.body, (plt.$orgLocNodes$ = new Map()));
                }
                hostElm[HYDRATE_ID] = hostId;
                hostElm.removeAttribute(HYDRATE_ID);
                clientHydrate(vnode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, hostElm, hostId);
                childRenderNodes.map(function (c) {
                    var orgLocationId = c.$hostId$ + '.' + c.$nodeId$;
                    var orgLocationNode = plt.$orgLocNodes$.get(orgLocationId);
                    var node = c.$elm$;
                    if (orgLocationNode && supportsShadow && orgLocationNode['s-en'] === '') {
                        orgLocationNode.parentNode.insertBefore(node, orgLocationNode.nextSibling);
                    }
                    if (!shadowRoot) {
                        node['s-hn'] = tagName;
                        if (orgLocationNode) {
                            node['s-ol'] = orgLocationNode;
                            node['s-ol']['s-nr'] = node;
                        }
                    }
                    plt.$orgLocNodes$.delete(orgLocationId);
                });
                if (BUILD.shadowDom && shadowRoot) {
                    shadowRootNodes.map(function (shadowRootNode) {
                        if (shadowRootNode) {
                            shadowRoot.appendChild(shadowRootNode);
                        }
                    });
                }
                endHydrate();
            };
            var clientHydrate = function (parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId) {
                var childNodeType;
                var childIdSplt;
                var childVNode;
                var i;
                if (node.nodeType === 1 /* ElementNode */) {
                    childNodeType = node.getAttribute(HYDRATE_CHILD_ID);
                    if (childNodeType) {
                        // got the node data from the element's attribute
                        // `${hostId}.${nodeId}.${depth}.${index}`
                        childIdSplt = childNodeType.split('.');
                        if (childIdSplt[0] === hostId || childIdSplt[0] === '0') {
                            childVNode = {
                                $flags$: 0,
                                $hostId$: childIdSplt[0],
                                $nodeId$: childIdSplt[1],
                                $depth$: childIdSplt[2],
                                $index$: childIdSplt[3],
                                $tag$: node.tagName.toLowerCase(),
                                $elm$: node,
                                $attrs$: null,
                                $children$: null,
                                $key$: null,
                                $name$: null,
                                $text$: null,
                            };
                            childRenderNodes.push(childVNode);
                            node.removeAttribute(HYDRATE_CHILD_ID);
                            // this is a new child vnode
                            // so ensure its parent vnode has the vchildren array
                            if (!parentVNode.$children$) {
                                parentVNode.$children$ = [];
                            }
                            // add our child vnode to a specific index of the vnode's children
                            parentVNode.$children$[childVNode.$index$] = childVNode;
                            // this is now the new parent vnode for all the next child checks
                            parentVNode = childVNode;
                            if (shadowRootNodes && childVNode.$depth$ === '0') {
                                shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                            }
                        }
                    }
                    // recursively drill down, end to start so we can remove nodes
                    for (i = node.childNodes.length - 1; i >= 0; i--) {
                        clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.childNodes[i], hostId);
                    }
                    if (node.shadowRoot) {
                        // keep drilling down through the shadow root nodes
                        for (i = node.shadowRoot.childNodes.length - 1; i >= 0; i--) {
                            clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.shadowRoot.childNodes[i], hostId);
                        }
                    }
                }
                else if (node.nodeType === 8 /* CommentNode */) {
                    // `${COMMENT_TYPE}.${hostId}.${nodeId}.${depth}.${index}`
                    childIdSplt = node.nodeValue.split('.');
                    if (childIdSplt[1] === hostId || childIdSplt[1] === '0') {
                        // comment node for either the host id or a 0 host id
                        childNodeType = childIdSplt[0];
                        childVNode = {
                            $flags$: 0,
                            $hostId$: childIdSplt[1],
                            $nodeId$: childIdSplt[2],
                            $depth$: childIdSplt[3],
                            $index$: childIdSplt[4],
                            $elm$: node,
                            $attrs$: null,
                            $children$: null,
                            $key$: null,
                            $name$: null,
                            $tag$: null,
                            $text$: null,
                        };
                        if (childNodeType === TEXT_NODE_ID) {
                            childVNode.$elm$ = node.nextSibling;
                            if (childVNode.$elm$ && childVNode.$elm$.nodeType === 3 /* TextNode */) {
                                childVNode.$text$ = childVNode.$elm$.textContent;
                                childRenderNodes.push(childVNode);
                                // remove the text comment since it's no longer needed
                                node.remove();
                                if (!parentVNode.$children$) {
                                    parentVNode.$children$ = [];
                                }
                                parentVNode.$children$[childVNode.$index$] = childVNode;
                                if (shadowRootNodes && childVNode.$depth$ === '0') {
                                    shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                                }
                            }
                        }
                        else if (childVNode.$hostId$ === hostId) {
                            // this comment node is specifcally for this host id
                            if (childNodeType === SLOT_NODE_ID) {
                                // `${SLOT_NODE_ID}.${hostId}.${nodeId}.${depth}.${index}.${slotName}`;
                                childVNode.$tag$ = 'slot';
                                if (childIdSplt[5]) {
                                    node['s-sn'] = childVNode.$name$ = childIdSplt[5];
                                }
                                else {
                                    node['s-sn'] = '';
                                }
                                node['s-sr'] = true;
                                if (BUILD.shadowDom && shadowRootNodes) {
                                    // browser support shadowRoot and this is a shadow dom component
                                    // create an actual slot element
                                    childVNode.$elm$ = doc.createElement(childVNode.$tag$);
                                    if (childVNode.$name$) {
                                        // add the slot name attribute
                                        childVNode.$elm$.setAttribute('name', childVNode.$name$);
                                    }
                                    // insert the new slot element before the slot comment
                                    node.parentNode.insertBefore(childVNode.$elm$, node);
                                    // remove the slot comment since it's not needed for shadow
                                    node.remove();
                                    if (childVNode.$depth$ === '0') {
                                        shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                                    }
                                }
                                slotNodes.push(childVNode);
                                if (!parentVNode.$children$) {
                                    parentVNode.$children$ = [];
                                }
                                parentVNode.$children$[childVNode.$index$] = childVNode;
                            }
                            else if (childNodeType === CONTENT_REF_ID) {
                                // `${CONTENT_REF_ID}.${hostId}`;
                                if (BUILD.shadowDom && shadowRootNodes) {
                                    // remove the content ref comment since it's not needed for shadow
                                    node.remove();
                                }
                                else if (BUILD.slotRelocation) {
                                    hostElm['s-cr'] = node;
                                    node['s-cn'] = true;
                                }
                            }
                        }
                    }
                }
                else if (parentVNode && parentVNode.$tag$ === 'style') {
                    var vnode = newVNode(null, node.textContent);
                    vnode.$elm$ = node;
                    vnode.$index$ = '0';
                    parentVNode.$children$ = [vnode];
                }
            };
            var initializeDocumentHydrate = function (node, orgLocNodes) {
                if (node.nodeType === 1 /* ElementNode */) {
                    var i_5 = 0;
                    for (; i_5 < node.childNodes.length; i_5++) {
                        initializeDocumentHydrate(node.childNodes[i_5], orgLocNodes);
                    }
                    if (node.shadowRoot) {
                        for (i_5 = 0; i_5 < node.shadowRoot.childNodes.length; i_5++) {
                            initializeDocumentHydrate(node.shadowRoot.childNodes[i_5], orgLocNodes);
                        }
                    }
                }
                else if (node.nodeType === 8 /* CommentNode */) {
                    var childIdSplt = node.nodeValue.split('.');
                    if (childIdSplt[0] === ORG_LOCATION_ID) {
                        orgLocNodes.set(childIdSplt[1] + '.' + childIdSplt[2], node);
                        node.nodeValue = '';
                        // useful to know if the original location is
                        // the root light-dom of a shadow dom component
                        node['s-en'] = childIdSplt[3];
                    }
                }
            };
            var parsePropertyValue = function (propValue, propType) {
                // ensure this value is of the correct prop type
                if (propValue != null && !isComplexType(propValue)) {
                    if (BUILD.propBoolean && propType & 4 /* Boolean */) {
                        // per the HTML spec, any string value means it is a boolean true value
                        // but we'll cheat here and say that the string "false" is the boolean false
                        return propValue === 'false' ? false : propValue === '' || !!propValue;
                    }
                    if (BUILD.propNumber && propType & 2 /* Number */) {
                        // force it to be a number
                        return parseFloat(propValue);
                    }
                    if (BUILD.propString && propType & 1 /* String */) {
                        // could have been passed as a number or boolean
                        // but we still want it as a string
                        return String(propValue);
                    }
                    // redundant return here for better minification
                    return propValue;
                }
                // not sure exactly what type we want
                // so no need to change to a different type
                return propValue;
            };
            var getValue = function (ref, propName) { return getHostRef(ref).$instanceValues$.get(propName); };
            var setValue = function (ref, propName, newVal, cmpMeta) {
                // check our new property value against our internal value
                var hostRef = getHostRef(ref);
                var elm = BUILD.lazyLoad ? hostRef.$hostElement$ : ref;
                var oldVal = hostRef.$instanceValues$.get(propName);
                var flags = hostRef.$flags$;
                var instance = BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
                newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
                if ((!BUILD.lazyLoad || !(flags & 8 /* isConstructingInstance */) || oldVal === undefined) && newVal !== oldVal) {
                    // gadzooks! the property's value has changed!!
                    // set our new value!
                    hostRef.$instanceValues$.set(propName, newVal);
                    if (BUILD.isDev) {
                        if (hostRef.$flags$ & 1024 /* devOnRender */) {
                            consoleDevWarn("The state/prop \"" + propName + "\" changed during rendering. This can potentially lead to infinite-loops and other bugs.", '\nElement', elm, '\nNew value', newVal, '\nOld value', oldVal);
                        }
                        else if (hostRef.$flags$ & 2048 /* devOnDidLoad */) {
                            consoleDevWarn("The state/prop \"" + propName + "\" changed during \"componentDidLoad()\", this triggers extra re-renders, try to setup on \"componentWillLoad()\"", '\nElement', elm, '\nNew value', newVal, '\nOld value', oldVal);
                        }
                    }
                    if (!BUILD.lazyLoad || instance) {
                        // get an array of method names of watch functions to call
                        if (BUILD.watchCallback && cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
                            var watchMethods = cmpMeta.$watchers$[propName];
                            if (watchMethods) {
                                // this instance is watching for when this property changed
                                watchMethods.map(function (watchMethodName) {
                                    try {
                                        // fire off each of the watch methods that are watching this property
                                        instance[watchMethodName](newVal, oldVal, propName);
                                    }
                                    catch (e) {
                                        consoleError(e);
                                    }
                                });
                            }
                        }
                        if (BUILD.updatable && (flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                            if (BUILD.cmpShouldUpdate && instance.componentShouldUpdate) {
                                if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
                                    return;
                                }
                            }
                            // looks like this value actually changed, so we've got work to do!
                            // but only if we've already rendered, otherwise just chill out
                            // queue that we need to do an update, but don't worry about queuing
                            // up millions cuz this function ensures it only runs once
                            scheduleUpdate(hostRef, false);
                        }
                    }
                }
            };
            var proxyComponent = function (Cstr, cmpMeta, flags) {
                if (BUILD.member && cmpMeta.$members$) {
                    if (BUILD.watchCallback && Cstr.watchers) {
                        cmpMeta.$watchers$ = Cstr.watchers;
                    }
                    // It's better to have a const than two Object.entries()
                    var members = Object.entries(cmpMeta.$members$);
                    var prototype_1 = Cstr.prototype;
                    members.map(function (_a) {
                        var memberName = _a[0], memberFlags = _a[1][0];
                        if ((BUILD.prop || BUILD.state) && (memberFlags & 31 /* Prop */ || ((!BUILD.lazyLoad || flags & 2 /* proxyState */) && memberFlags & 32 /* State */))) {
                            // proxyComponent - prop
                            Object.defineProperty(prototype_1, memberName, {
                                get: function () {
                                    // proxyComponent, get value
                                    return getValue(this, memberName);
                                },
                                set: function (newValue) {
                                    if (
                                    // only during dev time
                                    BUILD.isDev &&
                                        // we are proxing the instance (not element)
                                        (flags & 1 /* isElementConstructor */) === 0 &&
                                        // the member is a non-mutable prop
                                        (memberFlags & (31 /* Prop */ | 1024 /* Mutable */)) === 31 /* Prop */) {
                                        consoleDevWarn("@Prop() \"" + memberName + "\" on \"" + cmpMeta.$tagName$ + "\" cannot be modified.\nFurther information: https://stenciljs.com/docs/properties#prop-mutability");
                                    }
                                    // proxyComponent, set value
                                    setValue(this, memberName, newValue, cmpMeta);
                                },
                                configurable: true,
                                enumerable: true,
                            });
                        }
                        else if (BUILD.lazyLoad && BUILD.method && flags & 1 /* isElementConstructor */ && memberFlags & 64 /* Method */) {
                            // proxyComponent - method
                            Object.defineProperty(prototype_1, memberName, {
                                value: function () {
                                    var args = [];
                                    for (var _i = 0; _i < arguments.length; _i++) {
                                        args[_i] = arguments[_i];
                                    }
                                    var ref = getHostRef(this);
                                    return ref.$onInstancePromise$.then(function () {
                                        var _a;
                                        return (_a = ref.$lazyInstance$)[memberName].apply(_a, args);
                                    });
                                },
                            });
                        }
                    });
                    if (BUILD.observeAttribute && (!BUILD.lazyLoad || flags & 1 /* isElementConstructor */)) {
                        var attrNameToPropName_1 = new Map();
                        prototype_1.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                            var _this = this;
                            plt.jmp(function () {
                                var propName = attrNameToPropName_1.get(attrName);
                                _this[propName] = newValue === null && typeof _this[propName] === 'boolean' ? false : newValue;
                            });
                        };
                        // create an array of attributes to observe
                        // and also create a map of html attribute name to js property name
                        Cstr.observedAttributes = members
                            .filter(function (_a) {
                            var _ = _a[0], m = _a[1];
                            return m[0] & 15;
                        } /* HasAttribute */) // filter to only keep props that should match attributes
                            .map(function (_a) {
                            var propName = _a[0], m = _a[1];
                            var attrName = m[1] || propName;
                            attrNameToPropName_1.set(attrName, propName);
                            if (BUILD.reflect && m[0] & 512 /* ReflectAttr */) {
                                cmpMeta.$attrsToReflect$.push([propName, attrName]);
                            }
                            return attrName;
                        });
                    }
                }
                return Cstr;
            };
            var initializeComponent = function (elm, hostRef, cmpMeta, hmrVersionId, Cstr) { return __awaiter(_this, void 0, void 0, function () {
                var endLoad, endNewInstance, style_1, scopeId_1, endRegisterStyles, ancestorComponent, schedule;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!((BUILD.lazyLoad || BUILD.hydrateServerSide || BUILD.style) && (hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0)) return [3 /*break*/, 7];
                            if (!(BUILD.lazyLoad || BUILD.hydrateClientSide)) return [3 /*break*/, 3];
                            // we haven't initialized this element yet
                            hostRef.$flags$ |= 32 /* hasInitializedComponent */;
                            // lazy loaded components
                            // request the component's implementation to be
                            // wired up with the host element
                            Cstr = loadModule(cmpMeta, hostRef, hmrVersionId);
                            if (!Cstr.then) return [3 /*break*/, 2];
                            endLoad = uniqueTime("st:load:" + cmpMeta.$tagName$ + ":" + hostRef.$modeName$, "[Stencil] Load module for <" + cmpMeta.$tagName$ + ">");
                            return [4 /*yield*/, Cstr];
                        case 1:
                            Cstr = _a.sent();
                            endLoad();
                            _a.label = 2;
                        case 2:
                            if ((BUILD.isDev || BUILD.isDebug) && !Cstr) {
                                throw new Error("Constructor for \"" + cmpMeta.$tagName$ + "#" + hostRef.$modeName$ + "\" was not found");
                            }
                            if (BUILD.member && !Cstr.isProxied) {
                                // we'eve never proxied this Constructor before
                                // let's add the getters/setters to its prototype before
                                // the first time we create an instance of the implementation
                                if (BUILD.watchCallback) {
                                    cmpMeta.$watchers$ = Cstr.watchers;
                                }
                                proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                                Cstr.isProxied = true;
                            }
                            endNewInstance = createTime('createInstance', cmpMeta.$tagName$);
                            // ok, time to construct the instance
                            // but let's keep track of when we start and stop
                            // so that the getters/setters don't incorrectly step on data
                            if (BUILD.member) {
                                hostRef.$flags$ |= 8 /* isConstructingInstance */;
                            }
                            // construct the lazy-loaded component implementation
                            // passing the hostRef is very important during
                            // construction in order to directly wire together the
                            // host element and the lazy-loaded instance
                            try {
                                new Cstr(hostRef);
                            }
                            catch (e) {
                                consoleError(e);
                            }
                            if (BUILD.member) {
                                hostRef.$flags$ &= ~8 /* isConstructingInstance */;
                            }
                            if (BUILD.watchCallback) {
                                hostRef.$flags$ |= 128 /* isWatchReady */;
                            }
                            endNewInstance();
                            fireConnectedCallback(hostRef.$lazyInstance$);
                            return [3 /*break*/, 4];
                        case 3:
                            // sync constructor component
                            Cstr = elm.constructor;
                            hostRef.$flags$ |= 128 /* isWatchReady */ | 32 /* hasInitializedComponent */;
                            _a.label = 4;
                        case 4:
                            if (!(BUILD.style && Cstr.style)) return [3 /*break*/, 7];
                            style_1 = Cstr.style;
                            if (BUILD.mode && typeof style_1 !== 'string') {
                                style_1 = style_1[(hostRef.$modeName$ = computeMode(elm))];
                                if (BUILD.hydrateServerSide && hostRef.$modeName$) {
                                    elm.setAttribute('s-mode', hostRef.$modeName$);
                                }
                            }
                            scopeId_1 = getScopeId(cmpMeta, hostRef.$modeName$);
                            if (!!styles.has(scopeId_1)) return [3 /*break*/, 7];
                            endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);
                            if (!(!BUILD.hydrateServerSide && BUILD.shadowDom && BUILD.shadowDomShim && cmpMeta.$flags$ & 8) /* needsShadowDomShim */) return [3 /*break*/, 6]; /* needsShadowDomShim */
                            return [4 /*yield*/, module.import('./shadow-css-35f12933.system.js').then(function (m) { return m.scopeCss(style_1, scopeId_1, false); })];
                        case 5:
                            style_1 = _a.sent();
                            _a.label = 6;
                        case 6:
                            registerStyle(scopeId_1, style_1, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
                            endRegisterStyles();
                            _a.label = 7;
                        case 7:
                            ancestorComponent = hostRef.$ancestorComponent$;
                            schedule = function () { return scheduleUpdate(hostRef, true); };
                            if (BUILD.asyncLoading && ancestorComponent && ancestorComponent['s-rc']) {
                                // this is the intial load and this component it has an ancestor component
                                // but the ancestor component has NOT fired its will update lifecycle yet
                                // so let's just cool our jets and wait for the ancestor to continue first
                                // this will get fired off when the ancestor component
                                // finally gets around to rendering its lazy self
                                // fire off the initial update
                                ancestorComponent['s-rc'].push(schedule);
                            }
                            else {
                                schedule();
                            }
                            return [2 /*return*/];
                    }
                });
            }); };
            var fireConnectedCallback = function (instance) {
                if (BUILD.lazyLoad && BUILD.connectedCallback) {
                    safeCall(instance, 'connectedCallback');
                }
            };
            var connectedCallback = function (elm) {
                if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
                    var hostRef_1 = getHostRef(elm);
                    var cmpMeta_1 = hostRef_1.$cmpMeta$;
                    var endConnected = createTime('connectedCallback', cmpMeta_1.$tagName$);
                    if (BUILD.hostListenerTargetParent) {
                        // only run if we have listeners being attached to a parent
                        addHostEventListeners(elm, hostRef_1, cmpMeta_1.$listeners$, true);
                    }
                    if (!(hostRef_1.$flags$ & 1 /* hasConnected */)) {
                        // first time this component has connected
                        hostRef_1.$flags$ |= 1 /* hasConnected */;
                        var hostId = void 0;
                        if (BUILD.hydrateClientSide) {
                            hostId = elm.getAttribute(HYDRATE_ID);
                            if (hostId) {
                                if (BUILD.shadowDom && supportsShadow && cmpMeta_1.$flags$ & 1 /* shadowDomEncapsulation */) {
                                    var scopeId_2 = BUILD.mode ? addStyle(elm.shadowRoot, cmpMeta_1, elm.getAttribute('s-mode')) : addStyle(elm.shadowRoot, cmpMeta_1);
                                    elm.classList.remove(scopeId_2 + '-h', scopeId_2 + '-s');
                                }
                                initializeClientHydrate(elm, cmpMeta_1.$tagName$, hostId, hostRef_1);
                            }
                        }
                        if (BUILD.slotRelocation && !hostId) {
                            // initUpdate
                            // if the slot polyfill is required we'll need to put some nodes
                            // in here to act as original content anchors as we move nodes around
                            // host element has been connected to the DOM
                            if (BUILD.hydrateServerSide || ((BUILD.slot || BUILD.shadowDom) && cmpMeta_1.$flags$ & (4 /* hasSlotRelocation */ | 8 /* needsShadowDomShim */))) {
                                setContentReference(elm);
                            }
                        }
                        if (BUILD.asyncLoading) {
                            // find the first ancestor component (if there is one) and register
                            // this component as one of the actively loading child components for its ancestor
                            var ancestorComponent = elm;
                            while ((ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host)) {
                                // climb up the ancestors looking for the first
                                // component that hasn't finished its lifecycle update yet
                                if ((BUILD.hydrateClientSide && ancestorComponent.nodeType === 1 /* ElementNode */ && ancestorComponent.hasAttribute('s-id') && ancestorComponent['s-p']) ||
                                    ancestorComponent['s-p']) {
                                    // we found this components first ancestor component
                                    // keep a reference to this component's ancestor component
                                    attachToAncestor(hostRef_1, (hostRef_1.$ancestorComponent$ = ancestorComponent));
                                    break;
                                }
                            }
                        }
                        // Lazy properties
                        // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
                        if (BUILD.prop && BUILD.lazyLoad && !BUILD.hydrateServerSide && cmpMeta_1.$members$) {
                            Object.entries(cmpMeta_1.$members$).map(function (_a) {
                                var memberName = _a[0], memberFlags = _a[1][0];
                                if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                                    var value = elm[memberName];
                                    delete elm[memberName];
                                    elm[memberName] = value;
                                }
                            });
                        }
                        if (BUILD.initializeNextTick) {
                            // connectedCallback, taskQueue, initialLoad
                            // angular sets attribute AFTER connectCallback
                            // https://github.com/angular/angular/issues/18909
                            // https://github.com/angular/angular/issues/19940
                            nextTick(function () { return initializeComponent(elm, hostRef_1, cmpMeta_1); });
                        }
                        else {
                            initializeComponent(elm, hostRef_1, cmpMeta_1);
                        }
                    }
                    else {
                        // not the first time this has connected
                        // reattach any event listeners to the host
                        // since they would have been removed when disconnected
                        addHostEventListeners(elm, hostRef_1, cmpMeta_1.$listeners$, false);
                        // fire off connectedCallback() on component instance
                        fireConnectedCallback(hostRef_1.$lazyInstance$);
                    }
                    endConnected();
                }
            };
            var setContentReference = function (elm) {
                // only required when we're NOT using native shadow dom (slot)
                // or this browser doesn't support native shadow dom
                // and this host element was NOT created with SSR
                // let's pick out the inner content for slot projection
                // create a node to represent where the original
                // content was first placed, which is useful later on
                var contentRefElm = (elm['s-cr'] = doc.createComment(BUILD.isDebug ? "content-ref (host=" + elm.localName + ")" : ''));
                contentRefElm['s-cn'] = true;
                elm.insertBefore(contentRefElm, elm.firstChild);
            };
            var disconnectedCallback = function (elm) {
                if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
                    var hostRef = getHostRef(elm);
                    var instance = BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
                    if (BUILD.hostListener) {
                        if (hostRef.$rmListeners$) {
                            hostRef.$rmListeners$.map(function (rmListener) { return rmListener(); });
                            hostRef.$rmListeners$ = undefined;
                        }
                    }
                    // clear CSS var-shim tracking
                    if (BUILD.cssVarShim && plt.$cssShim$) {
                        plt.$cssShim$.removeHost(elm);
                    }
                    if (BUILD.lazyLoad && BUILD.disconnectedCallback) {
                        safeCall(instance, 'disconnectedCallback');
                    }
                    if (BUILD.cmpDidUnload) {
                        safeCall(instance, 'componentDidUnload');
                    }
                }
            };
            var defineCustomElement = function (Cstr, compactMeta) {
                customElements.define(compactMeta[1], proxyCustomElement(Cstr, compactMeta));
            };
            var proxyCustomElement = function (Cstr, compactMeta) {
                var cmpMeta = {
                    $flags$: compactMeta[0],
                    $tagName$: compactMeta[1],
                };
                if (BUILD.member) {
                    cmpMeta.$members$ = compactMeta[2];
                }
                if (BUILD.hostListener) {
                    cmpMeta.$listeners$ = compactMeta[3];
                }
                if (BUILD.watchCallback) {
                    cmpMeta.$watchers$ = Cstr.$watchers$;
                }
                if (BUILD.reflect) {
                    cmpMeta.$attrsToReflect$ = [];
                }
                if (BUILD.shadowDom && !supportsShadow && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                    cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
                }
                var originalConnectedCallback = Cstr.prototype.connectedCallback;
                var originalDisconnectedCallback = Cstr.prototype.disconnectedCallback;
                Object.assign(Cstr.prototype, {
                    __registerHost: function () {
                        registerHost(this, cmpMeta);
                    },
                    connectedCallback: function () {
                        connectedCallback(this);
                        if (BUILD.connectedCallback && originalConnectedCallback) {
                            originalConnectedCallback.call(this);
                        }
                    },
                    disconnectedCallback: function () {
                        disconnectedCallback(this);
                        if (BUILD.disconnectedCallback && originalDisconnectedCallback) {
                            originalDisconnectedCallback.call(this);
                        }
                    },
                });
                Cstr.is = cmpMeta.$tagName$;
                return proxyComponent(Cstr, cmpMeta, 1 /* isElementConstructor */ | 2 /* proxyState */);
            };
            var forceModeUpdate = function (elm) {
                if (BUILD.style && BUILD.mode && !BUILD.lazyLoad) {
                    var mode = computeMode(elm);
                    var hostRef = getHostRef(elm);
                    if (hostRef.$modeName$ !== mode) {
                        var cmpMeta = hostRef.$cmpMeta$;
                        var oldScopeId = elm['s-sc'];
                        var scopeId_3 = getScopeId(cmpMeta, mode);
                        var style = elm.constructor.style[mode];
                        var flags = cmpMeta.$flags$;
                        if (style) {
                            if (!styles.has(scopeId_3)) {
                                registerStyle(scopeId_3, style, !!(flags & 1 /* shadowDomEncapsulation */));
                            }
                            hostRef.$modeName$ = mode;
                            elm.classList.remove(oldScopeId + '-h', oldScopeId + '-s');
                            attachStyles(hostRef);
                            forceUpdate(elm);
                        }
                    }
                }
            };
            var attachShadow = function (el) {
                if (supportsShadow) {
                    el.attachShadow({ mode: 'open' });
                }
                else {
                    el.shadowRoot = el;
                }
            };
            var hmrStart = function (elm, cmpMeta, hmrVersionId) {
                // ¯\_(ツ)_/¯
                var hostRef = getHostRef(elm);
                // reset state flags to only have been connected
                hostRef.$flags$ = 1 /* hasConnected */;
                // TODO
                // detatch any event listeners that may have been added
                // because we're not passing an exact event name it'll
                // remove all of this element's event, which is good
                // create a callback for when this component finishes hmr
                elm['s-hmr-load'] = function () {
                    // finished hmr for this element
                    delete elm['s-hmr-load'];
                };
                // re-initialize the component
                initializeComponent(elm, hostRef, cmpMeta, hmrVersionId);
            };
            var patchCloneNode = function (HostElementPrototype) {
                var orgCloneNode = HostElementPrototype.cloneNode;
                HostElementPrototype.cloneNode = function (deep) {
                    var srcNode = this;
                    var isShadowDom = BUILD.shadowDom ? srcNode.shadowRoot && supportsShadow : false;
                    var clonedNode = orgCloneNode.call(srcNode, isShadowDom ? deep : false);
                    if (BUILD.slot && !isShadowDom && deep) {
                        var i_6 = 0;
                        var slotted = void 0;
                        for (; i_6 < srcNode.childNodes.length; i_6++) {
                            slotted = srcNode.childNodes[i_6]['s-nr'];
                            if (slotted) {
                                if (BUILD.appendChildSlotFix && clonedNode.__appendChild) {
                                    clonedNode.__appendChild(slotted.cloneNode(true));
                                }
                                else {
                                    clonedNode.appendChild(slotted.cloneNode(true));
                                }
                            }
                        }
                    }
                    return clonedNode;
                };
            };
            var patchSlotAppendChild = function (HostElementPrototype) {
                HostElementPrototype.__appendChild = HostElementPrototype.appendChild;
                HostElementPrototype.appendChild = function (newChild) {
                    var slotName = (newChild['s-sn'] = getSlotName(newChild));
                    var slotNode = getHostSlotNode(this.childNodes, slotName);
                    if (slotNode) {
                        var slotChildNodes = getHostSlotChildNodes(slotNode, slotName);
                        var appendAfter = slotChildNodes[slotChildNodes.length - 1];
                        return appendAfter.parentNode.insertBefore(newChild, appendAfter.nextSibling);
                    }
                    return this.__appendChild(newChild);
                };
            };
            var patchChildSlotNodes = function (elm, cmpMeta) {
                var FakeNodeList = /** @class */ (function (_super) {
                    __extends(FakeNodeList, _super);
                    function FakeNodeList() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    FakeNodeList.prototype.item = function (n) {
                        return this[n];
                    };
                    return FakeNodeList;
                }(Array));
                if (cmpMeta.$flags$ & 8 /* needsShadowDomShim */) {
                    var childNodesFn_1 = elm.__lookupGetter__('childNodes');
                    Object.defineProperty(elm, 'children', {
                        get: function () {
                            return this.childNodes.map(function (n) { return n.nodeType === 1; });
                        },
                    });
                    Object.defineProperty(elm, 'childElementCount', {
                        get: function () {
                            return elm.children.length;
                        },
                    });
                    Object.defineProperty(elm, 'childNodes', {
                        get: function () {
                            var childNodes = childNodesFn_1.call(this);
                            if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0 && getHostRef(this).$flags$ & 2 /* hasRendered */) {
                                var result = new FakeNodeList();
                                for (var i_7 = 0; i_7 < childNodes.length; i_7++) {
                                    var slot = childNodes[i_7]['s-nr'];
                                    if (slot) {
                                        result.push(slot);
                                    }
                                }
                                return result;
                            }
                            return FakeNodeList.from(childNodes);
                        },
                    });
                }
            };
            var getSlotName = function (node) { return node['s-sn'] || (node.nodeType === 1 && node.getAttribute('slot')) || ''; };
            var getHostSlotNode = function (childNodes, slotName) {
                var i = 0;
                var childNode;
                for (; i < childNodes.length; i++) {
                    childNode = childNodes[i];
                    if (childNode['s-sr'] && childNode['s-sn'] === slotName) {
                        return childNode;
                    }
                    childNode = getHostSlotNode(childNode.childNodes, slotName);
                    if (childNode) {
                        return childNode;
                    }
                }
                return null;
            };
            var getHostSlotChildNodes = function (n, slotName) {
                var childNodes = [n];
                while ((n = n.nextSibling) && n['s-sn'] === slotName) {
                    childNodes.push(n);
                }
                return childNodes;
            };
            var bootstrapLazy = exports('b', function (lazyBundles, options) {
                if (options === void 0) { options = {}; }
                if (BUILD.profile && performance.mark) {
                    performance.mark('st:app:start');
                }
                installDevTools();
                var endBootstrap = createTime('bootstrapLazy');
                var cmpTags = [];
                var exclude = options.exclude || [];
                var customElements = win.customElements;
                var head = doc.head;
                var metaCharset = /*@__PURE__*/ head.querySelector('meta[charset]');
                var visibilityStyle = /*@__PURE__*/ doc.createElement('style');
                var deferredConnectedCallbacks = [];
                var styles = /*@__PURE__*/ doc.querySelectorAll("[" + HYDRATED_STYLE_ID + "]");
                var appLoadFallback;
                var isBootstrapping = true;
                var i = 0;
                Object.assign(plt, options);
                plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
                if (BUILD.asyncQueue) {
                    if (options.syncQueue) {
                        plt.$flags$ |= 4 /* queueSync */;
                    }
                }
                if (BUILD.hydrateClientSide) {
                    // If the app is already hydrated there is not point to disable the
                    // async queue. This will improve the first input delay
                    plt.$flags$ |= 2 /* appLoaded */;
                }
                if (BUILD.hydrateClientSide && BUILD.shadowDom) {
                    for (; i < styles.length; i++) {
                        registerStyle(styles[i].getAttribute(HYDRATED_STYLE_ID), convertScopedToShadow(styles[i].innerHTML), true);
                    }
                }
                lazyBundles.map(function (lazyBundle) { return lazyBundle[1].map(function (compactMeta) {
                    var cmpMeta = {
                        $flags$: compactMeta[0],
                        $tagName$: compactMeta[1],
                        $members$: compactMeta[2],
                        $listeners$: compactMeta[3],
                    };
                    if (BUILD.member) {
                        cmpMeta.$members$ = compactMeta[2];
                    }
                    if (BUILD.hostListener) {
                        cmpMeta.$listeners$ = compactMeta[3];
                    }
                    if (BUILD.reflect) {
                        cmpMeta.$attrsToReflect$ = [];
                    }
                    if (BUILD.watchCallback) {
                        cmpMeta.$watchers$ = {};
                    }
                    if (BUILD.shadowDom && !supportsShadow && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                        cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
                    }
                    var tagName = BUILD.transformTagName && options.transformTagName ? options.transformTagName(cmpMeta.$tagName$) : cmpMeta.$tagName$;
                    var HostElement = /** @class */ (function (_super) {
                        __extends(HostElement, _super);
                        // StencilLazyHost
                        function HostElement(self) {
                            var _this = 
                            // @ts-ignore
                            _super.call(this, self) || this;
                            self = _this;
                            registerHost(self, cmpMeta);
                            if (BUILD.shadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                                // this component is using shadow dom
                                // and this browser supports shadow dom
                                // add the read-only property "shadowRoot" to the host element
                                // adding the shadow root build conditionals to minimize runtime
                                if (supportsShadow) {
                                    if (BUILD.shadowDelegatesFocus) {
                                        self.attachShadow({
                                            mode: 'open',
                                            delegatesFocus: !!(cmpMeta.$flags$ & 16 /* shadowDelegatesFocus */),
                                        });
                                    }
                                    else {
                                        self.attachShadow({ mode: 'open' });
                                    }
                                }
                                else if (!BUILD.hydrateServerSide && !('shadowRoot' in self)) {
                                    self.shadowRoot = self;
                                }
                            }
                            if (BUILD.slotChildNodesFix) {
                                patchChildSlotNodes(self, cmpMeta);
                            }
                            return _this;
                        }
                        HostElement.prototype.connectedCallback = function () {
                            var _this = this;
                            if (appLoadFallback) {
                                clearTimeout(appLoadFallback);
                                appLoadFallback = null;
                            }
                            if (isBootstrapping) {
                                // connectedCallback will be processed once all components have been registered
                                deferredConnectedCallbacks.push(this);
                            }
                            else {
                                plt.jmp(function () { return connectedCallback(_this); });
                            }
                        };
                        HostElement.prototype.disconnectedCallback = function () {
                            var _this = this;
                            plt.jmp(function () { return disconnectedCallback(_this); });
                        };
                        HostElement.prototype.forceUpdate = function () {
                            if (BUILD.isDev) {
                                consoleDevWarn("element.forceUpdate() is deprecated, use the \"forceUpdate\" function from \"@stencil/core\" instead:\n\n  import { forceUpdate } from \u2018@stencil/core\u2019;\n\n  forceUpdate(this);\n  forceUpdate(element);");
                            }
                            forceUpdate(this);
                        };
                        HostElement.prototype.componentOnReady = function () {
                            return getHostRef(this).$onReadyPromise$;
                        };
                        return HostElement;
                    }(HTMLElement));
                    if (BUILD.cloneNodeFix) {
                        patchCloneNode(HostElement.prototype);
                    }
                    if (BUILD.appendChildSlotFix) {
                        patchSlotAppendChild(HostElement.prototype);
                    }
                    if (BUILD.hotModuleReplacement) {
                        HostElement.prototype['s-hmr'] = function (hmrVersionId) {
                            hmrStart(this, cmpMeta, hmrVersionId);
                        };
                    }
                    cmpMeta.$lazyBundleId$ = lazyBundle[0];
                    if (!exclude.includes(tagName) && !customElements.get(tagName)) {
                        cmpTags.push(tagName);
                        customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
                    }
                }); });
                if (BUILD.hydratedClass || BUILD.hydratedAttribute) {
                    visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
                    visibilityStyle.setAttribute('data-styles', '');
                    head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
                }
                // Process deferred connectedCallbacks now all components have been registered
                isBootstrapping = false;
                if (deferredConnectedCallbacks.length) {
                    deferredConnectedCallbacks.map(function (host) { return host.connectedCallback(); });
                }
                else {
                    if (BUILD.profile) {
                        plt.jmp(function () { return (appLoadFallback = setTimeout(appDidLoad, 30, 'timeout')); });
                    }
                    else {
                        plt.jmp(function () { return (appLoadFallback = setTimeout(appDidLoad, 30)); });
                    }
                }
                // Fallback appLoad event
                endBootstrap();
            });
            var getAssetPath = function (path) {
                var assetUrl = new URL(path, plt.$resourcesUrl$);
                return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
            };
            var setAssetPath = function (path) { return (plt.$resourcesUrl$ = path); };
            var getConnect = function (_ref, tagName) {
                var componentOnReady = function () {
                    var elm = doc.querySelector(tagName);
                    if (!elm) {
                        elm = doc.createElement(tagName);
                        doc.body.appendChild(elm);
                    }
                    return typeof elm.componentOnReady === 'function' ? elm.componentOnReady() : Promise.resolve(elm);
                };
                var create = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return componentOnReady().then(function (el) { return el.create.apply(el, args); });
                };
                return {
                    create: create,
                    componentOnReady: componentOnReady,
                };
            };
            var getContext = function (_elm, context) {
                if (context in Context) {
                    return Context[context];
                }
                else if (context === 'window') {
                    return win;
                }
                else if (context === 'document') {
                    return doc;
                }
                else if (context === 'isServer' || context === 'isPrerender') {
                    return BUILD.hydrateServerSide ? true : false;
                }
                else if (context === 'isClient') {
                    return BUILD.hydrateServerSide ? false : true;
                }
                else if (context === 'resourcesUrl' || context === 'publicPath') {
                    return getAssetPath('.');
                }
                else if (context === 'queue') {
                    return {
                        write: writeTask,
                        read: readTask,
                        tick: {
                            then: function (cb) {
                                return nextTick(cb);
                            },
                        },
                    };
                }
                return undefined;
            };
            var insertVdomAnnotations = function (doc, staticComponents) {
                if (doc != null) {
                    var docData_1 = {
                        hostIds: 0,
                        rootLevelIds: 0,
                        staticComponents: new Set(staticComponents),
                    };
                    var orgLocationNodes = [];
                    parseVNodeAnnotations(doc, doc.body, docData_1, orgLocationNodes);
                    orgLocationNodes.forEach(function (orgLocationNode) {
                        if (orgLocationNode != null) {
                            var nodeRef = orgLocationNode['s-nr'];
                            var hostId = nodeRef['s-host-id'];
                            var nodeId = nodeRef['s-node-id'];
                            var childId = hostId + "." + nodeId;
                            if (hostId == null) {
                                hostId = 0;
                                docData_1.rootLevelIds++;
                                nodeId = docData_1.rootLevelIds;
                                childId = hostId + "." + nodeId;
                                if (nodeRef.nodeType === 1 /* ElementNode */) {
                                    nodeRef.setAttribute(HYDRATE_CHILD_ID, childId);
                                }
                                else if (nodeRef.nodeType === 3 /* TextNode */) {
                                    if (hostId === 0) {
                                        var textContent = nodeRef.nodeValue.trim();
                                        if (textContent === '') {
                                            // useless whitespace node at the document root
                                            orgLocationNode.remove();
                                            return;
                                        }
                                    }
                                    var commentBeforeTextNode = doc.createComment(childId);
                                    commentBeforeTextNode.nodeValue = TEXT_NODE_ID + "." + childId;
                                    nodeRef.parentNode.insertBefore(commentBeforeTextNode, nodeRef);
                                }
                            }
                            var orgLocationNodeId = ORG_LOCATION_ID + "." + childId;
                            var orgLocationParentNode = orgLocationNode.parentElement;
                            if (orgLocationParentNode) {
                                if (orgLocationParentNode['s-en'] === '') {
                                    // ending with a "." means that the parent element
                                    // of this node's original location is a SHADOW dom element
                                    // and this node is apart of the root level light dom
                                    orgLocationNodeId += ".";
                                }
                                else if (orgLocationParentNode['s-en'] === 'c') {
                                    // ending with a ".c" means that the parent element
                                    // of this node's original location is a SCOPED element
                                    // and this node is apart of the root level light dom
                                    orgLocationNodeId += ".c";
                                }
                            }
                            orgLocationNode.nodeValue = orgLocationNodeId;
                        }
                    });
                }
            };
            var parseVNodeAnnotations = function (doc, node, docData, orgLocationNodes) {
                if (node == null) {
                    return;
                }
                if (node['s-nr'] != null) {
                    orgLocationNodes.push(node);
                }
                if (node.nodeType === 1 /* ElementNode */) {
                    node.childNodes.forEach(function (childNode) {
                        var hostRef = getHostRef(childNode);
                        if (hostRef != null && !docData.staticComponents.has(childNode.nodeName.toLowerCase())) {
                            var cmpData = {
                                nodeIds: 0,
                            };
                            insertVNodeAnnotations(doc, childNode, hostRef.$vnode$, docData, cmpData);
                        }
                        parseVNodeAnnotations(doc, childNode, docData, orgLocationNodes);
                    });
                }
            };
            var insertVNodeAnnotations = function (doc, hostElm, vnode, docData, cmpData) {
                if (vnode != null) {
                    var hostId_1 = ++docData.hostIds;
                    hostElm.setAttribute(HYDRATE_ID, hostId_1);
                    if (hostElm['s-cr'] != null) {
                        hostElm['s-cr'].nodeValue = CONTENT_REF_ID + "." + hostId_1;
                    }
                    if (vnode.$children$ != null) {
                        var depth_1 = 0;
                        vnode.$children$.forEach(function (vnodeChild, index) {
                            insertChildVNodeAnnotations(doc, vnodeChild, cmpData, hostId_1, depth_1, index);
                        });
                    }
                    if (hostElm && vnode && vnode.$elm$ && !hostElm.hasAttribute('c-id')) {
                        var parent = hostElm.parentElement;
                        if (parent && parent.childNodes) {
                            var parentChildNodes = Array.from(parent.childNodes);
                            var comment = parentChildNodes.find(function (node) { return node.nodeType === 8 /* CommentNode */ && node['s-sr']; });
                            if (comment) {
                                var index = parentChildNodes.indexOf(hostElm) - 1;
                                vnode.$elm$.setAttribute(HYDRATE_CHILD_ID, comment['s-host-id'] + "." + comment['s-node-id'] + ".0." + index);
                            }
                        }
                    }
                }
            };
            var insertChildVNodeAnnotations = function (doc, vnodeChild, cmpData, hostId, depth, index) {
                var childElm = vnodeChild.$elm$;
                if (childElm == null) {
                    return;
                }
                var nodeId = cmpData.nodeIds++;
                var childId = hostId + "." + nodeId + "." + depth + "." + index;
                childElm['s-host-id'] = hostId;
                childElm['s-node-id'] = nodeId;
                if (childElm.nodeType === 1 /* ElementNode */) {
                    childElm.setAttribute(HYDRATE_CHILD_ID, childId);
                }
                else if (childElm.nodeType === 3 /* TextNode */) {
                    var parentNode = childElm.parentNode;
                    if (parentNode.nodeName !== 'STYLE') {
                        var textNodeId = TEXT_NODE_ID + "." + childId;
                        var commentBeforeTextNode = doc.createComment(textNodeId);
                        parentNode.insertBefore(commentBeforeTextNode, childElm);
                    }
                }
                else if (childElm.nodeType === 8 /* CommentNode */) {
                    if (childElm['s-sr']) {
                        var slotName = childElm['s-sn'] || '';
                        var slotNodeId = SLOT_NODE_ID + "." + childId + "." + slotName;
                        childElm.nodeValue = slotNodeId;
                    }
                }
                if (vnodeChild.$children$ != null) {
                    var childDepth_1 = depth + 1;
                    vnodeChild.$children$.forEach(function (vnode, index) {
                        insertChildVNodeAnnotations(doc, vnode, cmpData, hostId, childDepth_1, index);
                    });
                }
            };
            var hostRefs = new WeakMap();
            var getHostRef = function (ref) { return hostRefs.get(ref); };
            var registerInstance = exports('r', function (lazyInstance, hostRef) { return hostRefs.set((hostRef.$lazyInstance$ = lazyInstance), hostRef); });
            var registerHost = function (elm, cmpMeta) {
                var hostRef = {
                    $flags$: 0,
                    $hostElement$: elm,
                    $cmpMeta$: cmpMeta,
                    $instanceValues$: new Map(),
                };
                if (BUILD.isDev) {
                    hostRef.$renderCount$ = 0;
                }
                if (BUILD.method && BUILD.lazyLoad) {
                    hostRef.$onInstancePromise$ = new Promise(function (r) { return (hostRef.$onInstanceResolve$ = r); });
                }
                if (BUILD.asyncLoading) {
                    hostRef.$onReadyPromise$ = new Promise(function (r) { return (hostRef.$onReadyResolve$ = r); });
                    elm['s-p'] = [];
                    elm['s-rc'] = [];
                }
                addHostEventListeners(elm, hostRef, cmpMeta.$listeners$, false);
                return hostRefs.set(elm, hostRef);
            };
            var isMemberInElement = function (elm, memberName) { return memberName in elm; };
            var STENCIL_DEV_MODE = BUILD.isTesting
                ? ['STENCIL:'] // E2E testing
                : ['%cstencil', 'color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px'];
            var consoleDevError = function () {
                var m = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    m[_i] = arguments[_i];
                }
                return console.error.apply(console, __spreadArrays(STENCIL_DEV_MODE, m));
            };
            var consoleDevWarn = function () {
                var m = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    m[_i] = arguments[_i];
                }
                return console.warn.apply(console, __spreadArrays(STENCIL_DEV_MODE, m));
            };
            var consoleDevInfo = exports('c', function () {
                var m = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    m[_i] = arguments[_i];
                }
                return console.info.apply(console, __spreadArrays(STENCIL_DEV_MODE, m));
            });
            var consoleError = function (e) { return console.error(e); };
            var cmpModules = /*@__PURE__*/ new Map();
            var loadModule = function (cmpMeta, hostRef, hmrVersionId) {
                // loadModuleImport
                var exportName = cmpMeta.$tagName$.replace(/-/g, '_');
                var bundleId = cmpMeta.$lazyBundleId$;
                if (BUILD.isDev && typeof bundleId !== 'string') {
                    consoleDevError("Trying to lazily load component <" + cmpMeta.$tagName$ + "> with style mode \"" + hostRef.$modeName$ + "\", but it does not exist.");
                    return undefined;
                }
                var module$1 = !BUILD.hotModuleReplacement ? cmpModules.get(bundleId) : false;
                if (module$1) {
                    return module$1[exportName];
                }
                return module.import(
                /* webpackInclude: /\.entry\.js$/ */
                /* webpackExclude: /\.system\.entry\.js$/ */
                /* webpackMode: "lazy" */
                "./" + bundleId + ".entry.js" + (BUILD.hotModuleReplacement && hmrVersionId ? '?s-hmr=' + hmrVersionId : '')).then(function (importedModule) {
                    if (!BUILD.hotModuleReplacement) {
                        cmpModules.set(bundleId, importedModule);
                    }
                    return importedModule[exportName];
                }, consoleError);
            };
            var styles = new Map();
            var modeResolutionChain = [];
            var queueDomReads = [];
            var queueDomWrites = [];
            var queueDomWritesLow = [];
            var queueTask = function (queue, write) { return function (cb) {
                queue.push(cb);
                if (!queuePending) {
                    queuePending = true;
                    if (write && plt.$flags$ & 4 /* queueSync */) {
                        nextTick(flush);
                    }
                    else {
                        plt.raf(flush);
                    }
                }
            }; };
            var consume = function (queue) {
                for (var i_8 = 0; i_8 < queue.length; i_8++) {
                    try {
                        queue[i_8](performance.now());
                    }
                    catch (e) {
                        consoleError(e);
                    }
                }
                queue.length = 0;
            };
            var consumeTimeout = function (queue, timeout) {
                var i = 0;
                var ts = 0;
                while (i < queue.length && (ts = performance.now()) < timeout) {
                    try {
                        queue[i++](ts);
                    }
                    catch (e) {
                        consoleError(e);
                    }
                }
                if (i === queue.length) {
                    queue.length = 0;
                }
                else if (i !== 0) {
                    queue.splice(0, i);
                }
            };
            var flush = function () {
                if (BUILD.asyncQueue) {
                    queueCongestion++;
                }
                // always force a bunch of medium callbacks to run, but still have
                // a throttle on how many can run in a certain time
                // DOM READS!!!
                consume(queueDomReads);
                // DOM WRITES!!!
                if (BUILD.asyncQueue) {
                    var timeout = (plt.$flags$ & 6 /* queueMask */) === 2 /* appLoaded */ ? performance.now() + 14 * Math.ceil(queueCongestion * (1.0 / 10.0)) : Infinity;
                    consumeTimeout(queueDomWrites, timeout);
                    consumeTimeout(queueDomWritesLow, timeout);
                    if (queueDomWrites.length > 0) {
                        queueDomWritesLow.push.apply(queueDomWritesLow, queueDomWrites);
                        queueDomWrites.length = 0;
                    }
                    if ((queuePending = queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length > 0)) {
                        // still more to do yet, but we've run out of time
                        // let's let this thing cool off and try again in the next tick
                        plt.raf(flush);
                    }
                    else {
                        queueCongestion = 0;
                    }
                }
                else {
                    consume(queueDomWrites);
                    if ((queuePending = queueDomReads.length > 0)) {
                        // still more to do yet, but we've run out of time
                        // let's let this thing cool off and try again in the next tick
                        plt.raf(flush);
                    }
                }
            };
            var nextTick = /*@__PURE__*/ function (cb) { return promiseResolve().then(cb); };
            var readTask = /*@__PURE__*/ queueTask(queueDomReads, false);
            var writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);
            var Build = {
                isDev: BUILD.isDev ? true : false,
                isBrowser: true,
                isServer: false,
                isTesting: BUILD.isTesting ? true : false,
            };
        }
    };
});
