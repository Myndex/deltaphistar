# 𝜟𝜱✴︎ _(delta phi star)_
𝜟𝜱✴︎ or Delta Phi Star is a method of determining perceptual lightness contrast developed by Andrew Somers (Myndex Research), and is a sibling of [APCA](https://github.com/Myndex/SAPC-APCA) and SACAM. It is a simplified method using easily invertible standardized maths, however it lacks some useful properties such as polarity sensitivity.

But In fact, 𝜟𝜱✴︎ is intended for applications where a "general" simplifed perceptual contrast is desired, where polarity sensitivity is not needed or is ambiguous.

𝜟𝜱✴︎ was created on the path toward SACAM and APCA.

Here, create Lstar from the piecewise sRGB->Y and L* per the standard CIE math (see the [See Stars](https://github.com/Myndex/seestars) microlibrary), then:

```js
    deltaPhiStar = (Math.abs(bgLstar^1.618 - txLstar^1.618)^0.618) * 1.3333 - 0.3333 ;
```

This mainly works for "Light Mode" but does not track dark mode quite as well as APCA.

Also, while this is close to parity with light mode APCA for Lc +46 thru +75. The very low and very high contrasts reported by 𝜟𝜱✴︎ higher than those reported by APCA. THis is probably helpful as 𝜟𝜱✴︎ is not polarity sensitive the way APCA is. 

As the difference has a power curve exponent of 1/𝜱 applied, the difference must be an absolute value. 

![delta phi star logo general purpose contrast algorithm](https://user-images.githubusercontent.com/42009457/183782606-309d650e-8c74-4701-92a3-431179ed287f.png)
