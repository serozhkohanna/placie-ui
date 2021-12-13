import React, { FC } from 'react';

import classNames from 'classnames';

import styles from './Button.module.scss';

interface Props {
  level: number;
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button: FC<Props> = ({ onClick, level, text, disabled }: Props) => {
  return <button
    onClick={onClick}
    disabled={disabled}
    className={classNames(styles.button, styles[`button-l${level}`])}
  >{text}</button>;
};

export default Button;
