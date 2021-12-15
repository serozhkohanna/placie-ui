import React, { useState, useEffect, FC } from 'react';

import { FiX } from 'react-icons/fi';

import { getRandomColor } from '../../utils/colorGenerator';

import styles from './Tag.scss';

interface Props {
  text: string;
  onClose: () => void;
}

const Tag: FC<Props> = ({ text, onClose }: Props) => {
  const [bgColor, setBgColor] = useState<string>('');

  useEffect(() => {
    setBgColor(getRandomColor());
  }, []);

  return <div
    style={{ 'background': bgColor }}
    className={styles.tag}
  >
    {text}
    <FiX
      onClick={onClose}
      className={styles.icon}
    />
  </div>;
};

export default Tag;
