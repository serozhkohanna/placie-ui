import React, { FC } from 'react';

import IconButton from './IconButton';

import { FaHeart } from 'react-icons/fa';

import styles from './IconButton.module.scss';

interface Props {
  onClose: () => void;
}

const HeartButton: FC<Props> = ({ onClose }) => {
  return <IconButton
    onClose={onClose}
    className={styles.yellow}
  >
    <FaHeart />
  </IconButton>;
};

export default HeartButton;
