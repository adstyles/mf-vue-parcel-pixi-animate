/**
 * @name json-variables
 * @fileoverview Resolves custom-marked, cross-referenced paths in parsed JSON
 * @version 11.0.10
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/json-variables/}
 */

import { traverse as k } from "ast-monkey-traverse";
import { isMatch as x } from "matcher";
import d from "object-path";
import { arrayiffy as F } from "arrayiffy-if-string";
import { strFindHeadsTails as I } from "string-find-heads-tails";
import { getByKey as _ } from "ast-get-values-by-key";
import { Ranges as B } from "ranges-push";
import { rApply as S } from "ranges-apply";
import { remDup as L } from "string-remove-duplicate-heads-tails";
import { matchLeftIncl as U, matchRightIncl as M } from "string-match-left-right";
var j = "11.0.10";
var de = j,
    q = Object.prototype.hasOwnProperty,
    K = { heads: "%%_", tails: "_%%", headsNoWrap: "%%-", tailsNoWrap: "-%%", lookForDataContainers: !0, dataContainerIdentifierTails: "_data", wrapHeadsWith: "", wrapTailsWith: "", dontWrapVars: [], preventDoubleWrapping: !0, wrapGlobalFlipSwitch: !0, noSingleMarkers: !1, resolveToBoolIfAnyValuesContainBool: !0, resolveToFalseIfAnyValuesContainBool: !0, throwWhenNonStringInsertedInString: !1, allowUnresolved: !1 };

function u(e) { return typeof e == "string" }

function G(e) { return typeof e == "number" }

function A(e) { return typeof e == "boolean" }

function E(e) { return e === null }

function W(e) { return e && typeof e == "object" && !Array.isArray(e) }

function z(e) { return e != null }

function g(e) { return u(e) ? e.trim() : e }

function Y(e) {
    if (typeof e == "string" && e.length > 0 && e.indexOf(".") !== -1) {
        for (let r = 0, n = e.length; r < n; r++)
            if (e[r] === ".") return e.slice(0, r)
    }
    return e
}

function Q(e) {
    if (typeof e == "string" && e.length > 0 && e.indexOf(".") !== -1) {
        for (let r = 0, n = e.length; r < n; r++)
            if (e[r] === ".") return e.slice(r + 1)
    }
    return e
}

function P(e) {
    if (typeof e == "string" && e.length > 0 && e.indexOf(".") !== -1) {
        for (let r = e.length; r--;)
            if (e[r] === ".") return e.slice(0, r)
    }
    return e
}

function H(e) {
    if (typeof e == "string" && e.length > 0 && e.indexOf(".") !== -1) {
        for (let r = e.length; r--;)
            if (e[r] === ".") return e.slice(r + 1)
    }
    return e
}

function T(e, r) { return typeof e != "string" || !e.trim() ? !1 : !!(e.includes(r.heads) || e.includes(r.tails) || u(r.headsNoWrap) && r.headsNoWrap.length > 0 && e.includes(r.headsNoWrap) || u(r.tailsNoWrap) && r.tailsNoWrap.length > 0 && e.includes(r.tailsNoWrap)) }

function X(e, r, n) { let l, i; return typeof e == "string" && e.length > 0 && M(e, 0, r, { trimBeforeMatching: !0, cb: (t, a, o) => (l = o, !0) }) && U(e, e.length - 1, n, { trimBeforeMatching: !0, cb: (t, a, o) => (i = +o + 1, !0) }) ? e.slice(l, i) : e }

function J(e, r, n = !1, l, i, t) { if (r.wrapHeadsWith || (r.wrapHeadsWith = ""), r.wrapTailsWith || (r.wrapTailsWith = ""), u(e) && !n && r.wrapGlobalFlipSwitch && !r.dontWrapVars.some(a => x(t, a)) && (!r.preventDoubleWrapping || r.preventDoubleWrapping && u(e) && !e.includes(r.wrapHeadsWith) && !e.includes(r.wrapTailsWith))) return `${r.wrapHeadsWith}${e}${r.wrapTailsWith}`; if (n) { if (!u(e)) return e; let a = L(e, { heads: r.wrapHeadsWith, tails: r.wrapTailsWith }); return u(a) ? X(a, r.wrapHeadsWith, r.wrapTailsWith) : a } return e }

