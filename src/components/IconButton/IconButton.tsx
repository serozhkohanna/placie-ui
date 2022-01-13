import React, { FC, ReactNode } from 'react';

import styles from './IconButton.module.scss';
import classNames from 'classnames';

interface Props {
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const IconButton: FC<Props> = ({ onClose, children, className }: Props) => {
  return <button
    onClick={onClose}
    className={styles.iconButton}
  >
    <span className={classNames(styles.icon, className)}>{children}</span>
  </button>;
};

export default IconButton;
