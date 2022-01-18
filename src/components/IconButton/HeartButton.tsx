import React, { FC, useState, useEffect } from 'react';

import IconButton from './IconButton';

import { FaHeart } from 'react-icons/fa';

import styles from './IconButton.module.scss';

interface Props {
  onClick: Function;
}

const HeartButton: FC<Props> = ({ onClick }) => {
  const [isActive, setActive] = useState<boolean>(false);

  useEffect(() => {
    onClick(isActive);
  }, [isActive]);

  return <IconButton
    onClose={() => setActive(!isActive)}
    className={styles.yellow}
  >
    <FaHeart />
  </IconButton>;
};

export default HeartButton;
