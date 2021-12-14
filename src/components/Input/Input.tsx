import React, { FC } from 'react';

import classNames from 'classnames';

import InputLabel from '../InputLabel/InputLabel';

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
  children?: React.ReactNode;
  customInput?: string;
}

const Input: FC<Props> = ({ label, value, name, type, placeholder, onChange, isRequired, className, children, customInput }: Props) => {
  return <div className={classNames(styles.inputWrapper, customInput)}>
    {label &&
      <InputLabel
        label={label}
        isRequired={isRequired}
        htmlFor={name}
      />
    }
    <input
      id={name}
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={classNames(styles.input, className)}
    />
    {children}
  </div>;
};

export default Input;
