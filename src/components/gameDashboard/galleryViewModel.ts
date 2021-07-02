import { useRef } from "react";

export const GallerViewModel = () => {
  const draggableArea: any = useRef();
  let mouseDown = false;
  let startY: any;
  let scrollTop: any;

  function startDragging(e: any) {
    mouseDown = true;
    //@ts-ignore
    startY = e.pageY - draggableArea.current.offsetTop;
    //@ts-ignore
    scrollTop = draggableArea!.current.scrollTop;
  }

  function stopDragging(e: any) {
    mouseDown = false;
  }

  function dragging(e: any) {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    //@ts-ignore
    const y = e.pageY - draggableArea.current.offsetTop;
    const scroll = y - startY;
    draggableArea.current.scrollTop = scrollTop - scroll;
  }
  return {
    draggableArea,
    startDragging,
    stopDragging,
    dragging,
  };
};
