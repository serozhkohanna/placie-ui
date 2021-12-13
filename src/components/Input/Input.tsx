import React, { FC } from 'react';

import classNames from 'classnames';

import styles from './Input.scss';

interface Props {
  label?: string;
  value: string;
  type: string;
  placeholder: string;
  name: string;
  onChange: () => void;
  className?: string;
  isRequired?: boolean;
}

const Input: FC<Props> = ({ label, value, name, type, placeholder, onChange, isRequired, className }: Props) => {
  return <div className={styles.inputWrapper}>
    {label &&
      <label
        htmlFor="inputField"
        className={classNames(styles.label, {
          [styles.isRequired]: isRequired,
        })}
      >{label}</label>
    }
    <input
      id="inputField"
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={classNames(styles.input, className)}
    />
  </div>;
};

export default Input;
