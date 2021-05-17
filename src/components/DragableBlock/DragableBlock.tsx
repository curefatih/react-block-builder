import * as React from 'react';
import styles from './styles.module.css';

export interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  head: string;
  foot?: string;
  allowInner?: boolean;
  parentPos: DOMRect;
  children: React.ReactChildren | Function | any
}

export const DragableBlock: React.SFC<BlockProps> = (props: BlockProps) => {
  const [pos, setPos] = React.useState({
    mouseDown: false,
    x: 0,
    y: 0,
    offsetX: 0,
    offsetY: 0,
    mouseOffsetX: 0,
    mouseOffsetY: 0,
  });


  const el = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (el.current) {
      const current = el.current;

      setPos({
        ...pos,
        x: props.parentPos.x + (props.parentPos.width / 2),
        y: props.parentPos.y + (props.parentPos.height / 2),
        offsetX: current.offsetLeft,
        offsetY: current.offsetTop,
      })
    }
  }, [])



  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // @ts-ignore
    const current = e.target.getBoundingClientRect()

    setPos({
      ...pos,
      mouseDown: true,
      mouseOffsetX: e.clientX - current.left,
      mouseOffsetY: e.clientY - current.top
    })
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    if (pos.mouseDown) {

      // @ts-ignore
      const current = e.target.getBoundingClientRect()

      setPos({
        ...pos,
        x: e.clientX - pos.mouseOffsetX - props.parentPos.x,
        y: e.clientY - pos.mouseOffsetY - props.parentPos.y
      })
    }
  }

  const handleMouseUp = () => {
    setPos({
      ...pos,
      mouseDown: false
    })
  }

  return (
    <div
      className={styles.undragableBlock}
      onMouseMove={handleMouseMove}
      style={{
        position: "absolute",
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        ...props.style
      }}
    >
      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
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
