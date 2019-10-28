webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/grant.custer/Sites/constraint-systems/slide/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var nec_padding = 100;
var max_height = 600;
var fs = 14;
var lh = 1.5;
var rlh = 14 * lh;
var help = true;
var maxch = '74ch';

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('light'),
      color = _useState[0],
      setColor = _useState[1];

  var dividersr = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])([119]);
  var activer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])([0]);
  var keymapr = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])({});
  var pivot = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(0);
  var ireadoutr = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])('readout');
  var dreadoutr = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])('readout');
  var oreadoutr = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])('readout');
  var iref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var dref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var rref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var icontainer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var ocontainer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var ow = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var oh = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var image = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      help = _useState2[0],
      setHelp = _useState2[1];

  function KeyTip(letter, color) {
    return __jsx("span", {
      className: "keytip",
      onClick: function onClick() {
        keymapr.current[letter] = true;
        keyAction(letter, false);
        setTimeout(function () {
          keymapr.current[letter] = false;
        }, 300);
      },
      style: {
        outline: color === 'dark' ? 'solid 1px white' : 'solid 1px black',
        paddingLeft: '0.5ch',
        paddingRight: '0.5ch',
        textAlign: 'center',
        display: 'inline-block',
        userSelect: 'none',
        cursor: 'default'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, letter === ' ' ? 'spacebar' : letter);
  }

  function initCanvas(ref, pw, ph) {
    var c = ref.current;
    var ctx = c.getContext('2d');
    var dpr = window.devicePixelRatio || 1;
    dpr = 1; // cancel dpr because it is getting too weird

    c.width = pw * dpr;
    c.height = ph * dpr;
    c.style.width = pw + 'px';
    c.style.height = ph + 'px';
  }

  function onPaste(e) {
    e.preventDefault();
    e.stopPropagation();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(e.clipboardData.items), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        if (item.type.indexOf('image') < 0) {
          continue;
        }

        var file = item.getAsFile();
        var src = URL.createObjectURL(file);
        initImage(src);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    var file = e.dataTransfer.files[0];
    var filename = file.path ? file.path : file.name ? file.name : '';
    var src = URL.createObjectURL(file);
    initImage(src);
  }

  function onDrag(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  function drawDividers() {
    var dpr = window.devicePixelRatio || 1;
    dpr = 1;
    var dividers = dividersr.current;
    var active = activer.current;
    var c = dref.current;
    var w = c.offsetWidth;
    var h = c.offsetHeight;
    var ctx = c.getContext('2d');
    ctx.clearRect(0, 0, w * dpr, h * dpr);
    ctx.strokeStyle = '#888';

    for (var d = 0; d < dividers.length; d++) {
      var x = dividers[d];

      if (!active.includes(d)) {
        ctx.strokeRect(x, 0, 1, h);
      }
    } // always draw active on top


    for (var a = 0; a < active.length; a++) {
      var act = active[a];
      ctx.strokeStyle = 'magenta';
      ctx.strokeRect(dividers[act] * dpr, 0, 1 * dpr, h * dpr);
    }
  }

  function setResponseWidth(width) {
    var ic = iref.current;
    var ph = ic.offsetHeight;
    initCanvas(rref, width, ph);
    ocontainer.current.style.width = "calc(".concat(width, "px + 4ch)");
    respond();
  }

  function initResponse() {
    setResponseWidth(iref.current.offsetWidth + 200);
  }

  function respond() {
    var dividers = dividersr.current;
    var dpr = window.devicePixelRatio || 1;
    dpr = 1;
    var w = rref.current.offsetWidth;
    var ic = iref.current;
    var iw = ic.offsetWidth;
    var ih = ic.offsetHeight;
    var ph = ic.offsetHeight;
    var c = rref.current;
    var ctx = c.getContext('2d');
    var diff = w - iw;
    var diffw = diff / dividers.length;
    ctx.clearRect(0, 0, w, ph);
    var sorted = dividers.slice();
    sorted = sorted.sort(function (a, b) {
      return a - b;
    });

    for (var d = 0; d < sorted.length; d++) {
      var px = d === 0 ? 0 : sorted[d - 1];
      var dx = sorted[d]; // slice

      ctx.drawImage(ic, px * dpr, 0, (dx - px) * dpr, ph * dpr, (px + diffw * d) * dpr, 0 * dpr, (dx - px) * dpr, ph * dpr); // extend

      for (var e = 0; e < Math.ceil(diffw * dpr); e++) {
        ctx.drawImage(ic, dx * dpr, 0, 1, ph * dpr, (dx + diffw * d) * dpr + e, 0 * dpr, 1, ph * dpr);
      }

      if (d === dividers.length - 1) {
        ctx.drawImage(ic, dx * dpr, 0, (iw - dx) * dpr, ph * dpr, (dx + diffw * (d + 1)) * dpr, 0 * dpr, (iw - dx) * dpr, ph * dpr);
      }
    }

    var active = activer.current;
    var dividersa = dividers.map(function (n, i) {
      return {
        x: n,
        active: active.includes(i) ? true : false,
        pivot: pivot.current === i
      };
    });

    var sorted_d = lodash__WEBPACK_IMPORTED_MODULE_5__["sortBy"](dividersa, 'x');

    var div_string = sorted_d.map(function (o) {
      return o.active ? o.pivot ? "<span style=\"color: magenta; text-decoration: underline;\">".concat(o.x, "</span>") : "<span style=\"color: magenta;\">".concat(o.x, "</span>") : o.x;
    }).join(' ');
    ireadoutr.current.innerHTML = "".concat(iw, "x").concat(ph, " (original:").concat(ow.current, "x").concat(oh.current, ")");
    dreadoutr.current.innerHTML = "".concat(dividers.length, "|").concat(diffw.toFixed(2), "| ").concat(div_string);
    oreadoutr.current.innerHTML = "".concat(rref.current.offsetWidth, "x").concat(rref.current.offsetHeight);
  }

  function setHeight(height) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var ia = ow.current / oh.current;
    var prev_width = iref.current.offsetWidth;
    var ph = height;
    var pw = Math.round(ph * ia);
    initCanvas(iref, pw, ph);
    initCanvas(dref, pw, ph);
    icontainer.current.style.width = "calc(".concat(pw, "px + 4ch)");
    var dpr = window.devicePixelRatio || 1;
    dpr = 1;
    iref.current.getContext('2d').drawImage(image.current, 0, 0, pw * dpr, ph * dpr); // tranlsate dividers

    for (var d = 0; d < dividersr.current.length; d++) {
      var x = dividersr.current[d];
      var new_x = Math.round(x / prev_width * pw);
      dividersr.current[d] = new_x;
    }

    drawDividers();
  }

  function initImage(src) {
    if (iref.current !== null) {
      rref.current.getContext('2d').imageSmoothingEnabled = false;
      var w = window.innerWidth;
      var h = window.innerHeight;
      var img = new Image();

      img.onload = function () {
        var iw = img.width;
        var ih = img.height;
        ow.current = iw;
        oh.current = ih;
        image.current = img;
        setHeight(Math.min(ih, max_height));
        initResponse();
      };

      img.src = src;
    }
  }

  function getSorted() {
    var active = activer.current;
    var to_sort = dividersr.current.map(function (x, i) {
      return {
        x: x,
        a: active.includes(i),
        oi: i
      };
    });

    var sorted = lodash__WEBPACK_IMPORTED_MODULE_5__["sortBy"](to_sort, 'x', 'asc');

    sorted = sorted.map(function (o, i) {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, o, {
        si: i
      });
    });
    return sorted;
  }

  function keyAction(letter, repeat) {
    var k = keymapr.current;
    var dividers = dividersr.current;
    var active = activer.current;
    var iw = iref.current.offsetWidth;
    var sorted = getSorted();
    var sortie = sorted.filter(function (o) {
      return o.a;
    });
    var inc = 1;
    if (k['shift']) inc = 10;

    if (letter === 'b' && !repeat) {
      setColor(function (prevState) {
        return prevState === 'light' ? 'dark' : 'light';
      });
    } else if (letter === 'w' && !repeat) {
      var link = document.createElement('a');

      var revokeURL = function revokeURL() {
        var me = this;
        requestAnimationFrame(function () {
          URL.revokeObjectURL(me.href);
          me.href = null;
        });
        this.removeEventListener('click', revokeURL);
      };

      rref.current.toBlob(function (blob) {
        link.setAttribute('download', 'slide.png');
        link.setAttribute('href', URL.createObjectURL(blob));
        link.addEventListener('click', revokeURL);
        link.dispatchEvent(new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window
        }));
      });
    } else if (letter === '?') {
      setHelp(function (prevState) {
        return !prevState;
      });
    } else if (letter === 'o' && !repeat) {
      var handleChange = function handleChange(e) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(this.files), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            if (item.type.indexOf('image') < 0) {
              continue;
            }

            var src = URL.createObjectURL(item);
            initImage(src);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        this.removeEventListener('change', handleChange);
      };

      var input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.dispatchEvent(new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
      }));
      input.addEventListener('change', handleChange);
    } else if (letter === 'h') {
      var left_a = sortie[0];
      var new_left_a_x = left_a.x - inc;

      if (new_left_a_x < 0) {
        var offsets = sortie.map(function (o) {
          return o.x - left_a.x;
        });

        for (var a = 0; a < sortie.length; a++) {
          var act = sortie[a];
          dividers[act.oi] = offsets[a];
        }
      } else {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(sortie), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _act = _step3.value;
            dividers[_act.oi] -= inc;
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    } else if (letter === 'l') {
      var right_a = sortie[sortie.length - 1];
      var new_right_a_x = right_a.x + inc;

      if (new_right_a_x > iw - 2) {
        var _offsets = sortie.map(function (o) {
          return o.x - right_a.x - 1;
        });

        for (var _a = 0; _a < sortie.length; _a++) {
          var _act2 = sortie[_a];
          dividers[_act2.oi] = iw + _offsets[_a];
        }
      } else {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(sortie), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _act3 = _step4.value;
            dividers[_act3.oi] += inc;
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
              _iterator4["return"]();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }
    } else if (letter === 'f') {
      var _left_a = sortie[0];
      var _right_a = sortie[sortie.length - 1];

      if (k['shift']) {
        if (_left_a.x === dividers[pivot.current]) {
          // adding
          if (_right_a.si !== dividers.length - 1) {
            var next_index = sorted[_right_a.si + 1].oi;
            activer.current.push(next_index);
          }
        } else {
          // subtracting
          activer.current = active.slice(0, -1);
        }
      } else {
        if (active.length > 1) {
          pivot.current = _right_a.oi;
          activer.current = [_right_a.oi];
        } else {
          if (_right_a.si !== dividers.length - 1) {
            var _next_index = sorted[_right_a.si + 1].oi;
            pivot.current = _next_index;
            activer.current = [_next_index];
          }
        }
      }
    } else if (letter === 'd') {
      var _left_a2 = sortie[0];
      var _right_a2 = sortie[sortie.length - 1];

      if (k['shift']) {
        if (_right_a2.x === dividers[pivot.current]) {
          // adding
          if (_left_a2.si !== 0) {
            var _next_index2 = sorted[_left_a2.si - 1].oi;
            activer.current.push(_next_index2);
          }
        } else {
          // subtracting
          activer.current = active.slice(0, -1);
        }
      } else {
        if (active.length > 1) {
          pivot.current = _left_a2.oi;
          activer.current = [_left_a2.oi];
        } else {
          if (_left_a2.si !== 0) {
            var _next_index3 = sorted[_left_a2.si - 1].oi;
            pivot.current = _next_index3;
            activer.current = [_next_index3];
          }
        }
      }
    } else if (letter === 'a') {
      var _left_a3 = sortie[0];
      var _right_a3 = sortie[sortie.length - 1];
      var _iw = iref.current.offsetWidth;
      var new_x = _right_a3.x + 5;
      if (new_x > _iw) new_x = _iw - 1;
      dividersr.current.push(new_x);

      if (k['shift']) {
        pivot.current = _left_a3.oi;
        activer.current.push(dividersr.current.length - 1);
      } else {
        pivot.current = dividersr.current.length - 1;
        activer.current = [dividersr.current.length - 1];
      }
    } else if (letter === 'e') {
      if (active.length > 1) {
        var _left_a4 = sortie[0];
        var _right_a4 = sortie[sortie.length - 1];
        var space = _right_a4.x - _left_a4.x;
        var diff = Math.floor(space / (sortie.length - 1));

        for (var s = 0; s < sortie.length; s++) {
          var o = sortie[s];
          dividersr.current[o.oi] = _left_a4.x + diff * s;
        }
      }
    } else if (letter === 'x') {
      var new_height = iref.current.offsetHeight + inc;
      setHeight(new_height);

      if (rref.current.offsetWidth / new_height < ow.current / oh.current) {
        var new_width = new_height / (ow.current / oh.current);
        initCanvas(rref, new_width, new_height);
      } else {
        initCanvas(rref, rref.current.offsetWidth, new_height);
      }
    } else if (letter === 'z') {
      var _new_height = iref.current.offsetHeight - inc;

      setHeight(_new_height);
      initCanvas(rref, rref.current.offsetWidth, _new_height);
    } else if (letter === 'c') {
      var new_val = rref.current.offsetWidth - inc;

      if (new_val >= iref.current.offsetWidth) {
        setResponseWidth(new_val);
      } else {
        setResponseWidth(iref.current.offsetWidth);
      }
    } else if (letter === 'v') {
      var _new_val = rref.current.offsetWidth + inc;

      setResponseWidth(_new_val);
    } else if (letter === 'backspace') {
      var _left_a5 = sortie[0];
      var _right_a5 = sortie[sortie.length - 1];

      if (dividers.length > 1) {
        if (active.length === dividers.length) {
          // all of them is easy
          dividersr.current = [_left_a5.x];
          activer.current = [0];
        } else {
          var to_delete = lodash__WEBPACK_IMPORTED_MODULE_5__["orderBy"](sortie, 'oi', 'desc');

          var new_active;
          var prev_check = sorted[_left_a5.si - 1];

          if (prev_check !== undefined) {
            new_active = prev_check.oi;
          } else {
            new_active = sorted[_right_a5.si + 1].oi;
          }

          for (var i = 0; i < to_delete.length; i++) {
            if (to_delete[i].oi < new_active) new_active -= 1;
            dividersr.current.splice(to_delete[i].oi, 1);
          }

          activer.current = [new_active];
          pivot.current = new_active;
        }
      }
    }

    drawDividers();
    respond();
  }

  function downHandler(e) {
    var key = e.key.toLowerCase();
    keymapr.current[key] = true;
    keyAction(key, e.repeat);
  }

  function upHandler(e) {
    var key = e.key.toLowerCase();
    keymapr.current[key] = false;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    window.addEventListener('paste', onPaste, false);
    window.addEventListener('dragover', onDrag, false);
    window.addEventListener('drop', onDrop, false);
    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
      window.removeEventListener('paste', onPaste);
      window.removeEventListener('dragover', onDrag, false);
      window.removeEventListener('drop', onDrop, false);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // initImage('/lion.jpg');
    initImage('/grant.png');
  }, []);
  var readout_style = {
    fontSize: 14,
    lineHeight: 1.5,
    whiteSpace: 'nowrap',
    overflowX: 'auto',
    paddingLeft: '2ch',
    paddingRight: '2ch'
  };
  var sstyle = {
    maxWidth: '100%',
    overflowX: 'auto'
  };
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3332121765",
    dynamic: [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/IBMPlexMono-Regular.woff2') format('woff2'), url('/IBMPlexMono-Regular.woff') format('woff');}*{box-sizing:border-box;}html{font-family:custom,monospace;font-size:".concat(fs, "px;line-height:").concat(lh, ";background:").concat(color === 'dark' ? '#222' : '#eee', ";color:").concat(color === 'dark' ? '#fff' : '#000', ";}body{margin:0;overflow:auto;}p{margin:0;}a{color:inherit;}canvas{display:block;}@media (max-width:800px){.help{max-height:calc(50vh - ").concat(rlh * 2, "px);}.image-container{padding-bottom:50vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludC1zeXN0ZW1zL3NsaWRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVrQnlCLEFBR2dDLEFBS0MsQUFHUSxBQU9yQixBQUlBLEFBR0ssQUFHQSxBQUkyQyxBQUduQyxTQWhCUixBQUloQixLQUdBLEFBR0EsTUFPRSxDQS9CaUQsQ0FJbkQsQ0FXQSxNQVIyQywwQkFxQnpDLGVBcEJ5Qyx5Q0FDRCxhQVIxQywyQkFTcUMsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludC1zeXN0ZW1zL3NsaWRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5sZXQgbmVjX3BhZGRpbmcgPSAxMDA7XG5sZXQgbWF4X2hlaWdodCA9IDYwMDtcblxubGV0IGZzID0gMTQ7XG5sZXQgbGggPSAxLjU7XG5sZXQgcmxoID0gMTQgKiBsaDtcblxubGV0IGhlbHAgPSB0cnVlO1xubGV0IG1heGNoID0gJzc0Y2gnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBsZXQgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSgnbGlnaHQnKTtcbiAgbGV0IGRpdmlkZXJzciA9IHVzZVJlZihbMTE5XSk7XG4gIGxldCBhY3RpdmVyID0gdXNlUmVmKFswXSk7XG4gIGxldCBrZXltYXByID0gdXNlUmVmKHt9KTtcbiAgbGV0IHBpdm90ID0gdXNlUmVmKDApO1xuICBsZXQgaXJlYWRvdXRyID0gdXNlUmVmKCdyZWFkb3V0Jyk7XG4gIGxldCBkcmVhZG91dHIgPSB1c2VSZWYoJ3JlYWRvdXQnKTtcbiAgbGV0IG9yZWFkb3V0ciA9IHVzZVJlZigncmVhZG91dCcpO1xuICBsZXQgaXJlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IGRyZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBycmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgaWNvbnRhaW5lciA9IHVzZVJlZihudWxsKTtcbiAgbGV0IG9jb250YWluZXIgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBvdyA9IHVzZVJlZihudWxsKTtcbiAgbGV0IG9oID0gdXNlUmVmKG51bGwpO1xuICBsZXQgaW1hZ2UgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBbaGVscCwgc2V0SGVscF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBmdW5jdGlvbiBLZXlUaXAobGV0dGVyLCBjb2xvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8c3BhblxuICAgICAgICBjbGFzc05hbWU9XCJrZXl0aXBcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAga2V5bWFwci5jdXJyZW50W2xldHRlcl0gPSB0cnVlO1xuICAgICAgICAgIGtleUFjdGlvbihsZXR0ZXIsIGZhbHNlKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGtleW1hcHIuY3VycmVudFtsZXR0ZXJdID0gZmFsc2U7XG4gICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBvdXRsaW5lOiBjb2xvciA9PT0gJ2RhcmsnID8gJ3NvbGlkIDFweCB3aGl0ZScgOiAnc29saWQgMXB4IGJsYWNrJyxcbiAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtsZXR0ZXIgPT09ICcgJyA/ICdzcGFjZWJhcicgOiBsZXR0ZXJ9XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRDYW52YXMocmVmLCBwdywgcGgpIHtcbiAgICBsZXQgYyA9IHJlZi5jdXJyZW50O1xuICAgIGxldCBjdHggPSBjLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBsZXQgZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgICBkcHIgPSAxO1xuICAgIC8vIGNhbmNlbCBkcHIgYmVjYXVzZSBpdCBpcyBnZXR0aW5nIHRvbyB3ZWlyZFxuXG4gICAgYy53aWR0aCA9IHB3ICogZHByO1xuICAgIGMuaGVpZ2h0ID0gcGggKiBkcHI7XG4gICAgYy5zdHlsZS53aWR0aCA9IHB3ICsgJ3B4JztcbiAgICBjLnN0eWxlLmhlaWdodCA9IHBoICsgJ3B4JztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUGFzdGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBlLmNsaXBib2FyZERhdGEuaXRlbXMpIHtcbiAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBsZXQgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgIGluaXRJbWFnZShzcmMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJvcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IGZpbGUgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXTtcbiAgICBsZXQgZmlsZW5hbWUgPSBmaWxlLnBhdGggPyBmaWxlLnBhdGggOiBmaWxlLm5hbWUgPyBmaWxlLm5hbWUgOiAnJztcbiAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICBpbml0SW1hZ2Uoc3JjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZyhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5JztcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdEaXZpZGVycygpIHtcbiAgICBsZXQgZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgICBkcHIgPSAxO1xuICAgIGxldCBkaXZpZGVycyA9IGRpdmlkZXJzci5jdXJyZW50O1xuICAgIGxldCBhY3RpdmUgPSBhY3RpdmVyLmN1cnJlbnQ7XG4gICAgbGV0IGMgPSBkcmVmLmN1cnJlbnQ7XG4gICAgbGV0IHcgPSBjLm9mZnNldFdpZHRoO1xuICAgIGxldCBoID0gYy5vZmZzZXRIZWlnaHQ7XG4gICAgbGV0IGN0eCA9IGMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHcgKiBkcHIsIGggKiBkcHIpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjODg4JztcbiAgICBmb3IgKGxldCBkID0gMDsgZCA8IGRpdmlkZXJzLmxlbmd0aDsgZCsrKSB7XG4gICAgICBsZXQgeCA9IGRpdmlkZXJzW2RdO1xuICAgICAgaWYgKCFhY3RpdmUuaW5jbHVkZXMoZCkpIHtcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QoeCwgMCwgMSwgaCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGFsd2F5cyBkcmF3IGFjdGl2ZSBvbiB0b3BcbiAgICBmb3IgKGxldCBhID0gMDsgYSA8IGFjdGl2ZS5sZW5ndGg7IGErKykge1xuICAgICAgbGV0IGFjdCA9IGFjdGl2ZVthXTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdtYWdlbnRhJztcbiAgICAgIGN0eC5zdHJva2VSZWN0KGRpdmlkZXJzW2FjdF0gKiBkcHIsIDAsIDEgKiBkcHIsIGggKiBkcHIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFJlc3BvbnNlV2lkdGgod2lkdGgpIHtcbiAgICBsZXQgaWMgPSBpcmVmLmN1cnJlbnQ7XG4gICAgbGV0IHBoID0gaWMub2Zmc2V0SGVpZ2h0O1xuXG4gICAgaW5pdENhbnZhcyhycmVmLCB3aWR0aCwgcGgpO1xuICAgIG9jb250YWluZXIuY3VycmVudC5zdHlsZS53aWR0aCA9IGBjYWxjKCR7d2lkdGh9cHggKyA0Y2gpYDtcbiAgICByZXNwb25kKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0UmVzcG9uc2UoKSB7XG4gICAgc2V0UmVzcG9uc2VXaWR0aChpcmVmLmN1cnJlbnQub2Zmc2V0V2lkdGggKyAyMDApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzcG9uZCgpIHtcbiAgICBsZXQgZGl2aWRlcnMgPSBkaXZpZGVyc3IuY3VycmVudDtcbiAgICBsZXQgZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgICBkcHIgPSAxO1xuICAgIGxldCB3ID0gcnJlZi5jdXJyZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgbGV0IGljID0gaXJlZi5jdXJyZW50O1xuXG4gICAgbGV0IGl3ID0gaWMub2Zmc2V0V2lkdGg7XG4gICAgbGV0IGloID0gaWMub2Zmc2V0SGVpZ2h0O1xuXG4gICAgbGV0IHBoID0gaWMub2Zmc2V0SGVpZ2h0O1xuXG4gICAgbGV0IGMgPSBycmVmLmN1cnJlbnQ7XG4gICAgbGV0IGN0eCA9IGMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGxldCBkaWZmID0gdyAtIGl3O1xuICAgIGxldCBkaWZmdyA9IGRpZmYgLyBkaXZpZGVycy5sZW5ndGg7XG5cbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHcsIHBoKTtcblxuICAgIGxldCBzb3J0ZWQgPSBkaXZpZGVycy5zbGljZSgpO1xuICAgIHNvcnRlZCA9IHNvcnRlZC5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG5cbiAgICBmb3IgKGxldCBkID0gMDsgZCA8IHNvcnRlZC5sZW5ndGg7IGQrKykge1xuICAgICAgbGV0IHB4ID0gZCA9PT0gMCA/IDAgOiBzb3J0ZWRbZCAtIDFdO1xuXG4gICAgICBsZXQgZHggPSBzb3J0ZWRbZF07XG4gICAgICAvLyBzbGljZVxuICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgaWMsXG4gICAgICAgIHB4ICogZHByLFxuICAgICAgICAwLFxuICAgICAgICAoZHggLSBweCkgKiBkcHIsXG4gICAgICAgIHBoICogZHByLFxuICAgICAgICAocHggKyBkaWZmdyAqIGQpICogZHByLFxuICAgICAgICAwICogZHByLFxuICAgICAgICAoZHggLSBweCkgKiBkcHIsXG4gICAgICAgIHBoICogZHByXG4gICAgICApO1xuICAgICAgLy8gZXh0ZW5kXG4gICAgICBmb3IgKGxldCBlID0gMDsgZSA8IE1hdGguY2VpbChkaWZmdyAqIGRwcik7IGUrKykge1xuICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgIGljLFxuICAgICAgICAgIGR4ICogZHByLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICBwaCAqIGRwcixcbiAgICAgICAgICAoZHggKyBkaWZmdyAqIGQpICogZHByICsgZSxcbiAgICAgICAgICAwICogZHByLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgcGggKiBkcHJcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGQgPT09IGRpdmlkZXJzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICBpYyxcbiAgICAgICAgICBkeCAqIGRwcixcbiAgICAgICAgICAwLFxuICAgICAgICAgIChpdyAtIGR4KSAqIGRwcixcbiAgICAgICAgICBwaCAqIGRwcixcbiAgICAgICAgICAoZHggKyBkaWZmdyAqIChkICsgMSkpICogZHByLFxuICAgICAgICAgIDAgKiBkcHIsXG4gICAgICAgICAgKGl3IC0gZHgpICogZHByLFxuICAgICAgICAgIHBoICogZHByXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFjdGl2ZSA9IGFjdGl2ZXIuY3VycmVudDtcbiAgICBsZXQgZGl2aWRlcnNhID0gZGl2aWRlcnMubWFwKChuLCBpKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiBuLFxuICAgICAgICBhY3RpdmU6IGFjdGl2ZS5pbmNsdWRlcyhpKSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgcGl2b3Q6IHBpdm90LmN1cnJlbnQgPT09IGksXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGxldCBzb3J0ZWRfZCA9IF8uc29ydEJ5KGRpdmlkZXJzYSwgJ3gnKTtcbiAgICBsZXQgZGl2X3N0cmluZyA9IHNvcnRlZF9kXG4gICAgICAubWFwKG8gPT5cbiAgICAgICAgby5hY3RpdmVcbiAgICAgICAgICA/IG8ucGl2b3RcbiAgICAgICAgICAgID8gYDxzcGFuIHN0eWxlPVwiY29sb3I6IG1hZ2VudGE7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1wiPiR7XG4gICAgICAgICAgICAgICAgby54XG4gICAgICAgICAgICAgIH08L3NwYW4+YFxuICAgICAgICAgICAgOiBgPHNwYW4gc3R5bGU9XCJjb2xvcjogbWFnZW50YTtcIj4ke28ueH08L3NwYW4+YFxuICAgICAgICAgIDogby54XG4gICAgICApXG4gICAgICAuam9pbignICcpO1xuICAgIGlyZWFkb3V0ci5jdXJyZW50LmlubmVySFRNTCA9IGAke2l3fXgke3BofSAob3JpZ2luYWw6JHtvdy5jdXJyZW50fXgke1xuICAgICAgb2guY3VycmVudFxuICAgIH0pYDtcbiAgICBkcmVhZG91dHIuY3VycmVudC5pbm5lckhUTUwgPSBgJHtkaXZpZGVycy5sZW5ndGh9fCR7ZGlmZncudG9GaXhlZChcbiAgICAgIDJcbiAgICApfXwgJHtkaXZfc3RyaW5nfWA7XG4gICAgb3JlYWRvdXRyLmN1cnJlbnQuaW5uZXJIVE1MID0gYCR7cnJlZi5jdXJyZW50Lm9mZnNldFdpZHRofXgke1xuICAgICAgcnJlZi5jdXJyZW50Lm9mZnNldEhlaWdodFxuICAgIH1gO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgbGV0IGggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBsZXQgaWEgPSBvdy5jdXJyZW50IC8gb2guY3VycmVudDtcblxuICAgIGxldCBwcmV2X3dpZHRoID0gaXJlZi5jdXJyZW50Lm9mZnNldFdpZHRoO1xuICAgIGxldCBwaCA9IGhlaWdodDtcblxuICAgIGxldCBwdyA9IE1hdGgucm91bmQocGggKiBpYSk7XG4gICAgaW5pdENhbnZhcyhpcmVmLCBwdywgcGgpO1xuICAgIGluaXRDYW52YXMoZHJlZiwgcHcsIHBoKTtcblxuICAgIGljb250YWluZXIuY3VycmVudC5zdHlsZS53aWR0aCA9IGBjYWxjKCR7cHd9cHggKyA0Y2gpYDtcblxuICAgIGxldCBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICAgIGRwciA9IDE7XG4gICAgaXJlZi5jdXJyZW50XG4gICAgICAuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgLmRyYXdJbWFnZShpbWFnZS5jdXJyZW50LCAwLCAwLCBwdyAqIGRwciwgcGggKiBkcHIpO1xuXG4gICAgLy8gdHJhbmxzYXRlIGRpdmlkZXJzXG4gICAgZm9yIChsZXQgZCA9IDA7IGQgPCBkaXZpZGVyc3IuY3VycmVudC5sZW5ndGg7IGQrKykge1xuICAgICAgbGV0IHggPSBkaXZpZGVyc3IuY3VycmVudFtkXTtcbiAgICAgIGxldCBuZXdfeCA9IE1hdGgucm91bmQoKHggLyBwcmV2X3dpZHRoKSAqIHB3KTtcbiAgICAgIGRpdmlkZXJzci5jdXJyZW50W2RdID0gbmV3X3g7XG4gICAgfVxuXG4gICAgZHJhd0RpdmlkZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0SW1hZ2Uoc3JjKSB7XG4gICAgaWYgKGlyZWYuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgcnJlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJykuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG5cbiAgICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBsZXQgaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGl3ID0gaW1nLndpZHRoO1xuICAgICAgICBsZXQgaWggPSBpbWcuaGVpZ2h0O1xuICAgICAgICBvdy5jdXJyZW50ID0gaXc7XG4gICAgICAgIG9oLmN1cnJlbnQgPSBpaDtcbiAgICAgICAgaW1hZ2UuY3VycmVudCA9IGltZztcbiAgICAgICAgc2V0SGVpZ2h0KE1hdGgubWluKGloLCBtYXhfaGVpZ2h0KSk7XG4gICAgICAgIGluaXRSZXNwb25zZSgpO1xuICAgICAgfTtcbiAgICAgIGltZy5zcmMgPSBzcmM7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U29ydGVkKCkge1xuICAgIGxldCBhY3RpdmUgPSBhY3RpdmVyLmN1cnJlbnQ7XG4gICAgbGV0IHRvX3NvcnQgPSBkaXZpZGVyc3IuY3VycmVudC5tYXAoKHgsIGkpID0+IHtcbiAgICAgIHJldHVybiB7IHgsIGE6IGFjdGl2ZS5pbmNsdWRlcyhpKSwgb2k6IGkgfTtcbiAgICB9KTtcbiAgICBsZXQgc29ydGVkID0gXy5zb3J0QnkodG9fc29ydCwgJ3gnLCAnYXNjJyk7XG4gICAgc29ydGVkID0gc29ydGVkLm1hcCgobywgaSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ubywgc2k6IGkgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gc29ydGVkO1xuICB9XG5cbiAgZnVuY3Rpb24ga2V5QWN0aW9uKGxldHRlciwgcmVwZWF0KSB7XG4gICAgbGV0IGsgPSBrZXltYXByLmN1cnJlbnQ7XG4gICAgbGV0IGRpdmlkZXJzID0gZGl2aWRlcnNyLmN1cnJlbnQ7XG4gICAgbGV0IGFjdGl2ZSA9IGFjdGl2ZXIuY3VycmVudDtcbiAgICBsZXQgaXcgPSBpcmVmLmN1cnJlbnQub2Zmc2V0V2lkdGg7XG5cbiAgICBsZXQgc29ydGVkID0gZ2V0U29ydGVkKCk7XG4gICAgbGV0IHNvcnRpZSA9IHNvcnRlZC5maWx0ZXIobyA9PiBvLmEpO1xuXG4gICAgbGV0IGluYyA9IDE7XG4gICAgaWYgKGtbJ3NoaWZ0J10pIGluYyA9IDEwO1xuXG4gICAgaWYgKGxldHRlciA9PT0gJ2InICYmICFyZXBlYXQpIHtcbiAgICAgIHNldENvbG9yKGZ1bmN0aW9uKHByZXZTdGF0ZSkge1xuICAgICAgICByZXR1cm4gcHJldlN0YXRlID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAndycgJiYgIXJlcGVhdCkge1xuICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICAgIHZhciByZXZva2VVUkwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwobWUuaHJlZik7XG4gICAgICAgICAgbWUuaHJlZiA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmV2b2tlVVJMKTtcbiAgICAgIH07XG5cbiAgICAgIHJyZWYuY3VycmVudC50b0Jsb2IoZnVuY3Rpb24oYmxvYikge1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnc2xpZGUucG5nJyk7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSk7XG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXZva2VVUkwpO1xuICAgICAgICBsaW5rLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgbmV3IE1vdXNlRXZlbnQoYGNsaWNrYCwge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAnPycpIHtcbiAgICAgIHNldEhlbHAocHJldlN0YXRlID0+IHtcbiAgICAgICAgcmV0dXJuICFwcmV2U3RhdGU7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gJ28nICYmICFyZXBlYXQpIHtcbiAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpO1xuICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IE1vdXNlRXZlbnQoYGNsaWNrYCwge1xuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5maWxlcykge1xuICAgICAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChpdGVtKTtcbiAgICAgICAgICBpbml0SW1hZ2Uoc3JjKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSk7XG4gICAgICB9XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAnaCcpIHtcbiAgICAgIGxldCBsZWZ0X2EgPSBzb3J0aWVbMF07XG4gICAgICBsZXQgbmV3X2xlZnRfYV94ID0gbGVmdF9hLnggLSBpbmM7XG4gICAgICBpZiAobmV3X2xlZnRfYV94IDwgMCkge1xuICAgICAgICBsZXQgb2Zmc2V0cyA9IHNvcnRpZS5tYXAobyA9PiBvLnggLSBsZWZ0X2EueCk7XG4gICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgc29ydGllLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgbGV0IGFjdCA9IHNvcnRpZVthXTtcbiAgICAgICAgICBkaXZpZGVyc1thY3Qub2ldID0gb2Zmc2V0c1thXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgYWN0IG9mIHNvcnRpZSkge1xuICAgICAgICAgIGRpdmlkZXJzW2FjdC5vaV0gLT0gaW5jO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICdsJykge1xuICAgICAgbGV0IHJpZ2h0X2EgPSBzb3J0aWVbc29ydGllLmxlbmd0aCAtIDFdO1xuICAgICAgbGV0IG5ld19yaWdodF9hX3ggPSByaWdodF9hLnggKyBpbmM7XG4gICAgICBpZiAobmV3X3JpZ2h0X2FfeCA+IGl3IC0gMikge1xuICAgICAgICBsZXQgb2Zmc2V0cyA9IHNvcnRpZS5tYXAobyA9PiBvLnggLSByaWdodF9hLnggLSAxKTtcbiAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBzb3J0aWUubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICBsZXQgYWN0ID0gc29ydGllW2FdO1xuICAgICAgICAgIGRpdmlkZXJzW2FjdC5vaV0gPSBpdyArIG9mZnNldHNbYV07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGFjdCBvZiBzb3J0aWUpIHtcbiAgICAgICAgICBkaXZpZGVyc1thY3Qub2ldICs9IGluYztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAnZicpIHtcbiAgICAgIGxldCBsZWZ0X2EgPSBzb3J0aWVbMF07XG4gICAgICBsZXQgcmlnaHRfYSA9IHNvcnRpZVtzb3J0aWUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmIChrWydzaGlmdCddKSB7XG4gICAgICAgIGlmIChsZWZ0X2EueCA9PT0gZGl2aWRlcnNbcGl2b3QuY3VycmVudF0pIHtcbiAgICAgICAgICAvLyBhZGRpbmdcbiAgICAgICAgICBpZiAocmlnaHRfYS5zaSAhPT0gZGl2aWRlcnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgbGV0IG5leHRfaW5kZXggPSBzb3J0ZWRbcmlnaHRfYS5zaSArIDFdLm9pO1xuICAgICAgICAgICAgYWN0aXZlci5jdXJyZW50LnB1c2gobmV4dF9pbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHN1YnRyYWN0aW5nXG4gICAgICAgICAgYWN0aXZlci5jdXJyZW50ID0gYWN0aXZlLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGFjdGl2ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcGl2b3QuY3VycmVudCA9IHJpZ2h0X2Eub2k7XG4gICAgICAgICAgYWN0aXZlci5jdXJyZW50ID0gW3JpZ2h0X2Eub2ldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChyaWdodF9hLnNpICE9PSBkaXZpZGVycy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBsZXQgbmV4dF9pbmRleCA9IHNvcnRlZFtyaWdodF9hLnNpICsgMV0ub2k7XG4gICAgICAgICAgICBwaXZvdC5jdXJyZW50ID0gbmV4dF9pbmRleDtcbiAgICAgICAgICAgIGFjdGl2ZXIuY3VycmVudCA9IFtuZXh0X2luZGV4XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gJ2QnKSB7XG4gICAgICBsZXQgbGVmdF9hID0gc29ydGllWzBdO1xuICAgICAgbGV0IHJpZ2h0X2EgPSBzb3J0aWVbc29ydGllLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKGtbJ3NoaWZ0J10pIHtcbiAgICAgICAgaWYgKHJpZ2h0X2EueCA9PT0gZGl2aWRlcnNbcGl2b3QuY3VycmVudF0pIHtcbiAgICAgICAgICAvLyBhZGRpbmdcbiAgICAgICAgICBpZiAobGVmdF9hLnNpICE9PSAwKSB7XG4gICAgICAgICAgICBsZXQgbmV4dF9pbmRleCA9IHNvcnRlZFtsZWZ0X2Euc2kgLSAxXS5vaTtcbiAgICAgICAgICAgIGFjdGl2ZXIuY3VycmVudC5wdXNoKG5leHRfaW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzdWJ0cmFjdGluZ1xuICAgICAgICAgIGFjdGl2ZXIuY3VycmVudCA9IGFjdGl2ZS5zbGljZSgwLCAtMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChhY3RpdmUubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHBpdm90LmN1cnJlbnQgPSBsZWZ0X2Eub2k7XG4gICAgICAgICAgYWN0aXZlci5jdXJyZW50ID0gW2xlZnRfYS5vaV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGxlZnRfYS5zaSAhPT0gMCkge1xuICAgICAgICAgICAgbGV0IG5leHRfaW5kZXggPSBzb3J0ZWRbbGVmdF9hLnNpIC0gMV0ub2k7XG4gICAgICAgICAgICBwaXZvdC5jdXJyZW50ID0gbmV4dF9pbmRleDtcbiAgICAgICAgICAgIGFjdGl2ZXIuY3VycmVudCA9IFtuZXh0X2luZGV4XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gJ2EnKSB7XG4gICAgICBsZXQgbGVmdF9hID0gc29ydGllWzBdO1xuICAgICAgbGV0IHJpZ2h0X2EgPSBzb3J0aWVbc29ydGllLmxlbmd0aCAtIDFdO1xuICAgICAgbGV0IGl3ID0gaXJlZi5jdXJyZW50Lm9mZnNldFdpZHRoO1xuICAgICAgbGV0IG5ld194ID0gcmlnaHRfYS54ICsgNTtcbiAgICAgIGlmIChuZXdfeCA+IGl3KSBuZXdfeCA9IGl3IC0gMTtcbiAgICAgIGRpdmlkZXJzci5jdXJyZW50LnB1c2gobmV3X3gpO1xuICAgICAgaWYgKGtbJ3NoaWZ0J10pIHtcbiAgICAgICAgcGl2b3QuY3VycmVudCA9IGxlZnRfYS5vaTtcbiAgICAgICAgYWN0aXZlci5jdXJyZW50LnB1c2goZGl2aWRlcnNyLmN1cnJlbnQubGVuZ3RoIC0gMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwaXZvdC5jdXJyZW50ID0gZGl2aWRlcnNyLmN1cnJlbnQubGVuZ3RoIC0gMTtcbiAgICAgICAgYWN0aXZlci5jdXJyZW50ID0gW2RpdmlkZXJzci5jdXJyZW50Lmxlbmd0aCAtIDFdO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAnZScpIHtcbiAgICAgIGlmIChhY3RpdmUubGVuZ3RoID4gMSkge1xuICAgICAgICBsZXQgbGVmdF9hID0gc29ydGllWzBdO1xuICAgICAgICBsZXQgcmlnaHRfYSA9IHNvcnRpZVtzb3J0aWUubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgbGV0IHNwYWNlID0gcmlnaHRfYS54IC0gbGVmdF9hLng7XG4gICAgICAgIGxldCBkaWZmID0gTWF0aC5mbG9vcihzcGFjZSAvIChzb3J0aWUubGVuZ3RoIC0gMSkpO1xuXG4gICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgc29ydGllLmxlbmd0aDsgcysrKSB7XG4gICAgICAgICAgbGV0IG8gPSBzb3J0aWVbc107XG4gICAgICAgICAgZGl2aWRlcnNyLmN1cnJlbnRbby5vaV0gPSBsZWZ0X2EueCArIGRpZmYgKiBzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICd4Jykge1xuICAgICAgbGV0IG5ld19oZWlnaHQgPSBpcmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0ICsgaW5jO1xuICAgICAgc2V0SGVpZ2h0KG5ld19oZWlnaHQpO1xuICAgICAgaWYgKHJyZWYuY3VycmVudC5vZmZzZXRXaWR0aCAvIG5ld19oZWlnaHQgPCBvdy5jdXJyZW50IC8gb2guY3VycmVudCkge1xuICAgICAgICBsZXQgbmV3X3dpZHRoID0gbmV3X2hlaWdodCAvIChvdy5jdXJyZW50IC8gb2guY3VycmVudCk7XG4gICAgICAgIGluaXRDYW52YXMocnJlZiwgbmV3X3dpZHRoLCBuZXdfaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRDYW52YXMocnJlZiwgcnJlZi5jdXJyZW50Lm9mZnNldFdpZHRoLCBuZXdfaGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gJ3onKSB7XG4gICAgICBsZXQgbmV3X2hlaWdodCA9IGlyZWYuY3VycmVudC5vZmZzZXRIZWlnaHQgLSBpbmM7XG4gICAgICBzZXRIZWlnaHQobmV3X2hlaWdodCk7XG4gICAgICBpbml0Q2FudmFzKHJyZWYsIHJyZWYuY3VycmVudC5vZmZzZXRXaWR0aCwgbmV3X2hlaWdodCk7XG4gICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICdjJykge1xuICAgICAgbGV0IG5ld192YWwgPSBycmVmLmN1cnJlbnQub2Zmc2V0V2lkdGggLSBpbmM7XG4gICAgICBpZiAobmV3X3ZhbCA+PSBpcmVmLmN1cnJlbnQub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgc2V0UmVzcG9uc2VXaWR0aChuZXdfdmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFJlc3BvbnNlV2lkdGgoaXJlZi5jdXJyZW50Lm9mZnNldFdpZHRoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gJ3YnKSB7XG4gICAgICBsZXQgbmV3X3ZhbCA9IHJyZWYuY3VycmVudC5vZmZzZXRXaWR0aCArIGluYztcbiAgICAgIHNldFJlc3BvbnNlV2lkdGgobmV3X3ZhbCk7XG4gICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICdiYWNrc3BhY2UnKSB7XG4gICAgICBsZXQgbGVmdF9hID0gc29ydGllWzBdO1xuICAgICAgbGV0IHJpZ2h0X2EgPSBzb3J0aWVbc29ydGllLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoZGl2aWRlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICBpZiAoYWN0aXZlLmxlbmd0aCA9PT0gZGl2aWRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gYWxsIG9mIHRoZW0gaXMgZWFzeVxuICAgICAgICAgIGRpdmlkZXJzci5jdXJyZW50ID0gW2xlZnRfYS54XTtcbiAgICAgICAgICBhY3RpdmVyLmN1cnJlbnQgPSBbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHRvX2RlbGV0ZSA9IF8ub3JkZXJCeShzb3J0aWUsICdvaScsICdkZXNjJyk7XG5cbiAgICAgICAgICBsZXQgbmV3X2FjdGl2ZTtcbiAgICAgICAgICBsZXQgcHJldl9jaGVjayA9IHNvcnRlZFtsZWZ0X2Euc2kgLSAxXTtcbiAgICAgICAgICBpZiAocHJldl9jaGVjayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuZXdfYWN0aXZlID0gcHJldl9jaGVjay5vaTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3X2FjdGl2ZSA9IHNvcnRlZFtyaWdodF9hLnNpICsgMV0ub2k7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b19kZWxldGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0b19kZWxldGVbaV0ub2kgPCBuZXdfYWN0aXZlKSBuZXdfYWN0aXZlIC09IDE7XG4gICAgICAgICAgICBkaXZpZGVyc3IuY3VycmVudC5zcGxpY2UodG9fZGVsZXRlW2ldLm9pLCAxKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhY3RpdmVyLmN1cnJlbnQgPSBbbmV3X2FjdGl2ZV07XG4gICAgICAgICAgcGl2b3QuY3VycmVudCA9IG5ld19hY3RpdmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3RGl2aWRlcnMoKTtcbiAgICByZXNwb25kKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkb3duSGFuZGxlcihlKSB7XG4gICAgbGV0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKCk7XG4gICAga2V5bWFwci5jdXJyZW50W2tleV0gPSB0cnVlO1xuICAgIGtleUFjdGlvbihrZXksIGUucmVwZWF0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAgbGV0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKCk7XG4gICAga2V5bWFwci5jdXJyZW50W2tleV0gPSBmYWxzZTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3AsIGZhbHNlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgb25QYXN0ZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWcsIGZhbHNlKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wLCBmYWxzZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gaW5pdEltYWdlKCcvbGlvbi5qcGcnKTtcbiAgICBpbml0SW1hZ2UoJy9ncmFudC5wbmcnKTtcbiAgfSwgW10pO1xuXG4gIGxldCByZWFkb3V0X3N0eWxlID0ge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgb3ZlcmZsb3dYOiAnYXV0bycsXG4gICAgcGFkZGluZ0xlZnQ6ICcyY2gnLFxuICAgIHBhZGRpbmdSaWdodDogJzJjaCcsXG4gIH07XG5cbiAgbGV0IHNzdHlsZSA9IHtcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG92ZXJmbG93WDogJ2F1dG8nLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXN0b20sIG1vbm9zcGFjZTtcbiAgICAgICAgICBmb250LXNpemU6ICR7ZnN9cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6ICR7bGh9O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3IgPT09ICdkYXJrJyA/ICcjMjIyJyA6ICcjZWVlJ307XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3IgPT09ICdkYXJrJyA/ICcjZmZmJyA6ICcjMDAwJ307XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICBjYW52YXMge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAgIC5oZWxwIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoNTB2aCAtICR7cmxoICogMn1weCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwdmg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IHJsaCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3N0eWxlfT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcyY2gnLCBwYWRkaW5nUmlnaHQ6ICcyY2gnIH19XG4gICAgICAgICAgICAgIHJlZj17aWNvbnRhaW5lcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAgICA8Y2FudmFzIHJlZj17aXJlZn0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogMCwgdG9wOiAwLCByaWdodDogMCB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxjYW52YXMgcmVmPXtkcmVmfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLnNzdHlsZSwgbWFyZ2luVG9wOiBybGggLyAyLCBtYXJnaW5Cb3R0b206IHJsaCAvIDIgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17cmVhZG91dF9zdHlsZX0gcmVmPXtpcmVhZG91dHJ9IC8+XG4gICAgICAgICAgPGRpdiBzdHlsZT17cmVhZG91dF9zdHlsZX0gcmVmPXtkcmVhZG91dHJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXtzc3R5bGV9PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMmNoJyxcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMmNoJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICByZWY9e29jb250YWluZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGNhbnZhcyByZWY9e3JyZWZ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3N0eWxlLCBtYXJnaW5Ub3A6IHJsaCAvIDIsIG1hcmdpbkJvdHRvbTogcmxoIC8gMiB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtyZWFkb3V0X3N0eWxlfSByZWY9e29yZWFkb3V0cn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiaGVscFwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgb3V0bGluZTogY29sb3IgPT09ICdkYXJrJyA/ICdzb2xpZCAxcHggd2hpdGUnIDogJ3NvbGlkIDFweCBibGFjaycsXG4gICAgICAgICAgZGlzcGxheTogaGVscCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgbWF4V2lkdGg6IGBjYWxjKDEwMCUgLSA0Y2gpYCxcbiAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgY29sb3IgPT09ICdkYXJrJyA/ICdyZ2JhKDAsMCwwLDAuOCknIDogJ3JnYmEoMjU1LDI1NSwyNTUsMC44KScsXG4gICAgICAgICAgcGFkZGluZ0xlZnQ6ICcyY2gnLFxuICAgICAgICAgIHBhZGRpbmdSaWdodDogJzJjaCcsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogcmxoIC8gMixcbiAgICAgICAgICBwYWRkaW5nVG9wOiBybGggLyAyLFxuICAgICAgICAgIHJpZ2h0OiAnMmNoJyxcbiAgICAgICAgICBib3R0b206IHJsaCxcbiAgICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHJsaCAvIDIsIG1heFdpZHRoOiBtYXhjaCB9fT5cbiAgICAgICAgICBEaXZpZGUgYW5kIHNsaWRlLXN0cmV0Y2ggYW4gaW1hZ2UgdXNpbmcgeW91ciBrZXlib2FyZC5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBybGggLyA0LCBtYXhXaWR0aDogbWF4Y2ggfX0+XG4gICAgICAgICAgTU9WRSBESVZJREVSXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogcmxoIC8gMiwgbWF4V2lkdGg6IG1heGNoIH19PlxuICAgICAgICAgIHtLZXlUaXAoJ2gnLCBjb2xvcil9IG1vdmUg4oaQJm5ic3A7IHtLZXlUaXAoJ2wnLCBjb2xvcil9IG1vdmUg4oaSJm5ic3A7XG4gICAgICAgICAgaG9sZCB7S2V5VGlwKCdzaGlmdCcsIGNvbG9yKX0gdG8gbW92ZSBieSAxMFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHJsaCAvIDQsIG1heFdpZHRoOiBtYXhjaCB9fT5cbiAgICAgICAgICBTRUxFQ1QgRElWSURFUlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHJsaCAvIDIsIG1heFdpZHRoOiBtYXhjaCB9fT5cbiAgICAgICAgICB7S2V5VGlwKCdkJywgY29sb3IpfSBzZWxlY3Qg4oaQJm5ic3A7IHtLZXlUaXAoJ2YnLCBjb2xvcil9IHNlbGVjdFxuICAgICAgICAgIOKGkiZuYnNwOyBob2xkIHtLZXlUaXAoJ3NoaWZ0JywgY29sb3IpfSB0byBzZWxlY3QgbXVsdGlwbGUgZGl2aWRlcnNcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBybGggLyA0LCBtYXhXaWR0aDogbWF4Y2ggfX0+RElTVFJJQlVURTwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogcmxoIC8gMiwgbWF4V2lkdGg6IG1heGNoIH19PlxuICAgICAgICAgIHtLZXlUaXAoJ2UnLCBjb2xvcil9IGRpc3RyaWJ1dGUgc2VsZWN0ZWQgZGl2aWRlcnMgZXZlbmx5IGFjcm9zcyB0aGVcbiAgICAgICAgICBzZWxlY3RlZCBhcmVhXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogcmxoIC8gNCwgbWF4V2lkdGg6IG1heGNoIH19PlxuICAgICAgICAgIEFERCAmIFJFTU9WRVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHJsaCAvIDIsIG1heFdpZHRoOiBtYXhjaCB9fT5cbiAgICAgICAgICB7S2V5VGlwKCdhJywgY29sb3IpfSBhZGQgZGl2aWRlciZuYnNwOyB7S2V5VGlwKCdiYWNrc3BhY2UnLCBjb2xvcil9eycgJ31cbiAgICAgICAgICBkZWxldGUgZGl2aWRlclxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHJsaCAvIDQsIG1heFdpZHRoOiBtYXhjaCB9fT5JTUFHRTwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogcmxoIC8gMiwgbWF4V2lkdGg6IG1heGNoIH19PlxuICAgICAgICAgIFRvIGFkZCBhbiBpbWFnZSB5b3UgY2FuIHBhc3RlLCBkcm9wLCBvciBwcmVzcyB7S2V5VGlwKCdvJywgY29sb3IpfSB0b1xuICAgICAgICAgIG9wZW4gYSBmaWxlIGRpYWxvZy5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBybGggLyA0LCBtYXhXaWR0aDogbWF4Y2ggfX0+SU1BR0UgU0laRTwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogcmxoIC8gNCwgbWF4V2lkdGg6IG1heGNoIH19PlxuICAgICAgICAgIHtLZXlUaXAoJ3onLCBjb2xvcil9IGRlY3JlYXNlIGhlaWdodCZuYnNwOyB7S2V5VGlwKCd4JywgY29sb3IpfXsnICd9XG4gICAgICAgICAgaW5jcmVhc2UgaGVpZ2h0XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogcmxoIC8gMiwgbWF4V2lkdGg6IG1heGNoIH19PlxuICAgICAgICAgIHtLZXlUaXAoJ2MnLCBjb2xvcil9IGRlY3JlYXNlIG91dHB1dCB3aWR0aCZuYnNwOyB7S2V5VGlwKCd2JywgY29sb3IpfXsnICd9XG4gICAgICAgICAgaW5jcmVhc2Ugb3V0cHV0IHdpZHRoXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogcmxoIC8gNCwgbWF4V2lkdGg6IG1heGNoIH19PlNQRUNJQUw8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHJsaCAvIDIgfX0+XG4gICAgICAgICAge0tleVRpcCgndycsIGNvbG9yKX0gc2F2ZSBhcyBwbmcmbmJzcDsge0tleVRpcCgnYicsIGNvbG9yKX17JyAnfVxuICAgICAgICAgIHtjb2xvciA9PT0gJ2RhcmsnID8gJ2xpZ2h0IGJnJyA6ICdkYXJrIGJnJ30mbmJzcDsge0tleVRpcCgnPycsIGNvbG9yKX17JyAnfVxuICAgICAgICAgIGhlbHBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtoZWxwID8gbnVsbCA6IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIHJpZ2h0OiAnMS41cmVtJyxcbiAgICAgICAgICAgIGJvdHRvbTogJzEuNXJlbScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICBjb2xvciA9PT0gJ2RhcmsnID8gJ3JnYmEoMCwwLDAsMC44KScgOiAncmdiYSgyNTUsMjU1LDI1NSwwLjgpJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge0tleVRpcCgnPycsIGNvbG9yKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint-systems/slide/pages/index.js */")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]) + " " + "image-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622
    },
    __self: this
  }, __jsx("div", {
    style: {
      paddingTop: rlh
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623
    },
    __self: this
  }, __jsx("div", {
    style: sstyle,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628
    },
    __self: this
  }, __jsx("div", {
    style: {
      paddingLeft: '2ch',
      paddingRight: '2ch'
    },
    ref: icontainer,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629
    },
    __self: this
  }, __jsx("div", {
    style: {
      position: 'relative'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633
    },
    __self: this
  }, __jsx("canvas", {
    ref: iref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635
    },
    __self: this
  }, __jsx("canvas", {
    ref: dref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638
    },
    __self: this
  })))))), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sstyle, {
      marginTop: rlh / 2,
      marginBottom: rlh / 2
    }),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645
    },
    __self: this
  }, __jsx("div", {
    style: readout_style,
    ref: ireadoutr,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646
    },
    __self: this
  }), __jsx("div", {
    style: readout_style,
    ref: dreadoutr,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647
    },
    __self: this
  })), __jsx("div", {
    style: sstyle,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649
    },
    __self: this
  }, __jsx("div", {
    style: {
      paddingLeft: '2ch',
      paddingRight: '2ch'
    },
    ref: ocontainer,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650
    },
    __self: this
  }, __jsx("canvas", {
    ref: rref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657
    },
    __self: this
  }))), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sstyle, {
      marginTop: rlh / 2,
      marginBottom: rlh / 2
    }),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661
    },
    __self: this
  }, __jsx("div", {
    style: readout_style,
    ref: oreadoutr,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662
    },
    __self: this
  }))), __jsx("div", {
    style: {
      position: 'fixed',
      outline: color === 'dark' ? 'solid 1px white' : 'solid 1px black',
      display: help ? 'block' : 'none',
      maxWidth: "calc(100% - 4ch)",
      background: color === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
      paddingLeft: '2ch',
      paddingRight: '2ch',
      paddingBottom: rlh / 2,
      paddingTop: rlh / 2,
      right: '2ch',
      bottom: rlh,
      overflowY: 'auto'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]) + " " + "help",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginBottom: rlh / 2,
      maxWidth: maxch
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
    },
    __self: this
  }, "Divide and slide-stretch an image using your keyboard."), __jsx("div", {
    style: {
      marginBottom: rlh / 4,
      maxWidth: maxch
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686
    },
    __self: this
  }, "MOVE DIVIDER"), __jsx("div", {
    style: {
      marginBottom: rlh / 2,
      maxWidth: maxch
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689
    },
    __self: this
  }, KeyTip('h', color), " move \u2190\xA0 ", KeyTip('l', color), " move \u2192\xA0 hold ", KeyTip('shift', color), " to move by 10"), __jsx("div", {
    style: {
      marginBottom: rlh / 4,
      maxWidth: maxch
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693
    },
    __self: this
  }, "SELECT DIVIDER"), __jsx("div", {
    style: {
      marginBottom: rlh / 2,
      maxWidth: maxch
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696
    },
    __self: this
  }, KeyTip('d', color), " select \u2190\xA0 ", KeyTip('f', color), " select \u2192\xA0 hold ", KeyTip('shift', color), " to select multiple dividers"), __jsx("div", {
    style: {
      marginBottom: rlh / 4,
      maxWidth: maxch
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 700
    },
    __self: this
  }, "DISTRIBUTE"), __jsx("div", {
    style: {
      marginBottom: rlh / 2,
      maxWidth: maxch
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 701
    },
    __self: this
  }, KeyTip('e', color), " distribute selected dividers evenly across the selected area"), __jsx("div", {
    style: {
      marginBottom: rlh / 4,
      maxWidth: maxch
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705
    },
    __self: this
  }, "ADD & REMOVE"), __jsx("div", {
    style: {
      marginBottom: rlh / 2,
      maxWidth: maxch
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708
    },
    __self: this
  }, KeyTip('a', color), " add divider\xA0 ", KeyTip('backspace', color), ' ', "delete divider"), __jsx("div", {
    style: {
      marginBottom: rlh / 4,
      maxWidth: maxch
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712
    },
    __self: this
  }, "IMAGE"), __jsx("div", {
    style: {
      marginBottom: rlh / 2,
      maxWidth: maxch
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713
    },
    __self: this
  }, "To add an image you can paste, drop, or press ", KeyTip('o', color), " to open a file dialog."), __jsx("div", {
    style: {
      marginBottom: rlh / 4,
      maxWidth: maxch
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717
    },
    __self: this
  }, "IMAGE SIZE"), __jsx("div", {
    style: {
      marginBottom: rlh / 4,
      maxWidth: maxch
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718
    },
    __self: this
  }, KeyTip('z', color), " decrease height\xA0 ", KeyTip('x', color), ' ', "increase height"), __jsx("div", {
    style: {
      marginBottom: rlh / 2,
      maxWidth: maxch
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722
    },
    __self: this
  }, KeyTip('c', color), " decrease output width\xA0 ", KeyTip('v', color), ' ', "increase output width"), __jsx("div", {
    style: {
      marginBottom: rlh / 4,
      maxWidth: maxch
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726
    },
    __self: this
  }, "SPECIAL"), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727
    },
    __self: this
  }, KeyTip('w', color), " save as png\xA0 ", KeyTip('b', color), ' ', color === 'dark' ? 'light bg' : 'dark bg', "\xA0 ", KeyTip('?', color), ' ', "help")), help ? null : __jsx("div", {
    style: {
      position: 'fixed',
      right: '1.5rem',
      bottom: '1.5rem',
      background: color === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3332121765", [fs, lh, color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000', rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734
    },
    __self: this
  }, KeyTip('?', color)));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.af82b2314bb2eb2e5690.hot-update.js.map