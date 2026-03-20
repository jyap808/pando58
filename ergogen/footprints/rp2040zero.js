// Copyright (c) 2026 Julian Yap
//
// SPDX-License-Identifier: MIT
//
// To view a copy of this license, visit https://opensource.org/license/mit/
//
// Author: @jyap808
//
// RP2040 Zero MCU
//
// Modified from: https://github.com/axhixh/mini-kbd/blob/main/footprints/rp2040zero.js
//
// CHANGES:
// - (0,0) is now the body center. Mirroring now works perfectly.
// - Added `hole_for_buttons` toggle for rear reset/boot access cutout
// - Added `bottom_pins` toggle to optionally omit GP9–GP13 header row
// - Removed unused `reverse` and `side` parameters

module.exports = {
  params: {
    designator: 'RP2040Zero',
    hole_for_buttons: true,
    bottom_pins: true,
    P5V: { type: 'net', value: 'P5V' },
    GND: { type: 'net', value: 'GND' },
    P3V3: { type: 'net', value: 'P3V3' },
    GP29: { type: 'net', value: 'GP29' },
    GP28: { type: 'net', value: 'GP28' },
    GP27: { type: 'net', value: 'GP27' },
    GP26: { type: 'net', value: 'GP26' },
    GP15: { type: 'net', value: 'GP15' },
    GP14: { type: 'net', value: 'GP14' },
    GP13: { type: 'net', value: 'GP13' },
    GP12: { type: 'net', value: 'GP12' },
    GP11: { type: 'net', value: 'GP11' },
    GP10: { type: 'net', value: 'GP10' },
    GP9: { type: 'net', value: 'GP9' },
    GP8: { type: 'net', value: 'GP8' },
    GP7: { type: 'net', value: 'GP7' },
    GP6: { type: 'net', value: 'GP6' },
    GP5: { type: 'net', value: 'GP5' },
    GP4: { type: 'net', value: 'GP4' },
    GP3: { type: 'net', value: 'GP3' },
    GP2: { type: 'net', value: 'GP2' },
    GP1: { type: 'net', value: 'GP1' },
    GP0: { type: 'net', value: 'GP0' }
  },
  body: p => {
    // Coordinate offsets to center the 18mm x 23.5mm body
    const ox = 10.16;
    const oy = -12.7;

    const standard = `
    (module RP2040-Zero (layer F.Cu)(tedit 61F3691B)
      ${p.at /* parametric position */}
      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 -2.75 ${p.rot}) (layer F.Fab)
        (effects (font (size 1 1) (thickness 0.15)))
      )
      ${'' /* Silk Outline */}
      (fp_line (start ${19.16 - ox} ${-24.45 - oy}) (end ${1.16 - ox} ${-24.45 - oy}) (layer F.SilkS) (width 0.12))  
      (fp_line (start ${1.16 - ox} ${-24.45 - oy}) (end ${1.16 - ox} ${-0.95 - oy}) (layer F.SilkS) (width 0.12))
      (fp_line (start ${1.16 - ox} ${-0.95 - oy}) (end ${19.16 - ox} ${-0.95 - oy}) (layer F.SilkS) (width 0.12))
      (fp_line (start ${19.16 - ox} ${-0.95 - oy}) (end ${19.16 - ox} ${-24.45 - oy}) (layer F.SilkS) (width 0.12))
      ${'' /* Courtyard */}
      (fp_line (start ${1.16 - ox} ${-24.45 - oy}) (end ${19.16 - ox} ${-24.45 - oy}) (layer F.CrtYd) (width 0.05))
      (fp_line (start ${19.16 - ox} ${-24.45 - oy}) (end ${19.16 - ox} ${-0.95 - oy}) (layer F.CrtYd) (width 0.05))
      (fp_line (start ${19.16 - ox} ${-0.95 - oy}) (end ${1.16 - ox} ${-0.95 - oy}) (layer F.CrtYd) (width 0.05))
      (fp_line (start ${1.16 - ox} ${-0.95 - oy}) (end ${1.16 - ox} ${-24.45 - oy}) (layer F.CrtYd) (width 0.05))
      ${'' /* USB-C Connector Outline */}
      (fp_line (start ${5.83 - ox} ${-25.45 - oy}) (end ${5.83 - ox} ${-24.45 - oy}) (layer F.Fab) (width 0.1))
      (fp_line (start ${14.46 - ox} ${-25.45 - oy}) (end ${14.46 - ox} ${-24.45 - oy}) (layer F.Fab) (width 0.1))
      (fp_line (start ${5.83 - ox} ${-25.45 - oy}) (end ${14.46 - ox} ${-25.45 - oy}) (layer F.Fab) (width 0.1))
    `

    function hole_for_buttons() { 
      return `
        ${'' /* Access cutout */}
        (fp_line (start ${5 - ox} ${-5.13 - oy}) (end ${15.5 - ox} ${-5.13 - oy}) (layer Edge.Cuts) (width 0.12))
        (fp_line (start ${5 - ox} ${-5.13 - oy}) (end ${5 - ox} ${-10.5 - oy}) (layer Edge.Cuts) (width 0.12))
        (fp_line (start ${15.5 - ox} ${-10.5 - oy}) (end ${15.5 - ox} ${-5.13 - oy}) (layer Edge.Cuts) (width 0.12))
        (fp_line (start ${15.5 - ox} ${-10.5 - oy}) (end ${5 - ox} ${-10.5 - oy}) (layer Edge.Cuts) (width 0.12))
    `
    }

    function pins(bottom_pins = true) {
      return `
        ${'' /* Right Side Pins 1-9 */}
        (pad 1 thru_hole roundrect (at ${17.78 - ox} ${-22.86 - oy} ${p.rot}) (size 2.6 1.6) (drill 1.0922 (offset 0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GP0.str})
        (pad 2 thru_hole roundrect (at ${17.78 - ox} ${-20.32 - oy} ${p.rot}) (size 2.6 1.6) (drill 1.0922 (offset 0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GP1.str})
        (pad 3 thru_hole roundrect (at ${17.78 - ox} ${-17.78 - oy} ${p.rot}) (size 2.6 1.6) (drill 1.0922 (offset 0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GP2.str})
        (pad 4 thru_hole roundrect (at ${17.78 - ox} ${-15.24 - oy} ${p.rot}) (size 2.6 1.6) (drill 1.0922 (offset 0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GP3.str})
        (pad 5 thru_hole roundrect (at ${17.78 - ox} ${-12.7  - oy} ${p.rot}) (size 2.6 1.6) (drill 1.0922 (offset 0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GP4.str})
        (pad 6 thru_hole roundrect (at ${17.78 - ox} ${-10.16 - oy} ${p.rot}) (size 2.6 1.6) (drill 1.0922 (offset 0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GP5.str})
        (pad 7 thru_hole roundrect (at ${17.78 - ox} ${-7.62  - oy} ${p.rot}) (size 2.6 1.6) (drill 1.0922 (offset 0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GP6.str})
        (pad 8 thru_hole roundrect (at ${17.78 - ox} ${-5.08  - oy} ${p.rot}) (size 2.6 1.6) (drill 1.0922 (offset 0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GP7.str})
        (pad 9 thru_hole roundrect (at ${17.78 - ox} ${-2.54  - oy} ${p.rot}) (size 2.6 1.6) (drill 1.0922 (offset 0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GP8.str})

        ${'' /* Conditional Bottom Pins 10-14 */}
        ${bottom_pins ? `
        (pad 10 thru_hole roundrect (at ${15.24 - ox} ${-2.33 - oy} ${p.rot}) (size 1.6 2.6) (drill 1.0922 (offset 0 0.6)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GP9.str})
        (pad 11 thru_hole roundrect (at ${12.7  - ox} ${-2.33 - oy} ${p.rot}) (size 1.6 2.6) (drill 1.0922 (offset 0 0.6)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GP10.str})
        (pad 12 thru_hole roundrect (at ${10.16 - ox} ${-2.33 - oy} ${p.rot}) (size 1.6 2.6) (drill 1.0922 (offset 0 0.6)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GP11.str})
        (pad 13 thru_hole roundrect (at ${7.62  - ox} ${-2.33 - oy} ${p.rot}) (size 1.6 2.6) (drill 1.0922 (offset 0 0.6)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GP12.str})
        (pad 14 thru_hole roundrect (at ${5.08  - ox} ${-2.33 - oy} ${p.rot}) (size 1.6 2.6) (drill 1.0922 (offset 0 0.6)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GP13.str})
        ` : ''}

        ${'' /* Left Side Pins 15-23 */}
        (pad 15 thru_hole roundrect (at ${2.54 - ox} ${-2.54  - oy} ${p.rot}) (size 2.6 1.6) (drill 1.0922 (offset -0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GP14.str})
        (pad 16 thru_hole roundrect (at ${2.54 - ox} ${-5.08  - oy} ${p.rot}) (size 2.6 1.6) (drill 1.0922 (offset -0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GP15.str})
        (pad 17 thru_hole roundrect (at ${2.54 - ox} ${-7.62  - oy} ${p.rot}) (size 2.6 1.6) (drill 1.0922 (offset -0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GP26.str})
        (pad 18 thru_hole roundrect (at ${2.54 - ox} ${-10.16 - oy} ${p.rot}) (size 2.6 1.6) (drill 1.0922 (offset -0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GP27.str})
        (pad 19 thru_hole roundrect (at ${2.54 - ox} ${-22.86 - oy} ${p.rot}) (size 2.6 1.6) (drill 1.0922 (offset -0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.P5V.str})
        (pad 20 thru_hole roundrect (at ${2.54 - ox} ${-20.32 - oy} ${p.rot}) (size 2.6 1.6) (drill 1.0922 (offset -0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GND.str})
        (pad 21 thru_hole roundrect (at ${2.54 - ox} ${-17.78 - oy} ${p.rot}) (size 2.6 1.6) (drill 1.0922 (offset -0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.P3V3.str})
        (pad 22 thru_hole roundrect (at ${2.54 - ox} ${-12.7  - oy} ${p.rot}) (size 2.6 1.6) (drill 1.0922 (offset -0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GP28.str})
        (pad 23 thru_hole roundrect (at ${2.54 - ox} ${-15.24 - oy} ${p.rot}) (size 2.6 1.6) (drill 1.0922 (offset -0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GP29.str})
      `
    }

    return `
      ${standard}
      ${p.hole_for_buttons ? hole_for_buttons() : ''}
      ${pins(p.bottom_pins)}
      )
      `
  }

}