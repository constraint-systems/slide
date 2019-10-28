import React, { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';
import * as _ from 'lodash';

let nec_padding = 100;
let max_height = 600;

let fs = 14;
let lh = 1.5;
let rlh = 14 * lh;

let help = true;
let maxch = '74ch';

const Home = () => {
  let [color, setColor] = useState('light');
  let dividersr = useRef([119]);
  let activer = useRef([0]);
  let keymapr = useRef({});
  let pivot = useRef(0);
  let ireadoutr = useRef('readout');
  let dreadoutr = useRef('readout');
  let oreadoutr = useRef('readout');
  let iref = useRef(null);
  let dref = useRef(null);
  let rref = useRef(null);
  let icontainer = useRef(null);
  let ocontainer = useRef(null);
  let ow = useRef(null);
  let oh = useRef(null);
  let image = useRef(null);
  let [help, setHelp] = useState(true);

  function KeyTip(letter, color) {
    return (
      <span
        className="keytip"
        onClick={() => {
          keymapr.current[letter] = true;
          keyAction(letter, false);
          setTimeout(() => {
            keymapr.current[letter] = false;
          }, 300);
        }}
        style={{
          outline: color === 'dark' ? 'solid 1px white' : 'solid 1px black',
          paddingLeft: '0.5ch',
          paddingRight: '0.5ch',
          textAlign: 'center',
          display: 'inline-block',
          userSelect: 'none',
          cursor: 'default',
        }}
      >
        {letter === ' ' ? 'spacebar' : letter}
      </span>
    );
  }

  function initCanvas(ref, pw, ph) {
    let c = ref.current;
    let ctx = c.getContext('2d');

    let dpr = window.devicePixelRatio || 1;
    dpr = 1;
    // cancel dpr because it is getting too weird

    c.width = pw * dpr;
    c.height = ph * dpr;
    c.style.width = pw + 'px';
    c.style.height = ph + 'px';
  }

  function onPaste(e) {
    e.preventDefault();
    e.stopPropagation();
    for (const item of e.clipboardData.items) {
      if (item.type.indexOf('image') < 0) {
        continue;
      }
      let file = item.getAsFile();
      let src = URL.createObjectURL(file);
      initImage(src);
    }
  }

  function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    let file = e.dataTransfer.files[0];
    let filename = file.path ? file.path : file.name ? file.name : '';
    let src = URL.createObjectURL(file);
    initImage(src);
  }

  function onDrag(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  function drawDividers() {
    let dpr = window.devicePixelRatio || 1;
    dpr = 1;
    let dividers = dividersr.current;
    let active = activer.current;
    let c = dref.current;
    let w = c.offsetWidth;
    let h = c.offsetHeight;
    let ctx = c.getContext('2d');
    ctx.clearRect(0, 0, w * dpr, h * dpr);
    ctx.strokeStyle = '#888';
    for (let d = 0; d < dividers.length; d++) {
      let x = dividers[d];
      if (!active.includes(d)) {
        ctx.strokeRect(x, 0, 1, h);
      }
    }
    // always draw active on top
    for (let a = 0; a < active.length; a++) {
      let act = active[a];
      ctx.strokeStyle = 'magenta';
      ctx.strokeRect(dividers[act] * dpr, 0, 1 * dpr, h * dpr);
    }
  }

  function setResponseWidth(width) {
    let ic = iref.current;
    let ph = ic.offsetHeight;

    initCanvas(rref, width, ph);
    ocontainer.current.style.width = `calc(${width}px + 4ch)`;
    respond();
  }

  function initResponse() {
    setResponseWidth(iref.current.offsetWidth + 200);
  }

  function respond() {
    let dividers = dividersr.current;
    let dpr = window.devicePixelRatio || 1;
    dpr = 1;
    let w = rref.current.offsetWidth;

    let ic = iref.current;

    let iw = ic.offsetWidth;
    let ih = ic.offsetHeight;

    let ph = ic.offsetHeight;

    let c = rref.current;
    let ctx = c.getContext('2d');

    let diff = w - iw;
    let diffw = diff / dividers.length;

    ctx.clearRect(0, 0, w, ph);

    let sorted = dividers.slice();
    sorted = sorted.sort((a, b) => a - b);

    for (let d = 0; d < sorted.length; d++) {
      let px = d === 0 ? 0 : sorted[d - 1];

      let dx = sorted[d];
      // slice
      ctx.drawImage(
        ic,
        px * dpr,
        0,
        (dx - px) * dpr,
        ph * dpr,
        (px + diffw * d) * dpr,
        0 * dpr,
        (dx - px) * dpr,
        ph * dpr
      );
      // extend
      for (let e = 0; e < Math.ceil(diffw * dpr); e++) {
        ctx.drawImage(
          ic,
          dx * dpr,
          0,
          1,
          ph * dpr,
          (dx + diffw * d) * dpr + e,
          0 * dpr,
          1,
          ph * dpr
        );
      }

      if (d === dividers.length - 1) {
        ctx.drawImage(
          ic,
          dx * dpr,
          0,
          (iw - dx) * dpr,
          ph * dpr,
          (dx + diffw * (d + 1)) * dpr,
          0 * dpr,
          (iw - dx) * dpr,
          ph * dpr
        );
      }
    }

    let active = activer.current;
    let dividersa = dividers.map((n, i) => {
      return {
        x: n,
        active: active.includes(i) ? true : false,
        pivot: pivot.current === i,
      };
    });
    let sorted_d = _.sortBy(dividersa, 'x');
    let div_string = sorted_d
      .map(o =>
        o.active
          ? o.pivot
            ? `<span style="color: magenta; text-decoration: underline;">${
                o.x
              }</span>`
            : `<span style="color: magenta;">${o.x}</span>`
          : o.x
      )
      .join(' ');
    ireadoutr.current.innerHTML = `${iw}x${ph} (original:${ow.current}x${
      oh.current
    })`;
    dreadoutr.current.innerHTML = `${dividers.length}|${diffw.toFixed(
      2
    )}| ${div_string}`;
    oreadoutr.current.innerHTML = `${rref.current.offsetWidth}x${
      rref.current.offsetHeight
    }`;
  }

  function setHeight(height) {
    let w = window.innerWidth;
    let h = window.innerHeight;

    let ia = ow.current / oh.current;

    let prev_width = iref.current.offsetWidth;
    let ph = height;

    let pw = Math.round(ph * ia);
    initCanvas(iref, pw, ph);
    initCanvas(dref, pw, ph);

    icontainer.current.style.width = `calc(${pw}px + 4ch)`;

    let dpr = window.devicePixelRatio || 1;
    dpr = 1;
    iref.current
      .getContext('2d')
      .drawImage(image.current, 0, 0, pw * dpr, ph * dpr);

    // tranlsate dividers
    for (let d = 0; d < dividersr.current.length; d++) {
      let x = dividersr.current[d];
      let new_x = Math.round((x / prev_width) * pw);
      dividersr.current[d] = new_x;
    }

    drawDividers();
  }

  function initImage(src) {
    if (iref.current !== null) {
      rref.current.getContext('2d').imageSmoothingEnabled = false;

      let w = window.innerWidth;
      let h = window.innerHeight;

      let img = new Image();
      img.onload = () => {
        let iw = img.width;
        let ih = img.height;
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
    let active = activer.current;
    let to_sort = dividersr.current.map((x, i) => {
      return { x, a: active.includes(i), oi: i };
    });
    let sorted = _.sortBy(to_sort, 'x', 'asc');
    sorted = sorted.map((o, i) => {
      return { ...o, si: i };
    });
    return sorted;
  }

  function keyAction(letter, repeat) {
    let k = keymapr.current;
    let dividers = dividersr.current;
    let active = activer.current;
    let iw = iref.current.offsetWidth;

    let sorted = getSorted();
    let sortie = sorted.filter(o => o.a);

    let inc = 1;
    if (k['shift']) inc = 10;

    if (letter === 'b' && !repeat) {
      setColor(function(prevState) {
        return prevState === 'light' ? 'dark' : 'light';
      });
    } else if (letter === 'w' && !repeat) {
      let link = document.createElement('a');

      var revokeURL = function() {
        let me = this;
        requestAnimationFrame(function() {
          URL.revokeObjectURL(me.href);
          me.href = null;
        });
        this.removeEventListener('click', revokeURL);
      };

      rref.current.toBlob(function(blob) {
        link.setAttribute('download', 'slide.png');
        link.setAttribute('href', URL.createObjectURL(blob));
        link.addEventListener('click', revokeURL);
        link.dispatchEvent(
          new MouseEvent(`click`, {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        );
      });
    } else if (letter === '?') {
      setHelp(prevState => {
        return !prevState;
      });
    } else if (letter === 'o' && !repeat) {
      let input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.dispatchEvent(
        new MouseEvent(`click`, {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      );

      function handleChange(e) {
        for (const item of this.files) {
          if (item.type.indexOf('image') < 0) {
            continue;
          }
          let src = URL.createObjectURL(item);
          initImage(src);
        }
        this.removeEventListener('change', handleChange);
      }
      input.addEventListener('change', handleChange);
    } else if (letter === 'h') {
      let left_a = sortie[0];
      let new_left_a_x = left_a.x - inc;
      if (new_left_a_x < 0) {
        let offsets = sortie.map(o => o.x - left_a.x);
        for (let a = 0; a < sortie.length; a++) {
          let act = sortie[a];
          dividers[act.oi] = offsets[a];
        }
      } else {
        for (let act of sortie) {
          dividers[act.oi] -= inc;
        }
      }
    } else if (letter === 'l') {
      let right_a = sortie[sortie.length - 1];
      let new_right_a_x = right_a.x + inc;
      if (new_right_a_x > iw - 2) {
        let offsets = sortie.map(o => o.x - right_a.x - 1);
        for (let a = 0; a < sortie.length; a++) {
          let act = sortie[a];
          dividers[act.oi] = iw + offsets[a];
        }
      } else {
        for (let act of sortie) {
          dividers[act.oi] += inc;
        }
      }
    } else if (letter === 'f') {
      let left_a = sortie[0];
      let right_a = sortie[sortie.length - 1];

      if (k['shift']) {
        if (left_a.x === dividers[pivot.current]) {
          // adding
          if (right_a.si !== dividers.length - 1) {
            let next_index = sorted[right_a.si + 1].oi;
            activer.current.push(next_index);
          }
        } else {
          // subtracting
          activer.current = active.slice(0, -1);
        }
      } else {
        if (active.length > 1) {
          pivot.current = right_a.oi;
          activer.current = [right_a.oi];
        } else {
          if (right_a.si !== dividers.length - 1) {
            let next_index = sorted[right_a.si + 1].oi;
            pivot.current = next_index;
            activer.current = [next_index];
          }
        }
      }
    } else if (letter === 'd') {
      let left_a = sortie[0];
      let right_a = sortie[sortie.length - 1];
      if (k['shift']) {
        if (right_a.x === dividers[pivot.current]) {
          // adding
          if (left_a.si !== 0) {
            let next_index = sorted[left_a.si - 1].oi;
            activer.current.push(next_index);
          }
        } else {
          // subtracting
          activer.current = active.slice(0, -1);
        }
      } else {
        if (active.length > 1) {
          pivot.current = left_a.oi;
          activer.current = [left_a.oi];
        } else {
          if (left_a.si !== 0) {
            let next_index = sorted[left_a.si - 1].oi;
            pivot.current = next_index;
            activer.current = [next_index];
          }
        }
      }
    } else if (letter === 'a') {
      let left_a = sortie[0];
      let right_a = sortie[sortie.length - 1];
      let iw = iref.current.offsetWidth;
      let new_x = right_a.x + 5;
      if (new_x > iw) new_x = iw - 1;
      dividersr.current.push(new_x);
      if (k['shift']) {
        pivot.current = left_a.oi;
        activer.current.push(dividersr.current.length - 1);
      } else {
        pivot.current = dividersr.current.length - 1;
        activer.current = [dividersr.current.length - 1];
      }
    } else if (letter === 'e') {
      if (active.length > 1) {
        let left_a = sortie[0];
        let right_a = sortie[sortie.length - 1];

        let space = right_a.x - left_a.x;
        let diff = Math.floor(space / (sortie.length - 1));

        for (let s = 0; s < sortie.length; s++) {
          let o = sortie[s];
          dividersr.current[o.oi] = left_a.x + diff * s;
        }
      }
    } else if (letter === 'x') {
      let new_height = iref.current.offsetHeight + inc;
      setHeight(new_height);
      if (rref.current.offsetWidth / new_height < ow.current / oh.current) {
        let new_width = new_height / (ow.current / oh.current);
        initCanvas(rref, new_width, new_height);
      } else {
        initCanvas(rref, rref.current.offsetWidth, new_height);
      }
    } else if (letter === 'z') {
      let new_height = iref.current.offsetHeight - inc;
      setHeight(new_height);
      initCanvas(rref, rref.current.offsetWidth, new_height);
    } else if (letter === 'c') {
      let new_val = rref.current.offsetWidth - inc;
      if (new_val >= iref.current.offsetWidth) {
        setResponseWidth(new_val);
      } else {
        setResponseWidth(iref.current.offsetWidth);
      }
    } else if (letter === 'v') {
      let new_val = rref.current.offsetWidth + inc;
      setResponseWidth(new_val);
    } else if (letter === 'backspace') {
      let left_a = sortie[0];
      let right_a = sortie[sortie.length - 1];

      if (dividers.length > 1) {
        if (active.length === dividers.length) {
          // all of them is easy
          dividersr.current = [left_a.x];
          activer.current = [0];
        } else {
          let to_delete = _.orderBy(sortie, 'oi', 'desc');

          let new_active;
          let prev_check = sorted[left_a.si - 1];
          if (prev_check !== undefined) {
            new_active = prev_check.oi;
          } else {
            new_active = sorted[right_a.si + 1].oi;
          }

          for (let i = 0; i < to_delete.length; i++) {
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
    let key = e.key.toLowerCase();
    keymapr.current[key] = true;
    keyAction(key, e.repeat);
  }

  function upHandler(e) {
    let key = e.key.toLowerCase();
    keymapr.current[key] = false;
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    window.addEventListener('paste', onPaste, false);
    window.addEventListener('dragover', onDrag, false);
    window.addEventListener('drop', onDrop, false);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
      window.removeEventListener('paste', onPaste);
      window.removeEventListener('dragover', onDrag, false);
      window.removeEventListener('drop', onDrop, false);
    };
  }, []);

  useEffect(() => {
    // initImage('/lion.jpg');
    initImage('/grant.png');
  }, []);

  let readout_style = {
    fontSize: 14,
    lineHeight: 1.5,
    whiteSpace: 'nowrap',
    overflowX: 'auto',
    paddingLeft: '2ch',
    paddingRight: '2ch',
  };

  let sstyle = {
    maxWidth: '100%',
    overflowX: 'auto',
  };

  return (
    <div>
      <style global jsx>{`
        @font-face {
          font-family: 'custom';
          src: url('/IBMPlexMono-Regular.woff2') format('woff2'),
            url('/IBMPlexMono-Regular.woff') format('woff');
        }
        * {
          box-sizing: border-box;
        }
        html {
          font-family: custom, monospace;
          font-size: ${fs}px;
          line-height: ${lh};
          background: ${color === 'dark' ? '#222' : '#eee'};
          color: ${color === 'dark' ? '#fff' : '#000'};
        }
        body {
          margin: 0;
          overflow: auto;
        }
        p {
          margin: 0;
        }
        a {
          color: inherit;
        }
        canvas {
          display: block;
        }
        @media (max-width: 800px) {
          .help {
            max-height: calc(50vh - ${rlh * 2}px);
          }
          .image-container {
            padding-bottom: 50vh;
          }
        }
      `}</style>
      <div className="image-container">
        <div
          style={{
            paddingTop: rlh,
          }}
        >
          <div style={sstyle}>
            <div
              style={{ paddingLeft: '2ch', paddingRight: '2ch' }}
              ref={icontainer}
            >
              <div style={{ position: 'relative' }}>
                <canvas ref={iref} />
                <div
                  style={{ position: 'absolute', left: 0, top: 0, right: 0 }}
                >
                  <canvas ref={dref} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ ...sstyle, marginTop: rlh / 2, marginBottom: rlh / 2 }}>
          <div style={readout_style} ref={ireadoutr} />
          <div style={readout_style} ref={dreadoutr} />
        </div>
        <div style={sstyle}>
          <div
            style={{
              paddingLeft: '2ch',
              paddingRight: '2ch',
            }}
            ref={ocontainer}
          >
            <canvas ref={rref} />
          </div>
        </div>

        <div style={{ ...sstyle, marginTop: rlh / 2, marginBottom: rlh / 2 }}>
          <div style={readout_style} ref={oreadoutr} />
        </div>
      </div>
      <div
        className="help"
        style={{
          position: 'fixed',
          outline: color === 'dark' ? 'solid 1px white' : 'solid 1px black',
          display: help ? 'block' : 'none',
          maxWidth: `calc(100% - 4ch)`,
          background:
            color === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
          paddingLeft: '2ch',
          paddingRight: '2ch',
          paddingBottom: rlh / 2,
          paddingTop: rlh / 2,
          right: '2ch',
          bottom: rlh,
          overflowY: 'auto',
        }}
      >
        <div style={{ marginBottom: rlh / 2, maxWidth: maxch }}>
          Divide and slide-stretch an image using keyboard controls.
        </div>
        <div style={{ marginBottom: rlh / 4, maxWidth: maxch }}>
          MOVE DIVIDER
        </div>
        <div style={{ marginBottom: rlh / 2, maxWidth: maxch }}>
          {KeyTip('h', color)} move ←&nbsp; {KeyTip('l', color)} move →&nbsp;
          hold {KeyTip('shift', color)} to move by 10
        </div>
        <div style={{ marginBottom: rlh / 4, maxWidth: maxch }}>
          SELECT DIVIDER
        </div>
        <div style={{ marginBottom: rlh / 2, maxWidth: maxch }}>
          {KeyTip('d', color)} select ←&nbsp; {KeyTip('f', color)} select
          →&nbsp; hold {KeyTip('shift', color)} to select multiple dividers
        </div>
        <div style={{ marginBottom: rlh / 4, maxWidth: maxch }}>DISTRIBUTE</div>
        <div style={{ marginBottom: rlh / 2, maxWidth: maxch }}>
          {KeyTip('e', color)} distribute selected dividers evenly across the
          selected area
        </div>
        <div style={{ marginBottom: rlh / 4, maxWidth: maxch }}>
          ADD & REMOVE
        </div>
        <div style={{ marginBottom: rlh / 2, maxWidth: maxch }}>
          {KeyTip('a', color)} add divider&nbsp; {KeyTip('backspace', color)}{' '}
          delete divider
        </div>
        <div style={{ marginBottom: rlh / 4, maxWidth: maxch }}>IMAGE</div>
        <div style={{ marginBottom: rlh / 2, maxWidth: maxch }}>
          To add an image you can paste, drop, or press {KeyTip('o', color)} to
          open a file dialog.
        </div>
        <div style={{ marginBottom: rlh / 4, maxWidth: maxch }}>IMAGE SIZE</div>
        <div style={{ marginBottom: rlh / 4, maxWidth: maxch }}>
          {KeyTip('z', color)} decrease height&nbsp; {KeyTip('x', color)}{' '}
          increase height
        </div>
        <div style={{ marginBottom: rlh / 2, maxWidth: maxch }}>
          {KeyTip('c', color)} decrease output width&nbsp; {KeyTip('v', color)}{' '}
          increase output width
        </div>
        <div style={{ marginBottom: rlh / 4, maxWidth: maxch }}>SPECIAL</div>
        <div style={{ marginBottom: rlh / 2 }}>
          {KeyTip('w', color)} save as png&nbsp; {KeyTip('b', color)}{' '}
          {color === 'dark' ? 'light bg' : 'dark bg'}&nbsp; {KeyTip('?', color)}{' '}
          help
        </div>
      </div>
      {help ? null : (
        <div
          style={{
            position: 'fixed',
            right: '1.5rem',
            bottom: '1.5rem',
            background:
              color === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
          }}
        >
          {KeyTip('?', color)}
        </div>
      )}
    </div>
  );
};

export default Home;
