# 𝜟𝜱✴︎ _(delta phi star)_
𝜟𝜱✴︎ or Delta Phi Star is a variant method of determining perceptual lightness contrast, and a sibling of APCA and SACAM. It is a simplified method using easily invertible standardized maths, however it lacks some useful properties such as polarity sensitivity. In fact, 𝜟𝜱✴︎ is intended for applications where a "general" simplifed perceptual contrast is desired, where polarity sensitivity is not needed (or is ambiguous).

We created 𝜟𝜱✴︎ on the path toward SACAM (and APCA).

Here, create Lstar from the piecewise sRGB->Y and L* per the standard CIE math, then:

```js
    deltaPhiStar = Math.abs(bgLstar^1.618 - txLstar^1.618)^0.618;
```

This mainly works for "Light Mode" but does not track dark mode quite as well as APCA.

Also, while this is close to parity with light mode APCA at Lc +90, lower contrasts are over-reported, and it does not match in dark mode. Some of this can be addressed with scales and offsets, which will be in the source herein. As the difference has a power curve exponent of 1/𝜱 applied, the difference must be an absolute value. 

