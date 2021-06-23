// @ts-nocheck
import { useEffect, useRef } from "react";

export const GamesViewModel = () => {
  const singleRefs = useRef([]);
  let mouseDown = false;
  let startX: any;
  let scrollLeft: any;
  const draggableArea = useRef();

  function startDragging(e) {
    mouseDown = true;
    startX = e.pageX - draggableArea.current.offsetLeft;
    scrollLeft = draggableArea.current.scrollLeft;
  }

  function stopDragging(e) {
    mouseDown = false;
  }

  function dragging(e) {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    const x = e.pageX - draggableArea.current.offsetLeft;
    const scroll = x - startX;
    draggableArea.current.scrollLeft = scrollLeft - scroll;
  }

  function callbackFunction(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "scale(1)";
      } else {
        entry.target.style.opacity = 0;
        entry.target.style.transform = "scale(.35)";
      }
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, {
      threshold: 0.55,
    });

    if (singleRefs && singleRefs.current) {
      singleRefs.current.forEach((ref) => {
        observer.observe(ref);
      });
    }

    return () => {
      if (singleRefs && singleRefs.current) {
        singleRefs.current.forEach((ref) => {
          observer.disconnect();
        });
      }
    };
  }, [singleRefs]);

  return {
    draggableArea,
    singleRefs,
    dragging,
    stopDragging,
    startDragging,
  };
};
