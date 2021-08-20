import { Linear, Power3, Sine, TimelineMax, TweenMax } from "gsap";
import React, { useEffect } from "react";

const LoaderViewModel = () => {
  useEffect(() => {
    const select = (s: any) => {
      return document.querySelector(s);
    };

    const container: any = select(".container");
    const liquidFront: any = select(".liquidFront");
    const liquidMaskGroup: any = select(".liquidMaskGroup");
    const liquidBack: any = select(".liquidBack");
    const bubble0: any = select(".bubble0");
    const bubble1: any = select(".bubble1");
    const bubble2: any = select(".bubble2");
    const bubble3: any = select(".bubble3");
    const bubble4: any = select(".bubble4");
    const pop: any = select(".pop");
    const bubblePop0: any = select(".bubblePop0");
    const bubblePop1: any = select(".bubblePop1");
    const bubblePop2: any = select(".bubblePop2");
    const liquidBubblesGroup: any = select(".liquidBubblesGroup");
    const darkBubble: any = document.getElementsByClassName("darkBubble");

    let pop1: any = pop.cloneNode(true);
    let pop2: any = pop.cloneNode(true);

    liquidMaskGroup.appendChild(pop1);
    liquidMaskGroup.appendChild(pop2);

    let isDevice = /android|webos|iphone|ipad|ipod|blackberry/i.test(
      navigator.userAgent.toLowerCase()
    );

    if (!isDevice) {
      TweenMax.set(liquidBubblesGroup, {
        filter: "url(#goo)",
        "-webkit-filter": "url(#goo)",
      });
    }

    TweenMax.set(container, {
      position: "absolute",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
    });

    let mainTimeline = new TimelineMax();

    let frontLiquidTimeline = new TimelineMax({ repeat: -1 });
    frontLiquidTimeline.to(liquidFront, 3, {
      x: -600,
      ease: Linear.easeNone,
    });

    let backLiquidTimeline = new TimelineMax({ repeat: -1 });
    backLiquidTimeline.from(liquidBack, 3, {
      x: -800,
      ease: Linear.easeNone,
    });

    let b0 = new TimelineMax({
      repeat: -1,
      delay: 0,
      repeatDelay: 2,
      onRepeat: doRepeat,
      onRepeatParams: [bubble0],
    });
    b0.timeScale(1);
    b0.to(bubble0, 0.8, {
      attr: {
        cy: "-=80",
      },
      ease: Sine.easeOut,
    }).to(bubble0, 0.8, {
      attr: {
        cy: "+=80",
      },
      ease: Sine.easeIn,
    });

    let b1 = new TimelineMax({
      repeat: -1,
      delay: 3,
      repeatDelay: 5,
      onRepeat: doRepeat,
      onRepeatParams: [bubble1],
    });
    b1.timeScale(1);
    b1.to(bubble1, 0.7, {
      attr: {
        cy: "-=120",
      },
      ease: Sine.easeOut,
    }).to(bubble1, 0.7, {
      attr: {
        cy: "+=120",
      },
      ease: Sine.easeIn,
    });

    let b2 = new TimelineMax({
      repeat: -1,
      delay: 1,
      repeatDelay: 6,
      onRepeat: doRepeat,
      onRepeatParams: [bubble2],
    });
    b2.timeScale(1);
    b2.to(bubble2, 1, {
      attr: {
        cy: "-=70",
      },
      ease: Sine.easeOut,
    }).to(bubble2, 1, {
      attr: {
        cy: "+=70",
      },
      ease: Sine.easeIn,
    });

    let b3 = new TimelineMax({
      repeat: -1,
      delay: 1,
      repeatDelay: 4,
      onRepeat: doRepeat,
      onRepeatParams: [bubble3],
    });
    b3.timeScale(1);
    b3.to(bubble3, 0.72, {
      attr: {
        cy: "-=140",
      },
      ease: Sine.easeOut,
    })

      .to(bubble3, 0.72, {
        attr: {
          cy: "+=140",
        },
        ease: Sine.easeIn,
      })
      .to(bubble3, 0.88, {
        attr: {
          cy: "-=110",
        },
        ease: Sine.easeOut,
      })

      .to(bubble3, 0.88, {
        attr: {
          cy: "+=110",
        },
        ease: Sine.easeIn,
      });

    let b4 = new TimelineMax({
      repeat: -1,
      delay: 2,
      repeatDelay: 2,
      onRepeat: doRepeat,
      onRepeatParams: [bubble4],
    });
    b4.timeScale(1);
    b4.to(bubble4, 0.7, {
      attr: {
        cy: "-=99",
      },
      ease: Sine.easeOut,
    }).to(bubble4, 0.7, {
      attr: {
        cy: "+=99",
      },
      ease: Sine.easeIn,
    });

    //with pops

    let bPop0 = new TimelineMax({ repeat: -1, delay: 2, repeatDelay: 5 });
    bPop0.timeScale(1);
    bPop0
      .to(bubblePop0, 0.82, {
        attr: {
          cy: "-=110",
        },
        ease: Sine.easeOut,
      })
      .set(bubblePop0, {
        alpha: 0,
      })
      .set(pop, {
        x: 256,
        y: 269,
        transformOrigin: "50% 50%",
      })

      .from(pop, 0.2, {
        scale: 0,
        transformOrigin: "50% 50%",
      })
      .to(
        pop,
        0.1,
        {
          alpha: 0,
        },
        "-=0.1"
      );

    let bPop1 = new TimelineMax({ repeat: -1, delay: 1, repeatDelay: 7 });
    bPop1.timeScale(1);
    bPop1
      .to(bubblePop1, 0.92, {
        attr: {
          cy: "-=130",
        },
        ease: Sine.easeOut,
      })
      .set(bubblePop1, {
        alpha: 0,
      })
      .set(pop1, {
        x: 306,
        y: 262,
        transformOrigin: "50% 50%",
      })

      .fromTo(
        pop1,
        0.2,
        {
          scale: 0,
        },
        {
          scale: 0.8,
          transformOrigin: "50% 50%",
        }
      )
      .to(
        pop1,
        0.1,
        {
          alpha: 0,
        },
        "-=0.1"
      );

    let bPop2 = new TimelineMax({ repeat: -1, delay: 5, repeatDelay: 9 });
    bPop2.timeScale(1);
    bPop2
      .to(bubblePop2, 0.92, {
        attr: {
          cy: "-=90",
        },
        ease: Sine.easeOut,
      })
      .set(bubblePop2, {
        alpha: 0,
      })
      .set(pop2, {
        x: 346,
        y: 322,
        transformOrigin: "50% 50%",
      })

      .fromTo(
        pop2,
        0.2,
        {
          scale: 0,
        },
        {
          scale: 0.8,
          transformOrigin: "50% 50%",
        }
      )
      .to(
        pop2,
        0.1,
        {
          alpha: 0,
        },
        "-=0.1"
      );

    let darkBubble0 = new TimelineMax({ repeat: -1 });
    darkBubble0.staggerTo(
      darkBubble,
      2,
      {
        attr: {
          cy: 370,
          r: 0,
        },
        fill: "#2E69E2",
        ease: Power3.easeIn,
      },
      0.9
    );

    mainTimeline
      .add(frontLiquidTimeline, 0)
      .add(backLiquidTimeline, 0)
      .add(b0, 0)
      .add(b1, 0)
      .add(b2, 0)
      .add(b3, 0)
      .add(b4, 0)
      .add(bPop0, 0)
      .add(bPop1, 0)
      .add(bPop2, 0)
      .add(darkBubble0, 0);

    mainTimeline.timeScale(1);

    function doRepeat(bubble: any) {
      TweenMax.set(bubble, {
        attr: {
          cx: getBetweenVal(240, 360),
        },
      });
    }

    TweenMax.set("svg", {
      transformOrigin: "50% 50%",
      //:180,
      scale: 1.2,
    });

    function getBetweenVal(min: any, max: any) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  });
};

export default LoaderViewModel;
