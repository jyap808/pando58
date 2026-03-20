// Copyright (c) 2026 Julian Yap
//
// SPDX-License-Identifier: MIT
//
// To view a copy of this license, visit https://opensource.org/license/mit/
//
// Author: @jyap808
//
// Molex 43860-0001 RJ45 Connector (Through-Hole)
//
// Description:
//   A Molex 43860-0001 RJ45 footprint for split keyboards.
//   Optimized for a 3-wire interconnect (GND, DATA, VCC).
//
// 3-Wire Mapping Logic:
//   - Pin 4: Ground (GND)
//   - Pin 5: Data   (DATA)
//   - Pin 8: Power  (VCC)
//
// Design Rationale:
//   Pins 4 and 5 constitute a standard Ethernet twisted pair (Pair 1 - Blue).
//   Assigning GND and DATA to this pair provides a tight return path, 
//   minimizing electromagnetic interference (EMI) and improving signal 
//   integrity over longer or coiled cables. VCC is isolated on Pin 8 
//   to reduce noise injection and provide physical separation from the 
//   data line to prevent accidental shorts.
//
// Datasheet:
//   https://www.molex.com/en-us/products/part-detail/438600001

module.exports = {
  params: {
    designator: 'RJ45',
    side: 'F',

    GND:  { type: 'net', value: 'GND' },
    DATA: { type: 'net', value: 'DATA' },
    VCC:  { type: 'net', value: 'VCC' },
  },

  body: p => {

    // ---- Footprint name ----
    let footprint_name = 'rj45_molex_43860_3wire'

    // Offset calculation:
    // Origin is center of mounting holes: X = 3.556, Y = 4.318
    const ox = 3.556
    const oy = 4.318

    // ---- Standard opening ----
    const standard_opening = `
  (footprint "jyap808:${footprint_name}"
    (layer "${p.side}.Cu")
    ${p.at}
    (property "Reference" "${p.ref}"
      (at 0 6 ${p.r})
      (layer "${p.side}.SilkS")
      ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.15)))
    )
    `

    // ---- Pin generator ----
    function pins(pinNet) {
      // All coordinates subtracted by (ox, oy)
      return `
    (pad 1 thru_hole circle (at ${0.000 - ox} ${0.000 - oy}) (size 1.2192 1.2192) (drill 0.7112) (layers "*.Cu" "*.Mask"))
    (pad 2 thru_hole circle (at ${1.016 - ox} ${1.778 - oy}) (size 1.2192 1.2192) (drill 0.7112) (layers "*.Cu" "*.Mask"))
    (pad 3 thru_hole circle (at ${2.032 - ox} ${0.000 - oy}) (size 1.2192 1.2192) (drill 0.7112) (layers "*.Cu" "*.Mask"))
    (pad 4 thru_hole circle (at ${3.048 - ox} ${1.778 - oy}) (size 1.2192 1.2192) (drill 0.7112) (layers "*.Cu" "*.Mask") ${pinNet[4]})
    (pad 5 thru_hole circle (at ${4.064 - ox} ${0.000 - oy}) (size 1.2192 1.2192) (drill 0.7112) (layers "*.Cu" "*.Mask") ${pinNet[5]})
    (pad 6 thru_hole circle (at ${5.080 - ox} ${1.778 - oy}) (size 1.2192 1.2192) (drill 0.7112) (layers "*.Cu" "*.Mask"))
    (pad 7 thru_hole circle (at ${6.096 - ox} ${0.000 - oy}) (size 1.2192 1.2192) (drill 0.7112) (layers "*.Cu" "*.Mask"))
    (pad 8 thru_hole circle (at ${7.112 - ox} ${1.778 - oy}) (size 1.2192 1.2192) (drill 0.7112) (layers "*.Cu" "*.Mask") ${pinNet[8]})
      `
    }

    // ---- Mounting holes ----
    function mounting_holes() {
      // Holes are perfectly symmetrical at +/- 6.35mm from center
      return `
    (pad "" np_thru_hole circle (at -6.35 0) (size 3.3 3.3) (drill 3.25) (layers "*.Cu" "*.Mask"))
    (pad "" np_thru_hole circle (at 6.35 0) (size 3.3 3.3) (drill 3.25) (layers "*.Cu" "*.Mask"))
      `
    }

    function courtyard() {
      // Centered around (0,0) which is the midpoint of the mounting holes
      // Width: ~16.5mm, Height: ~15.8mm
      return `
    (fp_line (start -8.25 5.5) (end 8.25 5.5) (layer "${p.side}.CrtYd") (width 0.05))
    (fp_line (start 8.25 5.5) (end 8.25 -10.3) (layer "${p.side}.CrtYd") (width 0.05))
    (fp_line (start 8.25 -10.3) (end -8.25 -10.3) (layer "${p.side}.CrtYd") (width 0.05))
    (fp_line (start -8.25 -10.3) (end -8.25 5.5) (layer "${p.side}.CrtYd") (width 0.05))
      `
    }

    function draw_silk(target_side) {
      return `
    (fp_line (start -8.0 5.2) (end 8.0 5.2) (layer "${target_side}.SilkS") (width 0.15))
    (fp_line (start 8.0 5.2) (end 8.0 -10.0) (layer "${target_side}.SilkS") (width 0.15))
    (fp_line (start 8.0 -10.0) (end -8.0 -10.0) (layer "${target_side}.SilkS") (width 0.15))
    (fp_line (start -8.0 -10.0) (end -8.0 5.2) (layer "${target_side}.SilkS") (width 0.15))
      `
    }

    const dedicatedMap = {
      4: p.GND.str,
      5: p.DATA.str,
      8: p.VCC.str,
    }

    // ---- Final assembly ----
    return `
    ${standard_opening}
    ${pins(dedicatedMap)}
    ${mounting_holes()}
    ${courtyard()}
    ${draw_silk(p.side)}
  )
    `
  }
}
