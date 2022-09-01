// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.13-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-probability@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@esm/index.mjs";import{factory as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-bernoulli@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function u(f,c){var g,b,v,x,y;if(!o(f))throw new TypeError(a("0PX7H",f));if(arguments.length>1){if(!d(c))throw new TypeError(a("0PX2h",c));if(g=i(c,1),l(g,"iter")){if(!m(g.iter))throw new TypeError(a("0PX35","iter",g.iter))}else g.iter=h;v=p(f,g),void 0===g.prng&&!1!==g.copy&&(g.state=v.state)}else v=p(f),g={iter:h,state:v.state};return y=0,t(b={},"next",P),t(b,"return",L),g&&g.prng?(t(b,"seed",null),t(b,"seedLength",null),s(b,"state",n(null),r),t(b,"stateLength",null),t(b,"byteLength",null)):(e(b,"seed",G),e(b,"seedLength",N),s(b,"state",T,X),e(b,"stateLength",R),e(b,"byteLength",E)),t(b,"PRNG",v.PRNG),j&&t(b,j,w),b;function P(){return y+=1,x||y>g.iter?{done:!0}:{value:v(),done:!1}}function L(t){return x=!0,arguments.length?{value:t,done:!0}:{done:!0}}function w(){return u(f,g)}function G(){return v.PRNG.seed}function N(){return v.PRNG.seedLength}function R(){return v.PRNG.stateLength}function E(){return v.PRNG.byteLength}function T(){return v.PRNG.state}function X(t){v.PRNG.state=t}}export{u as default};
//# sourceMappingURL=index.mjs.map
