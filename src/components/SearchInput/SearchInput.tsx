import React, { FC, useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

import Input from '../Input/Input';

import styles from './SearchInput.scss';
import classNames from 'classnames';

interface Props {
  value: string;
  placeholder: string;
  onChange: React.FormEventHandler;
  onSubmit: React.FormEventHandler;
}

const SearchInput: FC<Props> = ({ value, placeholder, onChange, onSubmit }: Props) => {
  const [isActive, setActive] = useState<boolean>(false);

  return <form onSubmit={onSubmit} className={classNames({
    [styles.isActive]: isActive,
  })}>
    <Input
      value={value}
      placeholder={placeholder}
      type="text"
      name="searchInput"
      onChange={onChange}
      className={styles.searchInput}
      customInput={styles.searchWrapper}
      isActive={(value: boolean) => setActive(value)}
    >
      <button className={classNames(styles.iconBtn, styles.iconBtnZoom)}>
        <FiSearch className={styles.icon} />
      </button>
      {isActive && <button className={styles.iconBtn}>
        <MdClose className={styles.icon} />
      </button>}
    </Input>
  </form>;
};

export default SearchInput;
