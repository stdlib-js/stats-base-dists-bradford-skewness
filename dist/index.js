"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=v(function(l,n){
var q=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/constants-float64-sqrt-two/dist'),p=require('@stdlib/math-base-special-sqrt/dist'),f=require('@stdlib/math-base-special-ln/dist');function x(r){var e,t,s,i,a;return q(r)||r<=0?NaN:(a=f(1+r),t=12*(r*r),s=9*r*a*(r+2),i=2*(a*a)*(r*(r+3)+3),e=o*(t-s+i),t=r*(r*(a-2)+2*a),s=3*r*(a-2)+6*a,e/=p(t)*s,e)}n.exports=x
});var N=u();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
