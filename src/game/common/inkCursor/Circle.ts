export class Circle {
  constructor(id: any) {
    const el: HTMLElement | null = document.getElementById(id);
    const parent = el?.parentElement;

    if (el) {
      parent?.removeChild(el);
      const chars = el.innerText.split("");
      chars.push(" ");
      for (let i = 0; i < chars.length; i++) {
        const span = document.createElement("span");
        span.innerText = chars[i];
        span.className = `char${i + 1}`;
        if (parent) {
          parent.appendChild(span);
        }
      }
    }
  }
}
