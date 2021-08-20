import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import "./styles/_dungeonStyles.scss";

const Dungeon = () => {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1614983646436-b3d7a8398b3f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNTU4MTkxNA&ixlib=rb-1.2.1&q=80&w=400&h=600",
      title: "Animation",
    },
    {
      image:
        "https://images.unsplash.com/photo-1615421559287-5e6eecec3b80?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNTU4MjAwOQ&ixlib=rb-1.2.1&q=80&w=400&h=600",
      title: "CSS",
    },
    {
      image:
        "https://images.unsplash.com/photo-1615098270177-e2db45986811?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNTU4MjAwOQ&ixlib=rb-1.2.1&q=80&w=400&h=600",
      title: "HTML",
    },
    {
      image:
        "https://images.unsplash.com/photo-1615114814213-a245ffc79e9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNTU4MjAwOQ&ixlib=rb-1.2.1&q=80&w=400&h=600",
      title: "React",
    },
  ];

  function getRect(el: any) {
    return el.getBoundingClientRect();
  }

  function flip(firstRect: any, el: any) {
    requestAnimationFrame(() => {
      const lastEl = el;
      const lastRect = getRect(lastEl);
      const dx: any = lastRect.x - firstRect.x;
      const dy: any = lastRect.y - firstRect.y;
      const dw: any = lastRect.width / firstRect.width;
      const dh: any = lastRect.height / firstRect.height;
      lastEl.dataset.flipping = true;
      lastEl.style.setProperty("--dx", dx);
      lastEl.style.setProperty("--dy", dy);
      lastEl.style.setProperty("--dw", dw);
      lastEl.style.setProperty("--dh", dh);
      requestAnimationFrame(() => delete lastEl.dataset.flipping);
    });
  }

  function useFlip(ref: any) {
    const rectRef = useRef(null);
    useLayoutEffect(() => {
      if (ref.current) {
        if (!rectRef.current) {
          rectRef.current = getRect(ref.current);
        }
        flip(rectRef.current, ref.current);
        rectRef.current = getRect(ref.current);
      }
    });
  }

  function useKeyDown(onKeyDown: any) {
    useEffect(() => {
      document.addEventListener("keydown", onKeyDown);

      return () => {
        document.removeEventListener("keydown", onKeyDown);
      };
    }, []);
  }

  function ImageTitle(props: any) {
    const ref = useRef(null);
    useFlip(ref);

    return <span {...props} ref={ref} data-flip className="title" />;
  }

  function Image({ src, title, selected, ...props }: any) {
    const ref = useRef(null);
    useFlip(ref);

    return (
      <div
        {...props}
        className="image"
        key={src}
        data-selected={selected || undefined}
      >
        <img data-flip alt="flip" src={src} ref={ref} />
        <ImageTitle>
          <strong>{title}</strong> 2021
        </ImageTitle>
      </div>
    );
  }
  const [selected, setSelected] = useState(0);

  useKeyDown((event: any) => {
    switch (event.key) {
      case "ArrowRight":
        setSelected((selected) => (selected + 1) % slides.length);
        break;
      case "ArrowLeft":
        setSelected(
          (selected) => (slides.length + (selected - 1)) % slides.length
        );
        break;
      default:
        break;
    }
  });

  return (
    <div className="app">
      <div className="gallery">
        {slides.map((slide, index) => {
          return (
            <Image
              src={slide.image}
              title={slide.title}
              selected={index === selected}
              key={index}
              onClick={() => setSelected(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dungeon;
