import React, { FC } from 'react';

import { AiFillHeart } from 'react-icons/ai';

import styles from './HeartButton.scss';

interface Props {
  onClose: () => void;
}

const HeartButton: FC<Props> = ({ onClose }: Props) => {
  return <button
    onClick={onClose}
    className={styles.heartButton}
  >
    <AiFillHeart className={styles.icon} />
  </button>;
};

export default HeartButton;
