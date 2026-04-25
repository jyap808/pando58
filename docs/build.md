# Build Guide

## Overview

![All PCB Components for Layered Build](assets/images/layered_build_components.jpg)

This guide covers the **layered build type** using the dedicated PCBs, 2 reversible switch plates, and 2 reversible bottom plates.

> **Note:** [3D printed case builds](gallery.md#3d-printed-case) are similar (the one-piece case replaces the bottom plates) but are not covered here. Sandwich builds are also not covered.

> **Reference:** See the [Bill of Materials](bom.md) for a complete list of components and quantities needed.

![Left PCB MCU Detail](assets/images/left_pcb_mcu_detail.jpg)

This guide walks through building **one half** (the left half) of the PCBs since the assembly is identical on both halves. Pictured above is the Left PCB top side.

![Left PCB back side](assets/images/left_pcb_mcu_back.jpg)

Left PCB back side, ready to be assembled.

## Assembly Steps

This guide covers the following components in detail. Follow each section in order for best results:

1. [Diodes](#diodes) - Through-hole diode installation
2. [Hotswap Sockets](#hotswap-sockets) - MX-compatible switch sockets
3. [RJ45 Port - Interconnect](#rj45-port-interconnect) - Interconnect ports
4. [RP2040 Zero MCU](#rp2040-zero-mcu) - Microcontroller installation
5. [Switches](#switches) - Switch and plate installation
6. [Keycaps and Optional Bumpons](#keycaps-and-optional-bumpons) - Final assembly

### Diodes

Pando58 supports **SMT (surface mount)**, **THT (through-hole)**, or a **combination of both** diodes. This guide covers through-hole diode installation.

> **Note:** If you're using SMT diodes, you should already be comfortable with surface mount soldering or follow a dedicated SMT guide.

**Required:** 58x 1N4148 diodes (29 per half)

#### Bending Diodes

![Diode Bending Jig](assets/images/diode_bending_jig.jpg)

Use a bending jig for consistent, clean bends. You can download the 3D model from [Printables](https://www.printables.com/model/739930-bending-jig).

![Diode Placement in Jig](assets/images/diode_jig_placement.jpg)

Place the diodes in the jig as shown above.

![Bent Diodes](assets/images/diode_bending_result.jpg)

The jig bends diodes to a **7.5mm standoff distance**. You can hand-bend diodes at 7.5mm, but the jig produces cleaner, more consistent results.

#### Diode Orientation

![Diode Placement Orientation](assets/images/diode_placement_orientation.jpg)

**Critical:** Diodes are polarity-sensitive components. The **black stripe** on the diode indicates the **cathode (-)** side and must align with the direction arrow shown on the PCB silkscreen.

- The diodes feed through the **BOTTOM** of the PCB
- The black stripe must face the direction of the arrow in the PCB diagram
- Getting this wrong will cause the keyboard to malfunction

#### Populating the Board

![Diodes One Column Populated](assets/images/diodes_one_column_populated.jpg)

Insert the diodes into one PCB half. The board above shows one column populated as an example.

> **Tip:** Solder one column at a time to keep the workspace organized and reduce the chance of diodes falling out before soldering.

#### Soldering Diodes

![Diode Soldered Close-up](assets/images/diode_soldered_closeup.jpg)

Solder the diodes through the **TOP side** of the PCB. Ensure the diodes lie **flat against the board** while soldering to prevent uneven joints.

**Key points:**

- Apply heat to the pad and leg simultaneously
- Feed solder to create a smooth, concave joint
- Avoid overheating (keep soldering time under 3 seconds per joint)
- Make sure diodes remain flat against the board

#### Trimming Excess Leads

![Diode Trimmed Close-up](assets/images/diode_trimmed_closeup.jpg)

Use **flush cutters** to trim the diode legs close to the solder joint after soldering. This prevents sharp edges and reduces the risk of short circuits.

#### Completed Diode Installation

![Diodes Soldered Top Side](assets/images/diodes_soldered_top.jpg)

![Diodes Soldered Bottom Side](assets/images/diodes_soldered_bottom.jpg)

The top image shows all diodes soldered and trimmed from the top side. The bottom image shows the bottom side with all diodes in place with correct orientation.

**Verify before moving on:**

- All 29 diodes are soldered
- Black stripes align with PCB arrows (check from bottom side)
- No cold joints or excess solder
- All legs are trimmed flush

### Hotswap Sockets

Pando58 supports **hotswap sockets** or **soldered switches**.

- **Hotswap sockets** allow you to insert and remove switches without soldering
- **Soldered switches** are installed directly to the PCB (no sockets needed)

This section covers hotswap socket installation. If you're soldering switches directly, skip to the Soldered Switches section below.

> **Note:** Only **MX-compatible** hotswap sockets are supported. This PCB does not support Kailh hotswap sockets.

**Required:** 58x MX-compatible hotswap sockets (29 per half)

#### Placing Hotswap Sockets

![Hotswap Socket Placement](assets/images/hotswap_socket_placement.jpg)

Place the hotswap sockets on the footprints on the **back side** of the PCB. The orientation is outlined in the footprint silkscreen - align each socket accordingly.

#### Soldering Hotswap Sockets

![Hotswap Socket Soldered Close-up](assets/images/hotswap_socket_soldered_closeup.jpg)

Heat each pad and apply solder to secure the socket. Solder **both sides** of each hotswap socket to ensure a solid connection.

**Key points:**

- Heat the pad before applying solder
- Ensure both sides of the socket are soldered
- Avoid bridging adjacent pads
- Don't overheat (sockets can be sensitive to excessive heat)

#### Completed Hotswap Installation

![Hotswap Sockets Populated Back Side](assets/images/hotswap_sockets_populated_back.jpg)

The image above shows a fully populated back side with all 29 hotswap sockets soldered.

**Verify before moving on:**

- All 29 hotswap sockets are soldered
- Both sides of each socket have good solder joints
- No solder bridges between adjacent pads
- Sockets are flush with the PCB

### Soldered Switches (Alternative)

> **Important:** Attach the switches to the switch plate BEFORE soldering them to the PCB.

If you're not using hotswap sockets, you can solder switches directly to the PCB:

1. First, attach switches to the switch plate (see Switch Plate section)
2. Insert the switch + plate assembly from the **top side** of the PCB
3. Ensure the 2 pins align with the correct pads
4. Solder the pins from the bottom side
5. Repeat for all 29 switches

> **Note:** Switches soldered directly to the PCB cannot be removed without desoldering. Hotswap sockets provide flexibility for future switch changes.

### RJ45 Port - Interconnect

The RJ45 port connects the left and right halves of the keyboard together using a standard Ethernet cable.

**Required:** 2x RJ45 ports (1 per half)

#### RJ45 Port Installation

![RJ45 Port Top Side Installation](assets/images/rj45_port_top_side.jpg)

Install the RJ45 port on the **TOP side** of the PCB. Observe the footprint orientation silkscreen to ensure correct placement.

**Key points:**

- Molex RJ45 ports will snap in place on the two placeholder legs
- Clone ports may have smaller legs and won't snap in place - use tape to secure during soldering
- Ensure the port sits flush against the PCB

![RJ45 Port Bottom Side Unsoldered](assets/images/rj45_port_bottom_unsoldered.jpg)

The image above shows the back side with the RJ45 port in place but not yet soldered.

#### Soldering the RJ45 Port

Solder the RJ45 port from the **bottom side** of the PCB. Ensure all pins have good solder joints.

![RJ45 Port Soldered](assets/images/rj45_port_soldered.jpg)

The image above shows the completed soldering of the RJ45 port from the bottom side.

**Key points:**

- Heat each pad before applying solder
- Ensure all pins have solid solder joints
- Avoid bridging adjacent pins
- Don't overheat (plastic housing can be heat-sensitive)

#### Completed RJ45 Installation

**Verify before moving on:**

- RJ45 port is flush against the PCB
- All pins are soldered with good joints
- No solder bridges between pins
- Port orientation matches footprint silkscreen

### RP2040 Zero MCU

The RP2040 Zero microcontroller is the brain of the Pando58 keyboard. This guide covers installation using female header sockets (recommended) which allows the MCU to be removable. The same steps apply for direct soldering (alternative), where the male header pins are soldered directly to the PCB.

**Required:**

- 2x RP2040 Zero microcontrollers (1 per half)
- 4x 9-pin male header pins (2 rows per half)
- 4x 9-pin female header sockets (2 rows per half, optional but recommended for removable MCU)

#### Installation Methods

**Two options are available:**

1. **Using female header sockets (Recommended)** - Allows easy MCU removal if it needs replacement
2. **Direct soldering** - Male header pins soldered directly to PCB (permanent installation)

> **Warning:** Direct soldering makes MCU removal extremely difficult. Desoldering an MCU risks damaging both the MCU and the PCB.

#### Using Female Header Sockets (Recommended)

##### Preparing the Headers

![RP2040 Header Pins](assets/images/rp2040_header_pins.jpg)

Pictured above are 2 rows of female header sockets (top) and 2 rows of male header pins.

The RP2040 Zero uses **SIP (Single In-line Package) headers** with 2.54mm spacing. These typically come in longer strips (e.g., 40 pins in a row). You'll need to snap off **9 pins per row, 2 rows** (18 pins total per MCU).

> **Note:** Pando58 PCB only uses the side pins of the RP2040 Zero (9+9 = 18 pins), not the bottom 5 pins. This saves on pin headers.

##### Installing Female Header Sockets to PCB

![RP2040 Female Pins Placement](assets/images/rp2040_female_pins_placement.jpg)

Insert the female header sockets into the **RP2040 Zero footprint** on the **TOP** of the PCB. The silkscreen text says "MCU face up".

**Key points:**

- Ensure sockets are inserted in the correct holes (2 rows of 9 pins)
- Sockets should be flush against the PCB
- Verify female header sockets are inserted on the top side of the PCB

##### Preparing for Soldering

![RP2040 Header Pins Connected](assets/images/rp2040_header_pins_connected.jpg)

Pictured above are female header sockets connected to male header pins in the correct alignment.

Connect the male header pins onto the female header sockets on the PCB.

![RP2040 MCU Placement](assets/images/rp2040_mcu_placement.jpg)

Place the RP2040 Zero MCU onto the male header pins to verify fit before soldering. The MCU faces up with Boot and Reset buttons on top, and USB-C port facing outwards (away from the keyboard). All components should align properly.

![RP2040 Header Pins Alignment](assets/images/rp2040_soldering_pins.jpg)

Use **Kapton tape** or other removable tape (like painter's tape) to secure the female header sockets to the PCB before soldering. Use any tape that doesn't permanently stick or damage the PCB. This prevents movement during soldering and ensures sockets stay flush.

The image above shows a top-side view with the 2 rows of female header sockets aligned vertically.

![RP2040 Taped for Soldering](assets/images/rp2040_taped_for_soldering.jpg)

The image above shows a side view with the female header sockets aligned vertically.

**Key points:**

- Female header sockets must be flush against the PCB
- MCU faces up with USB-C port facing outwards
- Female header sockets should be aligned vertically in 2 rows of 9 pins
- Tape prevents sockets from shifting during soldering
- Use removable tape that won't damage the PCB

##### Soldering the Female Header Sockets to PCB

![RP2040 Pins Unsoldered](assets/images/rp2040_pins_unsoldered.jpg)

The image above shows the back of the PCB with the female header sockets in place but not yet soldered.

Solder the female header socket pins to the PCB from the **back** of the PCB. Start by soldering each **corner pin** to secure the sockets in place, then solder the rest of the pins.

![RP2040 Pins Soldered](assets/images/rp2040_pins_soldered.jpg)

The image above shows the female header sockets fully soldered from the back of the PCB.

**Key points:**

- Solder from the back of the PCB
- Start with corner pins to secure the sockets in place
- Ensure all 18 pins have solid solder joints
- Avoid bridging adjacent pins
- Don't overheat (plastic housing can be heat-sensitive)

##### Soldering the MCU to the Male Header Pins

After soldering the female header sockets to the PCB, the male header pins are still connected to them with the RP2040 Zero MCU placed on top.

![RP2040 Zero Completed](assets/images/rp2040_completed.jpg)

The image above shows the completed RP2040 Zero installation.

**Steps:**

1. Ensure the MCU is properly seated on the male header pins
2. Optionally use Kapton tape to secure the MCU in place if it tends to move
3. Solder the male header pins to the MCU from the **top side**
4. Start with corner pins to secure the MCU, then solder the remaining pins
5. Remove tape if used

**Key points:**

- MCU faces up with USB-C port facing outwards
- Apply minimal heat to avoid damaging the MCU
- Solder all 18 pins (2 rows of 9 pins)
- Start with corner pins to secure alignment

**Verify before moving on:**

- All female header socket pins are soldered to PCB with good joints
- No solder bridges between pins
- All male header pins are soldered to MCU
- RP2040 Zero MCU is properly seated in the female header sockets
- MCU faces up with USB-C port facing outwards

#### Direct Soldering (Alternative)

The RP2040 Zero typically comes with corresponding male header pins. Solder these male pins directly to the PCB.

**Step 1: Preparing the Headers**

Snap 4x 9-pin male header pins (2 rows per MCU) if needed. These typically come in longer strips (e.g., 40 pins in a row).

**Step 2: Installing Male Header Pins to PCB**

1. Insert the male header pins into the RP2040 Zero footprint on the **TOP** of the PCB
2. Use Kapton tape or removable tape to secure the pins in place
3. Solder all 18 pins to the PCB from the **back**, starting with corner pins
4. Remove tape after soldering is complete

**Step 3: Soldering MCU to Header Pins**

1. Place the RP2040 Zero MCU onto the male header pins
2. Ensure MCU faces up with USB-C port facing outwards
3. Solder the 18 pins on the MCU side, starting with the corner pins
4. Apply minimal heat to avoid damaging the MCU

> **Warning:** This method makes MCU removal extremely difficult. Desoldering an MCU risks damaging both the MCU and the PCB.

**Verify before moving on:**

- All male header pins are soldered to PCB with good joints
- No solder bridges between pins
- All male header pins are soldered to MCU
- MCU faces up with USB-C port facing outwards

### Switches

The switches are installed between the switch plate and the PCB. This section covers switch installation and final assembly.

#### Hardware

![M2 Hardware](assets/images/m2_hardware.jpg)

The above image shows 5x M2 8mm brass standoffs and 10x M2 4mm screws, which is the correct quantity for one half of the keyboard.

**Required:**

- 10x M2 8mm brass standoffs (5 per half)
- 20x M2 4mm screws (10 per half)
- 58x switches (29 per half)
- 2x Switch plates
- 2x Bottom plates

#### Preparing the Switch Plate

![Switch Plate](assets/images/switch_plate.jpg)

The switch plate is reversible and works for both left and right halves.

![Switch Plate Top with Standoffs](assets/images/switch_plate_top_standoffs.jpg)

Screw the standoffs from the top side of the plate.

![Switch Plate Bottom with Standoffs](assets/images/switch_plate_bottom_standoffs.jpg)

#### Installing Switches on the Plate

![Switches on Plate - Top](assets/images/switches_on_plate_top.jpg)

Insert switches into the plate. Place switches on the edges and near the standoffs for structural support. The switch pins must face **up** (towards the top of the plate) to align with the hotswap sockets.

**Key points:**

- Switch pins face up to align with hotswap sockets
- Place switches near edges and standoffs for structural support

![Switches on Plate - Bottom](assets/images/switches_on_plate_bottom.jpg)

#### Attaching Switches to PCB

![Switches Inserted into PCB](assets/images/switches_inserted_pcb.jpg)

Place the switch plate onto the PCB. Fully press the switches into the hotswap sockets.

![Switch PCB Side View](assets/images/switch_pcb_side_view.jpg)

The image above shows a switch sitting flush against the PCB.

**Key points:**

- Fully press switches into hotswap sockets
- Ensure switches sit flush against PCB

![All Switches Inserted](assets/images/all_switches_inserted.jpg)

The above image shows all 29 switches inserted into the plate for one half of the keyboard.

#### Attaching the Bottom Plate

![Bottom Plate](assets/images/bottom_plate.jpg)

The bottom plate provides structural support and protection.

![Bottom Plate Attached](assets/images/bottom_plate_attached.jpg)

Screw the bottom plate to the standoffs.

![Assembly Side View](assets/images/assembly_side_view.jpg)

![Assembly Complete](assets/images/assembly_complete_top.jpg)

The image above shows the fully assembled keyboard with switches and bottom plate attached.

### Keycaps and Optional Bumpons

![Keycaps Inserted Left](assets/images/keycaps_inserted_left.jpg)

Insert the keycaps onto the switches. The above image shows the top view with keycaps inserted for the left hand side of the keyboard - this is the final step of assembly.

> **Optional:** You can also place 3M SJ5302 bumpons to the bottom side of the keyboard (4 on each side, 8 total).

This completes the build! Next, you'll need to install firmware onto the MCU. See the [Firmware](firmware.md) page for instructions.
