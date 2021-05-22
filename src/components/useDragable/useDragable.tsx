import * as React from 'react';


const useDragable = () => {

  const [pos, setPos] = React.useState({
    mouseDown: false,
    x: 0,
    y: 0,
    offsetX: 0,
    offsetY: 0,
    mouseOffsetX: 0,
    mouseOffsetY: 0,
    parentPos: {
      x: 0,
      y: 0
    }
  });

  const setDragableState = (state: Partial<typeof pos>) => {
    setPos({
      ...pos,
      ...state
    })
  }

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    if (pos.mouseDown) return

    // @ts-ignore
    const current = event.target.getBoundingClientRect()

    setPos({
      ...pos,
      mouseDown: true,
      mouseOffsetX: event.clientX - current.left,
      mouseOffsetY: event.clientY - current.top
    })
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    if (pos.mouseDown) {
      setPos({
        ...pos,
        x: e.clientX - pos.mouseOffsetX - pos.parentPos.x,
        y: e.clientY - pos.mouseOffsetY - pos.parentPos.y
      })
    }

  };

  const handleMouseUp = () => {

    if (pos.mouseDown) {
      setPos({
        ...pos,
        mouseDown: false
      })
    }
  }

  return {
    pos,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    setDragableState
  }

}

export default useDragable;
