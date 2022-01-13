import React, { FC } from 'react';

import styles from './Label.module.scss';

interface Props {
  text: string;
}

const Label: FC<Props> = ({ text }: Props) => {
  return <div className={styles.label}>
    <span className={styles.labelIcon}>🔍</span>
    {text}
  </div>;
};

export default Label;
