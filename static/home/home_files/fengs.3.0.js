/******************************************************
		 ___				  _   
		|  _| ___ _  __  ___ (_)___
		| |_ / __| |/  |/ _ \| / __|
		|  _|  __| | | | |_| | \__ \
		|_|  \___|__/|_|\__  | |___/
						 __| | |
						|___/__/

 ******************************************************
 * Fengs.js 异步模块化框架
 * 版本号:3.0.5 2018-06-05
 ******************************************************/
(function (e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q, R, U, z, W, X, V, $, J, K, Q, G, Y, Z, et, tt, nt, rt, it, st, ot, ut, at, ft, lt, ct, ht, pt, dt, vt, mt, gt, yt, bt, wt, Et, St, xt, Tt, Nt, Ct, kt, Lt, At, Ot, Mt, _t, Dt, Pt, Ht, Bt, jt, Ft, It, qt, Rt, Ut, zt, Wt, Xt, Vt, $t, Jt, Kt, Qt, Gt, Yt, Zt, en, tn, nn, rn, sn, on, un, an, fn, ln, cn, hn, pn, dn, vn, mn, gn, yn, bn, wn, En, Sn, xn, Tn, Nn, Cn, kn, Ln, An, On, Mn, _n, Dn, Pn, Hn) {
	(function (Bn) {
		Bn[e] || (Bn[e] = {
			log: function () {}
		});
		var jn = Bn[t],
			Fn = [n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k],
			In = L,
			qn = {
				name: A,
				path: A,
				remote: {
					api: [O],
					js: [O],
					template: M
				},
				depend: [_],
				locals: [],
				tag: D,
				debug: !1
			},
			Rn = [],
			Un = P,
			zn = function (e, t, n) {
				if (!!Bn[H]) {
					Bn[H][B](e, t);
					return
				}
				n || (n = 30);
				if (n == j) jn[F] = e + I + escape(t);
				else {
					var r = new Bn[q];
					r[R](r[U]() + n * 24 * 60 * 60 * 1e3), jn[F] = e + I + escape(t) + z + expires + I + r[W]()
				}
			},
			Wn = function (e) {
				if (!Bn[H]) {
					var t, n = new Bn[V]($ + e + J);
					return (t = jn[F][K](n)) ? unescape(t[2]) : null
				}
				return Bn[H][X](e)
			},
			Xn = 0,
			Vn = function (e, t) {
				if (e[Q](G) == 0) return t[K](/\//g) == null ? e[Y](/^\.\//, A) : t[Y](/(\/[a-zA-Z0-9_\-]*)$/, O + e[Y](G, A));
				if (e[Q](Z) == 0) {
					var n, r;
					n = e[et](Z), r = t[et](O);
					var i = n[tt] - 1,
						s = r[tt] - 1;
					r[tt] = s;
					for (var o = 0; o < i; o++) r[nt](s - o - 1, 1);
					return r[rt](O) + O + e[Y](/(\.\.\/)/ig, A)
				}
				return e
			},
			$n = function (e) {
				console && console[it](e)
			},
			Jn = [],
			Kn = function (e, t, n) {
				e = e[Y](/[a-z0-9\-\_][\/]+/ig, function (e) {
					return e[Y](/[\/]+/, O)
				});
				var r = jn[st](ot),
					i = jn[ut](at)[0],
					s = !1;
				r[ft] = lt, r[ct] = e, r[ht] = function () {
					var e = r[pt];
					!s && (e === dt || e === vt) && (s = !0, t && t(), r[ht] = null, i[mt](r))
				}, r[gt] = function () {
					s || (s = !0, t && t(), i[mt](r))
				}, n && (r[yt] = n), i[bt](r), cr && cr(e)
			},
			Qn = !0,
			Gn = function (e) {
				e = e[Y](/^\//, A);
				var t = !1;
				if (ar(qn[wt]))
					for (var n in qn[wt]) e[Q](qn[wt][n]) === 0 && (t = !0);
				var r = t ? (Bn[Et][St] ? O : A) + fr([qn[xt], qn[Tt]]) : qn[Nt][Ct][Xn],
					i = lr[kt][e];
				if (!i) return lr[kt][e] = {
					status: 0
				}, Kn(r + O + e + Lt + qn[At], function () {}, function () {
					$n(Ot + e + Mt), lr[kt][e] = {
						fn: function () {},
						status: -1
					}
				}), !1;
				if (i[_t] == 0) return !1;
				if (i[_t] == -1) return lr[kt][e] = {
					cb: function () {},
					status: -1
				};
				var s = i[Dt] ? i[Dt] : [],
					o = 0;
				for (var n = 0, u = s[tt]; n < u; n++) Gn(Vn(s[n], e)) || o++;
				return o == 0 ? !0 : !1
			},
			Yn = A,
			Zn = function (e) {
				return Bn[Pt][Ht](Bn[Bt](e, 36))
			};
		for (var er = 0, tr = Fn[rt](A)[K](/(\S\S)/ig), nr = tr[tt]; er < nr; er++) Yn += Zn(tr[er]);
		var rr = Bn[Pt][Ht],
			ir = function (e) {
				var t = A,
					n, r, i, s, o, u, a, f = 0;
				e = e[Y](/[^A-Za-z0-9\+\/\=]/g, A);
				while (f < e[tt]) s = Yn[Q](e[jt](f++)), o = Yn[Q](e[jt](f++)), u = Yn[Q](e[jt](f++)), a = Yn[Q](e[jt](f++)), n = s << 2 | o >> 4, r = (o & 15) << 4 | u >> 2, i = (u & 3) << 6 | a, t += rr(n), u != 64 && (t += rr(r)), a != 64 && (t += rr(i));
				return t = sr(t), t
			},
			sr = function (e) {
				var t = A,
					n = 0,
					r = c1 = c2 = 0;
				while (n < e[tt]) r = e[Ft](n), r < 128 ? (t += rr(r), n++) : r > 191 && r < 224 ? (c2 = e[Ft](n + 1), t += rr((r & 31) << 6 | c2 & 63), n += 2) : (c2 = e[Ft](n + 1), c3 = e[Ft](n + 2), t += rr((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63), n += 3);
				return t
			},
			or = function (e, t) {
				for (var n in t) e[n] = t[n];
				return e
			},
			ur = function (e) {
				if (typeof e === It) {
					e = ir(e);
					var t = [];
					for (var n = 0, r = e[et](qt), i = r[tt]; n < i; n++) t[Rt](r[n]);
					return t
				}
				return e
			},
			ar = function (e) {
				return Object[Ut][zt][Wt](e) === Xt
			},
			fr = function (e) {
				var t = e[rt](O)[Y](/([\/]+)/ig, O);
				return t += t[K](/\/$/) === null ? O : A, t[Y](/^\//, A)
			},
			lr = function (e, t) {
				e[Vt](lr, ur(t))
			};
		lr[$t] = ir;
		var cr = function () {};
		lr[Jt] = {}, lr[kt] = {}, lr[Kt] = function (e, t, n) {
			if (!lr[kt][e] || lr[kt][e][_t] == 0) lr[kt][e] = {
				cb: t,
				req: n,
				status: 1
			};
			return this
		}, lr[Qt] = In;
		var hr;
		lr[Gt] = function (e) {
			Qn = !1, qn = or(qn, e);
			var t = lr;
			t[Yt] = qn, t[Nt] = qn[Nt];
			for (var n = 0, r = qn[Zt][tt]; n < r; n++) t[en](tn + qn[Zt][n]);
			var i = 0,
				s = qn[Nt][Ct][tt],
				o = function (e) {
					Xn = e % s, zn(Un, e + nn + (new Date)[U]())
				},
				u = function () {
					Kn(qn[Nt][Ct][Xn] + rn, function () {
						Qn = !0, t[en](sn), o(Xn)
					}, function () {
						i++, i > s + 1 ? ($n(on), hr && hr({
							count: i,
							host: qn[Nt][Ct][Xn],
							module: rn
						})) : (o(Xn + 1), u())
					})
				};
			if (ar(qn[wt]))
				for (var n in qn[wt]) qn[wt][n] = fr([qn[wt][n]]);
			return u(), t
		}, lr[un] = function (e) {
			return typeof e === an && (cr = e), this
		}, lr[en] = function (e, t) {
			var n = arguments[fn],
				r = this;
			if (typeof e === an) {
				t = t || [];
				var i = ln + (new Date)[U]()[zt](36) + Bn[Bt](Bn[cn][hn]() * 1e4)[zt](36);
				return r[Kt](i, e, t)[en](i), r
			}
			e = e[Y](/^\//, A);
			if (!Qn) return Bn[pn](function () {
				n(e, t)
			}, 50), r;
			e = e[Y](/^\//, A);
			var s = Gn(e);
			if (!s) lr[kt][e][dn] = Bn[pn](function () {
				n[Wt](r, e, t)
			}, 50);
			else {
				var o = lr[kt][e],
					u = o[Dt] || [],
					a = [],
					f = 0;
				for (var l = 0, c = u[tt]; l < c; l++) Gn(Vn(u[l], e)) || f++;
				if (f == 0) {
					a[Rt](lr);
					if (qn[vn])
						for (var l = 0, c = qn[vn][tt]; l < c; l++) a[Rt](Bn[qn[vn][l]]);
					for (var l = 0, c = u[tt]; l < c; l++) a[Rt](lr[en](Vn(u[l], e)));
					return t ? t(lr[kt][e][mn][Vt](Bn, a)) : lr[kt][e][mn][Vt](Bn, a)
				}
				lr[kt][e][dn] = Bn[pn](function () {
					n[Wt](r, e, t)
				}, 50)
			}
			return r
		}, lr[gn] = function (e, t, n) {
			var r = Bn[H];
			if (typeof t === yn) {
				if (!r) {
					var i = null;
					if (jn[F] && jn[F] != A) {
						var s = jn[F][et](bn);
						for (var o = 0; o < s[tt]; o++) {
							var u = s[o][Y](/(^[ ]+)|([ ]+$)/ig, A);
							if (u[wn](0, name[tt] + 1) == name + I) {
								i = Bn[En](u[wn](name[tt] + 1));
								break
							}
						}
					}
					return i
				}
				return r[e]
			}
			if (!r) {
				var a = Bn[Et][St],
					f = a[K](/[a-z0-9\-]+\.(net(\.cn)?|com(\.cn)?|cn)$/),
					l = f === null ? a : f[0];
				l = l[Y](/:[\d]{1,5}$/i, A), n = n || {
					domain: l,
					path: O,
					expires: 365
				}, t === null && (t = A, n[Sn] = -1);
				var c = A;
				if (n[Sn] && (typeof n[Sn] === number || n[Sn][xn])) {
					var h;
					typeof n[Sn] === number ? (h = new Bn[q], h[R](h[U]() + n[Sn] * 24 * 60 * 60 * 1e3)) : h = n[Sn], c = Tn + expires + I + h[xn]()
				}
				var p = n[xt] ? Nn + n[xt] : A,
					d = n[Cn] ? Tn + l + I + n[Cn] : A,
					v = n[kn] ? Ln : A;
				jn[F] = [name, I, Bn[An](t), c, p, d, v][rt](A)
			} else r[e] = t;
			return lr
		}, lr[On] = function (e) {
			return hr = e, lr
		}, lr[Mn] = function (e) {
			return lr[Jt][e]
		}, lr[_n] = function (e, t) {
			return lr[Jt][e] = t, lr
		}, lr[Ut] = lr;
		var pr = function () {
			var e = Wn(Un),
				t = 864e5,
				n = (new Date)[U]();
			if (!e) Xn = 0;
			else try {
				e = e[et](nn), n -= parseInt(e[1]), n > t || n < 0 - t ? Xn = 0 : Xn = parseInt(e[0])
			} catch (r) {
				Xn = 0
			}
			Xn = Bn[Dn](Xn) ? 0 : Xn
		};
		pr(), Bn[Pn] = Bn[Hn] = lr
	})(this)
})("console", "document", "252u2", "v172z", "1z202", "11g1u", "1v383", "e1c1h", "1t2h2", "92a2b", "1f1l2", "d1d30", "31321", "i1j1k", "392x2", "y1w2q", "2r2s2", "t2e2f", "2g1e1", "b2224", "2p2c2", "w371x", "1y3d2", "32627", "28333", "43536", "3a3b3", "c2i1p", "3.0.5", "", "/", "html/", "underscore", "20160820", "FENGS_REMOTE_HOST", "localStorage", "setItem", "auto", "cookie", "=", "Date", "setTime", "getTime", ";path=/;", "toGMTString", "getItem", "RegExp", "(^| )", "=([^;]*)(;|$)", "match", "indexOf", "./", "replace", "../", "split", "length", "splice", "join", "error", "createElement", "script", "getElementsByTagName", "head", "type", "text/javascript", "src", "onreadystatechange", "readyState", "loaded", "complete", "removeChild", "onload", "onerror", "appendChild", "locals", "location", "host", "path", "name", "remote", "js", "modules", ".js?", "tag", "MODULE ", " LOADING FAILURE", "status", "req", "String", "fromCharCode", "parseInt", "charAt", "charCodeAt", "string", "#", "push", "prototype", "toString", "call", "[object Array]", "apply", "d", "cache", "add", "_version", "config", "_options", "depend", "use", "lib/", ",", "/common/utils.js", "common/utils", "UNABLE TO LOAD SCRIPT RESOURCES", "logger", "function", "callee", "__am/", "Math", "random", "setTimeout", "timeout", "lib", "cb", "storage", "undefined", ";", "substring", "decodeURIComponent", "expires", "toUTCString", "; ", "; path=", "domain", "secure", "; secure", "encodeURIComponent", "fail", "get", "set", "isNaN", "fengs", "Fengs")