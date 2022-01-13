import React, { FC } from 'react';

import { FaStar } from 'react-icons/fa';

import styles from './Stars.module.scss';
import classNames from 'classnames';

interface Props {
  text: string;
  isLarge?: boolean;
}

const Stars: FC<Props> = ({ text, isLarge }: Props) => {
  return <div className={classNames(styles.stars, {
    [styles.isLarge]: isLarge,
  })}>
    <FaStar className={styles.icon} />
    {text}
  </div>;
};

export default Stars;
