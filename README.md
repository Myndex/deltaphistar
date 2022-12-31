<p align="center">

  <a href="https://npmjs.org/package/deltaphistar">
    <img src="https://badgen.net/npm/v/deltaphistar?color=3000c0&icon=npm" alt="version" />
  </a> &nbsp;&nbsp;
  <a href="https://github.com/Myndex/deltaphistar/src/">
    <img src="https://badgen.net/badge/JS/Vanilla/889900" alt="plain vanilla JS" />
  </a> &nbsp;&nbsp;
  <a href="https://github.com/Myndex/deltaphistar/blob/master/LICENSE.md">
    <img src="https://badgen.net/badge/license/AGPL?icon=github&color=BB5FD1" alt="license" />
  </a> &nbsp;&nbsp;
</p>
<p align="center">
  <a href="https://github.com/Myndex/deltaphistar">
    <img src="https://badgen.net/github/last-commit/Myndex/deltaphistar/?icon=github" alt="last commit" />
  </a> &nbsp;&nbsp;
  <a href="https://npmjs.org/package/deltaphistar">
    <img src="https://badgen.net/npm/dt/deltaphistar?color=6000b0&icon=npm" alt="downloads" />
  </a> &nbsp;&nbsp;
  <a href="https://twitter.com/MyndexResearch">
    <img src="https://badgen.net/badge/@/MyndexResearch?icon=twitter" alt="twitter" />
  </a> &nbsp;&nbsp;
</p>