function Z(e, r, n, l) {
    let i;
    if (n.indexOf(".") !== -1) {
        let t = n,
            a = !0;
        if (l.lookForDataContainers && typeof l.dataContainerIdentifierTails == "string" && l.dataContainerIdentifierTails.length > 0 && !t.endsWith(l.dataContainerIdentifierTails)) {
            let o = d.get(e, t + l.dataContainerIdentifierTails);
            W(o) && d.get(o, r) && (i = d.get(o, r), a = !1)
        }
        for (; a && t.indexOf(".") !== -1;) {
            if (t = P(t), H(t) === r) throw new Error(`json-variables/findValues(): [THROW_ID_20] While trying to resolve: "${r}" at path "${n}", we encountered a closed loop. The parent key "${H(t)}" is called the same as the variable "${r}" we're looking for.`);
            if (l.lookForDataContainers && typeof l.dataContainerIdentifierTails == "string" && l.dataContainerIdentifierTails.length > 0 && !t.endsWith(l.dataContainerIdentifierTails)) {
                let o = d.get(e, t + l.dataContainerIdentifierTails);
                W(o) && d.get(o, r) && (i = d.get(o, r), a = !1)
            }
            if (i === void 0) {
                let o = d.get(e, t);
                W(o) && d.get(o, r) && (i = d.get(o, r), a = !1)
            }
        }
    }
    if (i === void 0) {
        let t = d.get(e, r);
        t !== void 0 && (i = t)
    }
    if (i === void 0)
        if (r.indexOf(".") === -1) {
            let t = _(e, r);
            if (t.length > 0) {
                for (let a = 0, o = t.length; a < o; a++)
                    if (u(t[a].val) || A(t[a].val) || E(t[a].val)) { i = t[a].val; break } else if (G(t[a].val)) { i = String(t[a].val); break } else if (Array.isArray(t[a].val)) { i = t[a].val.join(""); break }
            }
        } else {
            let t = _(e, Y(r));
            if (t.length > 0)
                for (let a = 0, o = t.length; a < o; a++) {
                    let y = d.get(t[a].val, Q(r));
                    y && u(y) && (i = y)
                }
        } return i
}

function R(e, r, n, l, i = []) {
    if (i.includes(n)) {
        let c = "";
        if (i.length > 1) {
            let m = ` \u2192
`;
            c = i.reduce((D, b, O) => D + (O === 0 ? "" : m) + (b === n ? "\u{1F4A5} " : "  ") + b, ` Here's the path we travelled up until we hit the recursion:`), c += `${m}\u{1F4A5} ${n}`
        }
        throw new Error(`json-variables/resolveString(): [THROW_ID_19] While trying to resolve: "${r}" at path "${n}", we encountered a closed loop, the key is referencing itself."${c}`)
    }
    let t = {},
        a = Array.from(i);
    a.push(n);
    let o = new B;

    function y(c, m, D) {
        for (let b = 0, O = c.length; b < O; b++) {
            let f = c[b],
                p = r.slice(f.headsEndAt, f.tailsStartAt);
            if (p.length === 0) o.push(f.headsStartAt, f.tailsEndAt);
            else if (q.call(t, p) && u(t[p])) o.push(f.headsStartAt, f.tailsEndAt, t[p]);
            else {
                let s = Z(e, p.trim(), n, l);
                if (s === void 0)
                    if (l.allowUnresolved === !0) s = "";
                    else if (typeof l.allowUnresolved == "string") s = l.allowUnresolved;
                else throw new Error(`json-variables/processHeadsAndTails(): [THROW_ID_18] We couldn't find the value to resolve the variable ${r.slice(f.headsEndAt,f.tailsStartAt)}. We're at path: "${n}".`);
                if (!D && l.throwWhenNonStringInsertedInString && !u(s)) throw new Error(`json-variables/processHeadsAndTails(): [THROW_ID_23] While resolving the variable ${r.slice(f.headsEndAt,f.tailsStartAt)} at path ${n}, it resolved into a non-string value, ${JSON.stringify(s,null,4)}. This is happening because options setting "throwWhenNonStringInsertedInString" is active (set to "true").`);
                if (A(s)) {
                    if (l.resolveToBoolIfAnyValuesContainBool) return o.wipe(), l.resolveToFalseIfAnyValuesContainBool ? !1 : s;
                    s = ""
                } else {
                    if (E(s) && D) return o.wipe(), s;
                    Array.isArray(s) ? s = String(s.join("")) : E(s) ? s = "" : s = String(s)
                }
                let N = n.includes(".") ? `${P(n)}.${p}` : p;
                if (T(s, l)) {
                    let V = J(R(e, s, N, l, a), l, m, a, N, p.trim());
                    typeof V == "string" && o.push(f.headsStartAt, f.tailsEndAt, V)
                } else {
                    t[p] = s;
                    let V = J(s, l, m, a, N, p.trim());
                    typeof V == "string" && o.push(f.headsStartAt, f.tailsEndAt, V)
                }
            }
        }
    }
    let h;
    try { h = I(r, l.heads, l.tails, { source: "", throwWhenSomethingWrongIsDetected: !1 }) } catch (c) { throw new Error(`json-variables/resolveString(): [THROW_ID_17] While trying to resolve string: "${r}" at path ${n}, something wrong with heads and tails was detected! Here's the internal error message:
${c}`) }
    let w = !1;
    h.length === 1 && S(r, [
        [h[0].headsStartAt, h[0].tailsEndAt]
    ]).trim() === "" && (w = !0);
    let $ = y(h, !1, w);
    if (typeof $ == "boolean" || $ === null) return $;
    try { h = I(r, l.headsNoWrap, l.tailsNoWrap, { source: "", throwWhenSomethingWrongIsDetected: !1 }) } catch (c) { throw new Error(`json-variables/resolveString(): [THROW_ID_22] While trying to resolve string: "${r}" at path ${n}, something wrong with no-wrap heads and no-wrap tails was detected! Here's the internal error message:
${c}`) } h.length === 1 && S(r, [
        [h[0].headsStartAt, h[0].tailsEndAt]
    ]).trim() === "" && (w = !0);
    let v = y(h, !0, w);
    return A(v) || E(v) ? v : o ? .current() ? S(r, o.current()) : r;
}

