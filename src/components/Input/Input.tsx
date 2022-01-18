import React, { FC, useState, useEffect } from 'react';

import classNames from 'classnames';

import InputLabel from '../InputLabel/InputLabel';

import styles from './Input.scss';

interface Props {
  label?: string;
  value: string;
  type: string;
  placeholder: string;
  name: string;
  onChange: React.FormEventHandler;
  className?: string;
  isRequired?: boolean;
  children?: React.ReactNode;
  customInput?: string;
  isActive?: Function;
}

const Input: FC<Props> = ({
  label,
  value,
  name,
  type,
  placeholder,
  onChange,
  isRequired,
  className,
  children,
  customInput,
  isActive,
}: Props) => {

  const [isFocused, setFocus] = useState<boolean>(false);

  useEffect(() => {
    isActive && isActive(isFocused);
  }, [isFocused])

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
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    />
    {children}
  </div>;
};

export default Input;
