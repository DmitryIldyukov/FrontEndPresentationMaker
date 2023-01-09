import React, { useEffect, useRef } from "react";
import {editBlockSizeHandler, savePosBlockHandler, selectBlockHandler} from "../editor/EditorFn";
import {editBlockSize} from "../../types/functions";

function useDragger(id: string, startPos: Position, slideId: number, blockId: number) {

  const isClicked = useRef<boolean>(false);

  const coords = useRef<{
    startX: number,
    startY: number,
    lastX: number,
    lastY: number
  }>({
    startX: startPos.x,
    startY: startPos.y,
    lastX: startPos.x,
    lastY: startPos.y
  })

  useEffect(() => {

    const target = document.getElementById(id);
    if (!target) throw new Error("Element with given id doesn't exist");

    const container = document.getElementById(slideId.toString());
    if (!container) throw new Error("target element must have a parent");

    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    }

    const onMouseUp = (e: MouseEvent) => {
      isClicked.current = false;
      coords.current.lastX = target.offsetLeft;
      coords.current.lastY = target.offsetTop;

      const newPosit: Position = {
        x: coords.current.lastX,
        y: coords.current.lastY
      }

      const newSizeHeight = target.offsetHeight;
      const newSizeWidth = target.offsetWidth;

      const newSize = {
        height: newSizeHeight,
        width: newSizeWidth
      }

      editBlockSizeHandler(slideId, blockId, newSize)
      savePosBlockHandler(slideId, blockId, newPosit)
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      target.style.top = `${nextY}px`;
      target.style.left = `${nextX}px`;

      selectBlockHandler(slideId - 1, blockId)
    }

    target.addEventListener('mousedown', onMouseDown);
    target.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseUp);

    const cleanup = () => {
      target.removeEventListener('mousedown', onMouseDown);
      target.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseUp);
    }
    return cleanup;
  }, [id])
}

export default useDragger;