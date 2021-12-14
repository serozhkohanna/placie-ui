import React, { FC } from 'react';

import InputLabel from '../InputLabel/InputLabel';
import { IOption } from '../../interfaces';

import styles from './Select.scss';

interface Props {
  name: string;
  onChange: Function;
  options: IOption[];
  isRequired?: boolean;
  label?: string;
}

const Select: FC<Props> = ({ name, options, isRequired, label, onChange }: Props) => {
  return <div className={styles.wrapper}>
    {label &&
      <InputLabel
        label={label}
        isRequired={isRequired}
        htmlFor={name}
      />
    }

    <select
      name={name}
      onChange={(e) => onChange(e.target.value)}
      className={styles.select}
    >
      {options.map(item => {
        return <option
          key={item.id}
          value={item.value}
          selected={item.selected}
        >
          {item.label}
        </option>;
      })}
    </select>
  </div>;
};

export default Select;