function he(e, r) {
    if (!arguments.length) throw new Error("json-variables/jVar(): [THROW_ID_01] Alas! Inputs are missing!");
    if (!W(e)) throw new TypeError(`json-variables/jVar(): [THROW_ID_02] Alas! The input must be a plain object! Currently it's: ${Array.isArray(e)?"array":typeof e}`);
    if (r && !W(r)) throw new TypeError(`json-variables/jVar(): [THROW_ID_03] Alas! An Optional Options Object must be a plain object! Currently it's: ${Array.isArray(r)?"array":typeof r}`);
    let n = { ...K, ...r };
    n.dontWrapVars ? Array.isArray(n.dontWrapVars) || (n.dontWrapVars = F(n.dontWrapVars)) : n.dontWrapVars = [];
    let l, i;
    if (n.dontWrapVars.length > 0 && !n.dontWrapVars.every((a, o) => u(a) ? !0 : (l = a, i = o, !1))) throw new Error(`json-variables/jVar(): [THROW_ID_05] Alas! All variable names set in opts.dontWrapVars should be of a string type. Computer detected a value "${l}" at index ${i}, which is not string but ${Array.isArray(l)?"array":typeof l}!`);
    if (n.heads === "") throw new Error("json-variables/jVar(): [THROW_ID_06] Alas! opts.heads are empty!");
    if (n.tails === "") throw new Error("json-variables/jVar(): [THROW_ID_07] Alas! opts.tails are empty!");
    if (n.lookForDataContainers && n.dataContainerIdentifierTails === "") throw new Error("json-variables/jVar(): [THROW_ID_08] Alas! opts.dataContainerIdentifierTails is empty!");
    if (n.heads === n.tails) throw new Error("json-variables/jVar(): [THROW_ID_09] Alas! opts.heads and opts.tails can't be equal!");
    if (n.heads === n.headsNoWrap) throw new Error("json-variables/jVar(): [THROW_ID_10] Alas! opts.heads and opts.headsNoWrap can't be equal!");
    if (n.tails === n.tailsNoWrap) throw new Error("json-variables/jVar(): [THROW_ID_11] Alas! opts.tails and opts.tailsNoWrap can't be equal!");
    if (n.headsNoWrap === "") throw new Error("json-variables/jVar(): [THROW_ID_12] Alas! opts.headsNoWrap is an empty string!");
    if (n.tailsNoWrap === "") throw new Error("json-variables/jVar(): [THROW_ID_13] Alas! opts.tailsNoWrap is an empty string!");
    if (n.headsNoWrap === n.tailsNoWrap) throw new Error("json-variables/jVar(): [THROW_ID_14] Alas! opts.headsNoWrap and opts.tailsNoWrap can't be equal!");
    let t;
    return k(e, (a, o, y) => { if (z(o) && T(a, n)) throw new Error(`json-variables/jVar(): [THROW_ID_15] Alas! Object keys can't contain variables!
Please check the following key: ${a}`); if (o !== void 0 ? t = o : t = a, t === "") return t; if (n.heads.length !== 0 && g(t) === g(n.heads) || n.tails.length !== 0 && g(t) === g(n.tails) || n.headsNoWrap.length !== 0 && g(t) === g(n.headsNoWrap) || n.tailsNoWrap.length !== 0 && g(t) === g(n.tailsNoWrap)) { if (!n.noSingleMarkers) return t; throw new Error(`json-variables/jVar(): [THROW_ID_16] Alas! While processing the input, we stumbled upon ${g(t)} which is equal to ${g(t)===g(n.heads)?"heads":""}${g(t)===g(n.tails)?"tails":""}${u(n.headsNoWrap)&&g(t)===g(n.headsNoWrap)?"headsNoWrap":""}${u(n.tailsNoWrap)&&g(t)===g(n.tailsNoWrap)?"tailsNoWrap":""}. If you wouldn't have set opts.noSingleMarkers to "true" this error would not happen and computer would have left the current element (${g(t)}) alone`) } return u(t) && T(t, n) ? R(e, t, y.path, n) : t })
}
export { K as defaults, he as jVar, de as version };