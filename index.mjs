// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-two@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.4-esm/index.mjs";function n(n){var m,r,d;return s(n)||n<=0?NaN:(d=i(1+n),m=t*(n*n*12-(r=9*n*d*(n+2))+d*d*2*(n*(n+3)+3)),r=3*n*(d-2)+6*d,m/=e(n*(n*(d-2)+2*d))*r)}export{n as default};
//# sourceMappingURL=index.mjs.map
