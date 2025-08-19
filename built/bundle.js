(() => {
  "use strict";
  var e = {
      56: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      72: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var s = {}, i = [], a = 0; a < e.length; a++) {
            var c = e[a],
              u = r.base ? c[0] + r.base : c[0],
              d = s[u] || 0,
              l = "".concat(u, " ").concat(d);
            s[u] = d + 1;
            var b = n(l),
              m = { css: c[1], media: c[2], sourceMap: c[3], supports: c[4], layer: c[5] };
            if (-1 !== b) (t[b].references++, t[b].updater(m));
            else {
              var h = o(m, r);
              ((r.byIndex = a), t.splice(a, 0, { identifier: l, updater: h, references: 1 }));
            }
            i.push(l);
          }
          return i;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var s = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < s.length; i++) {
              var a = n(s[i]);
              t[a].references--;
            }
            for (var c = r(e, o), u = 0; u < s.length; u++) {
              var d = n(s[u]);
              0 === t[d].references && (t[d].updater(), t.splice(d, 1));
            }
            s = c;
          };
        };
      },
      89: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, s) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var a = 0; a < this.length; a++) {
                  var c = this[a][0];
                  null != c && (i[c] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var d = [].concat(e[u]);
                (r && i[d[0]]) ||
                  (void 0 !== s &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = s)),
                  n &&
                    (d[2]
                      ? ((d[1] = "@media ".concat(d[2], " {").concat(d[1], "}")), (d[2] = n))
                      : (d[2] = n)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}")), (d[4] = o))
                      : (d[4] = "".concat(o))),
                  t.push(d));
              }
            }),
            t
          );
        };
      },
      113: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      131: (e, t, n) => {
        n.d(t, { A: () => a });
        var r = n(248),
          o = n.n(r),
          s = n(89),
          i = n.n(s)()(o());
        i.push([
          e.id,
          '.buttons__wraper {\n  background-color: black;\n  height: 70%;\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(5, 8.25vh);\n  grid-gap: 1px;\n  grid-template-areas:\n    "btn_MPlus btn_MMinus btn_MR btn_saveInMemory btn_changeSybol btn_persentage btn_division"\n    "btn_MC btn_nuberPowNumber btn_nuberPowTwo btn_7 btn_8 btn_9 btn_multiplication"\n    "btn_nuberPowThree btn_tenPowNumber btn_number_x btn_4 btn_5 btn_6 btn_minus"\n    "btn_root btn_rootTwoOfNumber btn_rootThreeOfNumber btn_1 btn_2 btn_3 btn_summ"\n    "btn_factorial btn_reset btn_reset btn_0  btn_0 btn_comma btn_equal";\n}\n.theme-toggle {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  padding: 5px 10px;\n  border: none;\n  background-color: #666;\n  color: white;\n  cursor: pointer;\n  border-radius: 5px;\n  font-size: 14px;\n}\n\n.btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5em;\n  background-color: grey;\n  user-select: none;\n}\n\n.btn:hover {\n  cursor: pointer;\n}\n\n/*buttons styles */\n.btn-orange {\n  background-color: orange;\n}\n.btn-lightGrey {\n  background-color: rgb(163, 163, 163);\n}\n/*styles for white theme */\n.btn-whiteTheme {\n  background-color: #f8f8f8;\n  color: black;\n}\n.btn-navyBlue {\n  background-color: rgb(4, 4, 63);\n  color: white;\n}\n.btn-veryLightBlue {\n  background-color: #eef1f6;\n}\n\n/* First row */\n.btn_MPlus {\n  grid-area: btn_MPlus;\n}\n.btn_MMinus {\n  grid-area: btn_MMinus;\n}\n.btn_MR {\n  grid-area: btn_MR;\n}\n.btn_saveInMemory {\n  grid-area: btn_saveInMemory;\n}\n.btn_changeSybol {\n  grid-area: btn_changeSybol;\n}\n.btn_persentage {\n  grid-area: btn_persentage;\n}\n.btn_division {\n  grid-area: btn_division;\n}\n\n/*Second row */\n.btn_MC {\n  grid-area: btn_MC;\n}\n.btn_nuberPowNumber {\n  grid-area: btn_nuberPowNumber;\n}\n.btn_nuberPowTwo {\n  grid-area: btn_nuberPowTwo;\n}\n.btn_7 {\n  grid-area: btn_7;\n}\n.btn_8 {\n  grid-area: btn_8;\n}\n.btn_9 {\n  grid-area: btn_9;\n}\n.btn_multiplication {\n  grid-area: btn_multiplication;\n}\n\n/*Third row */\n.btn_nuberPowThree {\n  grid-area: btn_nuberPowThree;\n}\n.btn_tenPowNumber {\n  grid-area: btn_tenPowNumber;\n}\n.btn_number_x {\n  grid-area: btn_number_x;\n}\n.btn_4 {\n  grid-area: btn_4;\n}\n.btn_5 {\n  grid-area: btn_5;\n}\n.btn_6 {\n  grid-area: btn_6;\n}\n.btn_minus {\n  grid-area: btn_minus;\n}\n\n/*Fourth row */\n.btn_root {\n  grid-area: btn_root;\n}\n.btn_rootTwoOfNumber {\n  grid-area: btn_rootTwoOfNumber;\n}\n.btn_rootThreeOfNumber {\n  grid-area: btn_rootThreeOfNumber;\n}\n.btn_1 {\n  grid-area: btn_1;\n}\n.btn_2 {\n  grid-area: btn_2;\n}\n.btn_3 {\n  grid-area: btn_3;\n}\n.btn_summ {\n  grid-area: btn_summ;\n}\n\n/* Fifth row */\n.btn_factorial {\n  grid-area: btn_factorial;\n}\n.btn_0 {\n  grid-area: btn_0;\n}\n.btn_comma {\n  grid-area: btn_comma;\n}\n.btn_equal {\n  grid-area: btn_equal;\n}\n.btn_reset {\n  grid-area: btn_reset;\n}\n',
          "",
        ]);
        const a = i;
      },
      208: (e, t, n) => {
        n.d(t, { A: () => d });
        var r = n(248),
          o = n.n(r),
          s = n(89),
          i = n.n(s),
          a = n(131),
          c = n(550),
          u = i()(o());
        (u.i(a.A),
          u.i(c.A),
          u.push([
            e.id,
            "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.container {\n  border: 2px solid black;\n  height: 60vh;\n  width: 35%;\n  margin: 20vh auto;\n  background-color: rgb(72, 72, 72);\n  color: white;\n  display: flex;\n  flex-direction: column;\n}\n",
            "",
          ]));
        const d = u;
      },
      248: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      540: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return (e.setAttributes(t, e.attributes), e.insert(t, e.options), t);
        };
      },
      550: (e, t, n) => {
        n.d(t, { A: () => a });
        var r = n(248),
          o = n.n(r),
          s = n(89),
          i = n.n(s)()(o());
        i.push([
          e.id,
          ".display__wraper {\n  display: flex;\n  height: 30%;\n}\n\n.display__wraper-previosOperation {\n  width: 40%;\n  min-height: 100px;\n  min-width: 100px;\n  padding: 0.5vh 0.5vw;\n  overflow-y: auto;\n  font-size: 0.7em;\n  opacity: 0.5;\n}\n\n.display__wraper-currentOperation {\n  width: 60%;\n}\n\n.memory {\n  height: 40%;\n  display: flex;\n  justify-content: end;\n  padding: 2%;\n  opacity: 0.5;\n  font-size: 1.5rem;\n}\n\n.display {\n  height: 60%;\n  display: flex;\n  align-items: end;\n  justify-content: end;\n  padding: 2%;\n  font-size: 1.5rem;\n}\n",
          "",
        ]);
        const a = i;
      },
      659: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                (n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {")));
                var o = void 0 !== n.layer;
                (o && (r += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}"));
                var s = n.sourceMap;
                (s &&
                  "undefined" != typeof btoa &&
                  (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
                    " */",
                  )),
                  t.styleTagTransform(r, e, t.options));
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var s = (t[r] = { id: r, exports: {} });
    return (e[r](s, s.exports, n), s.exports);
  }
  ((n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return (n.d(t, { a: t }), t);
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nc = void 0));
  class r {
    constructor(e, t, n) {
      ((this.context = e), (this.a = t), (this.b = n));
    }
    execute() {}
  }
  function o(e) {
    return e < 0 ? -e : e;
  }
  class s extends r {
    constructor(e, t, n) {
      super(e, t, n);
    }
    execute() {
      const e = +this.context.firstNumber,
        t = +this.context.secondNumber;
      if (t <= 0) return NaN;
      if (0 === e) return 0;
      if (e < 0 && t % 2 == 0) return NaN;
      let n = e / t || 1,
        r = 0,
        s = 0;
      function i(e, t) {
        let n = 1;
        for (let r = 0; r < t; r++) n *= e;
        return n;
      }
      for (; o(n - r) > 1e-10 && s < 1e3; )
        ((r = n), (n = ((t - 1) * n + e / i(n, t - 1)) / t), s++);
      return n;
    }
  }
  class i extends r {
    constructor(e, t, n) {
      super(e, t, n);
    }
    execute() {
      return this.a + this.b;
    }
  }
  class a extends r {
    constructor(e, t, n) {
      super(e, t, n);
    }
    execute() {
      return 0 === this.b
        ? (alert("На ноль делить нельзя"), this.context.reset(), "")
        : this.a / this.b;
    }
  }
  class c extends r {
    constructor(e, t, n) {
      super(e, t, n);
    }
    execute() {
      const e = Number(this.a);
      if (isNaN(e) || e < 0) return void alert("Введите неотрицательное число");
      let t = 1;
      for (let n = 2; n <= e; n++) t *= n;
      return t;
    }
  }
  class u extends r {
    constructor(e, t, n) {
      super(e, t, n);
    }
    execute() {
      return this.a * this.b;
    }
  }
  class d extends r {
    constructor(e, t, n) {
      super(e, t, n);
    }
    execute() {
      return this.a ? "" + 1 / +this.a : alert("Введите число");
    }
  }
  class l extends r {
    constructor(e, t, n) {
      super(e, t, n);
    }
    execute() {
      const e = +this.a,
        t = +this.b;
      let n = 1;
      if (e > 0 && t > 0) {
        for (let r = 0; r < t; r++) n *= e;
        return n;
      }
      alert("Введите положительные числа");
    }
  }
  class b extends r {
    constructor(e, t, n) {
      super(e, t, n);
    }
    execute() {
      return (this.a / this.b) * 100;
    }
  }
  class m extends r {
    constructor(e, t, n) {
      super(e, t, n);
    }
    execute() {
      if (this.a) return +this.a * +this.a;
      alert("Введите число");
    }
  }
  class h extends r {
    constructor(e, t, n) {
      super(e, t, n);
    }
    execute() {
      const e = +this.context.firstNumber;
      if (e < 0) return NaN;
      if (0 === e) return 0;
      let t = e / 2,
        n = 0,
        r = 0;
      for (; o(t - n) > 1e-10 && r < 1e3; ) ((n = t), (t = 0.5 * (t + e / t)), r++);
      return t;
    }
  }
  class p extends r {
    constructor(e, t, n) {
      super(e, t, n);
    }
    execute() {
      const e = +this.context.firstNumber;
      if (0 === e) return 0;
      let t = e / 3 || 1,
        n = 0,
        r = 0;
      for (; o(t - n) > 1e-10 && r < 1e3; ) ((n = t), (t = (2 * t + e / (t * t)) / 3), r++);
      return t;
    }
  }
  class f extends r {
    constructor(e, t, n) {
      super(e, t, n);
    }
    execute() {
      return this.a - this.b;
    }
  }
  class _ extends r {
    constructor(e, t, n) {
      super(e, t, n);
    }
    execute() {
      if (this.a) {
        let e = +this.a;
        if (0 === e) e = "0";
        else {
          if (e > 0 && Number.isInteger(e)) {
            let t = 10;
            for (let n = 1; n < e; n++) t *= 10;
            return t;
          }
          alert("Введите целое неотрицательное число");
        }
      } else alert("Введите число");
    }
  }
  class y extends r {
    constructor(e, t, n) {
      super(e, t, n);
    }
    execute() {
      if (this.a) return +this.a * +this.a * +this.a;
      alert("Введите число");
    }
  }
  class x extends r {
    constructor(e, t, n) {
      super(e, t, n);
    }
    execute() {
      this.context.operator
        ? this.context.secondNumber &&
          (this.context.secondNumber = String(-Number(this.context.secondNumber)))
        : this.context.firstNumber &&
          (this.context.firstNumber = String(-Number(this.context.firstNumber)));
    }
  }
  const g = document.querySelector(".display__wraper"),
    v = document.querySelector(".buttons__wraper "),
    w = document.querySelectorAll(".btn");
  var N = n(72),
    C = n.n(N),
    L = n(825),
    k = n.n(L),
    S = n(659),
    M = n.n(S),
    T = n(56),
    q = n.n(T),
    E = n(540),
    P = n.n(E),
    A = n(113),
    O = n.n(A),
    I = n(208),
    D = {};
  ((D.styleTagTransform = O()),
    (D.setAttributes = q()),
    (D.insert = M().bind(null, "head")),
    (D.domAPI = k()),
    (D.insertStyleElement = P()),
    C()(I.A, D),
    I.A && I.A.locals && I.A.locals);
  const $ = document.querySelector(".display"),
    j = document.querySelector(".memory"),
    z = document.querySelector(".display__wraper-previosOperation"),
    H = document.querySelector(".theme-toggle"),
    R = new (class {
      constructor(e, t, n) {
        ((this.display = e),
          (this.memory = t),
          (this.firstNumber = ""),
          (this.secondNumber = ""),
          (this.operator = ""),
          (this.history = n),
          (this.historyList = []));
      }
      updateDisplay() {
        this.display.textContent = this.operator
          ? `${this.firstNumber} ${this.operator} ${this.secondNumber}`
          : this.firstNumber || "0";
      }
      reset() {
        ((this.firstNumber = ""),
          (this.secondNumber = ""),
          (this.operator = ""),
          this.updateDisplay());
      }
      calculate() {
        const e = +this.firstNumber,
          t = +this.secondNumber;
        let n;
        if ("" != this.firstNumber && this.operator && "" != this.secondNumber) {
          switch (this.operator) {
            case "+":
              n = new i(this, e, t).execute();
              break;
            case "-":
              n = new f(this, e, t).execute();
              break;
            case "x":
              n = new u(this, e, t).execute();
              break;
            case "%":
              n = new b(this, e, t).execute();
              break;
            case "y^(√x)":
              n = new s(this, e, t).execute();
              break;
            case "xʸ":
              n = new l(this, e, t).execute();
              break;
            case "÷":
              n = new a(this, e, t).execute();
              break;
            default:
              return;
          }
          return (this.addToHistory(`${e} ${this.operator} ${t} = ${n}`), n);
        }
        return (
          alert("Неверный ввод: введите 2 числа"),
          this.reset(),
          (this.display.textContent = "")
        );
      }
      renderCalculate() {
        ((this.firstNumber = this.calculate()),
          (this.secondNumber = ""),
          (this.operator = ""),
          (this.display.textContent = this.firstNumber));
      }
      executeCommand(e) {
        const t = e.execute();
        (void 0 !== t && (this.addToHistory(`${this.firstNumber} → ${t}`), (this.firstNumber = t)),
          this.updateDisplay());
      }
      addToHistory(e) {
        (this.historyList.push(e),
          this.historyList.length > 10 && this.historyList.shift(),
          (this.history.innerHTML = this.historyList.map((e) => `<div>${e}</div>`).join("")));
      }
      memoryAdd() {
        this.secondNumber || this.operator
          ? ((this.memory.textContent = this.calculate()), this.reset())
          : ((this.memory.textContent = +this.firstNumber), this.reset());
      }
      memoryClear() {
        this.memory.textContent = "";
      }
      memoryPlus() {
        this.memory.textContent = "" + (+this.memory.textContent + +this.firstNumber);
      }
      memoryMinus() {
        this.memory.textContent = "" + (+this.memory.textContent - +this.firstNumber);
      }
      memoryInDisplay() {
        if (this.operator) {
          if ("%" === this.operator && 0 === +this.memory.textContent)
            return void alert("Делить на ноль нельзя");
          ((this.secondNumber = +this.memory.textContent),
            this.renderCalculate(),
            this.memoryClear());
        } else
          ((this.firstNumber = +this.memory.textContent), this.updateDisplay(), this.memoryClear());
      }
    })($, j, z);
  (document.querySelectorAll(".btn--num").forEach((e) => {
    e.addEventListener("click", () => {
      (R.operator ? (R.secondNumber += e.textContent) : (R.firstNumber += e.textContent),
        R.updateDisplay());
    });
  }),
    document.querySelectorAll(".btn--operator").forEach((e) => {
      e.addEventListener("click", () => {
        R.firstNumber &&
          (R.operator
            ? (R.renderCalculate(), (R.operator = e.textContent), R.updateDisplay())
            : ((R.operator = e.textContent), R.updateDisplay()));
      });
    }),
    (function (e) {
      (document.querySelector(".btn_equal").addEventListener("click", () => {
        e.renderCalculate();
      }),
        document.querySelector(".btn_reset").addEventListener("click", () => {
          e.reset();
        }),
        document.querySelector(".btn_factorial").addEventListener("click", () => {
          e.executeCommand(new c(e, e.firstNumber));
        }),
        document.querySelector(".btn_tenPowNumber").addEventListener("click", () => {
          e.executeCommand(new _(e, e.firstNumber));
        }),
        document.querySelector(".btn_number_x").addEventListener("click", () => {
          e.executeCommand(new d(e, e.firstNumber));
        }),
        document.querySelector(".btn_changeSybol").addEventListener("click", () => {
          e.executeCommand(new x(e));
        }),
        document.querySelector(".btn_nuberPowTwo").addEventListener("click", () => {
          e.executeCommand(new m(e, e.firstNumber));
        }),
        document.querySelector(".btn_nuberPowThree").addEventListener("click", () => {
          e.executeCommand(new y(e, e.firstNumber));
        }),
        document.querySelector(".btn_rootTwoOfNumber").addEventListener("click", () => {
          e.executeCommand(new h(e));
        }),
        document.querySelector(".btn_rootThreeOfNumber").addEventListener("click", () => {
          e.executeCommand(new p(e));
        }),
        document.querySelector(".btn_saveInMemory").addEventListener("click", () => {
          e.memoryAdd();
        }),
        document.querySelector(".btn_MC").addEventListener("click", () => {
          e.memoryClear();
        }),
        document.querySelector(".btn_MPlus").addEventListener("click", () => {
          e.memoryPlus();
        }),
        document.querySelector(".btn_MMinus").addEventListener("click", () => {
          e.memoryMinus();
        }),
        document.querySelector(".btn_MR").addEventListener("click", () => {
          e.memoryInDisplay();
        }));
    })(R),
    H.addEventListener("click", () => {
      (g.classList.toggle("btn-whiteTheme"),
        v.classList.toggle("btn-whiteTheme"),
        w.forEach((e) => {
          e.classList.contains("btn--num")
            ? e.classList.toggle("btn-whiteTheme")
            : e.classList.contains("btn_summ") ||
                e.classList.contains("btn_minus") ||
                e.classList.contains("btn_equal") ||
                e.classList.contains("btn_multiplication") ||
                e.classList.contains("btn_division")
              ? e.classList.toggle("btn-navyBlue")
              : e.classList.toggle("btn-veryLightBlue");
        }));
    }),
    R.updateDisplay());
})();
