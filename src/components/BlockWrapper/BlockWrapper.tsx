import * as React from 'react'
import styles from './styles.module.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  blockStyle?: React.CSSProperties
}

export const BlockWrapper = (props: Props) => {
  const blockEl = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (blockEl.current) {
      const block = blockEl.current;

      block.style.width = block.parentElement?.style.width || "inherit";
      block.style.height = block.parentElement?.style.height || "inherit";

    }
  }, [])

  return (
    <div ref={blockEl} className={styles.blockBuilder} style={props.blockStyle}>
      {props.children}
    </div>
  )
}
