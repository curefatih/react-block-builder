import * as React from 'react';
import styles from './styles.module.css';

export interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  head: string;
  foot?: string;
}

export const Block: React.SFC<BlockProps> = (props: BlockProps) => {
  return (
    <div className={styles.block}>
      <div className={styles.head}>
        {props.head}
      </div>
      <div className={styles.content}>
        {props.children}
      </div>
      <div className={styles.foot}>
        {props.foot}
      </div>
    </div>
  );
};
