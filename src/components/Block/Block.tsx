import * as React from 'react';
import styles from './styles.module.css';

export interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  head: string;
  foot?: string;
  allowInner?: boolean;
}

export const Block: React.SFC<BlockProps> = (props: BlockProps) => {

  const {
    children,
    head,
    foot,
    allowInner,
    ...rest
  } = props;

  return (
    <div
      className={styles.block}
      style={{
        position: "relative",
      }}
      {...rest}
    >
      <div
        className={`${styles.head}`}
      >
        {head}
      </div>
      {
        props.allowInner && (
          <React.Fragment>
            <div className={styles.content}>
              {children}
            </div>
            <div className={styles.foot}>
              {foot}
            </div>
          </React.Fragment>
        )
      }
    </div >
  );
}
