(function (e) {
    function t(t) { for (var o, c, s = t[0], a = t[1], u = t[2], l = 0, f = []; l < s.length; l++)c = s[l], i[c] && f.push(i[c][0]), i[c] = 0; for (o in a)Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]); p && p(t); while (f.length)f.shift()(); return r.push(...u || []), n(); } function n() { for (var e, t = 0; t < r.length; t++) { for (var n = r[t], o = !0, s = 1; s < n.length; s++) { const a = n[s]; i[a] !== 0 && (o = !1); }o && (r.splice(t--, 1), e = c(c.s = n[0])); } return e; } const o = {}; var i = { app: 0 }; var
        r = []; function c(t) { if (o[t]) return o[t].exports; const n = o[t] = { i: t, l: !1, exports: {} }; return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports; }c.m = e, c.c = o, c.d = function (e, t, n) { c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }); }, c.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }); }, c.t = function (e, t) { if (1 & t && (e = c(e)), 8 & t) return e; if (4 & t && typeof e === 'object' && e && e.__esModule) return e; const n = Object.create(null); if (c.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & t && typeof e !== 'string') for (const o in e)c.d(n, o, (t => e[t]).bind(null, o)); return n; }, c.n = function (e) { const t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return c.d(t, 'a', t), t; }, c.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, c.p = '/'; let s = window.webpackJsonp = window.webpackJsonp || []; const
        a = s.push.bind(s); s.push = t, s = s.slice(); for (let u = 0; u < s.length; u++)t(s[u]); var p = a; r.push([0, 'chunk-vendors']), n();
}({
    0(e, t, n) { e.exports = n('56d7'); },
    '0954': function (e, t, n) {},
    '0cfb': function (e, t, n) {},
    1038(e, t, n) { e.exports = 'https://tnicola.github.io/vue-voice/img/stop.56423db7.svg'; },
    '1a61': function (e, t, n) { e.exports = 'https://tnicola.github.io/vue-voice/img/mic.7d7a0432.svg'; },
    '3b8b': function (e, t, n) {
        const o = n('0954'); const
            i = n.n(o); i.a;
    },
    '56d7': function (e, t, n) {
        n.r(t); n('cadf'), n('551c'), n('097d'); const o = n('2b0e'); const i = function () {
            const e = this; const t = e.$createElement; const
                n = e._self._c || t; return n('div', { attrs: { id: 'app' } }, [n('div', { staticClass: 'app__speech-to-text' }, [e._m(0), n('div', { staticClass: 'app__try-button' }, [n('SpeechToText', { staticClass: 'app__stt-button', on: { speech(t) { e.onSpeechReceived(t); } } }), n('textarea', {
                directives: [{
                    name: 'model', rawName: 'v-model', value: e.speech, expression: 'speech'
                }],
                staticClass: 'app__stt-input',
                attrs: { placeholder: 'Prova' },
                domProps: { value: e.speech },
                on: { input(t) { t.target.composing || (e.speech = t.target.value); } }
            })], 1)])]);
        }; const r = [function () {
            const e = this; const t = e.$createElement; const
                o = e._self._c || t; return o('div', { staticClass: 'app__title' }, [o('img', { attrs: { alt: 'Vue logo', src: n('cf05'), width: '24' } }), e._v('Speech to Text\n    ')]);
        }]; const c = function () {
            const e = this; const t = e.$createElement; const
                n = e._self._c || t; return n('div', [n('div', { staticClass: 'speech-to-text__button-container' }, [n('div', { staticClass: 'speech-to-text__button', class: { 'speech-to-text__button--speaking': e.isSpeaking }, on: { click(t) { e.onClick(); } } }, [e.isSpeaking ? e._e() : n('img', { attrs: { src: e.micImage } }), e.isSpeaking ? n('img', { staticClass: 'speech-to-text__stop', attrs: { src: e.stopImage } }) : e._e()])])]);
        }; const s = []; const a = n('d4ec'); const u = n('bee2'); const p = n('2bd2'); var l = l || webkitSpeechRecognition; const f = (function () { function e() { const t = this; Object(a.a)(this, e), this.recognition = new l(), this.result = 'created', this.resultSubject = new p.a(), this.recognition.lang = 'en-EN', this.recognition.interimResults = !1, this.recognition.maxAlternatives = 1, this.recognition.onresult = function (e) { console.log('Event', e); const n = e.results.length - 1; t.result = e.results[n][0].transcript, console.log('Confidence: '.concat(e.results[0][0].confidence), t.result), t.resultSubject.next(t.result); }, this.recognition.onspeechend = function () { t.recognition.stop(), console.log('Speech end'), t.resultSubject.next(''); }, this.recognition.onnomatch = function () { console.log("I didn't recognise that colors."); }, this.recognition.onerror = function (e) { console.log('Error occurred in recognition: '.concat(e.error)), t.resultSubject.error('Error occurred in recognition: '.concat(e.error)); }; } return Object(u.a)(e, [{ key: 'speak', value() { return this.recognition.start(), this.resultSubject; } }]), e; }()); const h = n('1a61'); const g = n.n(h); const d = n('1038'); const v = n.n(d); const b = {
            name: 'SpeechToText',
data() {
 return {
                isSpeaking: !1, speech: '', speechService: {}, micImage: g.a, stopImage: v.a
            };
 },
methods: { onClick() { const e = this; this.isSpeaking = !0, this.speechService.speak().subscribe((t) => { e.speech = t, e.$emit('speech', e.speech), e.isSpeaking = !1; }, (t) => { console.log('Error', t), e.isSpeaking = !1; }, () => { e.isSpeaking = !1 ;}), console.log('speechService started'); } },
props: { msg: String },
created() { this.speechService = new f(); }
        }; const m = b; const _ = (n('3b8b'), n('2877')); const
            S = Object(_.a)(m, c, s, !1, null, null, null); S.options.__file = 'SpeechToText.vue'; const x = S.exports; const k = {
            name: 'app', components: { SpeechToText: x }, data() { return { speech: '' }; }, methods: { onSpeechReceived(e) { console.log('Reveived', e), this.speech = e; } }
        }; const j = k; const
            y = (n('cf25'), Object(_.a)(j, i, r, !1, null, null, null)); y.options.__file = 'App.vue'; const w = y.exports; o.a.config.productionTip = !1, new o.a({ render(e) { return e(w); } }).$mount('#app');
    },
    cf05(e, t, n) { e.exports = 'https://tnicola.github.io/vue-voice/img/logo.82b9c7a5.png'; },
    cf25(e, t, n) {
        const o = n('0cfb'); const
            i = n.n(o); i.a;
    }
}));
// # sourceMappingURL=app.717d956a.js.map
