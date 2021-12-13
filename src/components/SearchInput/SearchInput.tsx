import React, { FC } from 'react';

import { FiSearch } from 'react-icons/fi';

import Input from '../Input/Input';

import styles from './SearchInput.scss';

interface Props {
  value: string;
  placeholder: string;
  onChange: () => void;
  onClick: () => void;
}

const SearchInput: FC<Props> = ({ value, placeholder, onChange, onClick }: Props) => {
  return <Input
    value={value}
    placeholder={placeholder}
    type="text"
    name="searchInput"
    onChange={onChange}
    className={styles.searchInput}
    customInput={styles.searchWrapper}
  >
    <button
      onClick={onClick}
      className={styles.iconBtn}
    >
      <FiSearch className={styles.icon} />
    </button>
  </Input>;
};

export default SearchInput;
