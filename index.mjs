// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.14-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-probability@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.0.8-esm/index.mjs";import{factory as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-bernoulli@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function u(f,c){var g,b,v,x,y;if(!o(f))throw new TypeError(a("0pH6y,NS",f));if(arguments.length>1){if(!d(c))throw new TypeError(a("0pH2V,FD",c));if(g=i({},c),l(g,"iter")){if(!m(g.iter))throw new TypeError(a("0pH2t,G9","iter",g.iter))}else g.iter=p;v=j(f,g),void 0===g.prng&&!1!==g.copy&&(g.state=v.state)}else v=j(f),g={iter:p,state:v.state};return y=0,t(b={},"next",G),t(b,"return",L),g&&g.prng?(t(b,"seed",null),t(b,"seedLength",null),s(b,"state",n(null),r),t(b,"stateLength",null),t(b,"byteLength",null)):(e(b,"seed",P),e(b,"seedLength",w),s(b,"state",H,T),e(b,"stateLength",R),e(b,"byteLength",E)),t(b,"PRNG",v.PRNG),h&&t(b,h,N),b;function G(){return y+=1,x||y>g.iter?{done:!0}:{value:v(),done:!1}}function L(t){return x=!0,arguments.length?{value:t,done:!0}:{done:!0}}function N(){return u(f,g)}function P(){return v.PRNG.seed}function w(){return v.PRNG.seedLength}function R(){return v.PRNG.stateLength}function E(){return v.PRNG.byteLength}function H(){return v.PRNG.state}function T(t){v.PRNG.state=t}}export{u as default};
//# sourceMappingURL=index.mjs.map
