import React, { FC } from 'react';

import styles from './InputLabel.scss';
import classNames from 'classnames';

interface Props {
  htmlFor: string;
  isRequired?: boolean;
  label: string;
}

const InputLabel: FC<Props> = ({ htmlFor, isRequired, label }: Props) => {
  return <label
    htmlFor={htmlFor}
    className={classNames(styles.label, {
      [styles.isRequired]: isRequired,
    })}
  >
    {label}
  </label>;
};

export default InputLabel;
