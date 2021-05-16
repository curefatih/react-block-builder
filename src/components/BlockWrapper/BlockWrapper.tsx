import * as React from 'react'
import styles from './styles.module.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  blockStyle?: React.CSSProperties,
  // Here i used Function as type but probably wrong
  children: Function
}

// idk, its necessary to give context but might need
export const BlockContext = React.createContext<any>(null);

export const BlockWrapper = (props: Props) => {
  const [pos, setPos] = React.useState({} as DOMRect);
  const blockEl = React.useRef<HTMLDivElement>(null);

  const handleResize = () => {
    if (blockEl.current) {

      const block = blockEl.current;

      block.style.width = block.parentElement?.style.width || "inherit";
      block.style.height = block.parentElement?.style.height || "inherit";

      const rect = block.getBoundingClientRect();
      setPos(rect);
    }
  }

  React.useEffect(() => {

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  return (
    <BlockContext.Provider value={pos}>
      <div ref={blockEl} className={styles.blockBuilder} style={props.blockStyle}>
        {props.children(pos)}
      </div>
    </BlockContext.Provider>
  )
}
