// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.2.2-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-probability@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.2.2-esm/index.mjs";import{factory as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-bernoulli@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function u(f,c){var v,g,b,x,y;if(!o(f))throw new TypeError(a("0pH6y",f));if(arguments.length>1){if(!d(c))throw new TypeError(a("0pH2V",c));if(v=i({},c),l(v,"iter")){if(!m(v.iter))throw new TypeError(a("0pH2t","iter",v.iter))}else v.iter=p;b=j(f,v),void 0===v.prng&&!1!==v.copy&&(v.state=b.state)}else b=j(f),v={iter:p,state:b.state};return y=0,t(g={},"next",(function(){if(y+=1,x||y>v.iter)return{done:!0};return{value:b(),done:!1}})),t(g,"return",(function(t){if(x=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),v&&v.prng?(t(g,"seed",null),t(g,"seedLength",null),s(g,"state",n(null),r),t(g,"stateLength",null),t(g,"byteLength",null)):(e(g,"seed",(function(){return b.PRNG.seed})),e(g,"seedLength",(function(){return b.PRNG.seedLength})),s(g,"state",(function(){return b.PRNG.state}),(function(t){b.PRNG.state=t})),e(g,"stateLength",(function(){return b.PRNG.stateLength})),e(g,"byteLength",(function(){return b.PRNG.byteLength}))),t(g,"PRNG",b.PRNG),h&&t(g,h,(function(){return u(f,v)})),g}export{u as default};
//# sourceMappingURL=index.mjs.map