# 𝜟𝜱✴︎ _(delta phi star) DPS Contrast_
$𝜟𝜱✴︎$ or Delta Phi Star or DPS Contrast, is a method of determining perceptual lightness contrast developed by Andrew Somers (Myndex Research), and is a sibling of [APCA](https://github.com/Myndex/SAPC-APCA) and SAPC/SACAM. It is a simplified method using easily invertible standardized maths, however it lacks some useful properties such as polarity sensitivity.

But In fact, $𝜟𝜱✴︎$ is intended for applications where a "general" simplifed perceptual contrast is desired, where polarity sensitivity is not needed or is more ambiguous. Nevertheless, polarity sensitivity can be emulated by adding $Lc\ 5$ to negative polarity situations.

𝜟𝜱✴︎ DPS Contrast was created on the path toward SACAM and APCA.

**TUTORIAL:** create Lstar from the piecewise $sRGB$ &rarr; $Y$ and $L^*$ per the standard CIE math (see the [See Stars](https://github.com/Myndex/seestars) microlibrary), then:

```js
    deltaPhiStar = (Math.abs(bgLstar ** 1.618 - txLstar ** 1.618) ** 0.618) * 1.414 - 40 ;
    
    // ** is equiv to Math.pow
```

This mainly works for "Light Mode" but does not track dark mode as well as APCA.

Also, while this is close to parity with light mode APCA for $Lc\ +45$ thru $Lc\ +75$. The very low and very high contrasts reported by 𝜟𝜱✴︎ higher than those reported by APCA.

As the difference has a power curve exponent of $1/𝜱$ applied, the difference must be an absolute value. $𝜟𝜱✴︎$ returns a positive value always, and is symmetrical in regards to polarity (text and BG order do not affect results). 

<img alt="delta phi star logo general purpose contrast algorithm" src="https://user-images.githubusercontent.com/42009457/183782606-309d650e-8c74-4701-92a3-431179ed287f.png" id="deltaphistar-contrast-logo">


## DELTA PHI STAR CONTRAST FAQ
***DPS Contrast***, also known as ***Delta Phi Star 𝜟𝜱✴︎***, is a simple formula for predicting human visual perception of contrast between text and background on computer monitors and devices. 

- **WHO WHAT WHERE WHEN WHY HOW**
    - Delta Phi Star was developed by Andrew Somers, in the pursuit of better (and simpler) readability guidelines.
    - Delta Phi Star is a formula that predicts the contrast of text against the background for a given pair of colors.
    - Delta Phi Star emerged from the SAPC/APCA project developing new standards for better beat ability on the web.
    - To provide a simple, yet usefully accurate and perceptually uniform contrast metric.
    - Convert a color pair to D65 CIELAB, then send the $L^*$ (Lstar) values to DPS, and it returns an $L^c$ (lightness contrast) value.

---
- **BASIC READABILITY GUIDELINES:**
    - Delta Phi Star Readability Guidelines are set as simple thresholds similar to WCAG 2.x 
        - Linear interpolation is permitted intra-level.
        - These values are based on reference fonts such as Helvetica or Arial.
        - To use a 300 weight font, add $L^c\ 10$ to the contrast threshold needed for normal weight.
        - CSS `font-smoothing: antialiased` is prohibited for 300 weight fonts smaller than 36px and for 400 fonts which are smaller than 24px.
        - `font-smoothing: auto` should be used for small and thin fonts.

- **_FOR PRIMARY CONTENT TEXT_**
    - $L^c\ 75$ permits a minimum font size of:
        - 16px normal or 12px bold
    - $L^c\ 60$ permits a minimum font size of:
        - 24px normal or 16px bold
    - $L^c\ 45$ permits a minimum font size of:
        - 42px normal or 24px bold
- **_FOR SECONDARY CONTENT, "SPOT" READABLE TEXT_**
    - _subtract_ $L^c\ 15$ from the above values.
    - at $L^c\ 90$ (which calculates as $L^c\ 75$ _after_ subtracting $L^c\ 15$)
        - minimum font size is 11px for secondary content only.
    - secondary content includes things like "copyright" or "placeholder text" or other textual elements that are not directly related to the primary contact of the page or primary navigation.

- **_FOR SEMANTIC NON-TEXT (icons and pictograms)_**
    - $L^c\ 60$ for thin outline icons or thin line drawings
    - $L^c\ 45$ for solid icons or bolder line drawings
- **_FOR NON-SEMANTIC NON-TEXT (chart elements or button shapes)_**
    - $L^c\ 45$ for button outlines, thin chart lines, small pie pieces
    - $L^c\ 30$ for solid buttons, bar charts, large pie pieces

---

- **UNIFORMITY:**
    - DPS Contrast is quasi-uniform for human perception of text against a background on a self-illuminated display
        - reasonably accurate within a defined range $L^c 45$ to $L^c 75$ and for positive polarity (dark text on a light background)
    - The perception curve is based on the output of SACMX-based mixed-mode high-spatial-frequency contrast matching data, using
        - hardware-calibrated standard-dynamic-range (SDR) sRGB displays
        - a typical office lighting environment with a nominal ambient illumination of 350 lux.
        - proximal screen set at or close to white.

- **DEPENDENCIES:**
    - DPS Contrast itself is a *single line of code*, but it's inputs require that a color has been reduced to a $CIE\ L^*$ value.
    - therefore, DPS contrast has a dependency for a library that can parse an sRGB color and convert it to D65 CIELAB.
    - depending on the application, it may be useful to add logic to determine the polarity of the text and background, and for negative polarity to add $5$ to the LC value (or alternately, offset $-35$ instead of $-40$ at the return).

- **LIMITATIONS:**
    - DPS Contrast becomes substantially less accurate at very high and very low contrasts
        - $L^c$ values lower than $L^c 45$ or higher than $L^c 75$ are generally higher than actual perception
        - as such $L^c$ values lower than $L^c 45$ or higher than $L^c 75$ should be derated
        - otherwise, the range between 45 to 75 is the area of the thresholds most important for text, Arguably this is the only thing that's really necessary for use in defined guidelines such as those needed for WCAG.
    - DPS Contrast is not polarity aware
        - and $L^c$ values for reverse polarity aka "dark mode" are generally lower
        - in dark mode, actual contrast is higher than the reported $L^c$ values between $L^c 40$ & $L^c 70$
        - to approximate the polarity difference, add **$5$** to the $L^c$ value for dark mode results between $L^c 40$ & $L^c 70$

- **INITALISMS and ACRONYMS:**
    - APCA™: Accessible Perceptual Contrast Algorithm™ *(aye pea see aye)*
        - sometimes referred to as the Advanced Perceptual Contrast Algorithm
        - is a perceptual uniform model of text on a self-illuminated display
    - APCA-W3: APCA World Wide Web version
        - specific APCA version intended for WCAG guidelines
        - includes a version of APCA-RDG accessibility guidelines for visual readability
    - APCA-RDG: APCA Readability Design Guidelines 
        - an independent set of design guidelines to promote effective readability and accessibility for visually readable content
    - DPS-C: Delta Phi Star™ Contrast *(dee pea ess)*
        - simplified quasi-uniform perceptual contrast model
    - SACAM™: SLuv Accessible Color Appearance Model™ *(say cam)*
        - color appearance model that is designed specifically for self-illuminated displays
        - features utilities to accommodate various visual impairments
    - SAPC™: SLuv Accessible Perceptual Contrast™ *(sap see)*
        - an earlier contrast appearance model that laid the foundation for APCA and SACAM
    - SACMX: Spatially Aware Contrast Matching eXperiment
        - a method of measuring the perceived suprathreshold contrast at high spatial frequencies
 
 - **COPYRIGHT and TRADEMARKS:**
     - this repo and all materials contained here in, are copyright © 2022 by Andrew Somers. All Rights Reserved. Use permitted as defined in this license agreement.
     - Nothing in the license agreement extends to nor permits the use of any trademarks shown anywhere in this repo, unless specifically stated.
         - The term "Delta Phi Star™" may be used to describe instantiations, integrations, applications, libraries, or frameworks which are using the materials in this repo, provided that such usage is unaltered except as may be needed to port to different languages.

