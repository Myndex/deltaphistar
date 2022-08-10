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


# 𝜟𝜱✴︎ _(delta phi star)_
𝜟𝜱✴︎ or Delta Phi Star is a method of determining perceptual lightness contrast developed by Andrew Somers (Myndex Research), and is a sibling of [APCA](https://github.com/Myndex/SAPC-APCA) and SACAM. It is a simplified method using easily invertible standardized maths, however it lacks some useful properties such as polarity sensitivity.

But In fact, 𝜟𝜱✴︎ is intended for applications where a "general" simplifed perceptual contrast is desired, where polarity sensitivity is not needed or is ambiguous.

𝜟𝜱✴︎ was created on the path toward SACAM and APCA.

Here, create Lstar from the piecewise sRGB -> Y and L* per the standard CIE math (see the [See Stars](https://github.com/Myndex/seestars) microlibrary), then:

```js
    deltaPhiStar = (Math.abs(bgLstar ** 1.618 - txLstar ** 1.618) ** 0.618) * 1.414 - 40 ;
    
    // ** is equiv to Math.pow
```

This mainly works for "Light Mode" but does not track dark mode quite as well as APCA.

Also, while this is close to parity with light mode APCA for Lc +46 thru +75. The very low and very high contrasts reported by 𝜟𝜱✴︎ higher than those reported by APCA. This should be helpful as 𝜟𝜱✴︎ is not polarity sensitive the way APCA is.

As the difference has a power curve exponent of 1/𝜱 applied, the difference must be an absolute value. 𝜟𝜱✴︎ returns a positive value always, and is symmetrical in regards to polarity (text and BG order do not affect results).

![delta phi star logo general purpose contrast algorithm](https://user-images.githubusercontent.com/42009457/183782606-309d650e-8c74-4701-92a3-431179ed287f.png)
