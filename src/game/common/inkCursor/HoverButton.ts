import { TweenMax } from "gsap";

interface IHoverButton {
  hovered: boolean;
  animatingHover: boolean;
  forceOut: boolean;
  timing: number;
  el: HTMLElement | null;
  bg: any;
}

export class HoverButton implements IHoverButton {
  animatingHover: boolean;
  bg: any;
  el: HTMLElement | null;
  forceOut: boolean;
  hovered: boolean;
  timing: number;

  constructor(id: string) {
    this.hovered = false;
    this.animatingHover = false;
    this.forceOut = false;
    this.timing = 0.65;
    this.el = document.getElementById(id);
    this.bg = this.el?.getElementsByClassName("bg")[0];
    this.el?.addEventListener("mouseenter", this.onMouseEnter);
    this.el?.addEventListener("mouseleave", this.onMouseLeave);
  }

  onMouseEnter = () => {
    this.hoverInAnim();
  };

  hoverInAnim = () => {
    if (!this.hovered) {
      this.hovered = true;
      this.animatingHover = true;
      this.forceOut = false;
      TweenMax.fromTo(
        this.bg,
        this.timing,
        { x: "-112%" },
        {
          x: "-12%",
          ease: Power3.easeOut,
          onComplete: () => {
            this.animatingHover = false;
            if (this.forceOut) {
              this.forceOut = false;
              this.hoverOutAnim();
            }
          },
        }
      );
    }
  };

  onMouseLeave = () => {
    if (!this.animatingHover) {
      this.hoverOutAnim();
    } else {
      this.forceOut = true;
    }
  };

  hoverOutAnim = () => {
    this.hovered = false;
    TweenMax.to(this.bg, this.timing, {
      x: "100%",
      ease: Power3.easeOut,
      onComplete: () => {},
    });
  };
}
