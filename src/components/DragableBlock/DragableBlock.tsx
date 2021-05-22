import * as React from 'react';
import useDragable from '../useDragable/useDragable';
import styles from './styles.module.css';

export interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  head: string;
  foot?: string;
  allowInner?: boolean;
  parentPos: DOMRect;
  children: React.ReactChildren | Function | any
}

export function DragableBlock(props: BlockProps) {
  const { pos, handleMouseDown, handleMouseMove, handleMouseUp, setDragableState } = useDragable();

  React.useEffect(() => {
    setDragableState({
      parentPos: {
        x: props.parentPos.x,
        y: props.parentPos.y,
      }
    })
  }, [props.parentPos])

  return (
    <div
      className={styles.dragableBlock}

      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}

      style={{
        position: "absolute",
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        zIndex: pos.mouseDown ? 9999 : "auto",
        border: pos.mouseDown ? "1px solid #0984e3" : undefined,
        ...props.style
      }}
    >
      <div

        className={`${styles.head} ${!props.allowInner && styles.rounded}`}
      >
        {props.head}
      </div>
      {
        props.allowInner && (
          <React.Fragment>
            <div className={styles.content}>
              {props.children}
            </div>
            <div className={styles.foot}>
              {props.foot}
            </div>
          </React.Fragment>
        )
      }
    </div >
  );
};
