import React, { FC } from 'react';

import classNames from 'classnames';

import styles from './Button.module.scss';

interface Props {
  level: number;
  disabled?: boolean;
  onClick: () => void;
  children?: React.ReactNode;
  text: string;
}

const Button: FC<Props> = ({ onClick, level, disabled, children, text }: Props) => {
  return <button
    onClick={onClick}
    disabled={disabled}
    className={classNames(styles.button, styles[`button-l${level}`])}
  >
    {text}
    <span className={styles.icon}>{children}</span>
  </button>;
};

export default Button;
