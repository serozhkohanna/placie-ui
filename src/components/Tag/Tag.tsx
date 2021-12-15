import React, { useState, useEffect } from 'react';

import { FiX } from 'react-icons/fi';

import { getRandomColor } from '../../utils/colorGenerator';

import styles from './Tag.scss';

const Tag = () => {
  const [bgColor, setBgColor] = useState<string>('');

  useEffect(() => {
    setBgColor(getRandomColor());
  }, []);

  return <div
    style={{ 'background': bgColor }}
    className={styles.tag}
  >
    TAG
    <FiX className={styles.icon} />
  </div>;
};

export default Tag;
